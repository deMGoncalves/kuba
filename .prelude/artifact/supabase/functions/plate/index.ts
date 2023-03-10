import { corsHeaders } from '../_shared/cors.ts'
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async function (request) {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const { plate: placa } = await request.json()
  const init = {
    body: JSON.stringify({ placa }),
    headers: new Headers({
      'Content-Type': 'application/json',
      SecretKey: 'fd783073-911f-411a-8668-8658173146c3',
      PublicToken: '672ABC94262CVF7CE8262O0ZF35C46F0651A7',
      DeviceToken: 'c0905e29-0f5e-4b55-af00-cbcf64de91e2',
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3BsYXRhZm9ybWEuYXBpYnJhc2lsLmNvbS5ici9zb2NpYWwvZ2l0aHViL2NhbGxiYWNrIiwiaWF0IjoxNjc2MzgwODExLCJleHAiOjE3MDc5MTY4MTEsIm5iZiI6MTY3NjM4MDgxMSwianRpIjoibmhiR3IzZ2ZxMzJVMHFkVyIsInN1YiI6IjkyOCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.e4WisPya6jU9oxa3D_PbEuEFI9nSoT3j20_jaYr6XjI'
    }),
    method: 'POST'
  }
  const response = await fetch('https://cluster.apigratis.com/api/v1/vehicles/dados', init)
  const json = await response?.json()
  const { message, response: data } = json

  console.log(message)

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
