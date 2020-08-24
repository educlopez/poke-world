<template>
  <div>
    <NavBar />
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <div class="container">
        <router-view />
      </div>
    </fade-transition>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions';
import NavBar from '@/components/NavBar';
export default {
  name: 'App',
  components: { FadeTransition,NavBar },
};
</script>

<style>
body {
  background-color: #f8fbfd !important;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 1.4em;
  color: #525f7f !important;
}
h1{
  color: #0a2540;
  font-size: 48px;
}
h2 {
  color: #0a2540;
  font-size: 38px;
}
p {
  color: #425466;
  font-size: 12px;
}
.card{
  border: 0;
  box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
}
</style>
