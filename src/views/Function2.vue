<template>
  <v-container>
    <v-row justify="center">
      <a href="/">Home</a>
      <a href="/api">Pokemon</a>
      <a href="/function1">Function1</a>
      <a href="/function2" style="color: #2ea44f !important;">Function2</a>
      <a href="/function3">Function3</a>
    </v-row>
    <v-row justify="center">
      <v-card width="600px" class="px-6">
        <br />
        {{ time }}
        <br />
        <br />
        {{ answer[0] }}
        <br />
        {{ answer[1] }}
        <br />
        {{ answer[2] }}
        <br />
        {{ answer[3] }}
        <br />
        {{ answer[4] }}
        <br />
        <br />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
import "moment/locale/th";
moment.locale("th");
export default {
  data() {
    return {
      time: "2020-08-10T14:54:52+07:00",
      answer: [],
    };
  },
  mounted() {
    this.answer.push(moment(this.time).format("DD/MM/YYYY HH:mm"));
    this.answer.push(
      moment(this.time)
        .add(543, "year")
        .format("DD MMMM YYYY")
    );
    this.answer.push(moment(this.time).daysInMonth());
    this.answer.push(moment(this.time).quarter());
    this.answer.push(moment(this.time).unix());
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
