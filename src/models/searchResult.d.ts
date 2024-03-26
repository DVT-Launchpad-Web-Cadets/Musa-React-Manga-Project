export interface SearchResult {
  id: number
  hid: string
  slug: string
  title: string
  country: string
  rating?: string
  bayesian_rating?: string
  rating_count: number
  follow_count: number
  desc: string
  status: number
  last_chapter?: number
  translation_completed: boolean
  view_count: number
  content_rating: string
  demographic?: number
  uploaded_at?: string
  genres: number[]
  created_at: string
  user_follow_count: number
  year: number
  mu_comics: MuComics
  md_titles: MdTitle[]
  md_covers: MdCover[]
  highlight: string
}

export interface MuComics {
  year: number
}

export interface MdTitle {
  title: string
}

export interface MdCover {
  w: number
  h: number
  b2key: string
}
