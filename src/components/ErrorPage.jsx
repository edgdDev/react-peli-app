import { Box, Button, Typography } from '@mui/material';

// En caso de que el usuario busca un path no existente, esta es la pantalla que se presentará error not found 404.
export const ErrorPage = () => {

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center'
    }}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Error 404
      </Typography>
      <Typography variant="h5" sx={{ fontSize: 20, marginBottom: 2 }}>
        Oops! La página que estás buscando no existe.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="/"
        sx={{ marginTop: 2 }}
      >
        Volver a la página de inicio
      </Button>
    </Box>
  );
};

