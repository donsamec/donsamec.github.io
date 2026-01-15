export interface Photo {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
  description?: string;
}

export type PhotoCategory = 'all' | 'portrait' | 'landscape' | 'wildlife' | 'architecture';