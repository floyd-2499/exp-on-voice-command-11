
const tranOut = document.querySelector("#tran");
const txtOut = document.querySelector("#stxt");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

let record = recorder.start();

window.addEventListener("load", () => {
  record;
});

recorder.onresult = (e) => {
  const speech = new SpeechSynthesisUtterance();
  console.log(e);
  speech.text = "Hey Boss.";



  const resultIndex = e.resultIndex;
  const transcript = e.results[resultIndex][0].transcript;
  const message = transcript;
  console.log(`${transcript}`);

  if (message.includes("wake up buddy")) {
    speech.text =
      "Ah. Boss I ready at your service!";
  }

  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  console.log(`${speech.text}`);

  tranOut.append(`${message}`);
  txtOut.append(`${speech.text}`)
}
setTimeout(function () {
  window.location.reload();
}, 7000);
