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
import getCount from "@/services/visitors.js";

export default {
  name: "Counter",
  data() {
    return {
      visitors: 0,
    };
  },
  async created() {
    this.visitors = await getCount();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
