import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Background } from "./component/background";
import { ContactUs } from "./component/contactus";
import { PricingPlans } from "./component/pricingplans";
import { PopularDestinations } from "./component/populardestinations";
import { Card } from "./component/card";

export default function Home() {
    return (
        <>
            <Header/>
            <Background/> 
            
            <PopularDestinations>

                <Card
                    image="/beachPhoto2.jpg"
                    title="Tropical Beaches"
                    description="Relax on white sands and enjoy crystal-clear waters."
                />

                <Card
                    image="/beachPhoto2.jpg"
                    title="Tropical Beaches"
                    description="Relax on white sands and enjoy crystal-clear waters."
                />

                <Card
                    image="/mountain2.jpg"
                    title="Mountain"
                    description="Explore and create adventure."
                />

            </PopularDestinations>

            <PricingPlans/>
            <ContactUs/>
            <Footer/>
        </> 
       
    )
}
