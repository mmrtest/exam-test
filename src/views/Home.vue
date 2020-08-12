<template>
  <v-container>
    <v-row justify="center">
      <a href="/" style="color: #2ea44f !important;">Home</a>
      <a href="/api">Pokemon</a>
      <a href="/function1">Function1</a>
      <a href="/function2">Function2</a>
      <a href="/function3">Function3</a>
    </v-row>
    <v-row justify="center">
      <v-card width="60%">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center">
            <v-col cols="3">
              <v-row justify="end">
                <p style="padding: 20px">First Name</p>
              </v-row>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="firstname"
                :rules="[(v) => !!v || 'Please fill out this field']"
                label="Please fill first name"
                required
                style="padding-right: 40px"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="3">
              <v-row justify="end">
                <p style="padding: 20px">Last Name</p>
              </v-row>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="lastname"
                :rules="[(v) => !!v || 'Please fill out this field']"
                label="Please fill last name"
                required
                style="padding-right: 40px"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="3">
              <v-row justify="end">
                <p style="padding: 20px">Email</p>
              </v-row>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Please fill email"
                required
                style="padding-right: 40px"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="3">
              <v-row justify="end">
                <p style="padding: 20px">Password</p>
              </v-row>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="password"
                type="password"
                :rules="[(v) => !!v || 'Please fill out this field']"
                label="Please fill password"
                required
                style="padding-right: 40px"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="3">
              <v-row justify="end">
                <p style="padding: 20px">Verify Password</p>
              </v-row>
            </v-col>
            <v-col cols="9">
              <v-text-field
                v-model="vpassword"
                type="password"
                :rules="[(v) => !!v || 'Please fill out this field']"
                label="Please fill verify password"
                required
                style="padding-right: 40px"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="3">
              <v-row justify="end">
                <p style="padding: 20px">Gender</p>
              </v-row>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Please fill out this field']"
                label="Please select your gender"
                required
                style="padding-right: 40px"
              ></v-select>
            </v-col>
          </v-row>
          <v-row justify="center" class="pb-4">
            <v-col cols="3">
              <v-row justify="end"> </v-row>
            </v-col>
            <v-col cols="9">
              <v-btn color="success" class="mr-4 mt-4" @click="validate">
                Validate
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center" class="pb-4"> </v-row>
        </v-form>
        <v-row justify="center" v-if="valid && check">
          <v-col cols="8" class="pb-10">
            Result : <br />
            Firstname : {{ firstname }} <br />
            Lastname : {{ lastname }} <br />
            Email : {{ email }} <br />
            Gender : {{ select }} <br />
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    check: false,
    valid: false,
    firstname: "",
    lastname: "",
    password: "",
    vpassword: "",
    email: "",
    emailRules: [
      (v) => !!v || "Please fill out this field",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Male", "Female", "Other"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.check = true;
      }
    },
  },
};
</script>

<style scoped>
a {
  color: black !important;
  margin: 20px;
  text-decoration: none;
}
</style>
