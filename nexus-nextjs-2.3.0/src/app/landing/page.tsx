import type { Metadata } from "next";

import { BundleOffer } from "./components/BundleOffer";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Showcase } from "./components/Showcase";
import { Testimonial } from "./components/Testimonial";
import { Topbar } from "./components/Topbar";

export const metadata: Metadata = {
    title: "Landing - Product Preview",
};

const LandingPage = () => {
    return (
        <div>
            <Topbar />
            <Hero />
            <Features />
            <Showcase />
            <Testimonial />
            <CTA />
            <FAQ />
            <BundleOffer />
            <Footer />
        </div>
    );
};

export default LandingPage;
