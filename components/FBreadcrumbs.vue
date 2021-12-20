<template>
  <v-breadcrumbs class="mx-0 px-0 pt-2 pb-5" :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :disabled="item.disabled"
        class="text-decoration-none"
      >
        <nuxt-link
          :to="item.href"
          :class="item.disabled ? 'grey--text' : 'primary--text'"
        >
          {{ item.text }}
        </nuxt-link>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [{
        href: "",
        disabled: true,
        text: ""
      }]
    }
  }
}
</script>
