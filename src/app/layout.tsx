import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SesionProvider } from "@/global/sesion";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400"] });

export const metadata: Metadata = {
  title: {
    default: "Coffe App",
    template: "%s | Coffe App",
  },
  description:
    "Descubre nuestra cafetería: sabores frescos para cada momento del día. ¡Bienvenido a una experiencia culinaria única!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <SesionProvider>{children}</SesionProvider>
        <Toaster />
      </body>
    </html>
  );
}
