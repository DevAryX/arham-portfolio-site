// Show welcome alert on homepage load
window.onload = function () {
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "/index"
  ) {
    alert("Welcome to Arham Hamid’s Portfolio!");
  }
};

// Headline toggle variables
let isSurprise = false;
const originalHeading = "Welcome to My Portfolio";
const surpriseHeading = "You're Exploring My Portfolio!";

// Change main heading with a toggle effect
function changeHeading() {
  const heading = document.getElementById("main-heading");

  if (heading) {
    if (!isSurprise) {
      heading.textContent = surpriseHeading;
      heading.style.marginLeft = "30px";
      heading.classList.add("highlight");
    } else {
      heading.textContent = originalHeading;
      heading.style.marginLeft = "0px";
      heading.classList.remove("highlight");
    }

    isSurprise = !isSurprise;
  }
}

// Toggle dark mode and save preference
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// Apply dark mode preference on page load
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

// Initialize AOS animations
AOS.init();

// Remove preloader once page is loaded
window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  if (loader) {
    loader.style.display = "none";
  }
});

// jQuery ready function
$(document).ready(function () {
  // Animate sections on scroll
  $(".fade-section").hide().fadeIn(1500);

  // Toggle FAQ answers
  $(".faq-question").on("click", function () {
    $(this).next(".faq-answer").slideToggle();
    $(this).toggleClass("open");
  });

  // Animate nav link color on hover
  $("nav a").hover(
    function () {
      $(this).css("color", "#f9d342");
    },
    function () {
      if ($("body").hasClass("dark")) {
        $(this).css("color", "#f9d342");
      } else {
        $(this).css("color", "white");
      }
    }
  );

  // Lightbox functionality for project images
  $(".project-img").click(function () {
    const src = $(this).attr("src");
    $("#lightbox-img").attr("src", src);
    $("#lightbox").fadeIn();
  });

  $(".close-btn, #lightbox").click(function (e) {
    if (e.target.id === "lightbox" || e.target.className === "close-btn") {
      $("#lightbox").fadeOut();
    }
  });
});

// Quranic/Dua quotes array
const duas = [
  "“So remember Me; I will remember you.” (2:152)",
  "“Do not despair of the mercy of Allah.” (39:53)",
  "“Allah does not burden a soul beyond that it can bear.” (2:286)",
  "“And He is with you wherever you are.” (57:4)",
  "“Indeed, with hardship comes ease.” (94:6)",
  "“And rely upon Allah; and sufficient is Allah as Disposer of affairs.” (33:3)",
  "“Verily, in the remembrance of Allah do hearts find rest.” (13:28)",
  "“Indeed, my Lord is near and responsive.” (11:61)",
  "“And whoever fears Allah – He will make for him a way out.” (65:2)",
  "“And whoever puts their trust in Allah, then He will suffice him.” (65:3)",
  "“Indeed, Allah is with those who are patient.” (2:153)",
  "“Your Lord has not forsaken you, nor has He detested you.” (93:3)",
  "“He created death and life to test you as to which of you is best in deed.” (67:2)",
  "“And We have not sent you, [O Muhammad], except as a mercy to the worlds.” (21:107)",
  "“Indeed, the help of Allah is near.” (2:214)",
  "“Whoever comes [on the Day of Judgment] with a good deed will have ten times the like thereof.” (6:160)",
  "“And be patient, for indeed, Allah is with the patient.” (8:46)",
  "“Indeed, Allah loves those who rely [upon Him].” (3:159)",
  "“Call upon Me; I will respond to you.” (40:60)",
  "“And speak to people good [words].” (2:83)",
  "“And your Lord is going to give you, and you will be satisfied.” (93:5)",
  "“And when I am ill, it is He who cures me.” (26:80)",
  "“And say, ‘My Lord, increase me in knowledge.’” (20:114)",
  "“Indeed, Allah is ever Knowing and Wise.” (4:17)",
  "“He is the First and the Last, the Ascendant and the Intimate.” (57:3)",
  "“And whoever does righteous deeds, whether male or female, while being a believer – those will enter Paradise.” (4:124)",
  "“And hold firmly to the rope of Allah all together and do not become divided.” (3:103)",
  "“And it is He who created the night and the day, and the sun and the moon.” (21:33)",
  "“Say: Nothing will happen to us except what Allah has decreed for us.” (9:51)",
  "“And whoever is grateful – his gratitude is only for the benefit of himself.” (31:12)",
  "“Guide us to the straight path.” (1:6)",
  "“And He found you lost and guided [you].” (93:7)",
  "“Indeed, those who believe and do righteous deeds – for them is a reward uninterrupted.” (41:8)",
  "“Unquestionably, by the remembrance of Allah hearts are assured.” (13:28)",
  "“And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?” (54:17)",
  "“And whoever is guided – is only guided for [the benefit of] himself.” (10:108)",
  "“Indeed, those who have said, ‘Our Lord is Allah’ and then remained steadfast – the angels will descend upon them.” (41:30)",
  "“And We will surely test you with something of fear and hunger… but give good tidings to the patient.” (2:155)",
  "“And We have not sent down to you the Qur'an that you be distressed.” (20:2)",
  "“Indeed, good deeds erase bad deeds.” (11:114)",
  "“Say, ‘Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah.’” (6:162)",
  "“Say, ‘Never will we be struck except by what Allah has decreed for us.’” (9:51)",
  "“Every soul will taste death.” (3:185)",
  "“And Allah is the best of providers.” (62:11)",
  "“And when My servants ask you about Me – indeed I am near.” (2:186)",
  "“Who created me, and He [it is] who guides me.” (26:78)",
  "“And put your trust in the Ever-Living who does not die.” (25:58)",
  "“And Allah is the best of planners.” (8:30)",
  "“Indeed, the patient will be given their reward without account.” (39:10)",
  "“Indeed, what is with Allah is best for you, if only you knew.” (16:95)",
  "“He knows what is in every heart.” (67:13)",
  "“Indeed, He is the Hearing, the Seeing.” (17:1)",
  "“And the worldly life is not but amusement and diversion; but the home of the Hereafter is best.” (6:32)",
  "“To Allah we belong and to Him we shall return.” (2:156)",
  "“Indeed, the most noble of you in the sight of Allah is the most righteous of you.” (49:13)",
  "“So whoever does an atom's weight of good will see it.” (99:7)",
  "“Say: Nothing happens except what Allah wills.” (9:51)",
  "“And they plan, but Allah plans. And Allah is the best of planners.” (3:54)",
  "“And be not like those who forgot Allah, so He made them forget themselves.” (59:19)",
  "“And Allah is ever Merciful to the believers.” (33:43)",
  "“And your Lord is most knowing of what is within yourselves.” (17:25)",
  "“Indeed, your efforts are diverse.” (92:4)",
  "“He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good.” (2:269)",
  "“And Allah is with those who fear Him and those who are doers of good.” (16:128)",
  "“And your Lord is Forgiving, Full of Mercy.” (18:58)",
  "“And they will be called to prostrate while they were sound.” (68:42)",
  "“Whoever turns away from My remembrance – indeed, he will have a depressed life.” (20:124)",
  "“Indeed, it is not the eyes that are blind, but it is the hearts in the chests that grow blind.” (22:46)",
  "“He created the heavens and the earth in truth.” (6:73)",
  "“Indeed, those who fear Allah – when an impulse touches them from Satan, they remember [Him].” (7:201)"
];

