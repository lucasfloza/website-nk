// import { i18n } from '../../i18n'
import type { Metadata } from 'next'

import {notFound} from 'next/navigation';
 
// Can be imported from a shared config
const locales = ['pt', 'en'];

// These styles apply to every route in the application
import '../globals.css'
import {unstable_setRequestLocale} from 'next-intl/server';

export default function RootLayout({
  children,
  params: {locale},
}: {
  children: React.ReactNode
  params: {locale: string}
}) {

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'North Kush',
  description: 'North Kush Website',
}