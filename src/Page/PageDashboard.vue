<template>
  <div>
    <div>DashBoard</div>
    <button :class="[$style.btn]" @click="isVisibleForm = !isVisibleForm">
      ADD NEW COST +
    </button>
    <PaymentForm v-show="isVisibleForm" />
    <PaymentsList />
  </div>
</template>

<script>
import PaymentsList from "../components/PaymentsList.vue";
import PaymentForm from "../components/PaymentForm";

// import { mapActions } from "vuex";

export default {
  components: {
    PaymentsList,
    PaymentForm,
  },
  data() {
    return {
      isVisibleForm: false,
    };
  },
  methods: {
    // ...mapActions(["fetchData"]),
  },

  mounted() {
    // this.fetchData();
    this.$store.dispatch("fetchData");
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
