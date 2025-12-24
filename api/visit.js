import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  try {
    const ip =
      req.headers['x-forwarded-for'] ||
      req.socket.remoteAddress ||
      'unknown';

    const today = new Date().toISOString().slice(0, 10);
    const visitorKey = `visitor:${ip}:${today}`;

    const alreadyVisited = await kv.get(visitorKey);

    if (!alreadyVisited) {
      await kv.incr('portfolio:visits'); // <- clave correcta y consistente
      await kv.set(visitorKey, true, { ex: 60 * 60 * 24 });
    }

    const totalVisits = (await kv.get('portfolio:visits')) ?? 0;

    res.status(200).json({ visits: totalVisits });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo registrar la visita' });
  }
}
