'use client'

import SectionAbout from './components/sections/SectionAbout'
import SectionContact from './components/sections/SectionContact'
import SectionFooter from './components/sections/SectionFooter'
import SectionMain from './components/sections/SectionMain'
import SectionMoments from './components/sections/SectionMoments'
import SectionShop from './components/sections/SectionShop'

export default async function IndexPage({
  params: {locale},
}: {
  params: {locale: string}
}) {

  return (
    <div>
      <SectionMain />
      <SectionAbout />
      <SectionMoments />
      <SectionShop />
      <SectionContact />
      <SectionFooter />
    </div>
  ) 

}