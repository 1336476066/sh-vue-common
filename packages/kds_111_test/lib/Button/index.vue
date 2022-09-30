<template>
  <div class="hello">
    我开始测试
    <button @click="test()">111</button>
  </div>
</template>

<script>
export default {
  name: 'KButton',
  methods: {
    test() {
      alert(1111);
    }
  }
};
</script>

<style>
</style>