import type { Metadata } from "next";

import { notFound } from "next/navigation";

const locales = ["pt", "en"];

import "../globals.css";

import { NextIntlClientProvider } from "next-intl";

import { SpeedInsights } from "@vercel/speed-insights/next"

import {unstable_setRequestLocale} from 'next-intl/server';

import Header from './components/Header'

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "North Kush",
  icons: "/logo.png",
  description: "North Kush Website",
};
