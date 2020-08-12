<template>
  <v-container>
    <v-row justify="center">
      <a href="/">Home</a>
      <a href="/api">Pokemon</a>
      <a href="/function1">Function1</a>
      <a href="/function2">Function2</a>
      <a href="/function3" style="color: #2ea44f !important;">Function3</a>
    </v-row>
    <v-row justify="center">
      <v-card width="600px" class="px-6">
        <br />
        Test Case
        <br />

        <div v-for="(test, index) in answer" :key="`pokemon-${index}`">
          {{ testcase[index] }} // {{ test }} <br />
        </div>
        <br />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testcase: [
        [],
        [1],
        [1, 2, 3],
        [1, 1],
        [1, 2, 3, 4, 5, 6],
        [1, 5, 3, 2, 5, 10],
        [100, 5, 3, 2, 99],
        [35, 5, 3, 2, 5, 100],
        [1, 5, 101, 2, 5, 10],
        [10, 10, 9],
      ],
      answer: [],
    };
  },
  mounted() {
    for (var i = 0; i < this.testcase.length; i++) {
      this.answer.push(this.findMax(this.testcase[i]));
    }
  },
  methods: {
    findMax(data) {
      if (data.length == 0) {
        return "null";
      } else if (data.length == 1) {
        return data[0];
      } else {
        data.sort(function(a, b) {
          return b - a;
        });
        var max = data[0];
        for (var i = 1; i < data.length; i++) {
          if (data[i] < max) {
            max = data[i];
            break;
          }
        }
        return max;
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
