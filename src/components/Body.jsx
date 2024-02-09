// import '../css/Body.css'
import body from '../css/Body.module.css'
import Carousel from 'react-bootstrap/Carousel';



export function BodyImg() {


    return (
        <>

            <div className='carousel-main'> 
                <Carousel>
                    <Carousel.Item >
                    <img src="/public/carousel-Redmi12.webp" width={'100%'} height={'250px'} />
                    </Carousel.Item>
                                <img src="/public/carousel-Redmi13.webp" width={'100%'} height={'250px'} />
                    <Carousel.Item>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/public/Carouselimg.jpg" width={'100%'} height={'250px'} />
                    </Carousel.Item>
                </Carousel>
            </div>


        </>
    )
}