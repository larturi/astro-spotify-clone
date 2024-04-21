import { colors } from './colors'

export interface Playlist {
  id: string
  albumId: number
  title: string
  color: (typeof colors)[keyof typeof colors]
  cover: string
  artists: string[]
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: 'Chill Lo-Fi Music',
    color: colors.yellow,
    cover:
      'https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353',
    artists: ['NoSpirit', 'Casiio']
  },
  {
    id: '2',
    albumId: 2,
    title: 'Lo-Fi Chill Session',
    color: colors.green,
    cover: 'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    artists: ['Kupla', 'Blue Fox']
  },
  {
    id: '3',
    albumId: 3,
    title: 'Study Session',
    color: colors.rose,
    cover: 'https://f4.bcbits.com/img/a1435058381_65.jpg',
    artists: ['Tenno', 'xander', 'Team Astro']
  },
  {
    id: '4',
    albumId: 4,
    title: 'Blue Note Study Time',
    color: colors.blue,
    cover: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Raimu', 'Yasumu']
  },
  {
    id: '5',
    albumId: 5,
    title: 'Chau Saura Session',
    color: colors.purple,
    cover: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Chau Saura', 'amies', 'kyu']
  },
  {
    id: '6',
    albumId: 6,
    title: 'Like a Necessity',
    color: colors.orange,
    cover: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: ['WFS', 'Nadav Cohen']
  }
]

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + '_more'
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + '_side'
}))

export const allPlaylists = [...playlists, ...morePlaylists, ...sidebarPlaylists]

export interface Song {
  id: number
  albumId: number
  title: string
  image: string
  artists: string[]
  album: string
  duration: string
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: 'Moonlit Walk',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:12'
  },
  {
    id: 2,
    albumId: 1,
    title: 'Coffee Daze',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '4:07'
  },
  {
    id: 3,
    albumId: 1,
    title: 'Skyline Serenade',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:50'
  },
  {
    id: 4,
    albumId: 1,
    title: 'Urban Echoes',
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:30'
  },
  {
    id: 5,
    albumId: 1,
    title: "Night's End",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '4:20'
  },
  {
    id: 6,
    albumId: 2,
    title: 'Silent Rain',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '3:40'
  },
  {
    id: 7,
    albumId: 2,
    title: 'Lost Pages',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '3:20'
  },
  {
    id: 8,
    albumId: 2,
    title: '404 not found (it is the real name)',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '3:50'
  },
  {
    id: 9,
    albumId: 2,
    title: 'City Lights',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '3:30'
  },
  {
    id: 10,
    albumId: 2,
    title: 'Night Drive',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '4:20'
  },
  {
    id: 11,
    albumId: 3,
    title: 'Lunar',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:40'
  },
  {
    id: 12,
    albumId: 3,
    title: 'Go go go!',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:20'
  },
  {
    id: 13,
    albumId: 3,
    title: 'Keep focus!',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '2:40'
  },
  {
    id: 14,
    albumId: 3,
    title: 'JavaScript is the way',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:10'
  },
  {
    id: 15,
    albumId: 3,
    title: 'No more TypeScript for me',
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '2:10'
  },
  {
    id: 16,
    albumId: 4,
    title: 'Mars',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:40'
  },
  {
    id: 17,
    albumId: 4,
    title: 'Mama mia!',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:20'
  },
  {
    id: 18,
    albumId: 4,
    title: 'Php or Java',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '2:40'
  },
  {
    id: 19,
    albumId: 4,
    title: 'Docker is the word',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '3:10'
  },
  {
    id: 20,
    albumId: 4,
    title: 'The song number twenty',
    image: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Tenno'],
    album: 'Study Session',
    duration: '2:10'
  },
  {
    id: 21,
    albumId: 5,
    title: 'Second France',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:12'
  },
  {
    id: 22,
    albumId: 5,
    title: 'Coffee Daze',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '4:07'
  },
  {
    id: 23,
    albumId: 5,
    title: 'Skyline Serenade',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:50'
  },
  {
    id: 24,
    albumId: 5,
    title: 'Urban Echoes',
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:30'
  },
  {
    id: 25,
    albumId: 5,
    title: "Night's End",
    image: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '4:20'
  },
  {
    id: 26,
    albumId: 6,
    title: "Night's Start",
    image: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: ['WFS', 'Nadav Cohen'],
    album: 'Chill Lo-Fi Music',
    duration: '4:20'
  }
]
