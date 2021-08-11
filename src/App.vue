<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal costs
      <a href="#dashboard">DashBoard</a>
      <a href="#about">About</a>
      <a href="#404">404</a>
    </header>
    <main>
      <PageDashboard v-if="page === 'dashboard'" />
      <PageAbout v-if="page === 'about'" />
      <Page404 v-if="page === '404'" />
    </main>
  </div>
</template>

<script>
import PageDashboard from "./Page/PageDashboard";
import PageAbout from "./Page/PageAbout";
import Page404 from "./Page/Page404";

export default {
  name: "App",
  components: {
    PageDashboard,
    PageAbout,
    Page404,
  },
  data() {
    return {
      page: "dashboard",
    };
  },
  methods: {
    setPage() {
      this.page = location.hash.slice(1);
    },
  },

  mounted() {
    this.setPage();
    window.addEventListener("hashchange", () => {
      this.setPage();
    });
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
