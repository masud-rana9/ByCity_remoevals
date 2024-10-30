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
      title: "Packing Service",
      description: "Professional packing services.",
      image: "./assests/Interstate.svg",
    },
    {
      title: "Transport Service",
      description: "Reliable transportation.",
      image: "./assests/Office.svg",
    },
    {
      title: "Storage Service",
      description: "Safe and secure storage.",
      image: "./assests/Packing.svg",
    },
    {
      title: "Unpacking Service",
      description: "Efficient unpacking services.",
      image: "./assests/Residential.svg",
    },
    {
      title: "Loading Service",
      description: "Careful loading assistance.",
      image:
        "./assests/assets_a8fb8e7c-fb80-491e-b6cb-f2df617ba648_Home-Relocation.svg",
    },
    {
      title: "Cleaning Service",
      description: "Post-move cleaning solutions.",
      image: "./assests/Storage.svg",
    },
  ];

  // Populate the cards
  cardData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.title}">
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `;
    cardsContainer.appendChild(cardElement);
  });

  // Set initial scroll position
  let currentIndex = 0;
  const cardWidth = 300 + 20; // Card width + margin
  const maxIndex = cardData.length - 1;

  // Function to update slider position
  const updateSlider = () => {
    cardsContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  };

  // Move to next card
  const nextCard = () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the start
    }
    updateSlider();
  };

  // Move to previous card
  const prevCard = () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIndex; // Loop back to the end
    }
    updateSlider();
  };

  // Handle next and previous buttons
  document.getElementById("nextButton").addEventListener("click", () => {
    nextCard();
    resetAutoplay(); // Reset autoplay when manually navigating
  });

  document.getElementById("prevButton").addEventListener("click", () => {
    prevCard();
    resetAutoplay(); // Reset autoplay when manually navigating
  });

  // Autoplay functionality
  let autoplayInterval = setInterval(nextCard, 3000); // Slide every 3 seconds

  // Function to reset autoplay
  const resetAutoplay = () => {
    clearInterval(autoplayInterval); // Clear existing interval
    autoplayInterval = setInterval(nextCard, 1000); // Restart autoplay
  };
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

// Happy customers section start here

// olny for video

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const videoModal = document.getElementById("videoModal");
  const closeButton = document.getElementById("closeButton");
  const videoFrame = document.getElementById("videoFrame");

  playButton.addEventListener("click", () => {
    videoFrame.src = "https://www.youtube.com/embed/FWyiYzgPNi4?autoplay=1";
    videoModal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    videoModal.style.display = "none";
    videoFrame.src = ""; // Stop the video
  });

  window.addEventListener("click", (event) => {
    if (event.target === videoModal) {
      videoModal.style.display = "none";
      videoFrame.src = ""; // Stop the video
    }
  });
});
