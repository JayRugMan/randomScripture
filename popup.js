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

// NEW: Calculate total chapters and create a cumulative chapter count for mapping
const totalChapters = books.reduce((sum, book) => sum + book.chapters, 0); // 239 chapters
const chapterRanges = [];
let cumulativeChapters = 0;
books.forEach(book => {
    chapterRanges.push({
        name: book.name,
        abbr: book.abbr,
        start: cumulativeChapters + 1,
        end: cumulativeChapters + book.chapters
    });
    cumulativeChapters += book.chapters;
});

function getRandomChapter() {
    // NEW: Pick a random chapter number from 1 to 239 (total chapters)
    const randomChapterIndex = Math.floor(Math.random() * totalChapters) + 1;

    // NEW: Find which book this chapter belongs to by checking cumulative ranges
    const selectedBook = chapterRanges.find(range => 
        randomChapterIndex >= range.start && randomChapterIndex <= range.end
    );

    // NEW: Calculate the chapter number within the selected book
    const chapterNumber = randomChapterIndex - selectedBook.start + 1;

    // Construct the URL using the selected book's abbreviation and chapter number
    const url = `https://www.churchofjesuschrist.org/study/scriptures/bofm/${selectedBook.abbr}/${chapterNumber}?lang=eng`;
    
    // Display the result with your custom styling
    const resultDiv = document.getElementById('result');
    resultDiv.style.padding = '5px';
    resultDiv.style.paddingBottom = '20px';
    resultDiv.style.border = '2px solid rgba(198, 183, 68, 1)';
    resultDiv.innerHTML = `
        <p>${selectedBook.name} ${chapterNumber}</p>
        <a href="${url}" target="_blank">Read it here</a>
    `;
}

// Add event listener to the button when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('generateButton');
  button.addEventListener('click', getRandomChapter);
});