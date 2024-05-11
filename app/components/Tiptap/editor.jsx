import { Stack } from '@mui/joy';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import 'iconify-icon';// define your extension array
import styles from './editor.module.css'
const extensions = [
  StarterKit,
]

const Tiptap = ({onChange, content}) => {
    const editor = useEditor({
        extensions,
        content: content,
        onUpdate({ editor }) {
          onChange(editor.getHTML());},
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
            justifyContent: "center"}}
            className="">
                <button className='button-28' type='button' onClick={()=> editor.chain().focus().toggleBold().run()}>
                <iconify-icon height = "1.5rem" width = "1.5rem"  icon="ooui:bold-b"></iconify-icon>        </button>
                <button className='button-28' type='button' onClick={()=> editor.chain().focus().toggleItalic().run()}>
                <iconify-icon height = "1.5rem" width = "1.5rem" icon="iconoir:italic"></iconify-icon>        </button>
                <button className='button-28' type='button' onClick={()=>editor.chain().focus().toggleHeading({level:2}).run()}>
                <iconify-icon height = "1.5rem" width = "1.5rem" icon="mdi:format-heading-2"></iconify-icon>        </button>
                <button className='button-28' type='button' onClick={()=>editor.chain().focus().toggleHeading({level:3}).run()}>
                <iconify-icon height = "1.5rem" width = "1.5rem" icon="mdi:format-heading-3"></iconify-icon>        </button>
                <button className='button-28' type='button' onClick={()=>editor.chain().focus().setParagraph({}).run()}>
                <iconify-icon height = "1.5rem" width = "1.5rem" icon="mdi:format-paragraph"></iconify-icon>        </button>
            </Stack>
        <EditorContent className= {styles.editor} editor={editor} />
    </Stack>
  
  )
}
export default Tiptap;