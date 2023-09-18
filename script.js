
const generateMemeBtn = document.querySelector('.generate-meme-btn')
const memeImage = document.querySelector('.meme-generator img')
const memTitle = document.querySelector('.meme-title')
const memeAuthor = document.querySelector('.meme-author')


function updateDetails(url, title, author) {
    memeImage.setAttribute('src', url);
    memTitle.innerHTML = title;
    memeAuthor.innerHTML = `meme by ${author}`;
}

// const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//         .then((response) => response.json())
//         .then(data => {
//             updateDetails(data.url, data.title, data.author);
//         })
// }
const generateMeme = async () => {
    try {
        memTitle.innerHTML = "Loading.....";
        const response = await fetch("https://meme-api.com/gimme/wholesomememes");
        const data = await response.json();
        updateDetails(data.url, data.title, data.author);
    } catch (error) {
        console.error("Error fetching meme:", error);
    }
};

generateMemeBtn.addEventListener('click', generateMeme);
generateMeme()