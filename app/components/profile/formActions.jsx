import React from 'react'
import CardActions from '@mui/joy/CardActions'
import Button from '@mui/joy/Button'
const FormActions = () => {
  return (
        <CardActions buttonFlex="0 1 120px">
            <Button size="sm" variant="outlined" color="danger">
            Cancel
            </Button>
            <Button type="submit" size="sm" variant="solid" color="success">
            Save
            </Button>
        </CardActions>
  )
}

export default FormActions