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
          <main className="md:pl-60 py-20 min-h-screen md:pr-10">
            <HeaderHome />
            <Navbar />
            <div className="md:px-6 px-3">{children}</div>
          </main>
        </CounterProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}
