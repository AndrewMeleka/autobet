<template>
  <v-app id="dashLayout">
    <v-app-bar app color="primary" clipped-left dark>
      <v-toolbar-title>API - AUTO</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <div class="user-detail pa-10 text-center">
        <h2 class="primary--text text-uppercase">Andrew</h2>
        <div class="caption">admin</div>
      </div>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          color="primary"
          v-for="(link,i) in listLinks"
          :key="`l${i}`"
          :to="link.to"
          link
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="text-capitalize">{{link.label}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer class="grey lighten-3" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    listLinks: [
      {
        label: "affiliate",
        icon: "mdi-face ",
        to: "/affiliate"
      },
      {
        label: "promotion",
        icon: "mdi-star",
        to: "/promotion"
      },
      {
        label: "manage members",
        icon: "mdi-account",
        to: "/mange-members"
      }
    ]
  })
};
</script>