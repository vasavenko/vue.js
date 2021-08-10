<template>
  <div :class="[$style.wrp]">
    <div @click="onClick(curPage - 1)">-</div>
    <div
      :class="{ [$style.active]: curPage === i }"
      v-for="i in amount"
      :key="i"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(curPage + 1)">+</div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    n: Number,
    curPage: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style module lang='sass'>
.wrp
  display: flex
  & > div
    padding: 10px
    cursor: pointer
    &.active
      color: red
      // background: #ccc
</style>  