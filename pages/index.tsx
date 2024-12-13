import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/Hero'
import { FeaturesSection } from '../components/Features'
import { TestimonialsSection } from '../components/Testimonials'
import { PricingSection } from '../components/Pricing'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FitWise - Manage Your Sports Facilities</title>
        <meta
          name="description"
          content="FitWise to aplikacja webowa do zarządzania obiektami sportowymi. Ułatw rezerwacje, członkostwa i wiele więcej!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}

export default Home