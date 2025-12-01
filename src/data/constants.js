export const personalInfo = {
  name: "Mohd Uvaish",
  title: "Full-Stack Developer",
  tagline: "Full-stack developer with strong expertise in backend architecture, REST APIs, databases, and scalable full-stack systems.",
  description: "Experienced in building production-grade applications across Node.js, Express, Prisma, MySQL, MongoDB, and React. Skilled in debugging, system design, and end-to-end product development.",
  email: "uvaishnasir@gmail.com",
  phone: "9410853989",
  location: "Noida, India",
  github: "github.com/uvaishnasir",
  linkedin: "/in/uvaishnasir",
  about: {
    fullName: "MOHAMMAD UVAISH NASIR",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "IMS Engineering College",
      location: "Ghaziabad",
      duration: "2020-2024",
      cgpa: "8.15"
    },
    certifications: [
      {
        name: "Data Structures & Algorithms",
        issuer: "Devsnest"
      },
      {
        name: "MERN Stack Development",
        issuer: "CETPA Infotech Pvt. Ltd."
      },
      {
        name: "Operating Systems and You",
        issuer: "Coursera"
      },
      {
        name: "Cloud Computing Basics",
        issuer: "NASSCOM Foundation"
      }
    ],
    achievements: [
      "Cooperate in Quality Search Test 2019 by R. V. Institute of Technology and won 'Smart Phone'",
      "Achieved 1st position in 12th standard, showcasing academic excellence"
    ]
  }
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/uvaishnasir",
    icon: "/assets/linkedin.png"
  },
  {
    name: "GitHub",
    url: "https://github.com/uvaishnasir",
    icon: "/assets/github.png"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/uvaishnasir",
    icon: "/assets/lc.png"
  },
  {
    name: "Facebook",
    url: "http://facebook.com/uvaish.nasir",
    icon: "/assets/fb.png"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/uvaishnasir",
    icon: "/assets/twitter.png"
  },
  {
    name: "Instagram",
    url: "http://instagram.com/uvaish.nasir.hussain",
    icon: "/assets/insta.png"
  }
];

export const techStack = {
  languages: ["JavaScript", "TypeScript", "C++", "Python"],
  backend: ["Node.js", "Express.js", "Prisma"],
  frontend: ["React.js", "Redux", "HTML", "CSS"],
  databases: ["MySQL", "MongoDB"],
  cloudStorage: ["AWS (S3)", "Cloudinary"],
  tools: ["Git", "GitHub", "Bitbucket", "Postman", "Jira", "VS Code"],
  concepts: ["DSA", "OOP", "DBMS", "MVC Architecture", "Debugging", "Agile Development"],
  apis: ["REST APIs", "Payment Gateways", "Shipping/Delivery APIs"]
};

export const experience = [
  {
    id: 1,
    role: "SDE-1 (Backend)",
    company: "Probey Services Pvt. Ltd.",
    location: "Noida",
    duration: "Feb 2025 - Present",
    type: "Full-time",
    current: true,
    responsibilities: [
      "Developed and maintained production-grade RESTful APIs using Node.js, Express, Prisma, MySQL",
      "Took end-to-end ownership of backend modules ensuring performance, scalability, and clean architecture",
      "Integrated third-party systems including payment gateways, delivery partner APIs, Google OAuth, Meta Pixel, and geolocation services",
      "Worked across full stack using React to enhance UI/UX and improve application performance"
    ],
    technologies: ["Node.js", "Express", "Prisma", "MySQL", "React", "JWT", "AWS", "Google OAuth"]
  }
];

