import supabase from '@kuba/supabase'

export default async function (_request, response) {
  const { data } = await supabase
    .from('shape')
    .select(`
      slug,
      marca (slug)
    `)

  response.setHeader('Content-Type', 'application/xml')
  response.send(
   `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${
        data
          .map((shape) => `
            <url>
              <loc>https://www.kuba.ink/${shape.marca.slug}/${shape.slug}</loc>
            </url>
          `)
          .join('')
      }
    </urlset>`
  )
}
