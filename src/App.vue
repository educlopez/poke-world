<template>
  <div>
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <router-view />
    </fade-transition>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions';
export default {
  name: 'App',
  components: { FadeTransition },
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
h2 {
  color: #0a2540;
  font-size: 38px;
}
p {
  color: #425466;
  font-size: 12px;
}
</style>
