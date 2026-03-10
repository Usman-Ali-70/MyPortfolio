'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import { submitReview } from '@/app/actions/submitReview'
import { HiOutlineUser, HiOutlineOfficeBuilding, HiOutlineChatAlt2 } from 'react-icons/hi'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'

const ReviewForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSubmitting(true)
        setStatus(null)

        const formData = new FormData(event.currentTarget)
        const result = await submitReview(formData)

        setIsSubmitting(false)
        if (result.error) {
            setStatus({ type: 'error', message: result.error })
        } else {
            setStatus({ type: 'success', message: result.success || '' })
            event.currentTarget.reset()
        }
    }

    return (
        <motion.div
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            animate="show"
            className="w-full relative mx-auto"
        >
            {/* Outer soft glow focused on the form */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-orange-400/20 rounded-[32px] blur opacity-20 transition duration-1000" />
            <div className="relative bg-[#1a1433]/70 backdrop-blur-3xl p-6 md:p-10 border border-white/10 rounded-[30px] flex flex-col h-full shadow-[0_30px_80px_rgba(0,0,0,0.5)] w-full">

                <header className="mb-4 xl:mb-8 text-center xl:text-left">
                    <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-medium block mb-2">Join the conversation</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Post your review.</h3>
                    <div className="h-[2px] w-8 bg-accent rounded-full mt-3 mx-auto xl:mx-0" />
                </header>

                {status && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`mb-6 p-4 rounded-2xl text-center text-xs font-semibold ${status.type === 'success'
                            ? 'bg-green-500/10 text-green-400 border border-green-500/10'
                            : 'bg-red-500/10 text-red-500 border border-red-500/10'
                            }`}
                    >
                        {status.message}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    {/* Compact terrestrial inputs grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-5 outline-none focus:border-accent/40 focus:bg-white/10 transition-all text-sm text-white placeholder:text-white/20"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                name="position"
                                placeholder="Role"
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-5 outline-none focus:border-accent/40 focus:bg-white/10 transition-all text-sm text-white placeholder:text-white/20"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            name="company"
                            placeholder="Company (Optional)"
                            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-5 outline-none focus:border-accent/40 focus:bg-white/10 transition-all text-sm text-white placeholder:text-white/20"
                        />
                    </div>

                    <div className="h-[140px]">
                        <textarea
                            name="message"
                            placeholder="Describe your collaboration..."
                            required
                            className="w-full h-full bg-white/5 border border-white/10 rounded-xl p-5 outline-none focus:border-accent/40 focus:bg-white/10 transition-all text-sm text-white placeholder:text-white/20 resize-none"
                        />
                    </div>

                    <div className="relative">
                        <label className="text-xs text-white/40 mb-2 block ml-1 uppercase tracking-wider font-semibold">Profile Photo (Optional)</label>
                        <div className="relative group/file">
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    const label = e.target.nextElementSibling?.querySelector('.file-label');
                                    if (file && label) {
                                        label.textContent = file.name;
                                    }
                                }}
                            />
                            <div className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-5 flex items-center gap-3 outline-none group-hover/file:border-accent/40 group-hover/file:bg-white/10 transition-all">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <HiOutlineUser className="text-sm" />
                                </div>
                                <span className="file-label text-sm text-white/40 truncate">
                                    Click or drag to upload photo
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        disabled={isSubmitting}
                        className="group relative w-full h-14 bg-gradient-to-r from-accent to-orange-500 hover:brightness-110 active:scale-[0.98] text-white font-bold rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-accent/20"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                <span className="uppercase tracking-widest text-xs">Sending...</span>
                            </>
                        ) : (
                            <>
                                <span className="uppercase tracking-[0.2em] text-xs">Publish Review</span>
                                <FiSend className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

export default ReviewForm
