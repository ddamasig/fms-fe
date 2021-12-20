<template>
  <v-row align="center" justify="center">
    <v-col md="3">
      <v-card>
        <v-card-title>
          <v-avatar size="256" class="mx-auto">
            <v-img src="/images/logo.png" />
          </v-avatar>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <p class="text-center">
                  A message containing a link to reset your password will be sent to your email.
                </p>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="model.email"
                  prepend-inner-icon="mdi-email"
                  dense
                  label="Please enter your email"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn color="primary" block>Submit</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn text block to="/login">Login</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "blank",
  data: () => ({
    model: {
      email: "",
      password: "",
    },
  }),
};
</script>
