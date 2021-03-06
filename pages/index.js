import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero1 from '../components/Hero/Hero1/Hero1'
import Hero2 from '../components/Hero/Hero2/Hero2'
import Hero3 from '../components/Hero/Hero3/Hero3'
import Collection1 from '../components/Collections/Collection1/Collection1'
import Collection2 from '../components/Collections/Collection2/Collection2'
import Collage1 from '../components/Collage/Collage1/Collage1'
import SectionTitle1 from '../components/Titles/SectionTitle1/SectionTitle1'
import Collection3 from '../components/Collections/Collection3/Collection3'
import Slider1 from '../components/Sliders/Slider1/Slider1'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Homebody</title>
        <meta name="description" content="Slick Shopify theme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero1 />
      <SectionTitle1 title="Bestsellers" textalign="aligned-left"/>
      <Collection1 />
      <Hero2 />
      <SectionTitle1 title="New Arrivals" textalign="aligned-left"/>
      <Collection2 />
      <Hero3 />
      <SectionTitle1 title="Candles" textalign="aligned-left"/>
      <Slider1 />
      <SectionTitle1 title="@wearehomebody_ on instagram" textalign="aligned-center"/>
      <Collage1 />
      <Collection3 />
    </MainLayout>
  )
}
