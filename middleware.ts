import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(pt|en)/:path*']
// };

export const config = {
  // Ignora as rotas que não devem ser internacionalizadas,
  // como rotas para arquivos de imagem
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};