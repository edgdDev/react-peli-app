import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Pagination, Typography } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { LoadingPage } from './'



export const ListSerie = ({ handlePageChange, listTvShows, pagination, isLoading, totalPages }) => {

  if ( isLoading ) {
    return <LoadingPage />
  }

  return (
    <main>
        
        <Container sx={{ py: 1 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={ 4 }>
            {listTvShows.map(( serie ) => (
              <Grid item key={ serie.id } xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={ serie.image_thumbnail_path }
                    alt={ serie.permalink }
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      { serie.name }
                    </Typography>
                    <Typography>
                      Fecha de estreno: 
                      <span
                        style={{ color: '#2196f3', fontWeight: 'bold', marginLeft: 4 }}
                      >
                        { serie.start_date }
                      </span>
                    </Typography>
                    <Typography>
                      Estatus: 
                      <span 
                        style={{ color: serie.status === 'Running' ? 'green' : 'red', fontWeight: 'bold', marginLeft: 4 }} 
                      > 
                        { serie.status === 'Running' ? 'En emisión' : 'Finalizado' }
                      </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                        size="small"

                    >
                        <RemoveRedEyeOutlinedIcon sx={{ mr: 1 }} />
                        <Link 
                            href={ `/show-detail/${ serie.permalink }` }
                            underline="none"
                        > 
                            Ver detalle 
                        </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box 
            sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mt: 4 
                }}
        >
            <Pagination 
                count={ totalPages } 
                color="primary"
                page={ pagination }
                onChange={ handlePageChange }
            />
        </Box>

    </main>
  )
}
