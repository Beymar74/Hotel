export async function getPlates<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.statusText}`);
    }
    const data: T = await response.json();
    return data;
  }
  