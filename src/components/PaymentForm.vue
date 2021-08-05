<template>
  <div :class="[$style.form]">
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model.number="price" />
    <button @click="save" :class="[$style.btn]">ADD +</button>
  </div>
</template>

<script>
export default {
  name: "PaymentForm",
  data() {
    return {
      date: "",
      category: "",
      price: 0,
    };
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
  methods: {
    save() {
      const { category, price } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        price,
        category,
      };
      this.$emit("add", data);
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