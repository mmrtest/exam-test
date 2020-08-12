<template>
  <v-container>
    <v-row justify="center">
      <a href="/">Home</a>
      <a href="/api">Pokemon</a>
      <a href="/function1" style="color: #2ea44f !important;">Function1</a>
      <a href="/function2">Function2</a>
      <a href="/function3">Function3</a>
    </v-row>
    <v-row justify="center">
      <v-card width="600px">
        {{ answer }}
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import json from "../assets/exam-data.json";
export default {
  data() {
    return {
      myJson: json,
      answer: [],
    };
  },
  mounted() {
    for (var i = 0; i < this.myJson.length; i++) {
      var item = this.myJson[i];
      if (!item.is_editable_price) {
        var total_weight = 0;
        for (var j = 0; j < item.products.length; j++) {
          total_weight += item.products[j].weight;
        }
        var temp = {
          name: item.name,
          weight: total_weight,
        };
        this.answer.push(temp);
      }
    }
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
