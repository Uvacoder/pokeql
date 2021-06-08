import { gql } from '@apollo/client'

export const GET_POKEMON_LIST = gql`
  query GetPokemonList($offset: Int = 0, $maxPokemonId: Int!) {
    pokemon: pokemon_v2_pokemon(
      order_by: { id: asc }
      where: { id: { _lte: $maxPokemonId } }
      limit: 20
      offset: $offset
    ) {
      id
      name
    }
  }
`

export const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetail($id: Int!, $nextId: Int!, $prevId: Int!, $languageId: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          id
          name
          effect: pokemon_v2_abilityeffecttexts(where: { language_id: { _eq: $languageId } }) {
            description: short_effect
          }
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        stat_id
        base_stat
        effort
      }
    }
    next: pokemon_v2_pokemon_by_pk(id: $nextId) {
      id
      name
    }
    prev: pokemon_v2_pokemon_by_pk(id: $prevId) {
      id
      name
    }
  }
`
