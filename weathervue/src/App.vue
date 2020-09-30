<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html{
  --main-bg-color: #646464;
  --text-bg-color: #53c3ff;
  --clik-bg-color: #42b983;
}
#app {
  background-color: var(--main-bg-color);
  font-family: -webkit-font-smoothing,monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-bg-color);
}

html{
  background-color: var(--main-bg-color);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--clik-bg-color);
}

#nav a.router-link-exact-active {
  color: var(--clik-bg-color);
}
</style>
