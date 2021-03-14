import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
    { 
        id: 1,
        name: "Shoes",
        description: "Running shoes",
        price: "$5",
        image: "https://images.ctfassets.net/od02wyo8cgm5/2xrqztkhkZHj7A0LX2r0aO/a95b3d48192ac06b84edd3ad97fa1a4d/cloudstratus-fw20-mineral_rust-m-g1.png?w=1440&h=1440&fl=progressive&q=61&bg=rgb:f7f7f7&fm=jpg"
    },
    {
        id: 2,
        name: "Macbook",
        description: "Apple Macbook",
        price: "$10",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
    },
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
    </main>
    )

}

export default Products;