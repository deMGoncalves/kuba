import supabase from '@kuba/supabase'

export default async function () {
  const yesterday = new Date(Date.now() - 60 * 60 * 24 * 1000)
  const lastmod = yesterday.toISOString().slice(0, 10)

  const { data } = await supabase
    .from('shape')
    .select(`
      slug,
      marca (slug)
    `)

  return new Response(
   `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${
        data
          .map((shape) => `
            <url>
              <loc>https://www.kuba.ink/${shape.marca.slug}/${shape.slug}</loc>
              <lastmod>${lastmod}</lastmod>
            </url>
          `)
          .join('')
      }
    </urlset>`
  )
}
