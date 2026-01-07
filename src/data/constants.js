export const personalInfo = {
  name: "Mohd Uvaish",
  title: "Full-Stack Developer",
  tagline:
    "Full-stack developer with strong expertise in backend architecture, RESTful APIs, and database design. Experienced in building and scaling production-grade applications.",
  description:
    "Experienced in building production-grade applications using Node.js, Express.js, Prisma, MySQL, MongoDB, and React.js. Proven in end-to-end product development, system design, performance optimization, and debugging.",
  email: "uvaishnasir@gmail.com",
  phone: "9410853898",
  location: "Noida, India",
  github: "github.com/uvaishnasir",
  linkedin: "in/uvaishnasir",
  about: {
    fullName: "MOHD UVAISH",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "IMS Engineering College",
      location: "Ghaziabad",
      duration: "2020-2024",
      cgpa: "8.15",
    },
    certifications: [
      {
        name: "Data Structures & Algorithms",
        issuer: "Devsnest",
      },
      {
        name: "MERN Stack Development",
        issuer: "CETPA Infotech Pvt. Ltd.",
      },
      {
        name: "Operating Systems and You",
        issuer: "Coursera",
      },
      {
        name: "Cloud Computing Basics",
        issuer: "NASSCOM Foundation",
      },
    ],
    achievements: [
      "Winner of Quality Search Test 2019 (R. V. Institute of Technology)",
      "Ranked 1st in Class XII at the school level",
    ],
  },
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/uvaishnasir",
    icon: "/assets/linkedin.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/uvaishnasir",
    icon: "/assets/github.png",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/uvaishnasir",
    icon: "/assets/lc.png",
  },
  {
    name: "Facebook",
    url: "http://facebook.com/uvaish.nasir.hussain",
    icon: "/assets/fb.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/uvaishnasir",
    icon: "/assets/twitter.png",
  },
  {
    name: "Instagram",
    url: "http://instagram.com/uvaish.nasir.hussain",
    icon: "/assets/insta.png",
  },
];

export const techStack = {
  languages: ["JavaScript", "TypeScript", "C/C++", "Python"],
  backend: ["Node.js", "Express.js", "Prisma ORM", "RESTful APIs"],
  frontend: [
    "React.js",
    "Redux Toolkit",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
  ],
  databases: ["MySQL", "MongoDB", "Redis"],
  cloudStorage: ["AWS (S3)", "Docker", "Cloudinary"],
  tools: [
    "Git",
    "GitHub",
    "Bitbucket",
    "Postman",
    "Jira",
    "VS Code",
    "Antigravity",
    "Cursor AI",
    "GitHub Copilot",
  ],
  concepts: [
    "Data Structures & Algorithms",
    "OOP",
    "DBMS",
    "MVC Architecture",
    "System Design Basics",
    "Debugging",
    "Agile",
  ],
  apis: [
    "Payment Gateways",
    "Shipping/Delivery APIs",
    "Third-Party Integrations",
  ],
};

