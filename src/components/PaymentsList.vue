<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      {{ index + 1 }} - {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    doSomething() {
      console.log(this.items);
    },
  },
};
</script>

<style>
</style>