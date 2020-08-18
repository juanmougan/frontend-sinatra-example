<template>
  <div class="counter">
    <h1>Welcome to frontend-sinatra-example</h1>
    <p>
      Visitors so far:
      <strong id="visitors">{{ visitors }}</strong>
    </p>
  </div>
</template>

<script>
// TODO use the Service instead
// import Visitors from "@/services/visitors.js";
const axios = require("axios");

export default {
  name: "Counter",
  data() {
    return {
      visitors: 0,
    };
  },
  created() {
    axios
      .get(`http://localhost:5100/visitors`)
      .then((response) => {
        console.log(`Got this: ${response.data}`);
        this.visitors = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
