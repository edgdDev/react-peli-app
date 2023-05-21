import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
        sx={{ bgcolor: '#e0e0e0', p: 6, mt: 4 }}
        component='footer'
    >
        <Typography
            align='center'
            component='p'
            variant='subtitle1'
        >
            Esta Aplicación fue realizada por: {'<Elvin D. Guzman />'}
        </Typography>
    </Box>
  )
}
