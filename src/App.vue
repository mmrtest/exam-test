<template>
  <v-app>
    <v-app-bar app color="#2ea44f" dark>
      <v-spacer></v-spacer>
      <center>TEST FRONTEND</center>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
