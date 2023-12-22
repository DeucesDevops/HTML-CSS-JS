const inputEL = document.getElementById('input');
const infoTextEl = document.getElementById('info-text');
const meaningContainerEl = document.getElementById('meaning-container');
const titleEl = document.getElementById('title');
const meaningEL = document.getElementById('meaning');
const audioEl = document.getElementById('audio');

async function fetchWordApi(word) {

    try {
         infoTextEl.style.display = "block";
         meaningContainerEl.style.display = "none"

         infoTextEl.innerText = `Searching the meaning of the word "${word}"...`;
         
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url)
    .then((res) => res.json());

    if (result.title) {
        meaningContainerEl.style.display = "block";
        infoTextEl.style.display = "none"
        titleEl.innerText = word;
        meaningEL.innerText = "Word Not Available";
        audioEl.src = "none";
    } else {
        infoTextEl.style.display = "none";
    meaningContainerEl.style.display = "block";
    titleEl.innerText = result[0].word;
    meaningEL.innerText = result[0].meanings[0].definitions[0].definition;
    audioEl.src = result[0].phonetics[0].audio;
    }

    } catch (error) {
        console.log(error);
        infoTextEl.innerText = `an error happend, try again later`;
    }
    
    
}


inputEL.addEventListener('keyup', (e) =>{
    if (e.target.value && e.key === 'Enter') {
        fetchWordApi(e.target.value);
    };
});



