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