import * as React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

export const Alerts = ({ alert }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={alert.type}>{alert.msg}</Alert>
    </Stack>
  )
}
