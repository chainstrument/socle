
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full ">
      <body
        className={cn(inter.className, "h-full")}
      >
        {children}
      </body>
    </html>
  );
}