export const projects = [
  {
    id: 1,
    title: "GOODBELLY",
    subtitle: "Food Delivery Platform (Swiggy/Zomato-like)",
    website: "goodbelly.in",
    description: "A multi-vendor food delivery application where cloud-kitchen vendors can register, create dishes, and users can discover food based on their live location.",
    features: [
      "Multi-vendor system (each vendor acts like their own cloud kitchen)",
      "Geo-location–based food discovery (5–10 km radius)",
      "Dynamic product (dish) creation with weights, images, nutrition",
      "Cart per vendor system (multiple carts per user)",
      "Single payment → multiple vendor orders (split backend)",
      "Promo code management (apply/remove/fetch)",
      "User authentication with email OTP + Google OAuth",
      "Vendor admin panel with dish management, orders, reviews",
      "Global admin panel with orders, users, vendors, coupons",
      "Product filtering: category, price, veg/non-veg, sort, search",
      "Responsive product detail page with variants & reviews",
      "Order tracking + order details modal",
      "S3 image upload, Prisma-based database",
      "Status-based vendor approval"
    ],
    responsibilities: [
      "Led 90% of platform development including backend architecture, database design, API development, Frontend development",
      "Built multi-vendor cart system, single-payment multi-order flow, coupon engine, reviews, geolocation-based recommendations",
      "Designed secure authentication (JWT, Google OAuth) for users, vendors, admins",
      "Developed dynamic React components: Checkout, Product Detail, Filters, Vendor Panel",
      "Implemented personalized subscription-based meal plans where users can customize their meals and manage their recurring orders seamlessly",
      "Built a real-time consultation module where users can connect with health experts for personalized meal advice and diet plans"
    ],
    technologies: {
      frontend: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["Prisma ORM", "MySQL"],
      other: ["AWS S3", "JWT", "Nodemailer OTP", "Geo-location APIs", "Google OAuth", "Cloudinary", "AWS", "React.js"]
    },
    image: "/assets/tmpimg.png",
    link: "https://goodbelly.in",
    featured: true
  },
  {
    id: 2,
    title: "Celestiq Beauty",
    subtitle: "Beauty Products E-commerce",
    description: "An online beauty & skincare shopping platform with product variants, categories, and promotional features.",
    features: [
      "Complete beauty product catalog system",
      "Product variants (size/weight), stock, price, discount logic",
      "User authentication & cart/wishlist",
      "Checkout with promo codes",
      "SEO-friendly structure (title, keywords, meta)",
      "Fully responsive product detail page"
    ],
    technologies: {
      frontend: ["React.js", "Bootstrap"],
      backend: ["Node.js", "Express"],
      database: ["MySQL", "Prisma"],
      other: ["JWT", "Cloud storage for images"]
    },
    image: "/assets/cloths.jpg",
    link: null,
    featured: true
  },
  {
    id: 3,
    title: "CRAFTKONA",
    subtitle: "Multi-Vendor Handcrafted Goods Marketplace",
    website: "craftkona.com",
    description: "A marketplace where multiple craft sellers list handmade products, manage their store, and handle orders.",
    features: [
      "Multi-vendor onboarding & authentication",
      "Product management (CRUD), categories, images",
      "Secure order placement & vendor-specific order assignment",
      "Admin dashboard for approving vendors & managing marketplace",
      "API development for frontend + vendor panel support",
      "Optimized backend performance & pagination",
      "Integration support with payment & shipping modules"
    ],
    technologies: {
      frontend: ["React.js"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB (Mongoose)"],
      other: ["JWT", "Cloud storage"]
    },
    image: "/assets/movie.webp",
    link: "https://craftkona.com",
    featured: true
  },
  {
    id: 4,
    title: "HOTLINE",
    subtitle: "Service Provider Marketplace (Beauty + Home Services)",
    description: "A marketplace where service professionals (hotliners) can list services like grooming, nail art, home cleaning, etc. Users can search and book services instantly.",
    features: [
      "Service listing with pricing, offers, images, descriptions",
      "Vendor (hotliner) authentication & role-based access",
      "Booking flow with date/time/availability selection",
      "Slot management + vendor availability control",
      "Admin panel for vendor approval, service control, commission tracking",
      "Category & price management",
      "Full backend + frontend development",
      "Secure order/service requests + OTP verification"
    ],
    technologies: {
      frontend: ["React.js"],
      backend: ["Node.js", "Express.js"],
      database: ["MySQL", "Prisma ORM"],
      other: ["JWT", "Nodemailer", "Cloud uploads"]
    },
    image: "/assets/tmpimg.png",
    link: null,
    featured: false
  },
  {
    id: 5,
    title: "HRMS",
    subtitle: "Human Resource Management System",
    description: "A complete HR management dashboard for companies.",
    features: [
      "Employee management",
      "Attendance tracking",
      "Payroll module",
      "Recruitment module",
      "Role-based access control",
      "Department & employee CRUD",
      "Email notification system with reusable HTML templates"
    ],
    technologies: {
      frontend: ["React.js", "Redux Toolkit"],
      backend: ["Node.js", "Express.js"],
      database: ["MySQL", "Prisma"],
      other: ["JWT"]
    },
    image: "/assets/cloths.jpg",
    link: null,
    featured: false
  }
];
