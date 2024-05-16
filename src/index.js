function displayTips(response) {
  new Typewriter("#tips", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "✈️",
    delay: 1,
  });
}

function generateTips(event) {
  event.preventDefault();
  let userRequest = document.querySelector("#user-input").value;
  let apiKey = "dec30ab936f6fe43ot4b0dead25ade10";
  let prompt = `Generate travel tips about ${userRequest}`;
  let context =
    "User instructions: Create a fun and casual list of 5 tips for travelling to the country of choice in basic HTML format. Keep in bullet points. Integrate the languages or words native to that country. Finish the list by saying goodbye in the native language.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let inputElement = document.querySelector("#tips");
  inputElement.classList.remove("hidden");
  inputElement.innerHTML = `<div class="blink">✈️🌏 Making our way over to ${userRequest} to give you only the best tips ...</div>`;
  axios.get(apiURL).then(displayTips);
}

let travelFormElement = document.querySelector("#travel-tips-form");
travelFormElement.addEventListener("submit", generateTips);

window.onload = function () {
  document.querySelector("#user-input").value = "";
};
