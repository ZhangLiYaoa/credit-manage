<!-- css动态设置 -->
<template>
  <div class=''>
     <div>
        <img :src="url" alt="">
        <img :src="flag ? url:''" alt="">
        <img :src="funcImf('a')" alt="">
     </div>
     <div>
       class设置
        <span class="span">之前使用样式</span>
        <span :class="'span1'">之后使用style样式需要加单引号</span>
        <span :class="span3">不想加单引号需要在data中定义</span>
     </div>
     <div>
       通过数组设置多个样式
       <span :class="['span',span2]">设置多个样式</span>
       <span :class="['span3',!flag ? span2:'span4']">判断条件添加样式</span>
     </div>
     <div>
       判断条件
       <span :class="flag?'active2':'active1'">判断条件</span>
       <span :class="{'active1':flag}">通过花括号</span>
     </div>
     <div>
       内联样式设置
       <span style="color:red">之前设置style</span>
       <span :style="{color:'blue',fontSize:size+'px'}">动态设置style</span>
       <span :style="styleChange">通过变量</span>
       <span :style="[{color:'pink'}]">style引用多个样式</span>
       <span :style="[span5,!flag?{color:'pink'}:{color:'green'}]">内联样式设置条件判断</span>


     </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    components: {

    },
    data () {
      return {
        span5:'span5',
        styleChange:{color:'green'},
        flag:true,
        size:'34',
        span3:'span3',
        span2:'span2',
        url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEX///8Asf8Ar/8ArP/z+vuEzPc1tfwrsvlrxPWx3vpnxPP///36/f0osfu94vgAqv/i8/l6yPXH5/dcwfY8t/Wk2fXO6vcApvjW7viPzvib1vZBt/nr9/sArPWr2/S/5fev4PJkwfpXvPqR0fV5y/MApv9PvfcVsvWGnL6KAAAD/ElEQVRoge2XbZuiOgyG26QsjOWlyFstBXZE8f//w01xFHT16Ox1rvnU+wvYQp80SRNkzOPxeDwej8fj8Xg8Ho/H4/F4PN9H3PyQP6fbbBaxvvn4MeG4w6tyjzj8mDATIRZn5QohvZ3T+fbpe0Mhns69JCakLbEQdK0g+S3dyGU2nRCfCAsTIvyzcF0kjjDhEIZJyDndOsrfswdkB5zfCkuhzmqq4by7FY6titlbDJwWfgiM8wMF3dU3r6QJN/ONCP8SDpK7h58RJyTx6wFOWbsnRrwX1gjBfCM//xKu3s3MD+TJIB6gTxwO8/7w3tW2g+hrf3AvPAC+dxZz4MXjcmGQn9xV09ZvhUXJp/NdRUbdCitA85bwBi7W30O+CJ1JlrJu8Z5Qfc8+oWQytoLVFIZFWClTS6AwxPHrDHstLFu+OtgmzFuZw4mZfdFSweONvc4VxT5gJ1pvH3Tjm8KxTnebs5V99LG1K2FK61XYam5+xRU07GPaTHTWeKYWo9o8YgUULArKl/6ehXVJ7kR+XiLKKN9CswgfAKvr86IxYAc8ynSKKNAlz/RiFOQnFuAny/P2PWF1RAj3m7PTxqLliOMiXAHslhdGpaXGTOixIndGsDo91lhN+baXfT/eVd0nwvGhr+01t6XQQ1Avwltcp4EdjBINOdhScrERsF/mVG9kiq2Irf0fkotpgGkZzrOsisOs1p0b7RGWNIpLPGrNQ9E3zbvJ9V/CKjwf6K9hgFyWOCjOW+m8EayM4pha3qkU18F5R1isauNVWLS8M7tdtZ3dV3OqHp/Yi1lYZbwcd2Olz9mAYOIEtM7W5rwUNqMsurjP4zthuafaRWBWVoKJhARzNDJ0wjKb5zBrplSyWfCEtf2esD4dy82xueTjVdj1J2oGVB057YhO0K94hzt2csKMGiMPwTU4DIfYFfESU0Hh+IYwo0In1bUCLsJUz6kX9NO8fBVAYiuM2ARO+ERjkzWtm4PtnmppgRUZ8C3hW/qr8EirNoLJwS2+o26lB5zozZaCMvE51nJ0Rg0BuAoyyvK1sAHe2kcTsuCXHkR7dwVq63YHSlN71llJLdHt2HkjFLJ3U62rpdJgJKfXwor6Sxk8oAB+qQ1bl0Gp2zd0NXWrLLXdiVLY7XhHo0kdkWlQKsquo03DDRW0l8LsgOecvYdGp6/81i6v6NOLUoacI6OI2rNkaeOEKxfczplUSVdCotl9QfMkfmuXHjJ0CwMuuHhhNl3yTDU0SQemuolJLNz8R+bmuii9qZFCvPPtaYeUWu5hSC/01Oz6dGl3wphzp3yAMqav//3TegintcWGwvRD3P1N+8F/bR6Px+PxeDwej8fj8Xg8Ho/H42HsD1QZPTDUrzg5AAAAAElFTkSuQmCC'
      };
    },
    computed: {

    },
    methods: {
      funcImf(type){
        if(type == 'a') return this.url
      }

    },
mounted() {

},

  }
</script>

<style>
.span{
  color: aqua;
}
.span1{
color: chartreuse;
}
.span2{

  border: 1px solid firebrick;
}
.span3{
  color: coral;
}
.span4{
  background-color: burlywood;
}
.active1{
  border: 5px solid rosybrown;
}
.active2{
  color: darkblue;
}
.span5{
  background-color: darkgoldenrod;
}
</style>