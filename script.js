import translator from "./translator.js";
// const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
// const SpeechRecognitionEvent =
//     window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
//
// const recognition = new SpeechRecognition();
//
// // const speechRecognitionList = new SpeechGrammarList();
//
// // recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;
//
// const diagnostic = document.getElementById('diagnostic');
//
// document.addEventListener('mousedown', () => {
//     recognition.start();
//     console.log("Ready to receive a color command.");
// });
//
// recognition.onresult = (event) => {
//     const resultText = event.results[0][0].transcript;
//     diagnostic.textContent = `Result received: ${resultText}.`;
//     console.log(resultText);
// };
const outputText = await translator("Hello, world");
