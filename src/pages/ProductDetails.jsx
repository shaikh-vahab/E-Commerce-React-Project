import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
    const [detail, setDetail] = useState({});
    const {editId } = useParams();

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${editId}`)
            .then((res) => {
                console.log("single data", res?.data);
                setDetail(res.data);
            })
            .catch((err) => {
                console.log(`Error occurred during product details fetch: ${err}`);
            });
    }, [editId]);

    return (
        <>
            {detail && (
                <div className="SingleDiv">
                    <h1>{detail.title}</h1>
                    <p>Description: {detail.description}</p>
                    <p>Price: ${detail.price}</p>
                    <p>Category: {detail.category?.name}</p>
                    <img src={detail.images[0]} alt={`Image for ${detail.title}`} />
                    {/* Render other product details as needed */}
                </div>
            )}
            <h1>Hello</h1>
        </>
    );
};

export default ProductDetails;
