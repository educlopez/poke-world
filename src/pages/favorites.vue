<template>
  <div class="col-md-12">
    <h1 class="text-center">
      Mi Equipo
    </h1>
    <router-link class="btn btn-primary text-center" to="/">
      Atrás
    </router-link>
  <div class="col-md-12">
    <div class="row">
      <pokemon-card
        v-for="(pokemon, index) in stateFavoritePokemonList"
        :key="index"
        :pokemon-name="pokemon"
      />
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PokemonCard from '@/components/PokemonCard';
export default {
  components: {
    PokemonCard,
  },
  computed: {
    ...mapState(['stateFavoritePokemonList']),
  },
};
</script>

<style scoped>
.overview-favorite-pokemon {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

</style>
