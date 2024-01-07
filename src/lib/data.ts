const URL = "https://cafe-app-kj9q.onrender.com"
/* const URL = "http://localhost:5000" */

export const login = async (userData: any) => {
  try {
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const res = await fetch(`${URL}/auth/login`, opciones);

    if (!res.ok) throw new Error("");

    const data = await res.json();
    return data

  } catch (err) {
    return null;
  }
};

export const signup = async (userData: any)=> {
  try {
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const res = await fetch(`${URL}/auth/signup`, opciones);

    if (!res.ok) throw new Error("");
    const data = await res.json();
    return data;

  } catch (err) {
    return null;
  }
};

export const verifyToken = async (token: string) => {
  try {
    const opciones = {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    const res = await fetch(`${URL}/auth/token`, opciones);
    if (!res.ok) throw new Error("");
    const data = await res.json();

    return data;
  } catch (err) {
    return null;
  }
}


export const getMenus = async (search?:string) => {
    const res = await fetch(`${URL}/menus`, {cache: "no-store"});

    if (!res.ok) {
      throw new Error("error al obtener los menus");
    }

    const data = await res.json();

    if (search) {
       let filtrados = data.data.filter(
        (menu: any) =>
          menu.name.toLowerCase().includes(search.toLowerCase()) ||
          menu.description.toLowerCase().includes(search.toLowerCase())
      );
      return {...data, data: filtrados}
    }

    return data;
};

export const getMenu = async (idMenu: string) => {
    const res = await fetch(`${URL}/menus/${idMenu}`, {cache: "no-store"});

    if (!res.ok) {
      throw new Error("error al obtener los menus");
    }

    const data = await res.json();
    return data;
};

export const getCategory = async (id: string) => {
    const res = await fetch(`${URL}/categories/${id}`, {cache: "no-store"});

    if (!res.ok) {
      throw new Error("error al obtener la categoria");
    }

    const data = await res.json();
    return data;
};

export const getCategories = async () => {
    const res = await fetch(`${URL}/categories`, {cache: "no-store"});

    if (!res.ok) {
      throw new Error("error al obtener las categorias");
    }

    const data = await res.json();
    return data;
};

export const getOrders = async () => {
    const res = await fetch(`${URL}/orders`, {cache: "no-store"});

    if (!res.ok) {
      throw new Error("error al obtener las ordenes");
    }

    const data = await res.json();
    return data;
};


export const addMenu = async (menu:any, token:string) => {
    const opciones = {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menu),
    };

    const res = await fetch(`${URL}/menus`, opciones);

    if (!res.ok) {
      throw new Error("error al añadir un menu");
    }

    const data = await res.json();
    return data;
};

export const addCategory = async (category:any, token:string) => {
    const opciones = {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    };

    const res = await fetch(`${URL}/categories`, opciones);

    if (!res.ok) {
      throw new Error("error al añadir una categoria");
    }

    return await res.json();
};

export const deleteMenu = async (menuId:string, token:string) => {
    const opciones = {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    const res = await fetch(`${URL}/menus/${menuId}`, opciones);

    if (!res.ok) {
      throw new Error("error al eliminar un menu");
    }

    const data = await res.json();
    return data;
};

export const deleteCategory = async (id:string, token:string) => {
    const opciones = {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    const res = await fetch(`${URL}/categories/${id}`, opciones);

    if (!res.ok) {
      throw new Error("error al eliminar una categoria");
    }

    const data = await res.json();
    return data;
};

export const editMenu = async (menuId:string, menu:any, token:string) => {
    const opciones = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(menu),
    };

    const res = await fetch(`${URL}/menus/${menuId}`, opciones);

    if (!res.ok) {
      throw new Error("error al editar un menu");
    }

    const data = await res.json();
    return data;
};
export const editCategory = async (id:string, category:any, token:string) => {
    const opciones = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(category),
    };

    const res = await fetch(`${URL}/categories/${id}`, opciones);

    if (!res.ok) {
      throw new Error("error al editar una categoria");
    }

    const data = await res.json();
    return data;
};
