import { gql } from '@apollo/client'

export const GET_POKEMON_LIST = gql`
  query GetPokemonList(
    $offset: Int!
    $maxPokemonId: Int!
    $search: String
    $types: Int_comparison_exp
  ) {
    pokemon: pokemon_v2_pokemon(
      order_by: { id: asc }
      where: {
        id: { _lte: $maxPokemonId }
        name: { _ilike: $search }
        pokemon_v2_pokemontypes: { pokemon_v2_type: { id: $types } }
      }
      limit: 20
      offset: $offset
    ) {
      id
      name
    }
    total: pokemon_v2_pokemon_aggregate(
      where: {
        id: { _lte: $maxPokemonId }
        name: { _ilike: $search }
        pokemon_v2_pokemontypes: { pokemon_v2_type: { id: $types } }
      }
    ) {
      agg: aggregate {
        count
      }
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
    evolution: pokemon_v2_evolutionchain(
      where: { pokemon_v2_pokemonspecies: { id: { _eq: $id } } }
    ) {
      chain: pokemon_v2_pokemonspecies(order_by: { order: asc }) {
        id
        name
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
export const GET_POKEMON_TYPES = gql`
  query GetPokemonTypes {
    types: pokemon_v2_type(where: { id: { _lte: 18 } }) {
      value: id
      label: name
    }
  }
`
