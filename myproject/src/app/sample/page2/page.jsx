import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { Background } from "../component/Background";
import { ContactUs } from "../component/ContactUs";
import { PricingPlans } from "../component/PricingPlans";
import { PopularDestinations } from "../component/PopularDestinations";
import { Card } from "../component/Card";
import { NavLink } from "../component/NavLink";

export default function Page2() {
    return (
        <>
            <Header>
                <NavLink link="/">Home</NavLink>
                <NavLink link="/sample/page2">Page 2</NavLink>
                <NavLink link="#">Pricing</NavLink>
                <NavLink link="#">Contact</NavLink>
            </Header>
            
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
    );
}