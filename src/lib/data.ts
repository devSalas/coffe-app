import { CategoryI, MenuI, OrderI } from "./definitions";

/* const URL = "https://cafe-app-kj9q.onrender.com" */
const URL = "https://menu.sunetya.site"
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

/* menus */
export const getMenus = async ({search, category}: {search?:string, category?:string}): Promise<MenuI[] | null> => {
    const res = await fetch(`${URL}/menus`, {cache:"no-store"});

    if (!res.ok) {
      throw new Error("error al obtener los menus");
    }

    const resJson = await res.json();
    let menus:MenuI[] = resJson.data

    if (search) {
      menus = menus.filter(
        (menu) =>
          menu.name.toLowerCase().includes(search.toLowerCase()) ||
          menu.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      menus = menus.filter(
        (menu) =>
        menu.category.name.toLowerCase().includes(category.toLowerCase())
      );
    }

    return menus;
};

export const getMenuById = async (idMenu: string): Promise<MenuI | null> => {
    const res = await fetch(`${URL}/menus/${idMenu}`, {cache:"no-store"});

    if (!res.ok) {
      throw new Error("error al obtener los menus");
    }

    const resJson = await res.json();
    return resJson.data;
};

export const addMenu = async (menu:any, token:string): Promise<MenuI | null> => {
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

  const resJson = await res.json();
  return resJson.data;
};

export const editMenu = async (menuId:string, menu:any, token:string): Promise<any> => {
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

export const deleteMenu = async (menuId:string, token:string): Promise<any> => {
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

  const resJson = await res.json();
  console.log(resJson)
  return resJson.data;
};

/* categories */
export const getCategoryById = async (id: string): Promise<CategoryI | null> => {
    const res = await fetch(`${URL}/categories/${id}`, {cache:"no-store"});

    if (!res.ok) {
      throw new Error("error al obtener la categoria");
    }

    const resJson = await res.json();
    return resJson.data;
};

export const getCategories = async (): Promise<CategoryI[] | null> => {
    const res = await fetch(`${URL}/categories`, {cache:"no-store"});

    if (!res.ok) {
      throw new Error("error al obtener las categorias");
    }

    const resJson = await res.json();
    return resJson.data;
};

export const addCategory = async (category:any, token:string): Promise<CategoryI[] | null>  => {
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

export const editCategory = async (id:string, category:any, token:string): Promise<any> => {
  const opciones = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  };

  const res = await fetch(`${URL}/categories/${id}`, opciones);
  console.log(res)

  if (!res.ok) {
    throw new Error("error al editar una categoria");
  }

  const data = await res.json();
  return data;
};


export const deleteCategory = async (id:string, token:string): Promise<any> => {
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

  const resJson = await res.json();
  return resJson.data;
};

/* orders */
export const getOrders = async (): Promise<OrderI[] | null> => {
    const res = await fetch(`${URL}/orders`, {cache: "no-store"});

    if (!res.ok) {
      throw new Error("error al obtener las ordenes");
    }

    const data = await res.json();
    return data;
};


export const addOrder = async (order:any, token:string): Promise<OrderI[] | null>  => {
  const opciones = {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  };

  const res = await fetch(`${URL}/orders`, opciones);
  if (!res.ok) {
    throw new Error("error al añadir una orden");
  }

  return await res.json();
};
