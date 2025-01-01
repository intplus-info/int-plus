import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen font-sans antialiased bg-black",
        inter.className
      )}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}

