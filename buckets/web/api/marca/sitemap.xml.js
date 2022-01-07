import supabase from '@kuba/supabase'

export default async function (_request, response) {
  const { data } = await supabase
    .from('marca')
    .select('slug')

  response.setHeader('Content-Type', 'application/xml')
  response.send(
   `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${
        data
          .map((marca) => `
            <url>
              <loc>https://www.kuba.ink/${marca.slug}</loc>
            </url>
          `)
          .join('')
          .trim()
      }
    </urlset>`
  )
}
