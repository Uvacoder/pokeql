import Head from "next/head"
import Footer from "./Footer"

interface WrapperProps {
  children?: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const meta = {
    title: "PokeQL",
    description: `Pokedex for all Pokemon and Pokemon games, powered by PokeAPI's GraphQL API`,
    type: "website",
    siteName: "PokeQL",
    twitterHandle: "@_danielcoles",
    url: "https://pokedex.page",
    image: "https://pokedex.page/logo.png",
    imageAlt: "Logo for PokeQL",
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.imageAlt} />
        <meta name="twitter:creator" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.imageAlt} />
      </Head>
      <div className="[ flex flex-col min-h-screen ][ mb-32 ]">
        <main className="py-8">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Wrapper
