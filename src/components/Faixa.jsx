import React from 'react';
import { motion } from 'framer-motion';

// Importação das imagens
import image from '../assets/structure.png';
import image2 from '../assets/js.png';
import image3 from '../assets/html.png';
import image4 from '../assets/database.png';
import image5 from '../assets/css-3.png';

const Faixa = () => {
  // Variantes para a animação do marquee
  const marqueeVariants = {
    animate: {
      x: ['100%', '-100%'], // Move de 0% a -100% para um loop contínuo
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20, // Duração da animação em segundos
          ease: 'linear', // Movimento linear
        },
      },
    },
  };

  // Array de dados das imagens
  const imageData = [
    { id: 1, src: image, alt: 'imagem1' },
    { id: 2, src: image2, alt: 'imagem2' },
    { id: 3, src: image3, alt: 'imagem3' },
    { id: 4, src: image4, alt: 'imagem4' },
    { id: 5, src: image5, alt: 'imagem5' },
    { id: 6, src: image5, alt: 'imagem1' },
    { id: 7, src: image4, alt: 'imagem2' },
    { id: 8, src: image3, alt: 'imagem3' },
    { id: 9, src: image2, alt: 'imagem4' },
    { id: 10, src: image, alt: 'imagem5' },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      {/* Elemento de animação do Framer Motion */}
      <motion.div
        className="flex"
        style={{ width: '200%' }} // Define a largura para conter ambos os conjuntos de imagens
        variants={marqueeVariants}
        animate="animate"
      >
        {/* Mapeando e renderizando as imagens duas vezes para criar um loop contínuo */}
        {imageData.concat(imageData).map((image, index) => (
          <div className='w-12 h-14 mx-8 inline-block' key={index}>
            <img src={image.src} alt={image.alt} className='w-full h-full object-contain' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Faixa;
