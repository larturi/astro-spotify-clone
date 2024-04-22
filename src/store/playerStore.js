import { playlists, songs } from '@/lib/data'
import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: playlists[0], song: songs[0], songs: [] },
  volume: 1,
  currentSearchSongs: [],
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setVolume: (volume) => set({ volume }),
  setCurrentSearchSongs: (currentSearchSongs) => set({ currentSearchSongs })
}))
