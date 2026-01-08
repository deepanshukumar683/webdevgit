const services = [
  {
    tag: "Tailored As Per Business Needs",
    title: "GTM & <span>Market Scaling</span>",
    desc: "Accelerate market entry and maximize visibility through tailored, AI-powered GTM and digital marketing strategies.",
    tags: [
      "Customer Personas",
      "AI-Powered Market Research",
      "Sales Channel Strategy",
      "Content & SEO Optimization",
      "Smart Analytics",
      "Performance Tracking"
    ]
  },
  {
    tag: "Ready in 1 Week",
    title: "Design & <span>UX Strategy</span>",
    desc: "Design That Converts – Create visually appealing, intuitive, and user-friendly experiences.",
    tags: [
      "Brand Consistency",
      "AI-Powered Wireframing",
      "User Behavior Analysis",
      "Adaptive UX Optimization",
      "Modern Design Tool Leverage"
    ]
  }
];

let current = 0;

const tagEl = document.getElementById("service-tag");
const titleEl = document.getElementById("service-title");
const descEl = document.getElementById("service-desc");
const tagsEl = document.getElementById("service-tags");
const card = document.querySelector(".service-card");

setInterval(() => {
  card.style.opacity = "0";
  card.style.transform = "translateY(10px)";

  setTimeout(() => {
    current = (current + 1) % services.length;
    const service = services[current];

    tagEl.innerText = service.tag;
    titleEl.innerHTML = service.title;
    descEl.innerText = service.desc;

    tagsEl.innerHTML = "";
    service.tags.forEach(tag => {
      const span = document.createElement("span");
      span.innerText = tag;
      tagsEl.appendChild(span);
    });

    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 400);
}, 3000);
