export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json([111222, 3334345, 564345364]);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
