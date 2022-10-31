import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import pokeApi from '../api/pokeApi'
import { Layout } from '../components/layouts'
import { PokemonList, SmallPokemon } from '../interfaces'
import { PokemonGrid } from '../components/pokemon'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title={'Listado de Pokémons'}>
      <PokemonGrid pokemons={pokemons} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  // const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((poke, idx) => ({
    ...poke,
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx + 1}.svg`
  }))

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage
