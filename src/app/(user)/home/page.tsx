import Search from "../../../components/Home/Search";
import UserCategory from "@/components/UserCategory";
import CardContainer from "@/components/Home/MenusList";
import HeaderHome from "@/components/HeaderHome";

async function Home() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl">Bienvenido/a</h2>
      </div>
      <div className="mb-4">
        <Search />
      </div>
      <div className="flex gap-4 overflow-hidden">
        <UserCategory />
      </div>
      <CardContainer />
    </div>
  );
}

export default Home;
