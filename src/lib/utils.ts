export function formatearFecha(fechaString: string): string {
  const fecha = new Date(fechaString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  const fechaFormateada: string = fecha.toLocaleDateString("es-PE", options);

  return fechaFormateada;
}