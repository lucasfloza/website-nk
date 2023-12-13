// import { getDictionary } from '../../get-dictionary'
// import { Locale } from '../../i18n'
import Header from './components/Header'
import SectionMain from './components/sections/SectionMain'
import SectionMoments from './components/sections/SectionMoments'
import {unstable_setRequestLocale} from 'next-intl/server';

export default async function IndexPage({
  params: {locale},
}: {
  params: {locale: string}
}) {

  unstable_setRequestLocale(locale);
 
  // Once the request locale is set, you
  // can call hooks from `next-intl`
  // const t = useTranslations('IndexPage');

  return (
    <div>
      <Header />
      <SectionMain />
      <SectionMoments />
    </div>
  )
}