"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="large"
        background="none"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Gift Guide",
          id: "features",
        },
        {
          name: "Slime Care",
          id: "about",
        },
        {
          name: "Subscribe",
          id: "contact",
        },
      ]}
      brandName="PeachyBbies"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="High Quality Slime."
      description="The internet's favorite slime store. Experience our satisfying, premium slime collections."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-yellow-paint-pink-background_23-2148292551.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-composition-with-bowl-small-ball_23-2148292602.jpg",
          alt: "Happy customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-bowl-with-yellow-paint_23-2148292537.jpg",
          alt: "Happy customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/textured-colorful-foam-paint-background_23-2148078878.jpg",
          alt: "Happy customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-purple-paint-splash-purple-background_23-2148292556.jpg",
          alt: "Happy customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-paint-hands_23-2148487275.jpg",
          alt: "Happy customer 5",
        },
      ]}
      avatarText="Join 10k+ slime lovers"
    />
  </div>

  <div id="countdown" data-section="countdown">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "days",
          value: "00",
          description: "DAYS",
        },
        {
          id: "hours",
          value: "00",
          description: "HOURS",
        },
        {
          id: "mins",
          value: "00",
          description: "MINUTES",
        },
        {
          id: "secs",
          value: "00",
          description: "SECONDS",
        },
      ]}
      title="Next Slime Drop Soon!"
      description="Please come back Friday at 7pm ET for our new restock drop!"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Berry Dream",
          price: "$12.99",
          variant: "Available",
          imageSrc: "http://img.b2bpic.net/free-photo/fluid-yellow-slime-with-copy-space_23-2148231612.jpg",
        },
        {
          id: "p2",
          name: "Blue Sky Fizz",
          price: "$14.50",
          variant: "Low Stock",
          imageSrc: "http://img.b2bpic.net/free-photo/blue-holi-color-powder-different-type-bowls-concrete-painted-background_23-2147949119.jpg",
        },
        {
          id: "p3",
          name: "Neon Lime",
          price: "$11.99",
          variant: "Available",
          imageSrc: "http://img.b2bpic.net/free-photo/plain-white-t-shirt-with-diy-painted-design_23-2150564421.jpg",
        },
        {
          id: "p4",
          name: "Purple Velvet",
          price: "$15.00",
          variant: "Available",
          imageSrc: "http://img.b2bpic.net/free-photo/purple-liquid-with-light-foam_23-2147934080.jpg",
        },
        {
          id: "p5",
          name: "Citrus Splash",
          price: "$12.50",
          variant: "Available",
          imageSrc: "http://img.b2bpic.net/free-photo/blue-plastic-scallop-seashell-crab-plastic-shovel-yellow-background_23-2148153963.jpg",
        },
        {
          id: "p6",
          name: "Sunshine Gold",
          price: "$13.99",
          variant: "Low Stock",
          imageSrc: "http://img.b2bpic.net/free-photo/holi-color-mixed-liquid-forming-pattern-white-background_23-2147949127.jpg",
        },
      ]}
      title="New Slime Collection"
      description="Handmade with love, our latest drop is designed to satisfy every sense."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Slime Care 101",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/turquoise-mouse-with-dripping-pink-paint_23-2148263625.jpg",
          alt: "Slime Care",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          handle: "@sarahslime",
          testimonial: "The best quality slime I've ever bought. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-slavic-party-guy-wearing-party-hat-holding-gift-box-looking-camera-isolated-olive-green-background-with-copy-space_141793-82474.jpg",
        },
        {
          id: "t2",
          name: "Mike D.",
          handle: "@miketoys",
          testimonial: "So satisfying and arrived so quickly. My kids love it.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-cheerful-smiling-man-looking-happy-express-enthusiastic-optimistic-emotions-seei_1258-113416.jpg",
        },
        {
          id: "t3",
          name: "Emily R.",
          handle: "@emmyplay",
          testimonial: "The textures are incredible. Worth every penny.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-blowing-bubbles-purple-wall_176420-3099.jpg",
        },
        {
          id: "t4",
          name: "David K.",
          handle: "@slimekid",
          testimonial: "Peachybbies never disappoints. Best restocks!",
          imageSrc: "http://img.b2bpic.net/free-photo/love-owner-dog-mirthful-dark-skinned-woman-holds-bulldog-puppy-has-fun-has-overjoyed-surprised-expression-as-gets-pet-from-boyfriend-isolated-blue-wall_273609-26238.jpg",
        },
        {
          id: "t5",
          name: "Chloe L.",
          handle: "@chloeslime",
          testimonial: "Amazing colors and scents. My favorite shop.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-caucasian-woman-keeping-arms-crossed-looking-camera-isolated-blue-background_141793-138750.jpg",
        },
      ]}
      title="Happy Slime Fans"
      description="Join thousands of satisfied customers who love our premium slime."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How to care for slime?",
          content: "Keep it in a cool place and add activator if it gets sticky.",
        },
        {
          id: "q2",
          title: "Shipping times?",
          content: "Orders are processed within 2-3 business days.",
        },
        {
          id: "q3",
          title: "What if it's too sticky?",
          content: "Use the borax activator provided in your package.",
        },
      ]}
      title="FAQ"
      description="Common questions answered."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Newsletter"
      title="Join the Drop List"
      description="Sign up to get notified before everyone else about our new restock drops."
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/happy-young-girl-scientist-making-slime_23-2148817397.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="PeachyBbies"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Contact Us",
        href: "#contact",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
