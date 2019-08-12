<template>
  <div class="home">
    <Header/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App Tom"/>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    Header
  }
};
var sheetUrl =
  "https://spreadsheets.google.com/feeds/list/1goCqewPJs2khq5_da7UMH3WdKqhMbwXv-a-8A-gh3JA/1/public/values?alt=json";
</script>
<style>
.entry {
  min-height: 100px;
  border: 1px solid;
}

#blog {
  margin-bottom: 3em;
}
</style>

