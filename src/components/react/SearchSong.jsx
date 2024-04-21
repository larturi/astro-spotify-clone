import { useEffect } from 'react'
import { songs } from '@/lib/data'
import { usePlayerStore } from '@/store/playerStore'
import TableSongs from './TableSongs'

export default function SearchSong() {
  const { currentSearchSongs, setCurrentSearchSongs } = usePlayerStore((state) => state)

  const handleOnChange = (e) => {
    e.preventDefault()

    const currentInputValue = e.target.value

    if (currentInputValue === '') {
      setCurrentSearchSongs([])
      return
    }

    const filteredSongs = songs.filter((song) =>
      song.title.toLowerCase().includes(currentInputValue.toLowerCase())
    )

    setCurrentSearchSongs(filteredSongs)
  }

  useEffect(() => {
    setCurrentSearchSongs([])
  }, [])

  return (
    <div>
      <input
        type='text'
        placeholder='Search your favorite song...'
        className='px-2 py-1.5 rounded-md w-72 bg-zinc-700 text-white'
        onChange={handleOnChange}
      />

      <TableSongs songs={currentSearchSongs} />
    </div>
  )
}
