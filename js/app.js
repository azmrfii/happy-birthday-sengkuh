if ("speechSynthesis" in window) {
    // html elements
    var hdemo = document.getElementById("demo"),
    hvoice = document.getElementById("voice"),
    hvol = document.getElementById("vol"),
    hpitch = document.getElementById("pitch"),
    hrate = document.getElementById("rate"),
    hmsg = document.getElementById("msg"),
    hgo = document.getElementById("go");
  
    // voices
    var voices = () => {
      speechSynthesis.getVoices().forEach((v, i) => {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = v.name;
        hvoice.appendChild(opt);
      });
    };
    voices();
    speechSynthesis.onvoiceschanged = voices;
  
    // speak
    var speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.voice = speechSynthesis.getVoices()[hvoice.value];
      msg.text = hmsg.value;
      msg.volume = +hvol.value;
      msg.pitch = +hpitch.value;
      msg.rate = +hrate.value;
      speechSynthesis.speak(msg);
      return false;
    };
  
    // enable form
    hdemo.onsubmit = speak;
    hgo.disabled = false;
}