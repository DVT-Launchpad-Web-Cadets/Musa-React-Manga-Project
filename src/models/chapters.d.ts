export interface Chapters {
  chapters: Chapter[];
  total: number;
  limit: number;
}

export interface Chapter {
  id: number;
  chap: string;
  title?: string | null;
  vol: any;
  lang: string;
  created_at: string;
  updated_at: string;
  up_count: number;
  down_count: number;
  is_the_last_chapter: boolean;
  group_name: string[];
  hid: string;
  identities?: Identities | null;
  md_chapters_groups: MdChaptersGroup[];
}

export interface Identities {
  id: string;
  traits: Traits;
}

export interface Traits {
  username: string;
  gravatar: string;
}

export interface MdChaptersGroup {
  md_groups: MdGroups;
}

export interface MdGroups {
  title: string | null;
  slug: string;
}
