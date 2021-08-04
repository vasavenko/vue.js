<template>
  <div id="app">
    <header :class="[$style.header]">My personal costs</header>
    <main>
      <PaymentForm @add="onDataAdded" />
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
      paymentsList: [
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
      ],
    };
  },
  methods: {
    onDataAdded(data) {
      this.paymentsList.push(data);
    },
  },
};
</script>

<style lang="sass" module>
.header
	font-size: 40px
</style>
