import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray50.value,
    }}>
      <Image
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}
        height={70}
        width={70}
        alt={'mew'}
      />
      {/* <Text color='white' h2>P</Text>
      <Text color='white' h3>okémon</Text> */}
      <Image
        src={'/logo.webp'}
        width={150}
        height={50}
        // fill
        alt={'pokemon logo'}
      />

      <Spacer css={{ flex: 1 }} />
      <Text color='white' >Favoritos</Text>
    </div >
  )
}
