import React from 'react';
import { ProductData } from '../types/product';
import SalesChart from './SalesChart';
import SalesTable from './SalesTable';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Grid,
  Container,
  CircularProgress
} from '@mui/material';

interface ProductViewProps {
  product: ProductData | null; // Allow null for initial state
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  if (!product) {
    return <CircularProgress />;
  }

  const { title, sales } = product;

  if (!sales || sales.length === 0) {
    return <Typography variant="h6">No sales data available</Typography>;
  }
  return (

    <Container sx={{ height: '100vh', display: 'flex' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={2} sx={{ display: 'flex', alignItems: 'stretch' }}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: 160, objectFit: 'cover', paddingTop: 1}}
              image={product.image}
              alt={product.title}
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {product.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {product.subtitle}
              </Typography>
              <div>
                {product.tags.map((tag: string) => (
                  <Chip key={tag} label={tag} sx={{ margin: 0.5 }} />
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={10} sx={{ height: '100%' }}>
          <Grid container spacing={10} sx={{ height: '124.75%' }}>
            <Grid item xs={12} sx={{ height: '50%' }}>
              <SalesChart sales={product.sales} />
            </Grid>
            <Grid item xs={12} sx={{ height: '50%'}}>
              <SalesTable sales={product.sales} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    // <Container>
    //   <Card sx={{ display: 'flex', marginBottom: 4 }}>
    //     <CardMedia
    //       component="img"
    //       sx={{ width: 160 }}
    //       image={product.image}
    //       alt={product.title}
    //     />
    //     <CardContent>
    //       <Typography component="div" variant="h5">
    //         {product.title}
    //       </Typography>
    //       <Typography variant="subtitle1" color="text.secondary" component="div">
    //         {product.subtitle}
    //       </Typography>
    //       <div>
    //         {product.tags.map((tag) => (
    //           <Chip key={tag} label={tag} sx={{ margin: 0.5 }} />
    //         ))}
    //       </div>
    //     </CardContent>
    //   </Card>

    //   <Grid container spacing={8}>
    //     <Grid item xs={12} >
    //       <SalesChart sales={product.sales} />
    //     </Grid>
    //     <Grid item xs={12}>
    //       <SalesTable sales={product.sales} />
    //     </Grid>
    //   </Grid>
    // </Container>
  );
};

export default ProductView;
