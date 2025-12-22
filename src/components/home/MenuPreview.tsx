import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED_ITEMS = [
    {
        name: "Ropa Vieja",
        description: "Shredded beef stewed in a tomato base sauce with onions, peppers, and authentic spices.",
        price: "$24",
    },
    {
        name: "Lechón Asado",
        description: "Traditional roasted pork marinated in our signature mojo criollo sauce.",
        price: "$22",
    },
    {
        name: "Picadillo a la Habanera",
        description: "Ground beef cooked with olives, raisins, and spices in a savory tomato sauce.",
        price: "$20",
    },
];

export default function MenuPreview() {
    return (
        <section className="py-16 md:py-24 bg-white text-gray-800 relative overflow-hidden" aria-label="Featured menu items">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D95D1E_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif tracking-wide">
                        Our Favorites
                    </h2>
                    <div className="h-1 w-20 bg-secondary mx-auto mt-4 md:mt-6" />
                    <p className="mt-4 text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
                        Taste the tradition in every bite, prepared fresh daily in our kitchen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {FEATURED_ITEMS.map((item) => (
                        <div
                            key={item.name}
                            className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors font-serif pr-2">
                                    {item.name}
                                </h3>
                                <span className="text-primary font-bold text-lg whitespace-nowrap bg-primary/10 px-2 py-1 rounded-md">{item.price}</span>
                            </div>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed flex-grow">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <Link
                        href="/menu"
                        className="inline-flex items-center space-x-2 text-white bg-secondary hover:bg-primary transition-all duration-300 px-8 py-4 rounded-full font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label="View our full menu"
                    >
                        <span>View Full Menu</span>
                        <ArrowRight size={20} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
