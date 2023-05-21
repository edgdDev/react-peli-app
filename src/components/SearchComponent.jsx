import { Box, Container, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const SearchComponent = ({ searchQuery, handleInputSearch }) => {


    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 10,
                pb: 6,
            }}
        >
            <Container maxWidth='sm'>

                <Typography
                    component='h1'
                    variant="h3"
                    align="center"
                >
                    ReactTV App
                </Typography>
                <Typography variant="h6" paragraph align="center">
                    Busca tu serie favorita
                </Typography>

                <Paper
                    component='form'
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                >
                    <InputBase
                        sx={{ ml: 2, flex: 1 }}
                        placeholder="Buscar serie"
                        inputProps={{ 'aria-label': 'buscar serie' }}
                        fullWidth
                        value={ searchQuery }
                        onChange={({ target }) => handleInputSearch( target.value )}
                        multiline={ true }
                    />
                    <SearchIcon
                        sx={{ mr: 2 }}
                    />
                </Paper>
            </Container>
        </Box>
    )
}
