<template>
  <v-app class="app">
    <v-main>
      <v-container fill-height fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer color="transparent" dark app>
      <!-- <span class="text-center">&copy; {{ new Date().getFullYear() }}</span> -->
      <span class="text-center">Photo by Marcin Jozwiak</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.app {
  background-size: cover;
  background-position: center;
  /* background-image: url("https://images.unsplash.com/photo-1577075473292-5f62dfae5522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"); */
  background-image: url("https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");

  background-color: rgba(0, 0, 0, 0.5); /* Tint color */
  background-blend-mode: multiply;
}
</style>
