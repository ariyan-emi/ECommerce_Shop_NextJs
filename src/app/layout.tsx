import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import store from "../../components/Redux/store";
import {Provider} from "react-redux";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VaVe Shop',
  description: 'WebVaVe Shop',
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
        href="/src/app/favicon.ico"
        type="ico"
    />
      <body style={{backgroundColor:"#E5E5E5"}} className={`${inter.className}`}>{children}</body>
    </html>
  )
}
