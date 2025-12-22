import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Dylan Yu",
  description: "Dylan Yu's personal website - MIT student interested in machine learning, quantitative trading, and discrete mathematics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Apply theme immediately before any styles are parsed
              const savedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
                document.documentElement.className = 'light';
              } else {
                document.documentElement.className = 'dark';
              }
            })();
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            html.light, html.light body {
              background-color: white;
              color: black;
            }
            html.dark, html.dark body {
              background-color: #1a1a1a;
              color: #e5e5e5;
            }
            /* Icon visibility based on theme */
            .sun-icon { display: none; }
            .moon-icon { display: block; }
            html.dark .sun-icon { display: block; }
            html.dark .moon-icon { display: none; }
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Sidebar />
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            maxWidth: '700px',
            width: '100%',
            position: 'relative',
            paddingTop: '48px',
            paddingBottom: '64px',
            paddingLeft: '32px',
            paddingRight: '32px'
          }}>
            <main className="main-content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
