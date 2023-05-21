import { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import { tvShowApi } from '../api';
import { LoadingPage } from './';


export const DetailShow = () => {
  
  const { nameSerie } = useParams(); // Obtenemos el nombre de la serie por el parámetro.
  const [serie, setSerie] = useState( null ); // Este es el estado para el detalle de la serie.
  const [isLoading, setLoading] = useState( true ); //El estado para manejar el loading

  useEffect(() => {

    const fetchData = async () => {
      try {
        
        const { data } = await tvShowApi.get(`/show-details?q=${ nameSerie }`);
        setSerie( data.tvShow );
        

      } catch (error) {
        console.error( error );
      } finally {
        setLoading( false );
      }
    }

    fetchData();

  },[nameSerie]);

  if ( isLoading ) {
    return <LoadingPage />
  }

  return (
    <Box>
        <Navbar />
        <Container sx={{ py: 1, flexGrow: 1, marginTop: 4 }} maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* <CardMedia sx={{ height: 0, paddingTop: '177.77%' }} image={ serie.image_path } /> */}
                <CardMedia sx={{ height: 0, paddingTop: '150%', objectFit: 'contain' }} image={ serie.image_path } />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>

              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    { serie.name }
                  </Typography>
                  <Typography color="textSecondary">
                    Fecha de estreno: { serie.start_date }
                  </Typography>
                  <Typography color="textSecondary">
                    País: { serie.country }
                  </Typography>
                  <Typography color="textSecondary">
                    Estado: { serie.status }
                  </Typography>
                  <Typography color="textSecondary">
                    Género: { serie.genres.join(', ') }
                  </Typography>
                  <Typography variant="body2" component="p">
                    { serie.description }
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ mt: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Galería
                  </Typography>
                  <ImageList variant='masonry' cols={ 3 } gap={ 8 }>
                    { serie.pictures.map((picture, index) => (
                      <ImageListItem key={ index }>
                        <img 
                          src={ `${ picture }?w=248&fit=crop&auto=format` }
                          srcSet={ `${ picture }?w=248&fit=crop&auto=format&dpr=2 2x` }
                          loading='lazy'
                        />
                      </ImageListItem>
                    )) }
                  </ImageList>
                </CardContent>
              </Card>

            </Grid>
          </Grid>
        </Container>
        
    </Box>
  )
}
