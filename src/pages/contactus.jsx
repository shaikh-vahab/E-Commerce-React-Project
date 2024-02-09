import Contact from "../css/contactus.module.css"
// import { AoutusHeading } from "./const"

function Contactus() {
    return (
        <>
      
        <div className={Contact.Maindiv}>
            <div className={Contact.Heading}>
                <h1>Contact Us</h1>
                <h3>A Contact Us page is a section on  audience – be they existing <br /> c a website dedicated to allowing that site's audience – be they existing clients, .</h3>
                <div className={Contact.page}>
                    <h4 className={Contact.h4}>Send Massage....</h4><br /><br />
                    <input style={{width:"360px",height:"30px"}} type="text" placeholder="Full Name" /><br /><br />
                    <input style={{width:"360px",height:"30px"}} type="email" name="" id="" placeholder="Email" /><br /><br />
                    <textarea style={{width:"360px"}} name="" id="" cols="40" rows="4" placeholder="Type Your Massage....."></textarea><br /> <hr />
                    <button className={Contact.button}>Send</button>
                </div>
            </div>
            <div className={Contact.Data}>
                <div>
                    <img className={Contact.img} src="location.png" alt="" width={"30px"} />
                    <div className={Contact.datas}><h2 style={{ color: "lightblue" }}>Location</h2><p>2345 Charminar Hydrabad Road<br />55690</p></div>
                </div>
                <div>
                    <img className={Contact.img} src="phone.jpeg" alt="" width={"30px"} />
                    <div className={Contact.datas}><h2 style={{ color: "lightblue" }}>Phone</h2><p>+91-9175-2373-8282</p></div>
                </div>
                <div>
                    <img className={Contact.img} src="email.png" alt="" width={"30px"} />
                    <div className={Contact.datas}><h2 style={{ color: "lightblue" }}>Email:-</h2><p>Charminar@Hyundai.com<br />55690</p></div>
                </div>



            </div>

        </div>
        </>
    )
}

export default Contactus