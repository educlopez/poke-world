<template>
  <div>
    <h2
      >Equipo
      <span
        v-if="favoriteListLength > 1 && favoriteListLength < maximumList"
        style="font-size:12px"
      >
        ({{ maximumList - favoriteListLength }} Pokémon más)
      </span>
      <span v-if="favoriteListLength > 5" style="font-size:12px">
        (Completo)
      </span>
    </h2>

    <p v-if="favoriteListLength < maximumList">
      No me decido, ayudame
      <br />
      <button class="btn btn-primary btn-success" @click="startInterval">
        Seleccionar Pokémon automaticamente
      </button>
    </p>

    <!--Listado con pokeball-->
    <template>
      <div class="col-md-12">
        <ul
          class="justify-content-center list-group list-group-horizontal my-5"
        >
          <li
            v-for="(pokemonName, index) in favorites"
            :key="index"
            class="list-group-item text-capitalize"
          >
            <img src="../assets/pokeball.png" alt="pokeball" />
            {{ pokemonName }}
          </li>
        </ul>
      </div>
    </template>

    <!--Información inferior-->
    <p v-if="favoriteListLength > 5" class="mb-5">
      <button
        class="btn btn-primary btn-danger"
        @click="emptyFavoritePokemonList"
      >
        Vaciar </button
      >&nbsp;
      <router-link
        v-if="favoriteListLength > 0"
        class="btn btn-primary"
        to="/favorites"
      >
        Ver favoritos
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SummaryFavorites',
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
  data: function() {
    return {
      maximumList: 6,
    };
  },
  computed: {
    favoriteListLength() {
      return this.favorites.length;
    },
  },
  methods: {
    startInterval() {
      const self = this;
      const intervalID = window.setInterval(
        pickRandomPokemonOrClearInterval,
        500
      );
      function pickRandomPokemonOrClearInterval() {
        if (self.favoriteListLength < self.maximumList) {
          self.pickRandomPokemon();
        } else {
          clearInterval(intervalID);
        }
      }
    },
    pickRandomPokemon() {
      const list = this.pokemonList.filter(function(pokemon) {
        return !this.favorites.includes(pokemon.name);
      }, this);

      const number = Math.floor(Math.random() * Math.floor(list.length));
      this.$emit('addFavorite', list[number].name);
    },
    emptyFavoritePokemonList() {
      this.$emit('eraseFavoritePokemonList');
    },
  },
};
</script>

<style scoped></style>
