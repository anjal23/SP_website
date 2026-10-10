document.getElementById("year").textContent = new Date().getFullYear();

const articles = {
  red: { tag: "Red", title: "Red: The Color of Passion and Energy", body: [
    "Red is one of the most noticeable colors in our world. We see it in roses, sunsets, ripe apples, and warning signs that demand our attention. It is a color that rarely goes unnoticed.",
    "Red is often associated with love, passion, courage, and excitement. It can also represent danger, anger, or urgency. A red heart may express affection, while a red traffic light tells us to stop. The meaning changes with the situation.",
    "In design, red can draw attention to important details or create a sense of intensity. Its impact depends on context, culture, and individual experience.",
    "Perhaps red reminds us that colors do more than decorate our world. They help us communicate feelings and recognize important information without saying a single word."
  ]},
  blue: { tag: "Blue", title: "Blue: The Color of Peace and Possibility", body: [
    "Look at the sky on a clear day or stand beside a vast ocean. Blue often creates a feeling of openness, distance, and calmness. It is a color that invites us to pause and look beyond what is immediately in front of us.",
    "Blue is frequently associated with trust, stability, intelligence, and peace. It appears in the identities of many businesses and institutions. However, blue can also express sadness or loneliness in particular contexts.",
    "The sky and the ocean do not appear blue for exactly the same reasons. The sky looks blue largely because air molecules scatter shorter wavelengths of sunlight more strongly. The ocean's appearance depends on water absorption, scattering, depth, and reflected light.",
    "Blue connects science with emotion. It is both a physical phenomenon involving light and a powerful part of how we experience the natural world."
  ]},
  yellow: { tag: "Yellow", title: "Yellow: A Little Sunshine in Everyday Life", body: [
    "Yellow is the color of sunshine, sunflowers, ripe lemons, and many of the small things that brighten an ordinary day. Its brightness makes it easy to notice, even from a distance.",
    "People often associate yellow with happiness, optimism, warmth, and curiosity. In design, it can make an element stand out, but too much bright yellow may feel overwhelming. Its effect depends on the shade and the surrounding colors.",
    "Yellow also has a practical role. Yellow and black are often paired in warning signs because their contrast can make information easier to notice. Color is not merely decorative; it can help communicate a message quickly.",
    "Perhaps yellow teaches us that a little brightness can change the character of an entire scene."
  ]},
  green: { tag: "Green", title: "Green: The Color of Life and Renewal", body: [
    "Green is everywhere in the living world. We see it in leaves, forests, fields, and the first shoots of a plant emerging from the soil. For many people, it is a reminder of nature, growth, and renewal.",
    "Green has a fascinating scientific connection to life. Chlorophyll, the pigment that helps plants capture energy from sunlight, absorbs much of the red and blue light that reaches it while reflecting more green light. That reflected light contributes to the green appearance of many plants.",
    "Green is also commonly associated with balance, safety, and sustainability. Traffic systems use green to indicate permission to proceed, while environmental movements use it to symbolize care for the planet.",
    "When we look at a green landscape, we are seeing more than a pleasing color. We are looking at the visible result of biological processes that help sustain life on Earth."
  ]},
  white: { tag: "White", title: "White: The Beauty of Simplicity", body: [
    "White can make a space feel open, clean, and peaceful. It appears in clouds, snow, white flowers, and the blank pages on which new ideas begin. Its simplicity gives other colors room to stand out.",
    "In many cultures, white is associated with purity, peace, and new beginnings. In others, it has important associations with mourning and remembrance. These differences remind us that colors do not carry one universal meaning.",
    "In science, white light contains a broad range of visible wavelengths. When white light passes through a prism, it can separate into the colors of the visible spectrum. What appears simple to our eyes can contain a surprising amount of complexity.",
    "White shows us that simplicity does not necessarily mean emptiness. Sometimes it provides the space in which other things become visible."
  ]},
  black: { tag: "Black", title: "Black: The Elegance of Mystery", body: [
    "Black is the color of the night sky away from city lights, dark ink on a page, and shadows that give objects their shape. It can feel mysterious, elegant, serious, or dramatic depending on where we encounter it.",
    "In fashion and graphic design, black is often used to create contrast and a sense of simplicity. In everyday life, it can also communicate authority, formality, or mourning. Its meaning is shaped by culture and circumstance.",
    "Black has an interesting relationship with light. An ideal black surface absorbs all visible light falling on it rather than reflecting it back to our eyes. Real materials vary in how much light they absorb and reflect.",
    "Black reminds us that darkness is not always something to fear. It can provide contrast, reveal detail, and make brighter colors appear even more vivid."
  ]}
};

const modal = document.getElementById("post-modal");
const modalContent = document.getElementById("modal-content");

document.querySelectorAll(".post-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const article = articles[link.dataset.post];
    if (!article) return;

    modalContent.replaceChildren();
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = article.tag;
    modalContent.appendChild(tag);

    const title = document.createElement("h2");
    title.id = "modal-title";
    title.textContent = article.title;
    modalContent.appendChild(title);

    article.body.forEach(paragraph => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      modalContent.appendChild(p);
    });

    modal.showModal();
    document.getElementById("close-modal").focus();
  });
});

document.getElementById("close-modal").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  if (event.target === modal) modal.close();
});

const filters = document.querySelectorAll(".filter");
const posts = document.querySelectorAll(".post");
filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("active", item === button));
    const selected = button.dataset.filter;
    posts.forEach(post => {
      post.hidden = selected !== "all" && post.dataset.category !== selected;
    });
  });
});
