export default async function handler(req, res) {
  const { q } = req.query;
  const apiKey = "a418492213764722b4d787a3f532c221";
  const url = `https://newsapi.org/v2/everything?q=${
    q || "tesla"
  }&pageSize=12&sortBy=publishedAt&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: "error", message: "Gagal mengambil data." });
  }
}
