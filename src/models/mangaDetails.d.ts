export interface MangaDetails {
  firstChap: FirstChap;
  comic: Comic;
  artists: Artist[];
  authors: Author[];
  langList: string[];
  recommendable: boolean;
  demographic: string;
  englishLink: any;
  matureContent: boolean;
  checkVol2Chap1: boolean;
}

export interface FirstChap {
  chap: string;
  hid: string;
  lang: string;
  group_name: unknown[] | null;
  vol: string | null;
}

export interface Comic {
  id: number;
  hid: string;
  title: string;
  country: string;
  status: number;
  links: Links;
  last_chapter: number;
  chapter_count: number;
  demographic: number;
  hentai: boolean;
  user_follow_count: number;
  follow_rank: number;
  comment_count: number;
  follow_count: number;
  desc: string;
  parsed: string;
  slug: string;
  mismatch: any;
  year: number;
  bayesian_rating: any;
  rating_count: number;
  content_rating: string;
  translation_completed: any;
  chapter_numbers_reset_on_new_volume_manual: boolean;
  final_chapter: any;
  final_volume: any;
  noindex: boolean;
  adsense: boolean;
  recommendations: any[];
  relate_from: any[];
  md_titles: MdTitle[];
  md_comic_md_genres: MdComicMdGenre[];
  md_covers: MdCover[];
  mu_comics: any;
  iso639_1: string;
  lang_name: string;
  lang_native: string;
}

export interface Links {
  al: string;
}

export interface MdTitle {
  title: string;
  lang: string;
}

export interface MdComicMdGenre {
  md_genres: MdGenres;
}

export interface MdGenres {
  name: string;
  type?: string;
  slug: string;
  group: string;
}

export interface MdCover {
  vol: string;
  w: number;
  h: number;
  b2key: string;
}

export interface Artist {
  name: string;
  slug: string;
}

export interface Author {
  name: string;
  slug: string;
}
