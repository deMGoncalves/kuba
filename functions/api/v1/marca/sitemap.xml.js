import { createClient } from '@supabase/supabase-js'

export async function onRequestGet (context) {
  const supabase = createClient(
    context.env.API_URL,
    context.env.API_KEY
  )

  const yesterday = new Date(Date.now() - 60 * 60 * 24 * 1000)
  const lastmod = yesterday.toISOString().slice(0, 10)

  const { data } = await supabase
    .from('marca')
    .select('slug')

  return new Response(
   `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${
        data
          .map((marca) => `
            <url>
              <loc>https://www.kuba.ink/${marca.slug}</loc>
              <lastmod>${lastmod}</lastmod>
            </url>
          `)
          .join('')
      }
    </urlset>`
  )
}
