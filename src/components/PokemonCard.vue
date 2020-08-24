<template>
  <div
    v-if="pokemonData && pokemonDescription"
    class="col-12 col-md-4 my-3"
  >
  <div class="card">
    <img
      :src="
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`
      "
      :alt="pokemonData.name"
      class="card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title text-capitalize">{{ pokemonData.name }}</h5>
      <p>Nº. {{ pokemonData.id }}</p>
      <p>
        Tipo:
        <span
          v-for="(typesOfPokemon, index) in pokemonData.types"
          :key="`type${index}`"
          :class="`badge badge-pill badge-${typesOfPokemon.type.name}`"
        >
          {{ typesOfPokemon.type.name }}
        </span>
      </p>
      <p>{{ pokemonDescription[0].flavor_text }}</p>
      <a href="#" class="btn btn-primary">boton aun sin uso</a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemonName: {
      type: String,
      default: '',
    },
  },
  data: function() {
    return {
      pokemonData: null,
      pokemonDescription: null,
    };
  },
  async created() {
    if (this.pokemonName) {
      this.pokemonData = await this.getDataSpecificPokemon(this.pokemonName);
      this.pokemonDescription = await this.getPokemonDescription(
        this.pokemonData
      );
    }
  },
  methods: {
    async getDataSpecificPokemon(name) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      const json = await data.json();
      return json;
    },
    async getPokemonDescription(pokemonData) {
      const data = await fetch(`${pokemonData.species.url}`);
      const json = await data.json();
      return json.flavor_text_entries.filter(function(element) {
        return element.language.name === 'en';
      });
    },
  },
};
</script>

<style scoped>
.badge-grass {
  color: #fff;
  background-color: #28a745;
}
.badge-poison {
  color: #fff;
  background-color: #635bff;
}
.badge-fire {
  color: #cd3d64;
  background-color: #fde2dd;
}
</style>
