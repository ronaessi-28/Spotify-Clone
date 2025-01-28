export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  duration: string;
}

export interface Playlist {
  id: string;
  name: string;
  coverUrl: string;
  songCount: number;
}

export interface Category {
  id: string;
  name: string;
  coverUrl: string;
}