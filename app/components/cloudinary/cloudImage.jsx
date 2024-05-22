'use client'
import { CldImage } from 'next-cloudinary';

const cloudImage = (probs) => {
  const {width, height, size, src, alt} = probs;
  
  return (
  <CldImage
    width={width}
    height={height}
    src={src}
    sizes={ size}
    alt={alt}
    />
  )
}

export default cloudImage