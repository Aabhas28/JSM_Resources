import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'JS mastery',
  description: 'JS mastery resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= "min-h-screen bg-black-100 font-popins">{children}</body>
    </html>
  )
}
