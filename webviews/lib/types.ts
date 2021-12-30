export interface Preview {
  enabled: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  resolutions: Resolution[];
  source: Resolution;
  variants: Variants;
}

interface Variants {}

export interface Resolution {
  height: number;
  url: string;
  width: number;
}

interface P {
  u: string;
  x: number;
  y: number;
}

export interface RedditPost {
  author: string;
  full_link: string;
  is_video: boolean;
  preview: Preview;
  title: string;
  media_metadata: Record<
    string,
    {
      e: string;
      id: string;
      m: string;
      p: P[];
      s: P;
      status: string;
    }
  >;
}
