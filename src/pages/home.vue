<template>
  <div>
    <div class="col-md-12 text-center">
      <summary-favorites
        :pokemon-list="statePokemonDataList"
        :favorites="stateFavoritePokemonList"
        @addFavorite="addFavorite"
        @eraseFavoritePokemonList="eraseFavoritePokemonList"
      />
    </div>
    <div class="col-md-12 text-center">
      <pokemon-list
        :pokemon-list="statePokemonDataList"
        :favorites="stateFavoritePokemonList"
        @deleteFavorite="deleteFavorite"
        @addFavorite="addFavorite"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList";
import SummaryFavorites from "@/components/SummaryFavorites";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    PokemonList,
    SummaryFavorites,
  },
  computed: {
    ...mapState(["statePokemonDataList", "stateFavoritePokemonList"]),
  },
  async created() {
    const pokemonData = await this.getPokemonData();
    this.setPokemonData(pokemonData);
  },
  methods: {
    async getPokemonData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await data.json();
      return json.results;
    },
    ...mapActions([
      "setPokemonData",
      "addFavorite",
      "deleteFavorite",
      "eraseFavoritePokemonList",
    ]),
  },
};
</script>

<style scoped>
</style>
