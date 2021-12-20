<template>
  <div class="px-5">
    <!-- Breadcrumbs -->
    <v-breadcrumbs class="mx-0 px-0 pt-2 pb-5" :items="[]" />

    <v-row>
      <v-col>
        <h2>Welcome, John Doe!</h2>
      </v-col>
    </v-row>

    <v-divider class="my-5"></v-divider>

    <v-row>
      <v-col md="12">
        <v-row
          v-for="(item, k) in items"
          :key="k"
        >
          <v-col cols="12">
            <h3 :class="'font-weight-regular grey--text text--darken-2'">
              {{item.title}}
            </h3>
          </v-col>
          <v-col
            v-for="(subitem, i) in item.items"
            :key="i"
            md="1"
          >
            <v-card hover height="auto">
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                  class="primary lighten-3"
                  size="32"
                  tile
                >
                  <v-icon
                    size="auto"
                    color="primary lighten-2"
                  >
                    {{subitem.icon}}
                  </v-icon>
                </v-avatar>
                <!-- <div>
                  <v-card-title
                    class="text-h6 font-weight-medium grey--text text--darken-5"
                    v-text="subitem.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="subitem.description"
                    class="primary--text"
                  />
                </div> -->
              </div>
            </v-card>
          </v-col>
          <!-- <v-col cols="12">
            <v-divider/>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    breadcrumbs: [
      {
        text: 'Security',
        href: '/security',
      },
      {
        text: 'Users',
        href: '/security/users',
        disabled: true,
      },
    ],
    news: [
      { header: 'Today' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
		items: [
			// Accounting
			{
				title: "Accounting",
				description: "Nam ut nulla non lorem sagittis efficitur. Curabitur vitae imperdiet quam.",
				items: [
					{
						color: 'green',
						title: 'Travel Expense',
						description: 'Lorem ipsum dolor sit amet, consectetur',
						icon: "mdi-cash-fast"
					},
					{
						color: 'purple',
						title: 'Receivables',
						description: 'Lorem ipsum dolor sit amet, consectetur',
						icon: "mdi-bank-transfer-in"
					},
					{
						color: 'orange',
						title: "Payables",
						description: "Lorem ipsum dolor sit amet, consectetur",
						icon: "mdi-bank-transfer-out"
					},
				]
			},
			// Trucking
			{
				title: "Truck Dispatch and Monitoring",
				description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ac neque ipsum.",
				items: [
					{
						color: 'green',
						title: 'Dispatching',
						description: 'Lorem ipsum dolor sit amet, consectetur',
						icon: "mdi-cube-send"
					},
					{
						color: 'teal',
						title: 'Monitoring',
						description: 'Lorem ipsum dolor sit amet, consectetur',
						icon: "mdi-monitor-dashboard"
					},
					{
						color: 'primary',
						title: 'Location Update',
						description: 'Lorem ipsum dolor sit amet, consectetur',
						icon: "mdi-crosshairs-gps"
					},
					{
						color: 'red',
						title: "Arrival Info",
						description: "Lorem ipsum dolor sit amet, consectetur",
						icon: "mdi-notebook-edit"
					},
				]
			},
			// Library Management
			{
				title: "Library Mangement",
				description: "Consectetur adipiscing elit. Nullam finibus risus sit amet sagittis tincidunt. Ut eucongue odio. Aenean dignissim justo idcondimentum euismod.",
				items: [
					{
						color: '#1F7087',
						title: 'Users',
						description: 'Lorem ipsum dolor sit amet, consectetur',
						icon: "mdi-account"
					},
					{
						color: '#952175',
						title: 'Vehicles',
						description: 'Lorem ipsum dolor sit amet, consectetur',
						icon: "mdi-truck"
					},
					{
						color: '#952175',
						title: "Drivers",
						description: "Lorem ipsum dolor sit amet, consectetur",
						icon: "mdi-steering"
					},
				]
			},
		],
  }),
}
</script>
