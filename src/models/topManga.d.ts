export interface TopManga {
  "7": MangaSummary[];
  "30": MangaSummary[];
  "90": MangaSummary[];
  "180": MangaSummary[];
}

export interface MangaSummary {
  title: string;
  slug: string;
  content_rating: string;
  genres: number[];
  demographic: number;
  md_covers: MdCover[];
}

export interface MdCover {
  w: number;
  h: number;
  b2key: string;
}

