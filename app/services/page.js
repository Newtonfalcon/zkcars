"use client"

import React from "react";
import {
  Zap,
  Fuel,
  ShieldCheck,
  CreditCard,
  RefreshCw,
  Wrench,
  Award,
  HeadphonesIcon,
  TrendingUp,
  CheckCircle,
  Car,
  Users,
} from "lucide-react";
import Footer from "../components/Footer";

export default function Services() {
  // Tailwind-safe color map (IMPORTANT for production builds)
  const colorMap = {
    blue: "text-blue-500",
    orange: "text-orange-500",
  };

  // Services data
  const servicesData = {
    hero: {
      title: "Our Services",
      subtitle: "Comprehensive Automotive Solutions",
      description:
        "From premium electric vehicles to powerful fuel-powered cars, we offer a complete range of services to meet all your automotive needs.",
      backgroundImage:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80",
    },

    vehicleTypes: [
      {
        type: "Electric Vehicles",
        icon: Zap,
        tagline: "Drive the Future",
        description:
          "Experience the next generation of automotive technology with our premium selection of electric vehicles. Enjoy zero emissions, lower running costs, and cutting-edge innovation.",
        image:
          "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
        features: [
          "Zero Emissions",
          "Lower Operating Costs",
          "Advanced Technology",
          "Instant Torque",
          "Silent Operation",
          "Government Incentives",
        ],
        brands: ["BMW iX", "Mercedes EQS", "Audi e-tron", "Porsche Taycan"],
        color: "blue",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        type: "Fuel Vehicles",
        icon: Fuel,
        tagline: "Proven Performance",
        description:
          "Choose from our extensive range of traditional fuel-powered vehicles, featuring the latest in combustion engine technology, proven reliability, and exceptional performance.",
        image:
          "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80",
        features: [
          "Extended Range",
          "Quick Refueling",
          "Wide Selection",
          "Proven Technology",
          "High Performance",
          "Easy Maintenance",
        ],
        brands: [
          "BMW M Series",
          "Mercedes AMG",
          "Audi RS",
          "Range Rover Sport",
        ],
        color: "orange",
        gradient: "from-orange-500 to-red-500",
      },
    ],

    mainServices: [
      {
        icon: Car,
        title: "New Vehicle Sales",
        description:
          "Browse our extensive inventory of brand-new vehicles from world-renowned manufacturers.",
        image:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
        benefits: [
          "Latest Models",
          "Factory Warranty",
          "Customization Options",
          "Competitive Pricing",
        ],
      },
      {
        icon: RefreshCw,
        title: "Certified Pre-Owned",
        description:
          "Quality pre-owned vehicles that have undergone rigorous inspection and certification.",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
        benefits: [
          "Multi-Point Inspection",
          "Extended Warranty",
          "Vehicle History Report",
          "Best Value Pricing",
        ],
      },
      {
        icon: CreditCard,
        title: "Flexible Financing",
        description:
          "Tailored financing solutions with flexible payment plans.",
        image:
          "https://images.unsplash.com/photo-1554224311-beee460201b4?w=600&q=80",
        benefits: [
          "Competitive Rates",
          "Flexible Terms",
          "Quick Approval",
          "Multiple Options",
        ],
      },
      {
        icon: RefreshCw,
        title: "Trade-In Services",
        description:
          "Competitive trade-in values with fair assessments.",
        image:
          "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?w=600&q=80",
        benefits: [
          "Fair Market Value",
          "Quick Evaluation",
          "Hassle-Free Process",
          "Any Make/Model",
        ],
      },
      {
        icon: Wrench,
        title: "After-Sales Service",
        description:
          "Comprehensive maintenance, repairs, and genuine parts support.",
        image:
          "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80",
        benefits: [
          "Expert Technicians",
          "Genuine Parts",
          "Regular Maintenance",
          "Warranty Support",
        ],
      },
      {
        icon: HeadphonesIcon,
        title: "Customer Support",
        description:
          "Dedicated support team available every step of the way.",
        image:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
        benefits: [
          "24/7 Availability",
          "Expert Advice",
          "Personalized Service",
          "Multiple Channels",
        ],
      },
    ],

    additionalServices: [
      {
        icon: ShieldCheck,
        title: "Extended Warranty",
        description:
          "Protect your investment with comprehensive warranty packages.",
      },
      {
        icon: Award,
        title: "Vehicle Registration",
        description:
          "We handle all documentation and registration processes.",
      },
      {
        icon: Users,
        title: "Test Drives",
        description:
          "Experience your dream car firsthand.",
      },
      {
        icon: TrendingUp,
        title: "Vehicle Valuation",
        description:
          "Accurate market valuations for any vehicle.",
      },
    ],

    whyChooseUs: [
      {
        title: "Diverse Selection",
        description: "Electric and fuel vehicles from premium brands",
        stat: "15+",
        label: "Brands",
      },
      {
        title: "Expert Team",
        description: "Knowledgeable staff to guide your purchase",
        stat: "50+",
        label: "Experts",
      },
      {
        title: "Customer Satisfaction",
        description: "Proven track record of happy customers",
        stat: "98%",
        label: "Satisfaction",
      },
      {
        title: "Regional Coverage",
        description: "Serving Northwest and Northeast Nigeria",
        stat: "2",
        label: "Regions",
      },
    ],

    testimonial: {
      quote:
        "ZK Motors made my transition to electric vehicles seamless. Their expertise and after-sales support are exceptional.",
      author: "Ibrahim Mohammed",
      role: "BMW iX Owner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
  };

  return (
      <>
    <div className="min-h-screen bg-white">
      {/* VEHICLE TYPES */}
      <div className="py-24 px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {servicesData.vehicleTypes.map((vehicle, index) => {
            const Icon = vehicle.icon;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">{vehicle.type}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle
                          className={`w-5 h-5 ${colorMap[vehicle.color]}`}
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
