import * as React from 'react';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function CommentField({register}) {
  const [italic, setItalic] = React.useState(false);
  const [Bold, setBold] = React.useState(false);
  return (
    <FormControl>
      <FormLabel>تعليقك</FormLabel>
      <Textarea
	  {...register("content", { required: "يجب ادخال محتوى" })}
        placeholder="اكتب شيئاً هنا..."
        minRows={3}
		maxRows={5}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={() => setBold((bool) => !bool)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="md" />
            </IconButton>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight: Bold? "bold" : "normal",
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
    </FormControl>
  );
}
