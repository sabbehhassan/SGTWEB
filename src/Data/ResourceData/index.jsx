import webpic from "../../assets/services_pic/webpic.jpg";
import aipic from "../../assets/services_pic/aipic.jpg";
import amazonpic from "../../assets/services_pic/amazonpic.jpg";
import uipic from "../../assets/services_pic/uipic.jpg";
import bookkeepingpic from "../../assets/services_pic/bookkeepingpic.jpg";

const resourcesData = [
  {
    id: 1,
    name: "Web Development",
    shortDesc: "Build responsive websites",
    longDesc:
      "Learn HTML, CSS, JavaScript, and modern frameworks to create fast, responsive, and beautiful websites.",
    image: webpic,
    projects: ["Portfolio Website", "E-commerce Store", "Blog Platform"],
    buttonText: "Get Resources",
    buttonLink: "https://github.com/sabbehhassan",
  },
  {
    id: 2,
    name: "UI/UX Design",
    shortDesc: "Design beautiful interfaces",
    longDesc:
      "Master design principles, wireframing, prototyping, and tools like Figma to craft stunning user experiences.",
    image: uipic,
    projects: ["Mobile App UI", "Website Redesign"],
    buttonText: "Designer Profile",
    buttonLink: "linkedin.com/in/uiux-4950611a1",
  },
  {
    id: 3,
    name: "AI & Deep Learning",
    shortDesc: "Master AI tools & techniques",
    longDesc:
      "Get hands-on with machine learning, neural networks, natural language processing, and computer vision.",
    image: aipic,
    projects: ["Chatbot", "Image Classifier", "Recommendation System"],
    buttonText: "Get Resources",
    buttonLink: "https://linkedin.com/in/hasnain-ullah-ab52a5282/",
  },
  {
    id: 4,
    name: "Accounting and Bookkeeping",
    shortDesc: "Keep your finances organized and accurate.",
    longDesc: `
    Learn essential accounting and bookkeeping skills for managing business finances. 
    Understand balance sheets, income statements, cash flow, and financial compliance. 
    Track expenses, monitor profits, and make informed financial decisions.

    Accounting Tools:
    - QuickBooks Online
    - Xero ProAdvisor
    - Zoho Books
    - Odoo
    - FreshBooks
  `,
    image: bookkeepingpic,
    projects: [
      "Small Business Ledger System",
      "Financial Statement Preparation",
      "Budget Planning Template",
      "Automated Invoice Management System",
    ],
    buttonText: "Project Portfolio",
    buttonLink: "https://www.fiverr.com/s/yvRw4XZ",
  },
  {
    id: 5,
    name: "E-Commerce",
    shortDesc: "Grow your E-Commerce store",
    longDesc:
      "We are e-Commerce experts with proven experience in managing and scaling businesses across leading platforms such as Amazon, Walmart, eBay, and TikTok Shop. Our team specializes in product optimization, store management, and strategic marketing to help brands increase visibility, boost sales, and achieve long-term growth in competitive online marketplaces.”",
    image: amazonpic,
    projects: ["Product Research", "Listing Optimization", "Ad Campaigns"],
    buttonText: "Contact Us",
    buttonLink: "https://wa.me/923554835284", // WhatsApp direct link
  },
];

export default resourcesData;
