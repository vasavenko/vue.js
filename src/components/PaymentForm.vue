<template>
  <div :class="[$style.form]">
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model.number="price" />
    <button @click="save" :class="[$style.btn]">ADD +</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PaymentForm",
  data() {
    return {
      date: "",
      category: "",
      price: 0,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    save() {
      const { category, price } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        price,
        category,
      };
      this.$emit("add", data);
    },
    fetchData() {
      return [
        {
          date: "04.08.2021",
          category: "Education",
          price: 123,
        },
        {
          date: "03.08.2021",
          category: "Education",
          price: 4000,
        },
        {
          date: "02.08.2021",
          category: "Education",
          price: 654,
        },
        {
          date: "01.08.2021",
          category: "Education",
          price: 987,
        },
      ];
    },
  },

  mounted() {
    this.setPaymentsListData(this.fetchData());
  },

  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
};
</script>

<style lang="scss" module>
.form {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  top: 130px;
  position: absolute;
  background-color: white;
  padding: 20px;
  color: black;
  width: 222px;
}
.btn {
  border-radius: 5px;
  margin: 20px;
  padding: 8px;
  background-color: rgb(7, 161, 149);
  color: rgb(255, 255, 255);
  cursor: pointer;
  width: 130px;
}
</style>