import { NavLink } from './navlink';
export function Header(){
    return (
        <>
            <div className="h-16 bg-blue-500 w-full flex justify-between items-center p-4 fixed top-0 z-10">
                <div className="text-xl md:text-3xl text-white font-bold pl-2 md:pl-5">
                    Travel Explorer
                </div>
                <nav className="flex space-x-3 md:space-x-5 pr-2 md:pr-3">
                    <a href="#" className="text-white text-lg md:text-xl hover:text-blue-200 hover:scale-105 transition-transform duration-300">Home</a>
                    <a href="#" className="text-white text-lg md:text-xl hover:text-blue-200 hover:scale-105 transition-transform duration-300">Destinations</a>
                    <a href="#" className="text-white text-lg md:text-xl hover:text-blue-200 hover:scale-105 transition-transform duration-300">Pricing</a>
                    <a href="#" className="text-white text-lg md:text-xl hover:text-blue-200 hover:scale-105 transition-transform duration-300">Contact</a>
                </nav>
            </div>
        </>
       
    );
}