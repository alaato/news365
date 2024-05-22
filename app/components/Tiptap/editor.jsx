'use client'
import { Stack } from '@mui/joy';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import 'iconify-icon';
import styles from './editor.module.css'
import Youtube from '@tiptap/extension-youtube'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'

const extensions = [
  Image,
  Youtube.configure({
    controls: true,
  }),
  StarterKit,
  Link.configure({
    openOnClick: false, 
    autolink: false,
    HTMLAttributes: {
      target: "_blank",
    },
  })
]

const Tiptap = ({ onChange, content }) => {

  const addImage = () => {
    const url = prompt('أدخل عنوان الصورة')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }
  const addUrl = () => {
    const url = prompt('أدخل عنوان ')

    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }
  const addYoutubeVideo = () => {
    const url = prompt('أدخل عنوان فيديو YouTube')
    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: 640,
        height: 480,
      })
    }
  }

  const editor = useEditor({
    extensions,
    content: content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'editor',
      },
    },
  })
  return (
    <Stack>
      <Stack sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <button className='button-28' type='button' id="add" onClick={addYoutubeVideo}>YouTube</button>
        <button className='button-28' type='button'onClick={addUrl} id="add">link</button>
        <button className='button-28' type='button' id="add" onClick={addImage}>
          <iconify-icon icon="material-symbols:image-outline"></iconify-icon></button>
        <button className='button-28' type='button' onClick={() => editor.chain().focus().toggleBold().run()}>
          <iconify-icon height="1.2rem" width="1.2rem" icon="ooui:bold-b"></iconify-icon>        </button>
        <button className='button-28' type='button' onClick={() => editor.chain().focus().toggleItalic().run()}>
          <iconify-icon height="1.2rem" width="1.2rem" icon="iconoir:italic"></iconify-icon>        </button>
        <button className='button-28' type='button' onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <iconify-icon height="1.2rem" width="1.2rem" icon="mdi:format-heading-1"></iconify-icon>        </button>
        <button className='button-28' type='button' onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <iconify-icon height="1.2rem" width="1.2rem" icon="mdi:format-heading-2"></iconify-icon>        </button>
        <button className='button-28' type='button' onClick={() => editor.chain().focus().setParagraph({}).run()}>
          <iconify-icon height="1.2rem" width="1.2rem" icon="mdi:format-paragraph"></iconify-icon>        </button>
      </Stack>
      <EditorContent dir='auto' id='editor' className={styles.editor} editor={editor} />
    </Stack>

  )
}
export default Tiptap;