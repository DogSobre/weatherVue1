<template>
  <div class="about">
    <h1>Welcome to METEO ISRAEL</h1>
    <input @keypress.enter="setStoreValue('setCity', cityInput)" v-model="cityInput">
    <!-- <p> {{ githubData.dt | moment("LLLL") }} </p> -->
    <p>{{ cityData.name }}
      {{ cityData.dt | moment("LLLL") }}
      {{ cityData.main.temp | displayTemp(cityData.main.temp) }}°C
      {{ cityData.weather[0].description }}</p>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      cityInput: 'Tokyo',
    };
  },
  name: 'About',
  /* created() {
    // this.$root.$moment.locale('fr');
    this.$moment().locale('fr');
    console.log('ok');
  }, */
  methods: {
    setStoreValue(storeFunction, newValue) {
      this.$store.commit(storeFunction, newValue);
      // console.log(this.moment().locale());
    },
  },
  filters: {
    convertToDate(value) {
      const date = new Date(value * 1000);
      const formattedTime = date.getUTCHours();
      return formattedTime;
    },
    displayTemp(temp) {
      return parseFloat(temp - 273.15).toFixed(2);
    },
  },
  asyncComputed: {
    cityData: {
      get() {
        return axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: this.$store.state.city,
            appid: 'd77e7612b116338a932892eae146d11c',
          },
        }).then((response) => response.data);
      },
      default() {
        return 'Loading';
      },
    },
  },
};
</script>
