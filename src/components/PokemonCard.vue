<template>
  <div v-if="pokemonData && pokemonDescription" class="col-12 col-md-4 my-3">
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
  color: #207c2c;
  background-color: #ddfde0;
}
.badge-poison {
  color: #983dcd;
  background-color: #f3ddfd;
}
.badge-fire {
  color: #cd3d64;
  background-color: #fde2dd;
}
.badge-water {
  color: #3d8ccd;
  background-color: #ddf9fd;
}
.badge-flying {
  color: #3d3fcd;
  background-color: #ddeefd;
}
.badge-bug {
  color: #8acd3d;
  background-color: #ecfddd;
}
.badge-normal {
  color: #464646;
  background-color: #e7e7e7;
}
.badge-electric {
  color: #cdab3d;
  background-color: #fdfcdd;
}
.badge-ground {
  color: #cd8f3d;
  background-color: #fdecdd;
}
.badge-fairy {
  color: #cd3dba;
  background-color: #fdddf6;
}
.badge-fighting {
  color: #cd6b3d;
  background-color: #fde2dd;
}
</style>
