// Book of Mormon books with chapter counts and URL abbreviations
const books = [
  { name: "1 Nephi", chapters: 22, abbr: "1-ne" },
  { name: "2 Nephi", chapters: 33, abbr: "2-ne" },
  { name: "Jacob", chapters: 7, abbr: "jacob" },
  { name: "Enos", chapters: 1, abbr: "enos" },
  { name: "Jarom", chapters: 1, abbr: "jarom" },
  { name: "Omni", chapters: 1, abbr: "omni" },
  { name: "Words of Mormon", chapters: 1, abbr: "w-of-m" },
  { name: "Mosiah", chapters: 29, abbr: "mosiah" },
  { name: "Alma", chapters: 63, abbr: "alma" },
  { name: "Helaman", chapters: 16, abbr: "hel" },
  { name: "3 Nephi", chapters: 30, abbr: "3-ne" },
  { name: "4 Nephi", chapters: 1, abbr: "4-ne" },
  { name: "Mormon", chapters: 9, abbr: "morm" },
  { name: "Ether", chapters: 15, abbr: "ether" },
  { name: "Moroni", chapters: 10, abbr: "moro" }
];

function getRandomChapter() {
  // Pick a random book
  const randomBook = books[Math.floor(Math.random() * books.length)];
  // Pick a random chapter from that book
  const randomChapter = Math.floor(Math.random() * randomBook.chapters) + 1;
  // Construct the URL
  const url = `https://www.churchofjesuschrist.org/study/scriptures/bofm/${randomBook.abbr}/${randomChapter}?lang=eng`;
  
  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <p>${randomBook.name} ${randomChapter}</p>
      <a href="${url}" target="_blank">Read it here</a>
  `;
}

// Add event listener to the button when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('generateButton');
  button.addEventListener('click', getRandomChapter);
});