const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "1u3Qsqafe3h4q1xgQAi9Bg==0ogzqFPxds7kGUFH";

const options = {
    method: "Get",
    headers: {
        "X-Api-Key": apiKey
    },
};

const apiUrl =" https://api.api-ninjas.com/v1/dadjokes?limit=1";

const getJoke = async () => {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }
};



btnEl.addEventListener("click", getJoke);