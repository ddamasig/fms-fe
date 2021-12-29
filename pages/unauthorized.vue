<template>
    <v-row class="fill-height">
      <v-col cols="12 my-auto text-center">
        <h1 class="">Unauthorized</h1>
        <h3 class="text-subtitle-1">You don't have the appropriate permissions to access this page.</h3>
        <v-btn color="primary my-5" to="/">Go to Home Page</v-btn>
      </v-col>
    </v-row>
</template>

<script>
export default {
  layout: 'unauthorized'
};
</script>
