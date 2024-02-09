import '../css/product.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Product = () => {
    const [data, setData] = useState([]);
const navigate=useNavigate()

    useEffect(() => {
        const singleProductData=()=>{
            axios.get('https://api.escuelajs.co/api/v1/products')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
        singleProductData()
    }, []);

    return (
        <>
            <div className='Head-Name'>
                <b><h3 className='All-Name'>ALL PRODUCTS</h3></b>
                <div>
                    <select className='drowpdown' >
                        <option selected>FILTER PRODUCT</option>
                        <option value="1">New Product</option>
                        <option value="2">sofa</option>
                        <option value="3">New Product Course 2024</option>
                        <option value="3">Generic Plastic Towels</option>
                    </select>
                </div>
            </div>
            <hr />

            <div className='row-main'>
                {data.map((product, index) => (
                    <div key={index} className='col-md-3'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.images[0]} alt={`Image for ${product.title}`} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <center><h2>${product.price}</h2></center>
                                <center><Button variant="primary" onClick={()=>navigate("/product-details/"+product?.id)}>BUY NOW</Button></center>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;