export function Card({ image, title, description }) {
    return (
        <div className="relative h-[400px] md:h-[500px] w-full shadow-lg rounded-3xl hover:scale-105 transition-transform duration-700">
            <div
                className="absolute inset-0 bg-cover bg-center rounded-t-3xl"
                style={{
                    backgroundImage: `url(${image})`,
                    height: '65%',
                }}
            ></div>
            <div
                className="absolute bottom-0 w-full bg-white flex flex-col text-black p-4 shadow-lg rounded-3xl"
                style={{ height: '35%' }}
            >
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
}