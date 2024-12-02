import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Background } from "./component/background";
import { ContactUs } from "./component/contactus";
import { PricingPlans } from "./component/pricingplans";

export default function Home() {
    return (
        <>
            <Header/>
            <Background/> 
            <PricingPlans/>
            <ContactUs/>
            <Footer/>
        </> 
       
    )
}
