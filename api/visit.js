import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  // Permitir solo GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    // Incrementa el contador "visits" en 1
    const visits = await kv.incr("visits");

    // Respuesta exitosa
    return res.status(200).json({ visits });
  } catch (error) {
    console.error("Error incrementando visitas:", error);
    return res.status(500).json({ error: "No se pudo registrar la visita" });
  }
}
