<template>
   <div>
    这里吗？？？？？
    p00000000000000000000000000000000000wwewewewe
    wewewewew
    wewewewewwew
    ew
    <em>ewewe
      warning
    </em>
     <transition name="fade">
       <div class="little-tip" v-show="showTip">
         <img src="assets/img/success.png" alt="" width="36" v-if="type=='success'" />
         <img src="assets/img/fail.png" alt="" width="36" v-if="type=='fail'" />
         <img src="assets/img/warning.png" alt="" width="36" v-if="type=='warning'" />
         <img src="assets/img/loading.png" alt="" width="36" v-if="type=='loading'" class="loading" />
         <span>{{msg}}</span>
       </div>
     </transition>
   </div>
 </template>
 
 <script>
   export default {
     data() {
       return {
         showTip: true,
         msg: '121212121212',
         type: ''
       }
     },
     mounted() {
       setTimeout(() => {
         this.showTip = false
       }, 1500)
     }
   }
 </script>
 <!-- <style lang="less" scoped>
   /* 样式略 */
 </style> -->