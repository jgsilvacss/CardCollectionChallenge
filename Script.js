const collection = [
  {
    name: "Gladiator",
    releaseYear: 2000,
    director: "Ridley Scott",
    picture: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    genre: ["Action", "Adventure"],
    description: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. .",
    trailer: "https://youtu.be/P5ieIbInFpg",
  },
  {
    name: "Breaking Bad",
    releaseYear: 2008,
    director: "Vince Gilligan",
    picture: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    genre: ["Drama", "Crime"],
    description: "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into meth. He decides to become meth kingpin.",
    trailer: "https://youtu.be/XZ8daibM3AE",
  },
  {
    name: "Death Note",
    releaseYear: 2006,
    director: "Tsutomu Kawabata",
    picture: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
    genre: ["Drama", "Horror"],
    description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    trailer: "https://youtu.be/NlJZ-YgAt-c",
  },
  {
    name: "Peaky Blinders",
    releaseYear: 2013,
    director: "Steven Knight",
    picture: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    genre: ["Drama", "Crime"],
    description: "A gangster family epic set in 1919 Birmingham, England, centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    trailer: "https://youtu.be/EM12mcTEI88",
  },
    {
      name: "Spirited Away",
      releaseYear: 2001,
      director: "Hayao Miyazaki",
      picture: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      genre: ["Animation", "Adventure", "Fantasy"],
      description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      trailer: "https://youtu.be/GAp2_0JJskk",
    },
    {
      name: "Shogun",
      releaseYear: 2024,
      director: "Justin Marks",
      picture: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
      genre: ["Drama", "Action", "History"],
      description: "In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
      trailer: "https://youtu.be/HIs9x49DK7I",
    },

  ];
  document.addEventListener("DOMContentLoaded", function() {
    // Create and add heading before appending cards
    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Joao's Favorite Movies/Tv Shows Collection";
    document.body.insertBefore(heading, document.body.firstChild); 
  
    const container = document.getElementById("collection-container");
  
    collection.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      // Create elements for each property and populate content
      const title = document.createElement("h2");
      title.textContent = item.name;
      card.appendChild(title);
  
      const image = document.createElement("img");
      image.src = item.picture;
      image.alt = item.name;
      card.appendChild(image);
  
      const description = document.createElement("p");
      description.textContent = "Description: " + item.description;
      card.appendChild(description);
  
      const genreContainer = document.createElement("p");
      genreContainer.classList
      genreContainer.textContent = "Genre: " + item.genre.join(", ");
      card.appendChild(genreContainer);
  
      if (item.trailer) {
        const trailerLink = document.createElement("a");
        trailerLink.href = item.trailer;
        trailerLink.target = "_blank";
        const icon = document.createElement("i");
        icon.textContent = "";
        trailerLink.appendChild(icon);
        trailerLink.textContent = "Watch Trailer";
        card.appendChild(trailerLink);
      }
  
      container.appendChild(card);
    });
  });
  