import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Layout from './components/Shared/Layout'
import data from '../utilities/data'


export default function Home() {
  return (
    <Layout>
        <Box>
        <Typography variant='h2'>Products</Typography>
        <Box >
          <Grid container spacing={3}
          sx={{justifyContent:'center'}}
          >
            {data?.products.map((product) =>(<Grid
              item
              md={4}
              key={product?.name}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia component='img' image= {product.image}
                    title={product?.name}
                    >
                    </CardMedia>
                    <CardContent>
                      <Typography>
                        {product?.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography>
                      ${product?.price}
                    </Typography>
                    <Button size='small' color='primary'>Add to cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}
