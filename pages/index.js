import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import Layout from './components/Shared/Layout'
import data from '../utilities/data'
import NextLink from 'next/link'


export default function Home() {
  return (
    <Layout>
        <Box>
        <Typography variant='h2'>Products</Typography>
        <Box >
          <Grid container spacing={3}
          sx={{justifyContent:'center'}}
          >
            {data?.products?.map((product) =>(<Grid
              item
              sm={6}
              md={4}
              lg={3}
              key={product?.name}
              >
                <Card>
                <NextLink href={`/proudct/${product.slug}`} passHref>
                  <Link>
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
                  </Link>
                  </NextLink>
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
