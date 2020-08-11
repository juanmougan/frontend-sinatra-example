<template>
  <div class="counter">
    <h1>Welcome to frontend-sinatra-example</h1>
    <p>Visitors so far: <strong id="visitors">{{ visitors }}</strong></p>
  </div>
</template>

<script>
import Visitors from "@/services/visitors.js"

export default {
  name: 'Counter',
  props: {
    visitors: { 
      type: Number, 
      default: 0 
    }
  },
  created() {
    this.getVisitorsCount()
  },
  methods: {
    async getVisitorsCount() {
      Visitors.getVisitors()
      .then(
        (count => {
          this.$set(this, "visitors", count);
        }).bind(this)
      ).catch(err => {console.log("Something went wrong: ", err)});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
