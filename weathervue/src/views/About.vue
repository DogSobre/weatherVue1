<template>
<div class="about">
  <h1>This is an about page</h1>
  <input @keypress.enter="setCity" v-model="tempcity">
  <p> {{ getWeatherCity }} </p>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: '',
      tempcity: '',
    };
  },
  name: 'About',
  methods: {
    hideDP() {
      console.log('hideDP method');
    },
    setCity() {
      this.city = this.tempcity;
    },
  },
  asyncComputed: {
    getWeatherCity: {
      get() {
        return axios.get('https://api.openweathermap.org/data/2.5/weather', { params: { q: this.city, appid: 'd77e7612b116338a932892eae146d11c' } }).then((response) => response.data);
      },
      default() {
        return 'Loading';
      },
    },
  },
};
</script>
