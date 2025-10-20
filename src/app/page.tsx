'use client'

import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SolutionsSection from '../components/SolutionsSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="w-full min-h-screen" style={{ margin: 0, padding: 0 }}>
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}