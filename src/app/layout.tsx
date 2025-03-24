import './globals.css'

import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  description: 'A basic starter for Next.js',
  title: 'Next.js Starter App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen w-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
