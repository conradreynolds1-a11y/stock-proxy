export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  const { symbol, token } = req.query;
  if (!symbol || !token) return res.status(400).json({ error: "Missing params" });
  const r = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`);
  const data = await r.json();
  res.json(data);
}
