import React from 'react'

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
const bio = () => {
  return (
    <Card>
    <Box sx={{ mb: 1 }}>
        <Typography level="title-md">Bio</Typography>
        <Typography level="body-sm">
        اكتب مقدمة قصيرة ليتم عرضها في ملفك الشخصي
        </Typography>
    </Box>
    <Divider />
    <Stack spacing={2} sx={{ my: 1 }}>
        <Textarea
            size="sm"
            minRows={4}
            sx={{ mt: 1.5 }}
            defaultValue="انا محمود من مصر. أريد دائما أن أجد الحقيقة"
        />
    </Stack>
    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
            <Button size="sm" variant="outlined" color="neutral">
            Cancel
            </Button>
            <Button size="sm" variant="solid">
            Save
            </Button>
        </CardActions>
    </CardOverflow>
</Card>
  )
}

export default bio