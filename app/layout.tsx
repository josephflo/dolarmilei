import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const poppins = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Dolar Azul",
  description:
    "Dolar Azul tu sitio web del precio del dólar, más confiable de Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <main className="max-w-[80vw] mx-auto">{children}</main>
      </body>
    </html>
  );
}
