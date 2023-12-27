const KEY = "coffe-token"

export const guardarToken = (token: string) => {
  localStorage.setItem(KEY, JSON.stringify(token));
}

export const recuperarToken = () => {
  const data = localStorage.getItem(KEY);

  if (data) {
    const token = JSON.parse(data);
    return token
  }

  return null
}