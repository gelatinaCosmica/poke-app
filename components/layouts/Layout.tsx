import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui/Navbar'

interface LayoutProps extends PropsWithChildren {
  title?: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>
          {
            title || 'Pokemon App'
          }
        </title>
        <meta name='author' content='Santiago Zapata' ></meta>
        <meta name='description' content={`Información sobre el pokémon XXXXXX ${title}`}></meta>
        <meta name='keywords' content={`${title}, pokemon, pokedex`} ></meta>
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}
