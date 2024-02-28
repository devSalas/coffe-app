const KEY = "coffe-token"

export const guardarToken = (token: string) => {
  localStorage.setItem(KEY, JSON.stringify(token));
}

export const recuperarToken = () => {
  const data = localStorage.getItem(KEY);

  if (!data) {
    return null;
  }
  
  try {
    const token = JSON.parse(data);
    console.log(token); // Registrar el token en la consola (para depuración)
    return token; // Devolver el token parseado
  } catch (error) {
    console.error('Error al analizar el token:', error);
    return null; // Manejar errores de análisis y devolver null
  }
};

export const eliminarToken = () =>{
  localStorage.removeItem(KEY)
}