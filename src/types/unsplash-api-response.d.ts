interface AltDescriptionTranslations {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Photo {
  alt_description: string;
  alternative_slugs: AltDescriptionTranslations;
  asset_type: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string | null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;

  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
  };
  width: number;
}

export interface PhotoListResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}
