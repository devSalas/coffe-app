const KEY = "coffe-token"

export const guardarToken = (token: string) => {
  localStorage.setItem(KEY, JSON.stringify(token));
}

export const recuperarToken = () => {
  const data = localStorage.getItem(KEY);

  if (data === null) {
    return null;
  }

  const token = JSON.parse(data);
  return token;
};

export const eliminarToken = () =>{
  localStorage.removeItem(KEY)
}