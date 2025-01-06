import CTABanner from '@/components/cta-banner'
import ServicesHero from '@/components/services-hero'
import ServicesTabs from '@/components/services-tabs'
import React from 'react'

const page = () => {
  return (
    <>
      <ServicesHero />
      <ServicesTabs />
      <CTABanner />
    </>
  )
}

export default page