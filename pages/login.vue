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
                  v-model="model.username"
                  prepend-inner-icon="mdi-account"
                  dense
                  label="Username"
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
                <v-btn to="/security/users" color="primary" block>Login</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn to="/forgot-password" text block>Forgot your password?</v-btn>
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
      username: "",
      password: "",
    },
  }),
};
</script>
