import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = localFont({
  src: "./fonts/Inter-VF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const playwrite = localFont({
  src: "./fonts/PlaywritePL-VF.ttf",
  variable: "--font-playwrite",
  weight: "100 200 300 400",
});

export const metadata: Metadata = {
  title: "Bookkeeprz",
  description: "Your all in one reading tracking app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playwrite.variable} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
