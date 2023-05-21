import CircularProgress from '@mui/material/CircularProgress';

export const LoadingPage = () => {
  return (
    <div 
        style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' 
        }}
    >
        <CircularProgress color="primary" size={60} />
    </div>
  )
}
