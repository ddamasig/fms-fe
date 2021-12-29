<template>
  <div class="px-5">
    <!-- Breadcrumbs -->
    <f-breadcrumbs :items="breadcrumbs"></f-breadcrumbs>

    <v-alert v-show="alert.show" type="success">{{ alert.message }}</v-alert>

    <v-row class="justify-center">
      <v-col md="6">
        <v-card outlined>
          <!-- Avatar Upload -->
          <v-form
            method="POST"
            enctype="multipart/form-data"
            v-model="model.valid"
          >
            <v-card-title> Basic Information </v-card-title>
            <v-card-subtitle class="text--secondary">
              Fill in the user information then click save to create a new user.
            </v-card-subtitle>

            <v-divider />

            <v-card-text>
              <v-container>
                <!-- Avatar -->
                <v-row>
                  <v-col md="9">
                    <v-card elevation="0">
                      <v-row class="align-center">
                        <v-col md="3" class="text-center">
                          <v-avatar color="grey" size="110" class="mr-2">
                            <img :src="imageUrl" v-if="imageUrl" />
                          </v-avatar>
                        </v-col>

                        <v-col>
                          <v-card-title class="text-h5"> Avatar </v-card-title>

                          <v-card-subtitle>
                            Valid image types are JPG and PNG only. Should be
                            less than 10MB.
                          </v-card-subtitle>

                          <v-card-actions>
                            <v-btn
                              elevation="0"
                              small
                              color="primary"
                              class="mr-2"
                              @click="pickFile"
                              >Upload</v-btn
                            >
                            <v-btn elevation="0" small @click="removeFile"
                              >Reset</v-btn
                            >
                          </v-card-actions>
                        </v-col>
                      </v-row>
                    </v-card>
                    <input
                      type="file"
                      style="display: none"
                      ref="image"
                      accept="image/jpeg, image/jpg, image/png"
                      @change="onFilePicked"
                    />
                  </v-col>
                </v-row>
                <!-- Basic Information -->
                <v-row>
                  <v-col md="12">
                    <v-text-field
                      dense
                      outlined
                      v-model="model.first_name"
                      :rules="nameRules"
                      :counter="256"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      dense
                      outlined
                      v-model="model.middle_name"
                      :rules="nameRules"
                      :counter="256"
                      label="Middle name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      dense
                      outlined
                      v-model="model.last_name"
                      :rules="nameRules"
                      :counter="256"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      dense
                      outlined
                      v-model="model.email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      dense
                      outlined
                      v-model="model.phone_number"
                      :rules="emailRules"
                      label="Phone Number"
                      persistent-hint
                      hint="Format: +63xxxxxxxxxx or 09xxxxxxxxx"
                      counter="13"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col md="12">
                    <v-select
                      dense
                      outlined
                      :items="sex"
                      item-text="name"
                      item-value="value"
                      label="Sex"
                      v-model="model.sex"
                    >
                    </v-select>
                  </v-col>

                  <v-col md="12">
                    <v-text-field
                      dense
                      outlined
                      v-model="model.birthdate"
                      type="date"
                      :rules="emailRules"
                      label="Birthdate"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-title> Credentials </v-card-title>
            <v-card-subtitle class="text--secondary">
              The username and password will be autogenerated as you type in the
              user's full name.
            </v-card-subtitle>

            <v-divider />

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      dense
                      outlined
                      v-model="model.email"
                      readonly
                      label="Username"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      dense
                      outlined
                      readonly
                      v-model="password"
                      label="Password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-title> Access Control </v-card-title>
            <v-card-subtitle class="text--secondary">
              Assign roles to the user. This will determine the actions that
              this user can perform.
            </v-card-subtitle>
            <v-divider />

            <v-card-text>
              <v-list subheader three-line flat>
                <v-template v-for="(item, index) in roles" :key="index">
                  <v-divider
                    v-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  ></v-divider>

                  <v-list-item v-else :key="index">
                    <template #default>
                      <v-list-item-action>
                        <v-checkbox
                          v-model="model.roles"
                          :value="item.value"
                          color="primary"
                        ></v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>
                          {{ item.description }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                  </v-list-item>
                </v-template>
              </v-list>
            </v-card-text>
          </v-form>

          <v-divider />

          <v-card-actions class="pa-12">
            <v-spacer />
            <v-btn elevation="0" text> Reset </v-btn>
            <v-btn
              color="primary"
              elevation="0"
              @click="confirmDialog.show = !confirmDialog.show"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Confirm Dialog -->
      <v-dialog v-model="confirmDialog.show" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> Confirmation </v-card-title>
          <v-card-text
            >I am aware that this action is final and is
            irreversible.</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="confirmDialog.show = false"> Close </v-btn>
            <v-btn
              color="primary darken-1"
              @click="submit()"
              :loading="confirmDialog.loading"
            >
              Proceed
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    breadcrumbs: [
      {
        text: "Security",
        href: "/security",
      },
      {
        text: "Users",
        href: "/security/users",
      },
      {
        text: "Create",
        href: "/security/users/create",
        disabled: true,
      },
    ],
    confirmDialog: {
      show: false,
      loading: false,
    },
    alert: {
      message: null,
      show: false,
    },
    imageUrl: "",
    imageName: "",
    imageFile: "",
    model: {
      first_name: "",
      middle_name: "",
      last_name: "",
      avatar: "",
      sex: "male",
      birthdate: "",
      roles: [],
    },
    sex: [
      {
        name: "Male",
        value: "male",
      },
      {
        name: "Female",
        value: "female",
      },
    ],
    roles: [
      {
        name: "Admin",
        value: "admin",
        description: `Has full access to all modules and functionalities.`,
      },
      { divider: true, inset: true },
      {
        name: "Trucking officer",
        value: "trucking officer",
        description: `Omnis aspernatur officia delectus blanditiis voluptatem nostrum quo nesciunt odio. Harum ut harum unde tempore ducimus eius distinctio. Incidunt aperiam accusamus dignissimos qui dolorum voluptatem et. Exercitationem sequi alias doloremque beatae voluptates illo non nihil ab. Velit qui corporis rerum reprehenderit..`,
      },
      { divider: true, inset: true },
      {
        name: "Accounting officer",
        value: "accounting officer",
        description: `Omnis aspernatur officia delectus blanditiis voluptatem nostrum quo nesciunt odio. Harum ut harum unde tempore ducimus eius distinctio. Incidunt aperiam accusamus dignissimos qui dolorum voluptatem et. Exercitationem sequi alias doloremque beatae voluptates illo non nihil ab. Velit qui corporis rerum reprehenderit..`,
      },
      { divider: true, inset: true },
      {
        name: "Inventory officer",
        value: "inventory officer",
        description: `Omnis aspernatur officia delectus blanditiis voluptatem nostrum quo nesciunt odio. Harum ut harum unde tempore ducimus eius distinctio. Incidunt aperiam accusamus dignissimos qui dolorum voluptatem et. Exercitationem sequi alias doloremque beatae voluptates illo non nihil ab. Velit qui corporis rerum reprehenderit..`,
      },
      { divider: true, inset: true },
      {
        name: "Developer",
        value: "developer",
        description: `Ea et ut voluptas aperiam molestiae non est. Ut blanditiis qui quas est nobis dignissimos ab aspernatur nulla. Consequatur nisi odit error facere distinctio. Similique non eaque quia et optio cum et odio quia. Vero nihil aut est qui. Aperiam nostrum dicta fugiat vero..`,
      },
    ],
  }),
  computed: {
    // a computed getter
    password: function () {
      // `this` points to the vm instance
      let p1 = this.model.first_name.slice(0,1)
      let p2 = this.model.last_name
      let p3 = '!@#'
      return `${p1}${p2}${p3}`.toLowerCase()
    }
  },
  methods: {
    removeFile() {
      this.imageName = "";
      this.imageFile = "";
      this.imageUrl = "";
    },
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0];
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    /**
     * Sends an HTTP POST request to the backend to create
     * a new user.
     */
    async submit() {
      this.confirmDialog.loading = true;
      // Define submit API logic here
      let fd = new FormData();
      fd.append("first_name", this.model.first_name);
      fd.append("middle_name", this.model.middle_name);
      fd.append("last_name", this.model.last_name);
      fd.append("phone_number", this.model.phone_number);
      fd.append("birthdate", this.model.birthdate);
      fd.append("email", this.model.email);
      fd.append("avatar", this.imageFile);
      fd.append("password", this.password);
      fd.append("sex", this.model.sex);
      this.model.roles.map((x) => {
        fd.append("roles[]", x)
      })
      let res = await this.$axios.post("/user", fd);
      console.log(res);
      if (res.status == 200) {
        console.log("SUCCESS!!");
      }
      setTimeout(() => {
        this.confirmDialog.loading = false;
        this.confirmDialog.show = false;
        this.alert.message = "User successfully created!";
        this.alert.show = true;
        // this.$router.push({
        //   path: '/security/users',
        //   query: {
        //     alertMessage: this.alert.message,
        //     alertShow: this.alert.show,
        //   }
        // })
      }, 1500);
    },
  },
};
</script>
