import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Climalliés',
  description: 'Soutenir les scientifiques et combattre la désinformation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={"scroll-smooth"}>
      <body className={inter.className}>
      <Navigation/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
