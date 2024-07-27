import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { fetchProductData } from './redux/productSlice';
import ProductView from './components/ProductView';
import { AppBar, Box, Toolbar, Container, Typography, CircularProgress, Alert } from '@mui/material';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container
      maxWidth={false}
      sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <AppBar position="static" sx={{ bgcolor: 'navy' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Stackline
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 1 }}
      >
        {data ? <ProductView product={data} /> : <CircularProgress />}
      </Box>
    </Container>
  );
};

export default App;