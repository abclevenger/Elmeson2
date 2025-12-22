import { MapPin, Clock } from "lucide-react";

export default function Location() {
    return (
        <section className="py-16 md:py-24 bg-gray-50 text-gray-800 relative" aria-label="Visit our location">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary font-serif tracking-wide">
                        Visit Us
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 font-light">
                        In the heart of historic Mallory Square
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Details */}
                    <div className="space-y-8 md:space-y-12 order-2 md:order-1">
                        <div className="flex items-start space-x-6">
                            <div className="bg-primary/20 p-4 rounded-full flex-shrink-0">
                                <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
                            </div>
                            <div className="pt-1">
                                <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">Location</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    410 Wall Street<br />
                                    Mallory Square<br />
                                    Key West, FL 33040
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6">
                            <div className="bg-primary/20 p-4 rounded-full flex-shrink-0">
                                <Clock className="w-8 h-8 text-primary" aria-hidden="true" />
                            </div>
                            <div className="pt-1">
                                <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">Hours</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    <span className="block font-semibold text-gray-900 mb-1">Open Daily</span>
                                    11:00 AM - 10:00 PM
                                </p>
                                <p className="text-gray-600 mt-3 text-base italic">
                                    Live Salsa Band nightly at sunset!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stylized Map Placeholder / Embed */}
                    <div className="h-[300px] sm:h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg border border-gray-200 order-1 md:order-2">
                        {/* Embedded Google Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.469731671842!2d-81.80786948498226!3d24.555239984199105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d1b13576472d89%3A0x6bd7d9d20c3260c!2sEl%20Meson%20de%20Pepe!5e0!3m2!1sen!2sus!4v1634567890000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="hover:opacity-90 transition-opacity duration-500"
                            title="Google Maps location of El Meson de Pepe at 410 Wall Street, Mallory Square, Key West, FL"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
