import { Suspense } from "react";
import CardContainer from "./CardContainer";
import UserCategory from "./UserCategory";
import Search from "@/app/(user)/home/Search";

function Menu() {
  return (
    <>
      <div className="mb-4">
        <Search />
      </div>
      <div className="flex gap-4 overflow-hidden">
        <UserCategory />
      </div>
      <CardContainer />
    </>
  );
}

export default Menu;
