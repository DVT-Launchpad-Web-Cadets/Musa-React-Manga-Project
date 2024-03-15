export interface Comic {
    chapter: Chapter
    next: any
    prev: Prev
    matureContent: boolean
    chapters: Chapter2[]
    dupGroupChapters: DupGroupChapter[]
    chapterLangList: ChapterLangList[]
    canonical: string
    seoTitle: string
    seoDescription: string
    chapTitle: string
    checkVol2Chap1: boolean
  }
  
  export interface Chapter {
    id: number
    chap: string
    vol: any
    title: string
    hid: string
    group_name: string[]
    chapter_id: any
    created_at: string
    updated_at: string
    crawled_at: string
    mdid: string
    comment_count: number
    up_count: number
    down_count: number
    status: string
    adsense: boolean
    lang: string
    is_the_last_chapter: boolean
    md_comics: MdComics
    md_images: MdImage[]
    md_chapters_groups: MdChaptersGroup[]
  }
  
  export interface MdComics {
    id: number
    title: string
    country: string
    slug: string
    desc: string
    links: Links
    genres: number[]
    hid: string
    content_rating: string
    chapter_numbers_reset_on_new_volume_manual: boolean
    noindex: boolean
    mu_comics: MuComics
    md_covers: MdCover[]
  }
  
  export interface Links {
    al: string
    ap: string
    bw: string
    kt: string
    mu: string
    amz: string
    cdj: string
    ebj: string
    mal: string
    raw: string
    engtl: string
  }
  
  export interface MuComics {
    mu_comic_publishers: MuComicPublisher[]
  }
  
  export interface MuComicPublisher {
    mu_publishers: MuPublishers
  }
  
  export interface MuPublishers {
    title: string
    slug: string
  }
  
  export interface MdCover {
    w: number
    h: number
    b2key: string
  }
  
  export interface MdImage {
    h: number
    w: number
    name: string
    s: number
    b2key: string
    optimized: number
  }
  
  export interface MdChaptersGroup {
    md_group_id: number
    md_groups: MdGroups
  }
  
  export interface MdGroups {
    slug: string
    title: string
  }
  
  export interface Prev {
    chap: string
    vol: any
    title: string
    hid: string
    lang: string
    id: number
    href: string
  }
  
  export interface Chapter2 {
    chap?: string
    vol?: string
    hid: string
    lang: string
    id: number
    title?: string
  }
  
  export interface DupGroupChapter {
    id: number
    hid: string
    chap: string
    group_name: string[]
    md_chapters_groups: MdChaptersGroup2[]
  }
  
  export interface MdChaptersGroup2 {
    md_groups: MdGroups2
  }
  
  export interface MdGroups2 {
    title: string
  }
  
  export interface ChapterLangList {
    lang: string
    hid: string
  }
  