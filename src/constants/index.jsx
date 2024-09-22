import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiNextdotjs, SiCsharp, SiCplusplus, SiMysql } from "react-icons/si";

import planeImage from "../assets/planingImage.jpg";
import designImage from "../assets/designImage.jpg";
import optimizeImage from "../assets/optimizeImage.jpg";
import developImage from "../assets/developImage.jpg";
import launchImage from "../assets/launchImage.jpg";
import supportImage from "../assets/serviceImage.jpg";

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
  sectionTitle: "Stream Smarter with These Key Features",
  sectionDescription:
    "Everything you need to enhance your streaming experience, all in one place.",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line className="w-8 h-8" />,
      title: "Real-Time Stream Analytics",
      description:
        "Track your audience engagement, viewer count, and performance in real-time.",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8" />,
      title: "Automated Stream Management",
      description:
        "Set up automated alerts, stream schedules, and more with ease.",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Audience Engagement Tools",
      description:
        "Interact with your audience through custom alerts, chat integrations, and giveaways.",
    },
    {
      id: 4,
      icon: <RiTwitchLine className="w-8 h-8" />,
      title: "Twitch Integration",
      description:
        "Seamlessly connect with Twitch to automate alerts, manage subscribers, and track donations.",
    },
    {
      id: 5,
      icon: <RiYoutubeLine className="w-8 h-8" />,
      title: "YouTube Streaming Support",
      description:
        "Go live on YouTube with built-in tools for managing chats, subscribers, and more.",
    },
    {
      id: 6,
      icon: <RiCalendarLine className="w-8 h-8" />,
      title: "Schedule Streams",
      description:
        "Plan and schedule your streams ahead of time, with reminders sent to your audience.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "Streamerzz offers flexible pricing plans to fit every streamer’s needs, from beginner to pro.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$9.99/month",
      description:
        "Perfect for beginners just starting their streaming journey.",
      features: [
        "Basic analytics",
        "Custom overlays",
        "Viewer engagement tools",
        "Stream up to 720p",
      ],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      description:
        "For streamers who want more advanced tools to grow their audience.",
      features: [
        "Advanced analytics",
        "Custom alerts & notifications",
        "HD streaming up to 1080p",
        "Real-time audience insights",
        "Unlimited support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$49.99/month",
      description:
        "For professional streamers who need cutting-edge tools and insights.",
      features: [
        "Premium analytics & reporting",
        "4K Ultra HD streaming",
        "Dedicated account manager",
        "Full API access",
        "Custom branding & overlays",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Our Streamers Say",
  sectionDescription:
    "Hear from some of the top streamers who use Streamerzz to engage with their audience and grow their channels.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Content Creator",
      review:
        "Streamerzz has revolutionized the way we manage our content subscriptions. The intuitive dashboard and real-time analytics have made it easier to track our progress and optimize our offerings. Highly recommended!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Marketing Specialist",
      review:
        "The team at Streamerzz has been fantastic! Their support is responsive and knowledgeable. The platform itself is versatile and has helped us streamline our subscription management, saving us time and increasing efficiency.",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Product Manager",
      review:
        "Streamerzz's automated billing and comprehensive analytics have been game-changers for our product team. We can now easily track user engagement and make data-driven decisions to enhance our service offerings.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Customer Success Manager",
      review:
        "Using Streamerzz, we’ve been able to increase our customer retention rates. The platform's user-friendly interface and powerful features have provided our customers with a seamless experience, leading to higher satisfaction.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "UX Designer",
      review:
        "Streamerzz's flexibility and ease of use have made it a key tool in our design process. We can quickly adjust our subscription plans and monitor the impact on user engagement, allowing for a more responsive approach.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Data Analyst",
      review:
        "Streamerzz provides us with detailed insights into our subscription metrics. The advanced reporting tools have enabled us to identify trends and make informed decisions to optimize our growth strategy.",
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
