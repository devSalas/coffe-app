import {guardarToken, recuperarToken} from '@/utils/token';

const URL = ""

export const login = async (data: any): Promise<boolean> => {
  try {
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(`${URL}/login`, opciones);
    const result = await res.json();

    if (result.status === 400) {
      throw new Error("");
    }

    const token = result.token;
    // Guardar el token en localStorage
    guardarToken(token)

    return true;
  } catch (err) {
    return false;
  }
};

export const signup = async (data: any): Promise<boolean> => {
  try {
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(`${URL}/signup`, opciones);
    const result = await res.json();

    if (result.status === 400) {
      throw new Error("");
    }

    const token = result.token;
    // Guardar el token en localStorage
    guardarToken(token)

    return true;
  } catch (err) {
    return false;
  }
};

export const verifySesion = async () => {
  try {
    const token = recuperarToken()

    const opciones = {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    const res = await fetch(`${URL}/auth`, opciones);
    const result = await res.json();

    if (result.status === 400) {
      throw new Error("");
    }

    return true;
  } catch (err) {
    return false;
  }
}