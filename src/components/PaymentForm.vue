<template>
  <div :class="[$style.form]">
    <input placeholder="Date" v-model="date" />
    <select v-model="category" :class="[$style.select]">
      <option v-for="option in getCategoryList" :key="option">
        {{ option }}
      </option>
      <option @click="123">Добавить категорию</option>
    </select>
    <!-- <button @click="123" :class="[$style.btn_cat]">Cat +</button> -->
    <!-- <input placeholder="Category" v-model="category" /> -->
    <input placeholder="Price" v-model.number="price" />
    <button @click="save" :class="[$style.btn]">ADD +</button>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

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
    ...mapActions(["loadCategories"]),
    ...mapMutations(["addDataToPaymentList"]),
    save() {
      const { category, price } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        price,
        category,
        // price: +this.price,
        // category: this.category,
      };
      this.addDataToPaymentList(data);
      // this.$store.commit("addDataToPaymentList", data);
      // this.$emit("add", data);
    },
  },

  computed: {
    ...mapGetters(["getCategoryList"]),

    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }
  },
};
</script>

<style lang="scss" module>
.form {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
  border-radius: 5px;
  box-sizing: border-box;
  left: 500px;
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
.select {
  width: 176px;
}
</style>