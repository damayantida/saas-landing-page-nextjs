"use client";

import Image from 'next/image';
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Pointer from '@/components/Pointer';
import { motion, useAnimate } from "framer-motion";
import { useEffect } from 'react';
import cursorYouImage from "@/assets/images/cursor-you.svg"

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-black/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.
                </p>
                <form className="flex border border-black/40 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4 md:flex-1 w-full" />
                    <Button type="submit" size="sm" variant="primary" className="whitespace-nowrap">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}
