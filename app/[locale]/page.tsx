// import { getDictionary } from '../../get-dictionary'
// import { Locale } from '../../i18n'
import Header from './components/Header'
import SectionMain from './components/sections/SectionMain'
import SectionMoments from './components/sections/SectionMoments'

export default async function IndexPage() {
  // const dictionary = await getDictionary(lang)

  return (
    <div>
      <Header />
      <SectionMain />
      <SectionMoments />
    </div>
  )
}
