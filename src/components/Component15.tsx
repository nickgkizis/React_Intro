import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3',
];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

  return (
    <div>
      <h2>Image Carousel</h2>
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImage]} alt="Carousel" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;
