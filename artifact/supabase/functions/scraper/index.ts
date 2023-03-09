import { corsHeaders } from '../_shared/cors.ts'
import { DOMParser } from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async function (request) {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const { licensePlate } = await request.json()
  // const response = await fetch(`https://placafipe.com/placa/${licensePlate}`)
  // const response = await fetch(`https://placaipva.com/placa/${licensePlate}`)
  const response = await fetch(`https://tabelafipebrasil.com/placa/${licensePlate}`)
  // const response = await fetch(`https://www.keplaca.com/placa/${licensePlate}`)
  const text = await response.text()
  const document = new DOMParser().parseFromString(text, 'text/html')
  const table = document.querySelector('.fipeTablePriceDetail tbody')
  const rows = Array.from(table?.childNodes ?? [])
  const cells = rows.map((tr) => Array.from(tr.childNodes))
  const pairs = cells.map((pair) => pair.map((td) => td.textContent))
  const data = Object.fromEntries(pairs)

  return new Response(
    JSON.stringify(data),
    {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    }
  )
})
