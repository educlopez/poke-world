<template>
  <div
    v-if="pokemonData && pokemonDescription"
    class="card card-margin pokemon-card"
  >
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
          :class="`badge badge-${typesOfPokemon.type.name}`"
        >
          {{ typesOfPokemon.type.name }}
        </span>
      </p>
      <p>{{ pokemonDescription[0].flavor_text }}</p>
      <a href="#" class="btn btn-primary">boton aun sin uso</a>
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
.pokemon-card {
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}
.card-margin {
  margin: 14px;
}
.badge-grass {
  color: #fff;
  background-color: #28a745;
}
.badge-poison {
  color: #fff;
  background-color: #635bff;
}
.badge-fire {
  color: #fff;
  background-color: orange;
}
</style>
