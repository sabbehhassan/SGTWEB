import webpic from "../assets/services_pic/webpic.jpg";
import aipic from "../assets/services_pic/aipic.jpg";
import amazonpic from "../assets/services_pic/amazonpic.jpg";
import uipic from "../assets/services_pic/uipic.jpg";
import bookkeepingpic from "../assets/services_pic/bookkeepingpic.jpg";

const resourcesData = [
  {
    id: "web-development",
    name: "Web Development",
    shortDesc:
      "Build responsive and dynamic websites with modern technologies.",
    longDesc: `Step into the world of web development with hands-on projects and learning. Master HTML, CSS, JavaScript, React, Vue, TailwindCSS, and modern frameworks to build full-stack applications. Learn to create responsive designs, optimized front-end, and efficient back-end systems.`,
    projects: [
      "Portfolio Website",
      "E-commerce Web App",
      "Dashboard Application",
      "Blog Platform",
    ],
    image: webpic,
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    shortDesc: "Craft user experiences that delight and engage.",
    longDesc: `Design intuitive, visually stunning interfaces that prioritize user experience. Learn user research, wireframing, prototyping, and usability testing with Figma, Adobe XD, and Sketch. Build responsive and accessible designs that users love.`,
    projects: [
      "Mobile App Prototype",
      "E-commerce Website UI",
      "Dashboard Design",
      "Redesign Existing Website",
    ],
    image: uipic,
  },
  {
    id: "ai-dl",
    name: "AI & Deep Learning",
    shortDesc:
      "Unlock the power of artificial intelligence to solve real-world problems.",
    longDesc: `Dive into AI & Deep Learning to build intelligent systems capable of understanding data, recognizing patterns, and making predictions. Work with machine learning algorithms, neural networks, NLP, computer vision using Python, TensorFlow, and PyTorch. Build innovative AI-powered solutions.`,
    projects: [
      "Chatbot Application",
      "Image Classification Model",
      "Stock Market Prediction",
      "Recommendation System",
    ],
    image: aipic,
  },
  {
    id: "bookkeeping",
    name: "Bookkeeping",
    shortDesc: "Keep your finances organized and accurate.",
    longDesc: `Learn essential accounting and bookkeeping skills for managing business finances. Understand balance sheets, income statements, cash flow, and financial compliance. Track expenses, monitor profits, and make informed financial decisions.`,
    projects: [
      "Small Business Ledger System",
      "Financial Statement Preparation",
      "Budget Planning Template",
      "Automated Invoice Management System",
    ],
    image: bookkeepingpic,
  },
  {
    id: "amazon-trading",
    name: "Amazon Trading",
    shortDesc: "Launch and grow your Amazon marketplace business.",
    longDesc: `Master Amazon selling strategies including FBA & FBM, inventory management, product listing optimization, and advertising campaigns. Learn to launch profitable products, increase sales, and build a sustainable e-commerce brand.`,
    projects: [
      "FBA Product Launch",
      "Amazon Store Optimization",
      "Advertising Campaign Setup",
      "Inventory & Order Management System",
    ],
    image: amazonpic,
  },
];

export default resourcesData;
