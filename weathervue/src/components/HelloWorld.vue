<template>
  <div class="hello">
    <section class="hero">
      <div class="content">
        <h2>welcom to the weather website by coding factory</h2>
      </div>
      <div class="waves"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
};
</script>
function disableScroll(e){

if (e.keyCode) {
/^(32|33|34|35|36|38|40)$/.test(e.keyCode) && e.preventDefault();
}else {
e.preventDefault();
}

}

addEventListener("mousewheel", disableScroll, false);
addEventListener("DOMMouseScroll", disableScroll, false);
addEventListener("keydown", disableScroll, false);
<style scoped>
html{
  overflow: scroll;
  background-image: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.fr%2Fpin%2F571112796480678383%2F&psig=AOvVaw0ZNVjsuSQ00y-NaAYnrwNV&ust=1601666174290000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjp7cyNlOwCFQAAAAAdAAAAABAO");
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #504c2c;
}
body {
}

#nav a.router-link-exact-active {
  color: #ffd400;
}

:root {
  --color: #0099ff;
}

body {
  font-size: 16px;
  font-family: 'Montserrat', sans-sherif,serif;
  margin: 0;
  padding: 0;
}

.content {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  position: relative;
  background: #333333;
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero h2 {
  position: relative;
  z-index: 1;
  font-size: 4.5rem;
  margin: 0 0 10px;
  line-height: 1;
  color: rgb(225, 225, 0);
}

.hero p {
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
}

/* ========================= */

.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background-color: #ae5aff;
  box-shadow: inset 0 0 50px #0097ff;
  transition: 500ms;
}

.waves::before,
.waves::after {
  content: '';
  position: absolute;
  width: 300vw;
  height: 300vw;
  top: -65vw;
  left: 50%;
  transform: translate(-50%, -75%);
}

.waves::before {
  border-radius: 44%;
  background: #8743ff;
  animation: waves 8s linear infinite;
}

.waves::after {
  border-radius: 44%;
  background: #9f76ff;
  animation: waves 15s linear infinite;
}

@keyframes waves {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}

</style>
