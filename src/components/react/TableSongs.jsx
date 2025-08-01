import { usePlayerStore } from '@/store/playerStore'

export default function TableSongs({ songs }) {
  const { setIsPlaying, setCurrentMusic } = usePlayerStore((state) => state)

  const handleClick = (songId) => {
    fetch(`/api/get-song.json?id=${songId}`)
      .then((res) => res.json())
      .then((data) => {
        setIsPlaying(true)
        setCurrentMusic({ playlist: 1, song: data, songs: [] })
      })
  }

  return (
    <>
      {/* Desktop */}
      <table className='hidden sm:block text-left min-w-full divide-y divide-gray-500/20 mt-5 h-[400px]'>
        <thead className=''>
          <tr className='text-zinc-400 text-sm'>
            <th className='px-4 py-2 font-light w-[100px]'>#</th>
            <th className='px-4 py-2 font-light w-[400px]'>Título</th>
            <th className='px-4 py-2 font-light w-[250px]'>Álbum</th>
            <th className='px-4 py-2 font-light'>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr className='h-[16px]'></tr>
          {songs.map((song, index) => (
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

      {/* Mobile */}
      <table className='block sm:hidden table-auto text-left divide-y divide-gray-500/20 mt-5 h-[400px] sm:h-auto'>
        <thead className=''>
          <tr className='text-zinc-400 text-sm'>
            <th className='px-4 py-2 font-light'>#</th>
            <th className='px-4 py-2 font-light w-full'>Título</th>
          </tr>
        </thead>
        <tbody>
          <tr className='h-[16px]'></tr>
          {songs.map((song, index) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
