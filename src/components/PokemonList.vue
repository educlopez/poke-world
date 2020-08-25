<template>
  <div class="pokemon-list">
    <h2>Listado Pokémon</h2>
    <div class="col-md-12">
      <div class="row">
        <div
          v-for="(pokemon, index) in pokemonList"
          :key="pokemon.url"
          class="col-6 col-md-3 my-3"
        >
          <div class="card">
            <span style="position:absolute;top:10px;left:10px">
              <span class="badge badge-warning">{{ index + 1 }}</span>
            </span>
            <div style="position:absolute;top:10px;right:10px">
              <font-awesome-icon
                v-if="favorites.includes(pokemon.name)"
                :icon="['fas', 'heart']"
                class="text-danger"
              />
              <font-awesome-icon
                v-else
                :icon="['far', 'heart']"
                class="text-info"
              />
            </div>
            <img
              :key="pokemon.url"
              :src="
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                  1}.png`
              "
              alt="Pokemon`"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title text-capitalize">{{ pokemon.name }}</h5>

              <a
                v-show="!favorites.includes(pokemon.name)"
                class="btn btn-primary"
                :class="{ disabled: favoriteListLength === 6 }"
                @click="setFavorites(pokemon.name)"
                ><font-awesome-icon :icon="['fas', 'heart']" class="text-white"
              /></a>
              <a
                v-show="favorites.includes(pokemon.name)"
                class="btn btn-danger rounded-circle"
                @click="setFavorites(pokemon.name)"
              >
                <font-awesome-icon
                  :icon="['fas', 'times-circle']"
                  class="text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonList',
  props: {
    pokemonList: {
      type: Array,
      required: true,
    },
    favorites: {
      type: Array,
      required: true,
    },
  },
  computed: {
    favoriteListLength() {
      return this.favorites.length;
    },
  },
  methods: {
    setFavorites(name) {
      if (this.favorites.includes(name)) {
        const indexInArray = this.favorites.indexOf(name);
        this.$emit('deleteFavorite', indexInArray);
        return;
      }
      if (this.favoriteListLength < 6) {
        this.$emit('addFavorite', name);
      }
    },
    playPokemonCry(pokemonId) {
      const audio = new Audio(
        `https://pokemoncries.com/cries-old/${pokemonId}.mp3`
      );
      audio.play();
    },
  },
};
</script>

<style scoped></style>
