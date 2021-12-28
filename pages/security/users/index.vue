<template>
  <div class="px-5">
    <!-- Breadcrumbs -->
    <f-breadcrumbs :items="breadcrumbs"></f-breadcrumbs>

    <v-alert v-show="alert.show" type="success">{{ alert.message }}</v-alert>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title> Manage Users </v-card-title>
          <v-card-subtitle>
            This is the list of all the system's users. Click on the
            corresponding buttons to edit or delete.
          </v-card-subtitle>
          <v-divider />
          <v-row>
            <v-col md="2">
              <v-list nav dense>
                <v-subheader>Filter by Role</v-subheader>
                <v-list-item-group v-model="filters.roles" color="primary">
                  <v-list-item v-for="(item, i) in options.roles" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text" :to="item.id" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col md="10">
              <v-data-table :headers="headers" :items="users" :search="search">
                <template #top>
                  <v-toolbar flat>
                    <v-btn
                      color="primary"
                      elevation="0"
                      to="/security/users/create"
                    >
                      Create
                    </v-btn>

                    <v-spacer></v-spacer>
                    <v-col md="8">
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </v-toolbar>
                </template>
                <template #[`item.name`]="{ item }">
                  <nuxt-link :to="`/security/users/${item.id}`">
                    {{ item.name }}
                  </nuxt-link>
                </template>
                <template #[`item.avatar`]="{ item }">
                  <v-avatar size="32" color="primary">
                    <v-img
                      v-if="item.avatar"
                      :src="`https://i.pravatar.cc/${item.avatar}`"
                    />
                    <v-icon v-else dark color="primary lighten-5"
                      >mdi-account</v-icon
                    >
                  </v-avatar>
                </template>
                <template #[`item.status`]="{ item }">
                  <v-chip
                    :class="item.status == 'active' ? 'success' : 'error'"
                    small
                  >
                    {{ item.status ? item.status.toUpperCase() : '-' }}
                  </v-chip>
                </template>
                <template #[`item.actions`]="{ item }">
                  <v-menu bottom rounded offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn icon v-on="on" class="ma-2">
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                          <!-- <v-avatar
                            color="primary"
                            size="32"
                          >
                            <span class="white--text text-h5">{{ user.initials }}</span>
                          </v-avatar> -->
                          <v-btn
                            small
                            text
                            :to="`/security/users/${item.id}/update`"
                          >
                            Update
                          </v-btn>
                          <v-divider class="my-1"></v-divider>
                          <v-btn
                            text
                            small
                            color="error"
                            @click="openDeleteDialog(item)"
                          >
                            Disable
                          </v-btn>
                        </div>
                      </v-list-item-content>
                    </v-card>
                  </v-menu>
                  <!-- <v-btn
                    :to="`/security/users/${item.id}`"
                    icon
                    color="primary"
                  >
                    <v-icon small> mdi-pencil </v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    @click="openDeleteDialog(item)"
                    color="error"
                  >
                    <v-icon small>
                      mdi-delete
                    </v-icon>
                  </v-btn> -->
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Confirm Dialog -->
      <v-dialog v-model="confirmDialog.show" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> Confirmation </v-card-title>
          <v-card-text>{{ confirmDialog.message }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="confirmDialog.show = false"> Close </v-btn>
            <v-btn
              color="error darken-1"
              @click="deleteItem()"
              :loading="confirmDialog.loading"
            >
              Disable
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
        disabled: true,
      },
    ],
    confirmDialog: {
      message: "",
      show: false,
      loading: false,
    },
    alert: {
      message: null,
      show: false,
    },
    filters: {
      roles: 0,
    },
    options: {
      roles: [
        {
          text: "All",
          icon: "mdi-account",
        },
        {
          text: "Admin",
          icon: "mdi-security",
        },
        {
          text: "Driver",
          icon: "mdi-steering",
        },
      ],
    },
    search: "",
    headers: [
      {
        text: "",
        value: "avatar",
        align: "center",
        width: "100",
      },
      {
        text: "Name",
        align: "start",
        filterable: true,
        value: "name",
      },
      { text: "Sex", value: "sex" },
      { text: "Role", value: "role" },
      { text: "Status", value: "status" },
      { text: "Last Update", value: "updated_at" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    itemForModal: {
      id: 0,
    },
    users: [
      {
        id: 1,
        name: "Juan S. Dela Cruz",
        sex: "Male",
        role: "Driver",
        updated_at: "11:55 pm - December 03, 2021",
        avatar: "128",
        status: "active",
      },
      {
        id: 2,
        name: "Casey Rath",
        sex: "Male",
        role: "Driver",
        updated_at: "11:55 pm - December 03, 2021",
        avatar: null,
        status: "inactive",
      },
      {
        id: 3,
        name: "Noah Schinner",
        sex: "Male",
        role: "Driver",
        updated_at: "11:55 pm - December 03, 2021",
        avatar: "124",
        status: "inactive",
      },
      {
        id: 4,
        name: "Jesse Hagenes Sr.",
        sex: "Male",
        role: "Driver",
        updated_at: "11:55 pm - December 03, 2021",
        avatar: null,
        status: "active",
      },
      {
        id: 5,
        name: "Elijah Baumbach",
        sex: "Male",
        role: "Driver",
        updated_at: "11:55 pm - December 03, 2021",
        avatar: null,
        status: "active",
      },
      {
        id: 6,
        name: "Marcus Rau",
        sex: "Male",
        role: "Driver",
        updated_at: "11:55 pm - December 03, 2021",
        avatar: "126",
        status: "active",
      },
      {
        id: 7,
        name: "Andy Prohaska",
        sex: "Male",
        role: "Driver",
        updated_at: "11:55 pm - December 03, 2021",
        avatar: "132",
        status: "active",
      },
    ],
  }),
  methods: {
    openDeleteDialog(item) {
      this.itemForModal = item;
      this.confirmDialog.message = `Are you sure you want to disable the account of ${item.name}? Note that you can enable this account later.`;
      this.confirmDialog.show = true;
    },
    /**
     * Retrieves a collection of users from the database.
     */
    async fetchUsers() {
      await this.$axios.$get("user")
        .then((res) => {
          console.log("Response:")
          console.log(res)
          this.users = res.data
        })
    },
    deleteItem() {
      this.confirmDialog.loading = true;
      setTimeout(() => {
        this.confirmDialog.loading = false;
        this.confirmDialog.show = false;
        let index = this.users
          .map(function (el) {
            return el.id;
          })
          .indexOf(this.itemForModal.id);

        // this.users.splice(index, 1);
        this.users[index].status = "inactive";

        this.alert.message = `Successfully disabled ${this.itemForModal.name}`;
        this.alert.show = true;
      }, 1500);
    },
  },
  // async fetch() {
  //   await this.fetchUsers()
  // },
  async created() {
    if (this.$route.query) {
      this.alert.message = this.$route.query.alertMessage;
      this.alert.show = this.$route.query.alertShow;
    }
    await this.fetchUsers()
  },
};
</script>
