//* 贷款申请
<template>
  <div>
    <!-- <div class="header">
      <label :style="{ alignSelf: 'center' }">科目</label>
      <Select >
        <Option v-for="s of subjectList" :key="s.id" :value="s.id">{{
          s.name
        }}</Option>
      </Select>
       <Button type="primary" class="m-l-auto" ghost @click="onTemplateDownload"
        >模板下载</Button
      >
    </div> -->
    <!-- <inforPerson/>
    <eduInfor/>
    <homeInfor/> -->
  </div>
</template>
<script>
import inforPerson from './components/inforPerson'
import eduInfor from './components/eduInfor'
import homeInfor from './components/homeInfor'
import exportExcelMixins from '../minxins/exportExcelMixins'
import {sexOptions,companyOptions,marriageOptions,educationOptions} from '@/util/selectData'
  import { format } from 'path'
export default {
  mixins: [exportExcelMixins],
  components:{
    inforPerson,eduInfor,homeInfor
  },
  data() {
    return {
       sexOptions,
      companyOptions,
      marriageOptions,
      educationOptions,
      subjectList: [
        {
          id: 33,
          code: "yy",
          name: "英语",
          fullScore: 150,
          subsectionType: "1",
          subsectionInitial: "90",
          subsectionLength: "5"
        },
        {
          id: 34,
          code: "wl",
          name: "物理",
          fullScore: 120,
          subsectionType: "2",
          subsectionInitial: "72",
          subsectionLength: "3"
        },
        {
          id: 35,
          code: "hx",
          name: "化学",
          fullScore: 100,
          subsectionType: "2",
          subsectionInitial: "60",
          subsectionLength: "3"
        },
        {
          id: 36,
          code: "sw",
          name: "生物",
          fullScore: 80,
          subsectionType: "2",
          subsectionInitial: "48",
          subsectionLength: "3"
        },
        {
          id: 37,
          code: "zz",
          name: "政治",
          fullScore: 100,
          subsectionType: "2",
          subsectionInitial: "60",
          subsectionLength: "3"
        },
        {
          id: 38,
          code: "ls",
          name: "历史",
          fullScore: 100,
          subsectionType: "2",
          subsectionInitial: "60",
          subsectionLength: "3"
        },
      ]
    };
  },
  methods: {
      onTemplateDownload() {
      const infoData = {
        rawData: [
          {
            number: '',
            content: '',
            type: '',
            score: '',
            answer: '',
            optionCount: '',
            knowledge: '',
            capable: '',
            parentNumber: '',
          },
        ],
        column: {
          number: '题号',
          content: '内容',
          type: '题型',
          score: '分值',
          answer: '标答',
          optionCount: '选项数',
          knowledge: '知识领域',
          capable: '能力领域',
          parentNumber: '父级题号(非必填)',
        },
        fileName: `试卷结构导入模板`,
        headInfo:
          '试卷结构信息 \n题型：\n1.是非题  \n2.单选题  \n3.多选题  \n4.非选择题',
      }
      this.downloadExcel(infoData)
    },
  },
  created() {}
};
</script>
<style scoped>
</style>

