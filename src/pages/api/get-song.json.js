import { songs } from '@/lib/data'

export async function GET({ request }) {
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const song = songs.filter((song) => song.id === Number(id))

  return new Response(JSON.stringify(...song), {
    headers: { 'content-type': 'application/json' }
  })
}
