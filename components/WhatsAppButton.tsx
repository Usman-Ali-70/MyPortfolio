"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const phoneNumber = "923354575288";
    const message = "Hi Usman, I saw your portfolio and would like to chat!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Show a notification badge after a short delay
    useEffect(() => {
        const timer = setTimeout(() => setShowNotification(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-[100px] xl:bottom-10 right-6 xl:right-10 z-[70] font-sora">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(10px)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute bottom-20 right-0 w-[320px] bg-[#f0f2f5] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/10 origin-bottom-right"
                    >
                        {/* Header - Staggered Child */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#075e54] p-5 text-white shadow-md relative z-10"
                        >
                            <div className="flex items-center gap-x-3">
                                <div className="relative">
                                    <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold shadow-inner border border-white/10">
                                        U
                                    </div>
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-[#25d366] border-2 border-[#075e54] rounded-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[15px] leading-tight text-white/95">Usman Ali</h3>
                                    <div className="flex items-center gap-x-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 bg-[#25d366] rounded-full animate-pulse" />
                                        <p className="text-[11px] text-white/70 font-medium">Online</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="ml-auto text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </motion.div>

                        {/* Chat Body - Fluid Staggered Message */}
                        <div className="p-4 min-h-[140px] bg-[#e5ddd5] relative overflow-hidden">
                            {/* WhatsApp background pattern */}
                            <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat" />

                            <motion.div
                                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                                className="bg-white p-3.5 rounded-lg rounded-tl-none shadow-[0_2px_5px_rgba(0,0,0,0.05)] text-[13.5px] leading-relaxed text-gray-800 max-w-[88%] relative z-10"
                            >
                                <p className="font-medium text-gray-900">Hi there! 👋</p>
                                <p className="mt-1">I'm currently available for work. How can I help you? </p>
                                <span className="text-[10px] text-gray-400 block mt-2 text-right font-medium">09:12 AM</span>

                                {/* Message bubble tail */}
                                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent" />
                            </motion.div>
                        </div>

                        {/* Footer - Social Proof & CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="p-4 bg-white border-t border-gray-100 relative z-10"
                        >
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-x-2.5 bg-[#25d366] hover:bg-[#20ba5a] hover:scale-[1.02] active:scale-[0.98] text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(37,211,102,0.25)] group"
                            >
                                <FaPaperPlane className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                Start Chat
                            </a>
                            <p className="text-center text-[10px] text-gray-400 mt-3 font-medium uppercase tracking-widest leading-none">
                                End-to-End Encrypted
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Trigger Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowNotification(false);
                }}
                className={`relative flex items-center justify-center w-15 h-15 md:w-16 md:h-16 ${isOpen ? "bg-gray-800" : "bg-[#25D366]"} text-white rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)] transition-all duration-500 z-[80] group`}
                aria-label="WhatsApp Contact"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 180, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <FaTimes className="text-2xl" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="whatsapp"
                            initial={{ rotate: 180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -180, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative"
                        >
                            <FaWhatsapp className="text-3xl md:text-3xl" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Professional badge - Self-hiding on click */}
                {showNotification && !isOpen && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                        className="absolute -top-1 -right-1 flex h-6 w-6 z-[90]"
                    >
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 text-[11px] items-center justify-center font-bold text-white shadow-lg">
                            1
                        </span>
                    </motion.span>
                )}

                {/* Subtle Ring Pulses */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full border border-[#25D366]/50 animate-ping opacity-20 group-hover:hidden" />
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppButton;
