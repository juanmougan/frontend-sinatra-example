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
// import Visitors from "@/services/visitors.js";
const axios = require("axios");

export default {
  name: "Counter",
  data() {
    return {
      visitors: 0,
    };
  },
  // methods: {
  //   // async getVisitorsCount() {
  //   //   Visitors.getVisitors()
  //   //     .then((count) => (this.visitors = count))
  //   //     .catch((err) => {
  //   //       console.log("Something went wrong: ", err);
  //   //     });
  //   // },
  //   promiseBasedGet: function () {
  //     axios
  //       .get("http://localhost:5100/visitors")
  //       .then(function (response) {
  //         // handle success
  //         console.log(`Got this: ${response.data}`);
  //         this.visitors = response.data;
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       });
  //   },
  // },
  created() {
    axios
      .get(`http://localhost:5100/visitors`)
      .then((response) => {
        console.log(`Got this: ${response.data}`);
        this.visitors = response.data;
      })
      .catch((e) => {
        // handle error
        console.log(e);
      });

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
