import { useState } from "react";

const useSearch = (initialData) => {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    // Función para filtrar los datos según el término de búsqueda
    const filterData = () => {
        const filteredData = initialData.filter(item =>{
        return item.name.toLowerCase().includes(searchTerm.toLowerCase())}
      );
      console.log(data)
        setData(filteredData);
    };

    // Función para manejar cambios en el término de búsqueda
    const handleSearchChange = (e) => {
        let term = e.target.value.trim()
        setSearchTerm(term);
        if(term == "") return setData(initialData)
        filterData();
    };

    return {
        searchTerm,
        data,
        handleSearchChange,
    };
};

export default useSearch