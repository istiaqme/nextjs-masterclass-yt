// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const news = [
    {
      id: 1,
      title: "Bing Bong Bing",
      details: "Dong Kabhi Wrong Nahi Hota"
    },
    {
      id: 2,
      title: "Bing Bong Bing",
      details: "Dong Kabhi Wrong Nahi Hota"
    },
    {
      id: 3,
      title: "Bing Bong Bing",
      details: "Dong Kabhi Wrong Nahi Hota"
    },
    {
      id: 3,
      title: "Bing Bong Bing",
      details: "Dong Kabhi Wrong Nahi Hota"
    },
  ]

  res.status(200).json(news)
}
