import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Montserrat } from "next/font/google";
import "../resources/styles/main.scss";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Costil Gabriel - Full Stack Developer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={montserrat.className}>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
