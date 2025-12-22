"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

// Custom TikTok icon component since lucide-react doesn't include it
const TikTokIcon = ({ size = 32, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Newsletter signup:", email);
        setEmail("");
        // You can integrate with your email service here
    };

    return (
        <footer className="bg-gray-900 text-gray-200 py-12 lg:py-16" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section: Hours & Contact */}
                <div className="mb-12 pb-8 border-b border-gray-700">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 uppercase tracking-wider">EL MESON DE PEPE</h3>
                        <div className="text-base md:text-lg text-gray-300 space-y-2 mb-4">
                            <p><span className="font-semibold">Monday through Thursday:</span> 11am-9pm</p>
                            <p><span className="font-semibold">Friday through Sunday:</span> 11am-10pm</p>
                        </div>
                        <p className="text-sm text-gray-300 italic">We do not take reservations</p>
                    </div>

                    {/* Social Media & Newsletter */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <h4 className="text-lg font-serif text-white uppercase tracking-wide mb-4">FOLLOW ALONG</h4>
                            <div className="flex space-x-3">
                                <Link href="https://www.facebook.com/ElMesonKeyWest/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Visit us on Facebook">
                                    <Facebook size={32} aria-hidden="true" />
                                </Link>
                                <Link href="https://www.instagram.com/elmesondepepe/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Visit us on Instagram">
                                    <Instagram size={32} aria-hidden="true" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/el-meson-de-pepe" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Visit us on LinkedIn">
                                    <Linkedin size={32} aria-hidden="true" />
                                </Link>
                                <Link href="https://www.tiktok.com/@elmesondepepe" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors p-3 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Visit us on TikTok">
                                    <TikTokIcon size={32} />
                                </Link>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="flex-1 max-w-md w-full">
                            <h4 className="text-lg font-serif text-white uppercase tracking-wide mb-4 text-center md:text-left">SIGN UP FOR SPECIAL OFFERS & DISCOUNTS</h4>
                            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="flex-1 bg-gray-800 text-white px-4 py-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
                                    aria-label="Email address for newsletter"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label="Subscribe to newsletter"
                                >
                                    <Mail size={20} aria-hidden="true" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* About & Quick Links */}
                <div className="mb-8 pb-8 border-b border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                El Meson de Pepe is a family owned and operated restaurant dedicated to preserving the Cuban-Conch Heritage. Located in the heart of Mallory Square, we bring you authentic Cuban cuisine and live entertainment.
                            </p>
                        </div>
                        <nav aria-label="Footer quick links">
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/story" className="text-gray-300 hover:text-white transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1" aria-label="Read complete guide to Cuban Coffee in Key West">
                                        Complete Guide to Cuban Coffee in Key West
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/story" className="text-gray-300 hover:text-white transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1" aria-label="Read the history of Bacardi Rum">
                                        The History of Bacardi Rum
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Copyright & Legal */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
                    <p>© {new Date().getFullYear()} El Meson de Pepe. All rights reserved.</p>
                    <address className="not-italic text-center md:text-right">
                        410 Wall Street, Mallory Square<br />
                        Key West, FL 33040<br />
                        <a href="tel:+13052952620" className="hover:text-white transition-colors min-h-[44px] flex items-center justify-center md:justify-end focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1" aria-label="Call us at 305-295-2620">
                            305-295-2620
                        </a>
                    </address>
                    <nav aria-label="Legal links" className="flex flex-wrap gap-3 justify-center md:justify-end">
                        <Link href="/" className="hover:text-white transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1" aria-label="Home page">Home</Link>
                        <span className="text-gray-500" aria-hidden="true">|</span>
                        <Link href="/terms" className="hover:text-white transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1" aria-label="Website Terms and Conditions">Website Terms & Conditions</Link>
                        <span className="text-gray-500" aria-hidden="true">|</span>
                        <Link href="/privacy" className="hover:text-white transition-colors min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1" aria-label="Privacy Policy">Privacy Policy</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
