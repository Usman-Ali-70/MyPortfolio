"use client";

import React, { useState, useEffect, useCallback } from "react";
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

    const toggleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
        setShowNotification(false);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <div className="fixed bottom-[84px] xl:bottom-8 right-4 xl:right-8 z-[70] font-sora">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        className="absolute bottom-[68px] right-0 w-[290px] sm:w-[320px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] origin-bottom-right"
                    >
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="bg-gradient-to-r from-[#075e54] to-[#128c7e] p-4 text-white relative z-10"
                        >
                            <div className="flex items-center gap-x-3">
                                <div className="relative flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-base font-bold shadow-inner border border-white/10 backdrop-blur-sm">
                                        U
                                    </div>
                                    <motion.div
                                        animate={{ scale: [1, 1.15, 1] }}
                                        transition={{ repeat: Infinity, duration: 2.5 }}
                                        className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25d366] border-2 border-[#075e54] rounded-full"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-[14px] leading-tight text-white/95 truncate">Usman Ali</h3>
                                    <div className="flex items-center gap-x-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 bg-[#25d366] rounded-full animate-pulse flex-shrink-0" />
                                        <p className="text-[10px] text-white/70 font-medium">Online</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="ml-auto text-white/40 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all duration-200 flex-shrink-0"
                                    aria-label="Close chat"
                                >
                                    <FaTimes className="text-sm" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Chat Body */}
                        <div className="p-4 min-h-[120px] bg-[#e5ddd5] relative overflow-hidden">
                            {/* WhatsApp background pattern */}
                            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat" />

                            <motion.div
                                initial={{ opacity: 0, x: -15, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 250, damping: 22 }}
                                className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-[13px] leading-relaxed text-gray-800 max-w-[85%] relative z-10"
                            >
                                <p className="font-medium text-gray-900">Hi there! 👋</p>
                                <p className="mt-1 text-gray-600">I&apos;m currently available for work. How can I help you?</p>
                                <span className="text-[10px] text-gray-400 block mt-1.5 text-right font-medium">09:12 AM</span>

                                {/* Message bubble tail */}
                                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent" />
                            </motion.div>
                        </div>

                        {/* Footer CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="p-3 bg-white border-t border-gray-100 relative z-10"
                        >
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleClose}
                                className="flex items-center justify-center gap-x-2 bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#20ba5a] hover:to-[#0f7b6b] active:scale-[0.98] text-white py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.25)] group"
                            >
                                <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                Start Chat
                            </a>
                            <p className="text-center text-[9px] text-gray-400 mt-2 font-medium uppercase tracking-widest leading-none">
                                End-to-End Encrypted
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Trigger Button - Redesigned */}
            <motion.button
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                onClick={toggleOpen}
                className={`relative flex items-center justify-center w-14 h-14 md:w-[60px] md:h-[60px] rounded-full z-[80] group transition-all duration-400 ${
                    isOpen
                        ? "bg-gradient-to-br from-gray-700 to-gray-900 shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
                        : "bg-gradient-to-br from-[#25D366] to-[#128c7e] shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95"
                }`}
                aria-label="WhatsApp Contact"
                aria-expanded={isOpen}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <FaTimes className="text-xl text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="whatsapp"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative"
                        >
                            <FaWhatsapp className="text-2xl md:text-[26px] text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification badge */}
                {showNotification && !isOpen && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-0.5 -right-0.5 flex h-5 w-5 z-[90]"
                    >
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-[10px] items-center justify-center font-bold text-white shadow-lg">
                            1
                        </span>
                    </motion.span>
                )}

                {/* Subtle outer ring pulse */}
                {!isOpen && (
                    <span className="absolute inset-[-3px] rounded-full border-2 border-[#25D366]/30 animate-ping opacity-15 pointer-events-none" />
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppButton;
