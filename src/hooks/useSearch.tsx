import { MenuI } from "@/lib/definitions";
import { ChangeEvent, useState } from "react";

const useSearch = (initialData: MenuI[]) => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  // Función para filtrar los datos según el término de búsqueda
  const filterData = () => {
    const filteredData = initialData.filter((item: MenuI) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(data);
    setData(filteredData);
  };

  // Función para manejar cambios en el término de búsqueda
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    let term = e.target.value.trim();
    setSearchTerm(term);
    if (term == "") return setData(initialData);
    filterData();
  };

  return {
    searchTerm,
    data,
    handleSearchChange,
  };
};

export default useSearch;
