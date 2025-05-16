import React, { useState, useEffect } from 'react';
import { Photo, PhotoCategory } from '../types';
import { getPhotosByCategory } from '../data/photos';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const categories: { id: PhotoCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'architecture', label: 'Architecture' }
  ];

  useEffect(() => {
    setFilteredPhotos(getPhotosByCategory(activeCategory));
  }, [activeCategory]);

  const handleCategoryChange = (category: PhotoCategory) => {
    setActiveCategory(category);
  };

  const openPhotoModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio Gallery</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a collection of my best work across various photography styles and subjects.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer aspect-[4/3] bg-gray-200 dark:bg-gray-800 transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => openPhotoModal(photo)}
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium">{photo.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closePhotoModal}
        >
          <div 
            className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-2/3 h-[50vh] md:h-auto bg-black flex items-center">
                <img 
                  src={selectedPhoto.imageUrl} 
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="md:w-1/3 p-6 flex flex-col">
                <button 
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  onClick={closePhotoModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedPhoto.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase">{selectedPhoto.category}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-auto">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;