import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Link from 'next/link';
import SubMenu from './subMenu';

export default function Hamburger({sub, pages, handleOpenSub,
  handleCloseSub,
  anchorSub, pagesEn}) {
    const [open, setOpen] = React.useState(false);

    return (
      <Box sx={{display: { xs: 'block', md: 'none' }}}>
        <IconButton  variant="outlined" onClick={() => setOpen(true)}>
          <Menu sx = {{color : 'white'}}/>
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 'auto',
              mt: 1,
              mr: 2,
            }}
          >
            <Typography
              component="label"
              htmlFor="close-icon"
              fontSize="sm"
              fontWeight="lg"
              sx={{ cursor: 'pointer' }}
            >
              Close
            </Typography>
            <ModalClose id="close-icon" sx={{ position: 'initial' }} />
          </Box>
          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}
          >
            {
                pages.map((page, i)=>
                    <ListItemButton key={page} sx = {{width : 'auto'}} onClick={pagesEn[i] === "news" ? handleOpenSub : undefined}>
                    <Link key={page} href={pagesEn[i] === "news" ? "" : '/'+pagesEn[i]}>{page}</Link>
                    </ListItemButton>
                    )
            }
          </List>
        </Drawer>
        <SubMenu sub = {sub} handleCloseSub={handleCloseSub} anchorSub={anchorSub}/>
      </Box>
  );
}
