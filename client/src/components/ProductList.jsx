import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'

const ProductList = (props) => {

    const { products, setProducts } = props
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")

            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })

            .catch((err) => {
                console.log(err);
            });
        }, []);

        const deleteProduct = (idFromBelow) => {
            axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
                .then((res) => {
                    console.log(res.data)
                    const newProducts = products.filter((product, index) => product._id !== idFromBelow)
                    setProducts(newProducts)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    return (

        <div>

            <h2>All Products: </h2>

            {products.map((product, index) => {

                return (

                    <div key = {index}>

                        <Link to = {`/products/` + product._id}>{product.title}</Link>

                        <Link to = {`/products/edit/` + product._id}>Edit</Link>

                        <button onClick = {(e) => { deleteProduct(product._id)}}>Delete</button>

                    </div>

                );

            })}

        </div>
    );
};
export default ProductList;
