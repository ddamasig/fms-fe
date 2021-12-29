<template>
  <v-app style="background-color: #F9FAFC">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list nav dense>
        <v-img src="/images/logo.png" class="mx-5 mb-5"/>
        <v-divider class="mb-3"/>
        <v-list-item link>
          <v-list-item-icon>
            <v-badge
              avatar
              bordered
              overlap
              small
              color="red"
            >
              <template v-slot:badge>
                <v-avatar >
                  12
                </v-avatar>
              </template>
              <v-icon>mdi-car</v-icon>
            </v-badge>
          </v-list-item-icon>

          <v-list-item-title>
            Vehicles
          </v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-steering</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Drivers</v-list-item-title>
        </v-list-item>

        <v-list-group
          v-for="(item, i) in items"
          :key="i"
          :value="false"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </template>
          <v-list-item
            v-for="(subitem, k) in item.items"
            :key="k"
            dense
            link
            :to="subitem.to"
          >
            <v-list-item-icon>
              <v-icon small></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="subitem.name"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      color="primary"
      app
      dense
    >
      <v-app-bar-nav-icon @click="drawer=!drawer">
        <v-avatar size="28">
          <v-img src="/images/logo-white.png"/>
        </v-avatar>
      </v-app-bar-nav-icon>

      <v-app-bar-title class="text-no-wrap white--text">
        <h5>
          Fleet Management System &nbsp;&nbsp;&nbsp;
        </h5>
      </v-app-bar-title>

      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />

      <v-btn icon dark>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon dark>
        <v-icon>mdi-bug</v-icon>
      </v-btn>

      <v-menu
        bottom
        min-width="164px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
            class="ma-2"
          >
            <v-avatar size="42" color="primary">
              <v-img :src="user.avatar"/>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar size="42" color="primary">
                <v-img :src="user.avatar"/>
              </v-avatar>
              <h4 class="mt-2">{{ user.fullName }}</h4>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-1"></v-divider>
              <v-btn
                small
                text
              >
                Change Password
              </v-btn>
              <v-divider class="my-1"></v-divider>
              <v-btn
                text
                small
              >
                Logout
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :absolute="!fixed"
      dark
      color="primary"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          name: "Dashboard",
          icon: "mdi-view-dashboard",
          items: [
            {
              name: "Truck Location",
              to: "/dashboard/truck-location"
            },
            {
              name: "Truck Expense",
              to: "/dashboard/truck-expense"
            },
            {
              name: "Receivables",
              to: "/dashboard/receivables"
            }
          ]
        },
        {
          name: "Inventory",
          icon: "mdi-package",
          items: [
            {
              name: "Purchase Request and Approval",
            },
            {
              name: "Service/Repair",
            }
          ]
        },
        {
          name: "Trucking",
          icon: "mdi-truck",
          items: [
            {
              name: "Dispatching",
            },
            {
              name: "Location Update",
            },
            {
              name: "Monitoring",
            },
            {
              name: "Arrival",
            }
          ]
        },
        {
          name: "Security",
          icon: "mdi-security",
          items: [
            {
              name: "Users",
              to: "/security/users"
            },
            {
              name: "Roles",
              to: "/security/roles"
            }
          ]
        }
      ],
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
        avatar: 'https://i.pravatar.cc/128'
      },
      currentItem: 1,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
