<template>
  <div class="hello">
    kds-test
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