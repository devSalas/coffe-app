const URL = "https://cafe-app-kj9q.onrender.com"

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


export const getMenus = async () => {
    const res = await fetch(`${URL}/menus`, {cache: "no-store"});

    if (!res.ok) {
      throw new Error("error al obtener los menus");
    }

    const data = await res.json();
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

export const getCategories = async () => {
    const res = await fetch(`${URL}/categories`);

    if (!res.ok) {
      throw new Error("error al obtener las categorias");
    }

    const data = await res.json();
    return data;
};

export const getOrders = async () => {
    const res = await fetch(`${URL}/orders`);

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
