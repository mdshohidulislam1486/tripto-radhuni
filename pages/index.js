import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Layout from './components/Shared/Layout'
import Link from 'next/link'
import db from '../utilities/db'
import Product from '../models/Product'


export default function Home(props) {
  const {products} = props;
  return (
    <Layout>
        <Box>
        <Typography variant='h2'>Products</Typography>
        <Box >
          <Grid container spacing={3}
          sx={{justifyContent:'center'}}
          >
            {products?.map((product) =>(<Grid
              item
              sm={6}
              md={4}
              lg={3}
              key={product?.name}
              >
                <Card>
                <Link href={`productDetails/${product.slug}`} passHref>
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

export async function getServerSideProps(){
  await db.connect()
  const products = await Product.find({}).lean()
  await db.disconnect();
  return {
    props:{
      products: products.map(db.convertDocToObj),

    }
  }  

}