import type { PortableTextBlock } from '@portabletext/types'

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  mainImageUrl: string;
  content: PortableTextBlock[];
}

export interface HomepageSection {
  _id: string;
  title: string;
  description: PortableTextBlock[];
  order: number;
  image: {
    asset: {
      url: string;
    };
  };
}

export interface GalleryImage {
  _id: string;
  imageUrl: string;
  alt: string;
  caption?: string;
  category: string;
}
