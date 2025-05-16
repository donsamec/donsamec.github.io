import React from 'react';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import Masonry from 'react-masonry-css';

function App() {
  const photos = [
    // Add your photos here
    // Example format:
    // { id: 1, src: 'path/to/image.jpg', alt: 'Description' }
  ];

  const videos = [
    // Add your videos here
    // Example format:
    // { id: 1, src: 'path/to/video.mp4', title: 'Video Title' }
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, url: 'https://instagram.com/donsamec', label: 'Instagram' },
    { icon: <Linkedin className="h-6 w-6" />, url: 'https://www.linkedin.com/in/don-samec-bb84996a/', label: 'LinkedIn' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Don Samec</h1>
        
        <div className="prose max-w-none mb-16">
          <p className="text-lg leading-relaxed text-gray-700">
            I'm a multidisciplinary artist and creative producer with over 10 years of experience in video production, photography, and editing, creating content that blends visual storytelling with artistic impact. I've worked with small businesses, personal brands, and cultural organizations to craft engaging photo and video content for websites, campaigns, and social media platforms. My work spans from long & short-form story driven videos to professional photography and collage-based visuals, often combining analog textures with digital fluency. As the founder of <a href="https://poetonic.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Poetonic</a>, I also produce original art-led content that resonates with online audiences, drawing from a strong background in both traditional media and web3 culture.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Photography</h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {photos.map((photo) => (
              <div key={photo.id} className="mb-4">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </Masonry>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Video</h2>
          <div className="grid gap-8">
            {videos.map((video) => (
              <div key={video.id} className="aspect-video">
                <video
                  src={video.src}
                  controls
                  className="w-full h-full rounded-lg shadow-md"
                >
                  <track kind="captions" />
                </video>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t">
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <a
            href="mailto:don.samec@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>Contact Me</span>
          </a>
        </footer>
      </main>
    </div>
  );
}

export default App;