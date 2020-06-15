export default {
  methods: {
    // 点击导出按钮
    downloadExcel({ rawData, column, fileName, headInfo }) {
      // 获取标题
      let data = [{}]
      for (const k in rawData[0]) {
        data[0][k] = k
      }
      // 内容链接标题
      data = data.concat(rawData)

      this.downloadExl(data, column, fileName, headInfo)
    },
    downloadExl(json, column, downName, headInfo) {
      const resData = this.dealData(json, column, headInfo)

      const downData = this.generateExl(
        resData,
        Object.keys(json[0]).length - 1
      )

      this.triggerDownload(downData, downName)
    },
    // 处理数据-> [{An: value]
    dealData(data, column, headInfo) {
      // 导出到excel
      const keyMap = [] // 获取json的key值-即表格列名
      for (const k in data[0]) {
        keyMap.push(k)
      }
      const resData = [] // 用来保存转换好的json
      // 填写A1，即表格标题
      resData.A1 = {
        v: headInfo,
        t: 's',
        s: {
          font: {
            sz: 18, // 18号字体
            bold: true, // 加粗
          },
          alignment: {
            horizontal: 'center', // 水平居中对齐
          },
        },
      }

      data
        .map((v, i) =>
          keyMap.map((k, j) =>
            Object.assign(
              {},
              {
                // v: v[k],
                v: column[v[k]] || v[k],
                position:
                  (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) +
                  (i + 1 + 1),
              }
            )
          )
        )
        .reduce((pre, nxt) => pre.concat(nxt)) // 数组flat
        .forEach(function(v) {
          resData[v.position] = {
            v: v.v,
          }
        }) // 生成[{A1: {v}}]

      return resData
    },
    // 生成excel
    generateExl(excelData, distance, type) {
      const outputPos = Object.keys(excelData) // 设置区域,比如表格从A1到D10
      const merges = this.getMergeArr({ distance })

      // 生成workbook
      const workBook = {
        SheetNames: ['mySheet'], // 保存的表标题
        Sheets: {
          mySheet: Object.assign(
            {},
            excelData, // 内容
            {
              '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1], // 设置填充区域
              '!merges': merges,
            }
          ),
        },
      }

      // 创建二进制对象写入转换好的字节流
      const downData = new Blob(
        [
          this.s2ab(
            XLSX.write(
              workBook,
              {
                bookType: type === undefined ? 'xlsx' : type,
                bookSST: false,
                type: 'binary',
              } // 这里的数据是用来定义导出的格式类型
            )
          ),
        ],
        {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        }
      )

      return downData
    },
    // 触发下载
    triggerDownload(downData, downName) {
      if ('msSaveOrOpenBlob' in navigator) {
        // edge 和 ie10-11
        window.navigator.msSaveOrOpenBlob(downData, `${downName}.xlsx`)
      } else {
        // Chrome,Firefox 等浏览器
        var href = URL.createObjectURL(downData) // 创建对象超链接
        const outFile = document.createElement('a')
        outFile.download = `${downName}.xlsx` // 下载名称
        outFile.href = href // 绑定a标签
        outFile.click() // 模拟点击实现下载
        setTimeout(function() {
          // 延时释放
          URL.revokeObjectURL(downData) // 用URL.revokeObjectURL()来释放这个object URL
        }, 100)
      }
    },
    // 字符串转字符流 string->ArrayBuffer
    s2ab(s) {
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xff
      }
      return buf
    },
    // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
    getCharCol(n) {
      let s = ''
      let m = 0
      while (n > 0) {
        m = (n % 26) + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
      }
      return s
    },
    // 处理待合并区域
    getMergeArr(params) {
      const merges = []
      // 合并第一行标题
      merges.push({
        s: {
          r: 0,
          c: 0,
        },
        e: {
          r: 0,
          c: params.distance,
        },
      })

      return merges
    },
  },
}
