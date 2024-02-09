import footer from '../css/footer.module.css'

const Footer = () => {
    return (
        <footer className={footer.maindiv}>


               <img src="../public/Footer-Top-img.png" alt="" width={'100%'} height={'50px'} />
            <div className={footer.Headings}>
                <div>
                    <h4>ABOUT</h4>
                    <br />
                    <h>
                        This website is for shopping. <br />
                        If you want to buy any item <br />
                        then you can buy it by clicking <br />
                        on the Shop Now button given above.
                    </h><br /><br />
                    <h3>ANY Cards</h3>

                </div>
                <div>
                    <h4>CATAGORIES</h4>
                    <br />
                    <ul>
                        <li>Clothing</li>
                        <li>Footweare</li>
                        <li>Hand Bag</li>
                        <li>Jewelerry</li>
                        <li>MObiles</li>
                    </ul>
                </div>
                <div>
                    <h4>INFORMATION </h4>
                    <br />
                    <ul>
                        <a href="/about"> <li>About Us</li></a>
                        <a href="/contact"><li>contact Us</li></a>
                        <li>Terms & Condition</li>
                        <li>Return & Exchenge</li>
                        <li>Shipping & delivery</li>
                        <li>Private Policy & Exchenge</li>
                    </ul>
                </div>
                <div>
                    <h4>CONTACTUS</h4>
                    <br />
                    <p>➫  Address :- Work shop Corner <br />Nanded MH26<br />
                        Maharashtra Pincode:- 431602</p>
                    <hr />
                    <p>📞 :- 9175237382 <br />
                        📧 :- Shaikhvahab97@gmail.com</p>

                    <hr />

                </div>
            </div>


        </footer>
    )
}

export default Footer;