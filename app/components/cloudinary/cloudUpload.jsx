'use client'
import { CldUploadWidget } from 'next-cloudinary';
import React from 'react'
import styles from './upload.module.css' 
 const upload = ({children}) => {
   return (
    <CldUploadWidget uploadPreset="<Your Upload Preset>">
    {({ open }) => {
      return (
        <button className={styles.uploadButton} onClick={() => open()}>
          {children}
        </button>
      );
    }}
  </CldUploadWidget>
   )
 }
 
 export default upload
