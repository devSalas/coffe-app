import Navbar from "@/components/UserNavbar";
import CartProvider from "@/global/Cart";
import FavoriteProvider from "@/global/Favorite";
import { CounterProvider } from "@/global/CounterContext";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <FavoriteProvider>
        <CounterProvider>
          <main className="md:pl-60 min-h-screen">
            <Navbar />
            <div className="md:px-6 px-3 py-8">{children}</div>
          </main>
        </CounterProvider>
      </FavoriteProvider>
    </CartProvider>
  );
}
