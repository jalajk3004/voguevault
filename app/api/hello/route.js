export default function handler(req, res) {
  console.log(req);
  console.log(res);
  res.status(200).json({ message: 'Hello from Next.js!' });
}