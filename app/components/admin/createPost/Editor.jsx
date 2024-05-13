'use client'


import { Stack } from '@mui/joy'
import { useEditor, EditorContent, EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import styles from '@/app/styles/editorMenu.module.css'
const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <Stack sx={
      {
        alignSelf: "center",
        display : "flex",
        flexDirection : "row",
      }
    }>
      <button type="button" 
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className= {styles.MenuButton } >
        عريض
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={styles.MenuButton }
      >
        فقرة
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={styles.MenuButton }
      >
        عنوان ثانوي
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={styles.MenuButton }
      >
        عنوان ثالث
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={styles.MenuButton }
      >
        bullet list
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={styles.MenuButton }
      >
        ordered list
      </button>
    </Stack>
  )
}

const Tiptap = ({content}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: 'textBox',
      },
    },
    content: '<p>Hello World! 🌎️</p>',
  })
   
  
  return (
    <EditorContent editor={editor} ></EditorContent>
  )
}
export default Tiptap