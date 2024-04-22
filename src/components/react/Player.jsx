import { useEffect, useRef, useState } from 'react'
import { usePlayerStore } from '@/store/playerStore'
import { Slider } from './Slider'

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div
      className={`
        flex items-center gap-5 relative
        overflow-hidden
      `}
    >
      <picture className='w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden'>
        <img src={image} alt={title} />
      </picture>

      <div className='flex flex-col'>
        <h3 className='font-semibold text-sm block text-white'>{title}</h3>
        <span className='text-xs opacity-80 text-white'>{artists?.join(', ')}</span>
      </div>
    </div>
  )
}

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime)
  }

  const formatTime = (time) => {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const duration = audio?.current?.duration ?? 0

  return (
    <div className='flex gap-x-3 text-xs sm:pt-2 pt-[14px]'>
      <span className='opacity-50 w-12 text-right text-white'>{formatTime(currentTime)}</span>

      <Slider
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className='sm:w-[400px] w-[80px]'
        onValueChange={(value) => {
          const [newCurrentTime] = value
          audio.current.currentTime = newCurrentTime
        }}
      />

      <span className='opacity-50 w-12 text-white'>{duration ? formatTime(duration) : '0:00'}</span>
    </div>
  )
}

const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume)
  const setVolume = usePlayerStore((state) => state.setVolume)
  const previousVolumeRef = useRef(volume)

  const isVolumeSilenced = volume < 0.01

  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current)
    } else {
      previousVolumeRef.current = volume
      setVolume(0)
    }
  }

  return (
    <div className='flex sm:justify-center sm:gap-x-3 text-white mt-[12px] sm:mt-0'>
      <button className='opacity-70 hover:opacity-100 transition p-3' onClick={handleClickVolumen}>
        {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className='sm:w-[95px] w-[75px]'
        onValueChange={(value) => {
          const [newVolume] = value
          const volumeValue = newVolume / 100
          setVolume(volumeValue)
        }}
      />
    </div>
  )
}

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore((state) => state)

  const audioRef = useRef()
  const volumeRef = useRef(1)

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const { song } = currentMusic
    if (song) {
      const src = `/music/${song.id}.mp3`
      audioRef.current.src = src
      audioRef.current.volume = volumeRef.current
      audioRef.current.play()
    }
  }, [currentMusic])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className='flex flex-row justify-between w-full pb-6 sm:py-0 sm:pb-0 sm:px-1 z-50 bg-black'>
      <div className='hidden sm:block sm:w-[200px]'>{<CurrentSong {...currentMusic.song} />}</div>

      <div className='sm:grid place-content-center gap-4 flex-1'>
        <div className='flex justify-center sm:flex-col flex-row items-center'>
          <button className='bg-white rounded-full sm:p-2 p-4 mt-4 sm:mt-0' onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <SongControl audio={audioRef} />
          <audio ref={audioRef} />
        </div>
      </div>

      <div className='grid place-content-center mr-4'>
        <VolumeControl />
      </div>
    </div>
  )
}

// Iconos

export const Pause = ({ className }) => (
  <svg
    className={className}
    role='img'
    height='16'
    width='16'
    aria-hidden='true'
    viewBox='0 0 16 16'
  >
    <path d='M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z'></path>
  </svg>
)

export const Play = ({ className }) => (
  <svg
    className={className}
    role='img'
    height='16'
    width='16'
    aria-hidden='true'
    viewBox='0 0 16 16'
  >
    <path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'></path>
  </svg>
)

export const VolumeSilence = () => (
  <svg
    fill='currentColor'
    role='presentation'
    height='16'
    width='16'
    aria-hidden='true'
    aria-label='Volumen apagado'
    viewBox='0 0 16 16'
  >
    <path d='M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z'></path>
    <path d='M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z'></path>
  </svg>
)

export const Volume = () => (
  <svg
    fill='currentColor'
    role='presentation'
    height='16'
    width='16'
    aria-hidden='true'
    aria-label='Volumen alto'
    id='volume-icon'
    viewBox='0 0 16 16'
  >
    <path d='M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z'></path>
    <path d='M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z'></path>
  </svg>
)
