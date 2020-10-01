<template>
<div class="about">
  <h1>This is an about page</h1>
  <input @keypress.enter="setStoreValue('setCity', cityInput), getThings()" v-model="cityInput">
  <!-- <p> {{ githubData.dt | moment("LLLL") }} </p> -->
  <ul>
    <li v-for="city in cities" :key="city">
      {{ city[0] }} <img :src="'http://openweathermap.org/img/wn/' + city[1] + '@2x.png'">
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cityInput: '',
      cities: [],
    };
  },
  name: 'About',

  created() {
    // this.getThings();
  },

  methods: {
    setStoreValue(storeFunction, newValue) {
      this.$store.commit(storeFunction, newValue);
    },
    addCity(city, icon) {
      this.cities.push([city, icon]);
    },

    getThings() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.$store.getters.city}&appid=d77e7612b116338a932892eae146d11c`).then((data) => data.json()).then((response) => {
        this.addCity(`City name: ${response.name} | Temperature: ${this.$options.filters.convertKelvinToCelsius(response.main.temp)}°C | Weather: ${response.weather[0].description} | Data gathered: ${this.$options.filters.moment(response.dt, 'LLLL')}`, response.weather[0].icon);
      });
    },
  },

  filters: {
    convertKelvinToCelsius(temp) {
      return parseFloat(temp - 273.15).toFixed(2);
    },
  },

  asyncComputed: {
    cityData: {
      get() {
        return axios.get('https://api.openweathermap.org/data/2.5/weather', { params: { q: this.$store.getters.city, appid: 'd77e7612b116338a932892eae146d11c' } }).then((response) => response.data);
      },
      default() {
        return 'Loading';
      },
    },
  },
};
</script>
