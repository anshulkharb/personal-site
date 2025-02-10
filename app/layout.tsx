import type { Metadata } from "next";
import { Darker_Grotesque } from 'next/font/google'
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-darker-grotesque',
})

export const metadata = {
  title: "Anshul Kharb",
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${darkerGrotesque.variable} font-sans`}>{children}</body>
    </html>
  )
}