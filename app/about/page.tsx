'use client'

import CTABanner from '@/components/cta-banner'
import FAQ from '@/components/faq'
import TeamMembers from '@/components/TeamMembers'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <TeamMembers />
      <FAQ />
      <CTABanner />
    </div>
  )
}

export default page