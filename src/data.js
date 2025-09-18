export const projects = [
  {
    title: "Unleash",
    description:
      "My first fully front-end website. This first taste of programming allowed me to integrate AI-generated imagery and some engaging features.",
    image: `/assets/images/Screenshot-mockup.png`,
    grade: "Merit",
    badgeColor: "success",
  },
  {
    title: "Oh no Lola",
    description:
      '"Oh no Lola" was created with education in mind, focusing on reading comprehension. Each story is written by me, aiming to convey subtle life lessons through simple narratives.',
    image: `/assets/images/mockup-hp.png`,
    grade: "Pass",
    badgeColor: "warning",
  },
  {
    title: "Salon La Vida",
    description:
      "A dynamic and user-friendly Python project designed to streamline the management of services, pricing, and sales for Salon LaVida. Inspired by my sister's salon, it allows tracking of products and services, calculating totals, and handling sales efficiently. The system helps maintain accurate records and simplifies daily operations.",
    image: `/assets/images/mockup.png`,
    link: "https://salon-lavida-service-app-30430987c2a8.herokuapp.com/",
    grade: "Merit",
    badgeColor: "success",
  },
  {
    title: "A Light Unto My Path",
    description:
      "A personal blog sharing my journey of spiritual growth and inclusion. Through this project, I explore themes of faith, identity, and unconditional love, aiming to offer hope and reassurance to LGBTQ+ individuals navigating similar experiences.",
    image: `/assets/images/hp-mockup.png`,
    link: "https://www.alightuntomypath.de/",
    grade: "Merit",
    badgeColor: "success",
  },
  {
    title: "Print & Design",
    description:
      "A platform that allows customers to upload and print their own designs or purchase pre-designed products. It offers flexibility and creativity, including business cards, posters, t-shirts, stationery, and digital templates. The project is inspired by platforms like Wirmachendruck in Germany and Upwork in the US, emphasizing practical digital design solutions.",
    image: `/assets/images/homepage.png`,
    link: "https://print-design-d837920c6712.herokuapp.com/",
    grade: "Pass",
    badgeColor: "warning",
  },
  {
    title: "Calli Der Camper rental",
    description:
      "A campervan rental website featuring a booking system, calendar functionality, and Stripe integration. Includes high-quality images, a FAQ section, YouTube videos, and suggested camping locations.",
    image: `/assets/images/jarental.png`,
    link: "https://www.callidercamper.de",
  },
];

export const designs = [
  {
    title: "Birthday Memory book Layout",
    description: "Creative 50 page book designed in Adobe InDesign.",
    images: [`/assets/images/ria-bday.png`, `/assets/images/book.png`],
    tool: "Adobe InDesign, Illustrator and Photoshop",
  },
  {
    title: "Fasting Group Logo",
    description: "Hand-drawn logo for a fasting group.",
    image: `/assets/images/sos.png`,
    tool: "Adobe Photoshop and Illustrator",
  },
  {
    title: "Vector signage design",
    description: "Vectorised image generation for metal CNC cutting",
    image: `/assets/images/3diere.png`,
    tool: "Adobe Illustrator",
  },
  {
    title: "Guesthouse flyer design",
    description: "Mockup design for eco-friendly guesthouse flyer.",
    image: `/assets/images/lavender-dreams-flyer.jpg`,
    tool: "Adobe Illustrator",
  },
  {
    title: "Care home Flyer series",
    description: "A series of flyers addressing all services provided",
    images: [
      `/assets/images/nitacare.png`,
      `/assets/images/nitacare-piliativ.png`,
    ],
    tool: "Adobe Photoshop",
  },
];

export const skills = [
  {
    title: "HTML",
    image: `/assets/images/html-1.svg`,
  },
  { title: "CSS", image: `/assets/images/css-3.svg` },
  {
    title: "JavaScript",
    image: `/assets/images/javascript-r.svg`,
  },
  {
    title: "React",
    image: `/assets/images/react-2.svg`,
  },
  {
    title: "Python",
    image: `/assets/images/python-5.svg`,
  },
  {
    title: "Adobe InDesign",
    image: `/assets/images/adobe-indesign-cc-icon.svg`,
  },
  {
    title: "Adobe Photoshop",
    image: `/assets/images/adobe-photoshop-2.svg`,
  },
  {
    title: "Adobe Illustrator",
    image: `/assets/images/adobe-illustrator-cc-3.svg`,
  },
];

export const education = [
  {
    school: "Kaplan College, Singapore",
    qualification: "Diploma in Shipping and Logistics Management",
    period: "2010 - 2011",
  },
  {
    school: "Code Institute",
    qualification: "Diploma in Full Stack Software Development",
    period: "Dec. 2024 - May 2025",
  },
  {
    school: "Udemy",
    qualification: "Adobe Masterclass Certificate",
    period: "2023",
  },
];

export const milestones = [
  {
    title: "Diploma in Shipping & Logistics Management",
    file: `${process.env.PUBLIC_URL}/assets/docs/kaplan-certificate.pdf`,
    type: "Certificate",
  },
  {
    title: "Diploma in Full Stack Software Development",
    file: `${process.env.PUBLIC_URL}/assets/docs/ci_diploma.pdf`,
    type: "Certificate",
  },
  {
    title: "Adobe Masterclass Certificate",
    file: `${process.env.PUBLIC_URL}/assets/docs/udemy-Adobe-masterclass.jpg`,
    type: "Certificate",
  },
  {
    title: "Reference Letter - GLOBUS Markthalle Essen",
    file: `${process.env.PUBLIC_URL}/assets/docs/globus-arbeitszeugnis.pdf`,
    type: "Reference Letter",
  },
];
