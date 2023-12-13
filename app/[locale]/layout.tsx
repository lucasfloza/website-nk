// import { i18n } from '../../i18n'
import type { Metadata } from 'next'

import {notFound} from 'next/navigation';
 
// Can be imported from a shared config
const locales = ['pt', 'en'];

// These styles apply to every route in the application
import '../globals.css'

export default function RootLayout({
  children,
  params: {locale},
}: {
  children: React.ReactNode
  params: {locale: string}
}) {

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'North Kush',
  description: 'North Kush Website',
}