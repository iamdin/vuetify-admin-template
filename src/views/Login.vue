<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout class="align-center justify-center">
          <v-flex xs12 sm8 md6 lg5 xl3>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="loginForm.username"
                    :rules="[rules.required]"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    :type="passwordDisplay ? 'text' : 'password'"
                    v-model="loginForm.password"
                    :append-icon="passwordDisplay ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordDisplay = !passwordDisplay"
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :loading="loginLoading"
                  color="primary"
                  @click="userLogin"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    passwordDisplay: false,
    loginLoading: false,
    loginForm: {
      username: "admin",
      password: "123456"
    },
    rules: {
      required: value => !!value || "Required."
    }
  }),
  methods: {
    userLogin() {
      const _this = this;
      _this.loginLoading = true;
      _this.$store.dispatch("LOGIN", _this.loginForm).then(res => {
        if (res.code === 200) {
          setTimeout(() => {
            _this.loginLoading = false;
            _this.$router.push("/");
          }, 1000);
        }
      });
    }
  }
};
</script>

<style scoped></style>
