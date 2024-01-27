import type { Metadata } from "next";
import { PoppinsFont } from "./fonts";
import "./globals.css";
import { SesionProvider } from "@/global/sesion";
import { Toaster } from "react-hot-toast";

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
      <body className={PoppinsFont.className}>
        <SesionProvider>{children}</SesionProvider>
        <Toaster />
      </body>
    </html>
  );
}
