<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <div show="isLoggedIn">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>

      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props:{
    books: {
      type: Array,
      default: null
    }
  },
  data(){
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          title: 'logout',
          to: 'auth/logout'
        }
      ],
      title: 'bookApp',
    }
  },
  computed:{
    isLoggedIn(){
      return this.$store.getters['auth/getLoggedIn']
    }
  }
}
</script>

<style>

</style>