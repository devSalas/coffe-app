import Menu from "@/components/Menu";
import HeaderHome from "@/components/HeaderHome";

async function Home() {
  return (
    <>
      <HeaderHome />
      <div className="mb-4">
        <h2 className="text-2xl">Bienvenido/a</h2>
      </div>
      <Menu />
    </>
  );
}

export default Home;