// Show a new random dua
function newDua() {
  const box = document.getElementById("daily-dua");
  const random = Math.floor(Math.random() * duas.length);
  box.innerHTML = duas[random];
}

// Store user's name after they introduce themselves
let userName = null;

// Handle chatbot input (Enter key)
function handleChat(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("userInput").value.trim();
    if (!input) return;

    addMessage("user", input);

    const response = generateBotReply(input.toLowerCase());
    setTimeout(() => {
      addMessage("bot", response);
    }, 400);

    document.getElementById("userInput").value = "";
  }
}

// Append message to chat box
function addMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");

  const bubble = document.createElement("div");
  bubble.className = `chat-message ${sender}`;
  bubble.textContent = message;

  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Generate response based on user input
function generateBotReply(message) {
  // Learn user's name
  if (!userName && message.includes("my name is")) {
    userName = message.split("my name is")[1].trim().split(" ")[0];
    return `Nice to meet you, ${capitalize(userName)}! Feel free to ask me about my skills, projects, or journey.`;
  }

  // Prompt for name if not given
  if (!userName && message.includes("name")) {
    return "I'd love to know your name! Just say: 'My name is ...'.";
  }

  // Greetings
  if (message.includes("hello") || message.includes("salaam") || message.includes("hi")) {
    return userName
      ? `Hey ${capitalize(userName)}! What would you like to know today?`
      : "Salaam! What would you like to explore?";
  }

  // Static replies to common questions
  if (message.includes("who are you")) {
    return "I'm a smart assistant built by Arham — I help answer questions about his work, skills, and goals.";
  }

  if (message.includes("python")) {
    return "Arham uses Python for building bots, automations, and AI tools. It's his go-to language!";
  }

  if (message.includes("ai") || message.includes("chatgpt") || message.includes("openai")) {
    return "He's learning to integrate AI models like ChatGPT using APIs, prompt engineering, and Python tools.";
  }

  if (message.includes("projects") || message.includes("portfolio")) {
    return "You can check the Projects page — there’s a chatbot, stock predictor, weather app, and more.";
  }

  if (message.includes("skills") || message.includes("languages")) {
    return "Currently: Python, HTML, CSS, JavaScript, jQuery, and basic AI. He’s learning React and Flask next.";
  }

  if (message.includes("cv") || message.includes("resume")) {
    return "Click the CV button to download Arham’s latest resume. It’s got everything you need.";
  }

  if (message.includes("tools") || message.includes("stack")) {
    return "VS Code, GitHub, Python, AI APIs, and Figma for design. Clean and productive.";
  }

  if (message.includes("islam") || message.includes("religion")) {
    return "Arham is a proud Muslim. He builds with discipline, intention, and purpose, Alhamdulillah.";
  }

  if (message.includes("contact") || message.includes("email")) {
    return "You can reach him at arhm@gmail.com or through the contact form.";
  }

  if (message.includes("motivation") || message.includes("goal")) {
    return "His long-term goal is to build a halal, billion-dollar AI company that creates real impact.";
  }

  // Fallbacks if no match
  const fallbacks = [
    "Hmm, that’s a great question — let me think... okay, not sure yet. Try asking about projects or AI.",
    "I’m still learning how to answer that. Want to ask me about Arham's tools or Python work?",
    "Interesting! That’s outside my scope for now, but I’d love to answer questions about his developer journey.",
    "I haven’t been trained on that yet — but you can guide me. Want to talk about his tech stack instead?"
  ];

  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

// Capitalize user name
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
