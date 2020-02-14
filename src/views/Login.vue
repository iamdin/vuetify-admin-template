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
                <v-form ref="login_form">
                  <v-text-field
                    label="account"
                    name="account"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="loginForm.account"
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
                <v-btn :loading="loginLoading" color="primary" @click="userLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-snackbar top :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.text }}
      <v-btn text @click="snackbar.show = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    passwordDisplay: false,
    loginLoading: false,
    loginForm: {
      account: "admin",
      password: "admin"
    },
    rules: {
      required: value => !!value || "Required."
    },
    snackbar: {
      show: false,
      text: "",
      color: "primary"
    }
  }),
  methods: {
    userLogin() {
      const _this = this;
      if (!_this.$refs.login_form.validate()) return;
      // 表单验证成功
      _this.loginLoading = true;
      _this.$store
        .dispatch("user/LOGIN", _this.loginForm)
        .then(res => {
          if (res.code === 200) {
            _this.loginLoading = false;
            _this.$router.replace("/");
          } else {
            console.error(res); // _this.snackbarShow(res.msg);
          }
        })
        .catch(({ msg }) => {
          _this.snackbarShow(msg, "error");
        })
        .finally(() => {
          _this.loginLoading = false;
        });
    },
    snackbarShow(text, color) {
      this.snackbar = {
        show: true,
        text,
        color
      };
    }
  }
};
</script>

<style scoped></style>
