<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-1">
              <v-toolbar dense :elevation="3" flat>
                <v-toolbar-title class="font-weight-bold primary--text">Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="mt-5">
                <v-form>
                  <v-text-field
                    v-model="form.username"
                    label="Username"
                    name="login"
                    outlined
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.password"
                    label="Password"
                    name="password"
                    outlined
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="actions px-10">
                  <v-btn color="primary" @click="login" large block rounded>Login</v-btn>
                  <v-btn color="primary" text large block rounded>forget your password ?</v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- alert -->
    <v-snackbar v-model="alert.status" top right :color="alert.color" :timeout="alert.timeout">
      {{ alert.text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="alert.status = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    form: {
      username: "",
      password: ""
    },
    alert: {
      status: false,
      text: "",
      color: "error",
      timeout: 5000,
      y: "top",
      x: "right"
    }
  }),
  methods: {
    openAlert(text) {
      this.alert.status = true;
      this.alert.text = text;
    },
    login() {
      const { username, password } = this.form;
      // simple authentication for now
      if (username === "andrew" && password === "andrew") {
        this.$router.push("/affiliate");
      } else {
        // incorrect username or password
        this.openAlert("Wrong username or password");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.actions {
  width: 100%;
  > * {
    margin: 10px 0;
  }
}
</style>