
export function NavLink({ name, link }) {
    return (
        <a href={link} className="text-white text-lg md:text-xl hover:text-blue-200 hover:scale-105 transition-transform duration-300">
            {name}
        </a>
    );
}