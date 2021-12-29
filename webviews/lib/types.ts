interface Preview {
  enabled: boolean;
  images: Image[];
}

interface Image {
  id: string;
  resolutions: Resolution[];
  source: Resolution;
  variants: Variants;
}

interface Variants {}

interface Resolution {
  height: number;
  url: string;
  width: number;
}

export interface RedditPost {
  author: string;
  full_link: string;
  is_video: boolean;
  preview: Preview;
}
