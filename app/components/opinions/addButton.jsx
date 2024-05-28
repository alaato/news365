import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({onClick}) => {
  return (
	<Fab color="primary" aria-label="add" onClick={onClick} sx={{position:"fixed", top:{xs: "92vh", md:"90vh"}, left: {xs: "85vw", md:"90vw"}}}>
        <AddIcon />
      </Fab>
  )
}

export default AddButton