export const experience = [
  {
    id: 1,
    role: "SDE-I (Full Stack)",
    company: "Probey Services Pvt. Ltd.",
    location: "Noida",
    duration: "Feb 2025 - Present",
    type: "Full-time",
    current: true,
    responsibilities: [
      "Developed full-stack applications leveraging React.js, Node.js, Express.js, MongoDB, MySQL with Prisma ORM",
      "Took end-to-end ownership of features and backend modules from database design to deployment and post-production support",
      "Integrated multiple third-party services including payment gateways, delivery partner APIs, Google OAuth, Meta Pixel, and geolocation services",
      "Implemented secure authentication, authorization, and role-based access control across frontend and backend systems",
      "Actively participated in debugging, performance tuning, and production issue resolution to ensure system reliability",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Prisma",
      "MySQL",
      "MongoDB",
      "React.js",
      "JWT",
      "AWS",
      "Google OAuth",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "L.P Infotech",
    location: "Remote",
    duration: "Oct 2024 - Dec 2024",
    type: "Full-time",
    current: false,
    responsibilities: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and React.js",
      "Built and integrated RESTful APIs using Node.js, Express.js, and MongoDB as part of the MERN stack",
      "Implemented dynamic UI components and ensured cross-browser compatibility and performance",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "GOODBELLY",
    subtitle: "Multi-vendor food delivery platform (similar to Zomato/Swiggy)",
    website: "goodbelly.in",
    link: "https://goodbelly.in",
    description:
      "Multi-vendor food delivery platform where cloud-kitchen vendors can register, create dishes, and users can discover food based on their live location with geolocation-based recommendations.",
    features: [
      "Multi-vendor cart system with single-payment, multi-order checkout flow",
      "Coupon engine with promo code management (apply/remove/fetch)",
      "Reviews and rating system for vendors and dishes",
      "Geolocation-based food discovery with Google Maps integration",
      "Secure authentication using JWT and Google OAuth for users, vendors, and admins",
      "Subscription-based meal plans with customization and recurring orders",
      "Real-time consultation module connecting users with health experts for diet planning",
      "Dynamic product creation with weights, images, nutrition information",
      "Vendor admin panel with dish management, orders, reviews",
      "Global admin panel for managing orders, users, vendors, and coupons",
      "Product filtering: category, price, veg/non-veg, sort, search",
    ],
    responsibilities: [
      "Led ~90% of platform development including backend architecture, database design, APIs, and frontend development",
      "Built multi-vendor cart system with single-payment, multi-order checkout flow",
      "Implemented coupon engine, reviews, geolocation-based food discovery and Google Maps",
      "Designed secure authentication using JWT and Google OAuth for users, vendors, and admins",
      "Implemented subscription-based meal plans with customization and recurring orders",
      "Built a real-time consultation module connecting users with health experts for diet planning",
    ],
    technologies: {
      frontend: ["React.js", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["Prisma", "MySQL"],
      other: ["AWS (S3)", "Google OAuth", "JWT", "Geolocation APIs"],
    },
    image: "/assets/tmpimg.png",
    featured: true,
  },
  {
    id: 2,
    title: "Celestiq Beauty",
    subtitle: "E-commerce platform for beauty and wellness products",
    website: "celestiqbeauty.com",
    link: "https://celestiqbeauty.com",
    description:
      "E-commerce platform for beauty and wellness products with product variants, promotions, and comprehensive admin management for inventory and orders.",
    features: [
      "Product variants (size/weight) with stock handling and pricing logic",
      "Discount workflows and promotional campaigns",
      "SEO-friendly product pages with optimized metadata and performance",
      "User authentication and cart/wishlist management",
      "Admin features for inventory management and order tracking",
      "Responsive product detail pages with variant selection",
    ],
    responsibilities: [
      "Developed backend systems for product management, authentication, orders, and discount workflows",
      "Implemented product variants (size/weight), stock handling, pricing, and promo logic",
      "Built SEO-friendly product pages with optimized metadata and performance",
      "Integrated admin features for inventory management and order tracking",
    ],
    technologies: {
      frontend: ["React.js", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      other: ["JWT", "Cloud storage"],
    },
    image: "/assets/cloths.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "HRMS – Human Resource Management System",
    subtitle: "Enterprise HR management dashboard",
    description:
      "Enterprise HR management dashboard for managing employees, attendance, payroll, and recruitment with role-based access for Admin, HR, Manager, and Employees.",
    features: [
      "Role-based dashboards for Admin, HR, Manager, and Employees",
      "Secure authentication & authorization with password reset flows and RBAC",
      "Core HR modules: employees, departments, attendance, and leave management",
      "File uploads and email notifications",
      "Modern React-based admin dashboard",
      "Payroll and recruitment modules",
    ],
    responsibilities: [
      "Built a full-stack HRMS platform with role-based dashboards for Admin, HR, Manager, and Employees",
      "Implemented secure authentication & authorization, password reset flows, and RBAC",
      "Developed core HR modules including employees, departments, attendance, and leave management",
      "Integrated file uploads, email notifications, and a modern React-based admin dashboard",
    ],
    technologies: {
      frontend: ["React.js", "Redux"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB Atlas", "Mongoose"],
      other: ["JWT", "Multer", "Cloudinary", "Nodemailer"],
    },
    image: "/assets/cloths.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "HOTLINE",
    subtitle: "Service provider marketplace for beauty and home services",
    website: "hotline.probeyservices.tech",
    link: "https://hotline.probeyservices.tech",
    description:
      "Service provider marketplace where professionals can list services and users can book beauty and home services instantly with real-time availability management.",
    features: [
      "Service listings with pricing, offers, images, and detailed descriptions",
      "Booking flow with date/time slots and availability management",
      "OTP verification for secure bookings",
      "Admin panel for vendor approval, service control, and commission tracking",
      "Category & price management",
      "Vendor (service provider) authentication with role-based access",
    ],
    responsibilities: [
      "Built a marketplace where service professionals list services and users can book instantly",
      "Developed complete backend and frontend using React and Node.js stack",
      "Implemented service listings with pricing, offers, images, and detailed descriptions",
      "Built booking flow with date/time slots, availability management, and OTP verification",
      "Created admin panel for vendor approval, service control, and commission tracking",
    ],
    technologies: {
      frontend: ["React.js", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MySQL", "Prisma ORM"],
      other: ["JWT", "Nodemailer", "Cloud uploads"],
    },
    image: "/assets/tmpimg.png",
    featured: true,
  },
];
