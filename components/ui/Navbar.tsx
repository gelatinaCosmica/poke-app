import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '80px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray50.value,
    }}>
      {/* <Text color='white' h2>P</Text>
      <Text color='white' h3>okémon</Text> */}
      <NextLink href='/'>
        <Image
          src={'/logo.webp'}
          width={150}
          height={55}

          alt={'pokemon logo'}
        />
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites'>
        <Link color='warning'>Favorites</Link>
      </NextLink>
    </div >
  )
}
