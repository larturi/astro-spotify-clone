import { create } from 'zustand'

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 1,
  currentSearchSongs: [],
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setVolume: (volume) => set({ volume }),
  setCurrentSearchSongs: (currentSearchSongs) => set({ currentSearchSongs })
}))
