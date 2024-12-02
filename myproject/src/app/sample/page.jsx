import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Background } from "./component/background";
import { ContactUs } from "./component/contactus";

export default function Home() {
    return (
        <>
            <Header/>
            <Background/> 
            <ContactUs/>
            <Footer/>
        </> 
       
    )
}
