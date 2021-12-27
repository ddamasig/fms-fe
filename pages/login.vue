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
                <v-text-field
                  v-model="model.email"
                  prepend-inner-icon="mdi-account"
                  dense
                  label="Email"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="model.password"
                  dense
                  prepend-inner-icon="mdi-lock"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn color="primary" block @click="authenticate()"
                  >Login</v-btn
                >
              </v-col>
              <v-col cols="12">
                <v-btn to="/forgot-password" text block
                  >Forgot your password?</v-btn
                >
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
  methods: {
    async authenticate() {
      await this.$auth.loginWith("laravelSanctum", {
        data: {
          email: this.email,
          password: this.password,
        },
      });

      //  this.$router.push('/')
    },
    // authenticate() {
    //   let response = this.$axios.$post("/login", {
    //     email: this.model.email,
    //     password: this.model.password,
    //   });

    //   console.log("Response:");
    //   console.log(response);
    // },
  },
};
</script>
