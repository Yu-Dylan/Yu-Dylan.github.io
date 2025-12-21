import type { Metadata } from "next";
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
        <Sidebar />
        <main style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingTop: '48px',
          paddingBottom: '64px'
        }}>
          <div style={{
            maxWidth: '900px',
            width: '100%',
            paddingLeft: '32px',
            paddingRight: '32px'
          }}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
