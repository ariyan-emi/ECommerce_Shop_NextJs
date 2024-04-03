import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import store from "../../components/Redux/store";
import {Provider} from "react-redux";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ariyan Shop',
  description: 'ECommerce_Shop_NextJs',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <link
        rel="icon"
        href="/src/app/logo.png"
        type="ico"
    />
      <body style={{backgroundColor:"#E5E5E5"}} className={`${inter.className}`}>{children}</body>
    </html>
  )
}
