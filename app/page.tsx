import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhyThis from '@/components/WhyThis'
import HowItWorks from '@/components/HowItWorks'
import Ecosystem from '@/components/Ecosystem'
import SpendCategories from '@/components/SpendCategories'
import Rewards from '@/components/Rewards'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhyThis />
      <HowItWorks />
      <Ecosystem />
      <SpendCategories />
      <Rewards />
      <Footer />
    </main>
  )
}