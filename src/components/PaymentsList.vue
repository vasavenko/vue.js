<template>
  <div>
    Total price - {{ getPaymentListFullPrice }}
    <div v-for="(item, index) in curElement" :key="index">
      {{ index + 1 + (pageNum - 1) * perPage }} {{ item.date }}
      {{ item.category }} {{ item.price }}
    </div>
    <Pagination
      :length="getPaymentList.length"
      :n="perPage"
      :curPage="pageNum"
      @paginate="onPaginate"
    />
  </div>
</template>

<script>
import Pagination from "./Pagination";
import { mapGetters } from "vuex";
export default {
  name: "PaymentsList",
  components: {
    Pagination,
  },
  data() {
    return {
      pageNum: 1,
      perPage: 10,
    };
  },
  methods: {
    doSomething() {
      console.log(this.items);
    },
    onPaginate(p) {
      this.pageNum = p;
    },
  },
  computed: {
    ...mapGetters(["getPaymentList", "getPaymentListFullPrice"]),
    curElement() {
      const { pageNum, perPage } = this;
      return this.getPaymentList.slice(
        (pageNum - 1) * perPage,
        (pageNum - 1) * perPage + perPage
      );
    },
  },
};
</script>

<style>
</style>