import { useState, useEffect } from 'react'
import { songs } from '@/lib/data'
import { usePlayerStore } from '@/store/playerStore'

export default function SearchSong() {
  const { setIsPlaying, setCurrentMusic, currentSearchSongs, setCurrentSearchSongs } =
    usePlayerStore((state) => state)

  const [searchTerm, setSearchTerm] = useState('')

  const handleOnChange = (e) => {
    e.preventDefault()
    setSearchTerm(e.target.value)

    const filteredSongs = songs.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setCurrentSearchSongs(filteredSongs)
  }

  const handleClick = (songId) => {
    fetch(`/api/get-song.json?id=${songId}`)
      .then((res) => res.json())
      .then((data) => {
        setIsPlaying(true)
        setCurrentMusic({ playlist: 1, song: data, songs: [] })
      })
  }

  useEffect(() => {
    setCurrentSearchSongs([])
  }, [])

  useEffect(() => {
    if (searchTerm === '') {
      setCurrentSearchSongs([])
    }
  }, [searchTerm])

  return (
    <div>
      <input
        type='text'
        placeholder='Search your favorite song...'
        className='px-2 py-1.5 rounded-md w-72'
        onChange={handleOnChange}
      />
      <table className='table-auto text-left min-w-full divide-y divide-gray-500/20 mt-5'>
        <thead className=''>
          <tr className='text-zinc-400 text-sm'>
            <th className='px-4 py-2 font-light'>#</th>
            <th className='px-4 py-2 font-light'>Título</th>
            <th className='px-4 py-2 font-light'>Álbum</th>
            <th className='px-4 py-2 font-light'>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr className='h-[16px]'></tr>
          {currentSearchSongs.map((song, index) => (
            <tr
              key={song.id}
              onClick={() => handleClick(song.id)}
              className='border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300 hover:cursor-pointer'
            >
              <td className='px-4 py-2 rounded-tl-lg rounded-bl-lg w-5'>{index + 1}</td>

              <td className='px-4 py-2 flex gap-3'>
                <picture className=''>
                  <img src={song.image} alt={song.title} className='w-11 h-11' />
                </picture>

                <div className='flex flex-col'>
                  <h3 className='text-white text-base font-normal'>{song.title}</h3>
                  <span>{song.artists.join(', ')}</span>
                </div>
              </td>

              <td className='px-4 py-2'>{song.album}</td>
              <td className='px-4 py-2 rounded-tr-lg rounded-br-lg'>{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
