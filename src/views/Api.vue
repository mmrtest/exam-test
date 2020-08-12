<template>
  <v-container>
    <v-row justify="center">
      <a href="/">Home</a>
      <a href="/api" style="color: #2ea44f !important;">Pokemon</a>
      <a href="/function1">Function1</a>
      <a href="/function2">Function2</a>
      <a href="/function3">Function3</a>
    </v-row>
    <v-row justify="center">
      <v-card width="70%">
        <v-row v-if="!loading">
          <v-col
            cols="2"
            v-for="(poke, index) in pokemon"
            :key="`pokemon-${index}`"
          >
            <center><img :src="poke.img" alt="" /></center>
            <center>
              <p>{{ poke.name }}</p>
            </center>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="2" v-for="index in 30" :key="`index-${index}`">
            <v-skeleton-loader
              class="mx-auto"
              type="card"
              height="150px"
            ></v-skeleton-loader>
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
    pokemon: [],
    loading: true,
  }),
  async mounted() {
    const axios = require("axios");
    this.loading = true;
    for (var i = 1; i <= 104; i++) {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon/" + i)
        .then((response) => {
          var temp = {
            name: response.data.name,
            img: response.data.sprites.front_default,
          };
          this.pokemon.push(temp);
        });
      if (i == 104) {
        this.loading = false;
      }
    }
  },
  methods: {},
};
</script>

<style scoped>
a {
  color: black !important;
  margin: 20px;
  text-decoration: none;
}
</style>
