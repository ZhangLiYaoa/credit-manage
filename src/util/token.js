// /sessionStorage封装
const tokenKey = 'admin-token';
//设置保存
export function setToken(token){
  return sessionStorage.setItem(tokenKey,token)
}

//获取
export function getToken(){
  return sessionStorage.getItem(tokenKey)
}

//删除
export function removeToken(){
  return sessionStorage.removeItem(tokenKey)
}