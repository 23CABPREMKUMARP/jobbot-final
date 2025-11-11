"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StarfieldWarp from "./StarfieldWarp"; // make sure path is correct

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StarfieldWarp>
      <section className="relative w-full pt-36 md:pt-48 pb-10 text-center text-white z-10">
        <div className="space-y-6 mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>

          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>

          <div className="flex justify-center space-x-4 mt-6">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 bg-[#0FABCA] hover:bg-[#0da1b8] text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Video Banner */}
        <div className="hero-image-wrapper mt-10">
          <div ref={imageRef} className="hero-video">
            <video
              src="/banner.mp4"
              width="1280"
              height="720"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="rounded-2xl shadow-2xl border border-gray-700 mx-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </StarfieldWarp>
  );
};

export default HeroSection;
