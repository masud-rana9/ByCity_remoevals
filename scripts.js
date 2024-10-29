// Add event listeners to dropdown menus
const dropdownMenus = document.querySelectorAll("nav ul li .dropdown");
dropdownMenus.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    menu.style.display = "block";
  });
  menu.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });
});

// for services section cards

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards");
  const cardData = [
    {
      icon: "fas fa-box",
      title: "Packing Service",
      description:
        "We offer professional packing services to ensure your belongings are secure.",
      link: "#",
    },
    {
      icon: "fas fa-truck",
      title: "Transport Service",
      description: "Reliable transportation for your moving needs.",
      link: "#",
    },
    {
      icon: "fas fa-warehouse",
      title: "Storage Service",
      description: "Safe and secure storage facilities for short or long term.",
      link: "#",
    },
    // Add more card data as needed
  ];

  cardData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("cards");
    cardElement.innerHTML = `
      <i class="${card.icon}"></i>
      <div class="card-content">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <a href="${card.link}">Learn More</a>
      </div>
    `;
    cardsContainer.appendChild(cardElement);
  });
});

// we deliver on our promises
// Feature items to be displayed

const features = [
  " ✓ Free Goods and Public Liability Insurance",
  " ✓ Trained and Professional Staff",
  " ✓ Free Wrappings Bubble and Shrink",
  " ✓ 24/7 Support Available",
  " ✓ No Hidden Charges",
  " ✓ Per Min Increment with no Overcharges",
  " ✓ Removal Services at Affordable Price",
];

// Selecting the feature list container
const featureListContainer = document.getElementById("featureList");

// Using map to generate and display list items
featureListContainer.innerHTML = features
  .map((feature) => `<li>${feature}</li>`)
  .join("");

// Faq section start here

const faqs = [
  {
    question: "What areas do Ozwide Movers service?",
    answer:
      "We service all major areas across the state. Please contact us for details.",
  },
  {
    question: "How do I get a quote for my move?",
    answer:
      "You can get a quote by filling out our online form or calling us directly.",
  },
  {
    question: "How long in advance should I book my moving date?",
    answer:
      "We recommend booking at least 2-4 weeks in advance to secure your desired date.",
  },
  {
    question: "What services does Ozwide Movers offer?",
    answer:
      "We offer packing, loading, moving, and storage services. Contact us for more info.",
  },
  {
    question: "How do you ensure the safety of my belongings during the move?",
    answer:
      "We use high-quality packing materials and have trained staff to handle your items with care.",
  },
  {
    question: "What storage options do you offer?",
    answer:
      "We provide short-term and long-term storage options in secure facilities.",
  },
  {
    question: "What makes Ozwide Movers different from other moving companies?",
    answer:
      "We prioritize customer satisfaction, provide transparent pricing, and have trained professionals.",
  },
  {
    question: "Do you provide moving services on weekends and holidays?",
    answer:
      "Yes, we operate 7 days a week, including weekends and public holidays.",
  },
  {
    question: "How do you handle fragile or valuable items?",
    answer:
      "We have special packing materials and procedures to ensure safe transportation of fragile items.",
  },
  {
    question: "Can you move large or bulky items like pianos or pool tables?",
    answer:
      "Yes, we are equipped to handle large items. Additional charges may apply.",
  },
];

// Render the FAQs dynamically
const faqListContainer = document.getElementById("faqList");
faqListContainer.innerHTML = faqs
  .map(
    (faq) => `
  <div class="faq-item">
    <h3>${faq.question}</h3>
    <span class="toggle-icon">+</span>
    <div class="faq-answer">${faq.answer}</div>
  </div>
  `
  )
  .join("");

// Add event listeners for toggling FAQ answers
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
