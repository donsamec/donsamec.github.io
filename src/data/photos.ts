import { Photo } from '../types';

export const photos: Photo[] = [
  {
    id: '1',
    title: 'Mountain Reflection',
    category: 'landscape',
    imageUrl: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg',
    featured: true,
    description: 'A serene mountain lake reflecting the majestic peaks above.'
  },
  {
    id: '2',
    title: 'Urban Life',
    category: 'architecture',
    imageUrl: 'https://images.pexels.com/photos/2129796/pexels-photo-2129796.png',
    description: 'The bustling city life captured in architectural wonder.'
  },
  {
    id: '3',
    title: 'Portrait in Light',
    category: 'portrait',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    description: 'A portrait capturing the natural beauty in ambient light.'
  },
  {
    id: '4',
    title: 'Wildlife Moment',
    category: 'wildlife',
    imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
    description: 'A rare moment of wildlife in their natural habitat.'
  },
  {
    id: '5',
    title: 'Sunset Silhouette',
    category: 'landscape',
    imageUrl: 'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg',
    featured: true,
    description: 'A breathtaking sunset creating silhouettes on the horizon.'
  },
  {
    id: '6',
    title: 'Modern Structure',
    category: 'architecture',
    imageUrl: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
    description: 'The clean lines and shapes of modern architecture.'
  },
  {
    id: '7',
    title: 'Pensive Moment',
    category: 'portrait',
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    description: 'A thoughtful moment captured in a spontaneous portrait.'
  },
  {
    id: '8',
    title: 'Bird in Flight',
    category: 'wildlife',
    imageUrl: 'https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg',
    description: 'The graceful movement of a bird in flight.'
  },
  {
    id: '9',
    title: 'Mountain Vista',
    category: 'landscape',
    imageUrl: 'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg',
    description: 'A sweeping vista across mountain ranges at dawn.'
  },
  {
    id: '10',
    title: 'Historic Buildings',
    category: 'architecture',
    imageUrl: 'https://images.pexels.com/photos/461860/pexels-photo-461860.jpeg',
    description: 'The beauty of historical architecture preserved through time.'
  },
  {
    id: '11',
    title: 'Environmental Portrait',
    category: 'portrait',
    imageUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    description: 'A portrait that tells a story about the subject and their environment.'
  },
  {
    id: '12',
    title: 'Fox in Snow',
    category: 'wildlife',
    imageUrl: 'https://images.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg',
    description: 'A wild fox traversing a snowy landscape.'
  }
];

export const getFeaturedPhotos = (): Photo[] => {
  return photos.filter(photo => photo.featured);
};

export const getPhotosByCategory = (category: string): Photo[] => {
  if (category === 'all') return photos;
  return photos.filter(photo => photo.category === category);
};