import Navbar from "@/components/UserNavbar";
import CartProvider from "@/global/Cart";
import FavoriteProvider from "@/global/Favorite";
import { CounterProvider } from "@/global/CounterContext";
import HeaderHome from "@/components/HeaderHome";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <FavoriteProvider>
        <CounterProvider>
          <main className="p-8 mb-16 sm:mb-0 min-h-screen  max-w-7xl m-auto flex flex-col">
            <HeaderHome />
            <div className="sm:flex">
              <Navbar />
              <div className="w-full">{children}</div>

            </div>
          </main>
        </CounterProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}
