import { useEffect, useState } from 'react';
import '../css/catagories.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Catagories = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
            .then((res) => {
                setData(res.data);
                console.log(res.data.Catagories);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>

            <div className="cx-heading"></div>
            <div>
                <div className="cx-catagorie">
                    <center><h3>ALL CATAGORIES</h3></center>
                </div>
                <hr />

            </div>

            <div className='row-main'>
                {data.map((category, index) => (
                    <div key={category.id} className='cal-md-3'>
                        <div className='cat-Card'>
                            <h5>{category.name}</h5>
                            <div className="inner-card">
                                <Link to='/AllCatagory'>
                                <img src={category.image} className='card-Img' alt={`Image for ${category.name}`} width={'200px'} />
                                </Link>
                            </div>

                            <br />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )



    return (
        <>





        </>
    );
};

export default Catagories;
