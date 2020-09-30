<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-col>{{ About }}</b-col>
    <p>{{ meteoData }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'About',
  methods: {
    hideDP() {
      console.log('toto');
    },
  },
  asyncComputed: {
    meteoData: {
      get() {
        return axios.get('https://api.openweathermap.org/data/2.5/weather?q=Amiens&appid=d77e7612b116338a932892eae146d11c')
          .then((response) => response.data);
      },
      default() {
        return 'Loading…';
      },
    },
  },
};
</script>
