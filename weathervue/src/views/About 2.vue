<template>
  <div class="about">
    <link rel="stylesheet" href="src/assets/style.css">
    <h1>This is an about page</h1>
    <input @keypress.enter="setCity" v-model="tempcity">
    <p class="ml2" > {{ githubData.dt | moment("LLLL") }} </p>
  </div>
</template>
<style src="../assets/style.css"></style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nameQuery: '',
      tempcity: '',
    };
  },
  name: 'About',
  methods: {
    hideDP() {
      console.log('hideDP method');
    },
    setCity() {
      this.nameQuery = this.tempcity;
    },
  },
  filters: {
    convertToDate(value) {
      const date = new Date(value * 1000);
      const formattedTime = date.getUTCHours();
      return formattedTime;
    },
  },
  asyncComputed: {
    githubData: {
      get() {
        return axios.get('https://api.openweathermap.org/data/2.5/weather', { params: { q: this.nameQuery, appid: 'd77e7612b116338a932892eae146d11c' } }).then((response) => response.data);
      },
      default() {
        return 'Loading';
      },
    },
  },
};
</script>
