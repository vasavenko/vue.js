<template>
  <div id="app">
    <header :class="[$style.header]">My personal costs</header>
    <main>
      <button :class="[$style.btn]" @click="isVisibleForm = !isVisibleForm">
        ADD NEW COST +
      </button>
      <PaymentForm @add="onDataAdded" v-show="isVisibleForm" />
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsList from "./components/PaymentsList";
import PaymentForm from "./components/PaymentForm";

export default {
  name: "App",
  components: {
    PaymentsList,
    PaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      isVisibleForm: false,
    };
  },
  methods: {
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
  },
};
</script>

<style lang="scss" module>
.header {
  font-size: 40px;
}
.btn {
  border-radius: 5px;
  margin: 20px;
  padding: 8px;
  background-color: rgb(7, 161, 149);
  color: rgb(255, 255, 255);
  cursor: pointer;
}
</style>
