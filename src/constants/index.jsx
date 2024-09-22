import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiNextdotjs, SiCsharp, SiCplusplus, SiMysql } from "react-icons/si";

import planeImage from "../assets/planingImage-min.jpg";
import designImage from "../assets/designImage-min.jpg";
import optimizeImage from "../assets/optimizeImage-min.jpg";
import developImage from "../assets/developImage-min.jpg";
import launchImage from "../assets/launchImage-min.jpg";
import supportImage from "../assets/serviceImage-min.jpg";

import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";

import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiTwitchLine,
  RiYoutubeLine,
  RiCalendarLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  badgeText: "New Feature: K-Chord Group Dev Tools 2.0!",
  mainHeading: "The Ultimate \n Web Dev Toolkit+",
  subHeading:
    "Streamline your development process, track project progress, and deploy effortlessly—all in one platform. Perfect for developers, businesses, and creative teams.",
  callToAction: {
    primary: "Start Free Trial",
    secondary: "Request a Demo",
  },
  trustedByText: "Trusted by Leading Tech Brands & Developers Worldwide",
};

export const BRAND_LOGOS = [
  { src: <FaReact className="h-20 w-20" color="#61DBFB" />, alt: "ReactJS" },
  { src: <SiNextdotjs className="h-20 w-20" color="white" />, alt: "NextJS" },
  { src: <FaNodeJs className="h-20 w-20" color="#68A063" />, alt: "NodeJS" },
  { src: <FaPython className="h-20 w-20" color="yellow" />, alt: "Python" },
  { src: <SiCsharp className="h-20 w-20" color="#239120" />, alt: "C#" },
  { src: <SiCplusplus className="h-20 w-20" color="#00599C" />, alt: "C++" },
  { src: <SiMysql className="h-20 w-20" color="#4479A1" />, alt: "MySQL" },
  { src: <FaHtml5 className="h-20 w-20" color="#E34C26" />, alt: "HTML" },
  { src: <FaCss3Alt className="h-20 w-20" color="#1572B6" />, alt: "CSS" },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "How It Works!",
  sectionDescription:
    "Achieve your business goals with our 6-step development process. From planning to deployment, we provide everything you need for successful software solutions.",
  steps: [
    {
      title: "Plan Your Project",
      description:
        "Collaborate with our team to define your project requirements, timeline, and key deliverables. We ensure your goals are clearly outlined from the start.",
      imageSrc: planeImage, // Same image as before
      imageAlt: "Project Planning",
    },
    {
      title: "Design and Prototype",
      description:
        "Create wireframes and design mockups that capture the essence of your project. We prioritize user experience and seamless design integration.",
      imageSrc: designImage, // Same image as before
      imageAlt: "Design and Prototyping",
      users: [user1, user2, user3, user5], // Same users as before
    },
    {
      title: "Develop Your Solution",
      description:
        "Our expert developers bring your project to life using the latest technologies like React, Node.js, Python, and more. We ensure scalable, efficient solutions.",
      imageSrc: developImage, // Same image as before
      imageAlt: "Software Development",
    },
    {
      title: "Test and Optimize",
      description:
        "Rigorous testing to ensure your solution performs optimally. We identify bugs, optimize performance, and guarantee quality before launch.",
      imageSrc: optimizeImage, // Same image as before
      imageAlt: "Testing and Optimization",
    },
    {
      title: "Launch and Deploy",
      description:
        "Deploy your project seamlessly with our support. We handle everything from hosting setup to launch, ensuring a smooth go-live experience.",
      imageSrc: launchImage, // Same image as before
      imageAlt: "Launch and Deployment",
    },
    {
      title: "Maintain and Scale",
      description:
        "We offer ongoing maintenance and scaling services to ensure your software continues to perform as your business grows.",
      imageSrc: supportImage, // Same image as before
      imageAlt: "Maintenance and Scaling",
    },
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Enhance Your Experience with K-Chord Group",
  sectionDescription:
    "Everything you need for seamless software and music solutions, all in one place.",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line className="w-8 h-8 text-blue-500" />,
      title: "Real-Time Analytics",
      description:
        "Monitor engagement and performance metrics live for better decision-making.",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8 text-green-500" />,
      title: "Streamlined Management",
      description:
        "Easily automate alerts and manage your projects with intuitive tools.",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8 text-purple-500" />,
      title: "Collaboration Tools",
      description:
        "Engage with your team and audience through integrated chat and collaboration features.",
    },
    {
      id: 4,
      icon: <RiTwitchLine className="w-8 h-8 text-purple-600" />,
      title: "Twitch Integration",
      description:
        "Connect effortlessly with Twitch to manage alerts and subscriber interactions.",
    },
    {
      id: 5,
      icon: <RiYoutubeLine className="w-8 h-8 text-red-600" />,
      title: "YouTube Streaming Support",
      description:
        "Go live on YouTube with powerful tools for audience management and interaction.",
    },
    {
      id: 6,
      icon: <RiCalendarLine className="w-8 h-8 text-orange-500" />,
      title: "Schedule Your Events",
      description:
        "Plan your streams and events in advance, ensuring your audience stays informed.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "K-Chord Group offers flexible solutions to meet your needs, from startups to enterprises.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Starter",
      price: "$9.99/month",
      description:
        "Ideal for small businesses or individuals just starting their journey.",
      features: [
        "Basic analytics and reporting",
        "Custom branding",
        "Project management tools",
        "Up to 5 team members",
      ],
    },
    {
      name: "Professional",
      price: "$19.99/month",
      description:
        "For growing businesses that need more advanced tools and support.",
      features: [
        "Advanced analytics and reporting",
        "Automated project workflows",
        "Collaboration tools for up to 20 team members",
        "Priority customer support",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49.99/month",
      description:
        "For large businesses needing full-scale solutions with premium support.",
      features: [
        "Comprehensive analytics & insights",
        "Unlimited team members",
        "Dedicated account manager",
        "Full API access",
        "Custom enterprise solutions",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Our Clients Say",
  sectionDescription:
    "Hear from our satisfied clients who trust K-Chord Group for their software, music, and graphic design solutions.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "CEO, Creative Ventures",
      review:
        "K-Chord Group has transformed the way we manage our projects. Their innovative tools and personalized support have made a huge impact on our efficiency. Highly recommended for businesses seeking top-notch solutions!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Marketing Director, Tech Solutions",
      review:
        "The team at K-Chord Group is exceptional! Their quick response time and tailored solutions have helped us streamline our workflow. We’ve seen significant improvements in our marketing efforts and overall productivity.",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Product Manager, InnovateHub",
      review:
        "K-Chord Group's project management and analytics tools have been game-changers for our product development. We now have real-time insights that allow us to make better decisions and enhance our offerings.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Customer Success Lead, Bright Media",
      review:
        "With K-Chord Group's powerful tools, we've been able to increase our client satisfaction and streamline our processes. Their platform is easy to use, and their support team is always there when we need them.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "Lead UX Designer, Visionary Designs",
      review:
        "K-Chord Group's flexibility and intuitive design tools have become essential in our design process. We've been able to deliver better user experiences thanks to their innovative solutions.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Data Analyst, GrowthWave",
      review:
        "K-Chord Group provides us with in-depth analytics and reporting tools that give us the insights we need to drive our strategies. Their platform has helped us grow faster and smarter.",
      image: user6,
    },
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "TOOLS & SERVICES",
      links: [
        { text: "Real-time Analytics", url: "#" },
        { text: "Customizable Alerts", url: "#" },
        { text: "Integrated Chat Systems", url: "#" },
        { text: "Instant Notifications", url: "#" },
        { text: "Overlays & Visuals", url: "#" },
        { text: "Mobile Streaming Support", url: "#" },
        { text: "4K Stream Capabilities", url: "#" },
        { text: "Stream Scheduling Tool", url: "#" },
      ],
    },
    {
      title: "SUPPORT & RESOURCES",
      links: [
        { text: "Subscription Plans", url: "#" },
        { text: "Affiliate Program", url: "#" },
        { text: "Frequently Asked Questions", url: "#" },
        { text: "Company Blog", url: "#" },
        { text: "Subscribe to Newsletter", url: "#" },
        { text: "Latest Features", url: "#" },
        { text: "Merchandise Store", url: "#" },
        { text: "Workshops & Events", url: "#" },
      ],
    },
    {
      title: "CONNECT WITH US",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Facebook", url: "#" },
        { text: "TikTok", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "YouTube", url: "#" },
        { text: "Twitch", url: "#" },
        { text: "Discord", url: "#" },
      ],
    },
    {
      title: "LEARN & EXPLORE",
      links: [
        { text: "Engage Viewers with Custom Alerts", url: "#" },
        { text: "Top Streaming Strategies for New Streamers", url: "#" },
        { text: "How to Stream in 4K for Maximum Quality", url: "#" },
        { text: "Efficient Stream Scheduling Techniques", url: "#" },
        { text: "Using Analytics to Boost Engagement", url: "#" },
        { text: "Create Stunning Overlays for Streams", url: "#" },
        { text: "Advanced Analytics for Streamers: A Guide", url: "#" },
      ],
    },
  ],
  platformsText:
    "Streaming Platforms | Twitch | YouTube | Discord | Facebook Gaming",
  copyrightText: "© 2024 Streamerzz, Inc. All rights reserved.",
};
