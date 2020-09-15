function generateBeats(parent, count, title, time, bpm, tag) {
  let rezultat = "";
  for (let i = 0; i < count; i++) {
    rezultat += `<div class="beat" id="beat${i}">
    <div>
      <img src="assets/img/logo.jpg" width="50" height="50" alt="photo" />
      <span class="beat-title">${beatName[i]}</span>
    </div>
    <div>
      <span class="beat-time">${beatTime[i]}</span>
      <span class="beat-bpm">${bpm[i]}</span>
      <span class="beat-tags">${tags[i]}</span>
    </div>
    <div>
      <div class="icons">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add
      </div>
      <div class="icons">
        <i class="fa fa-share-alt" aria-hidden="true"></i>
      </div>
      <div class="icons">
        <i class="fas fa-download"></i>
      </div>
    </div>
  </div>`;
  }
  parent.innerHTML = rezultat;
}

let beatName = ["1", "2", "3", "4"];

let beatTime = ["2:30", "3:30", "4:40", "10:20"];

let bpm = ["110", "120", "130", "151"];

let tags = ["Type", "Type", "Type", "Love"];

let beatlink = ["pachet.mp3", "jirus.mp3", "vanius.mp3", "milckyway.mp3"];

generateBeats(
  document.getElementById("containerForBeats"),
  beatName.length,
  beatName,
  beatTime,
  bpm,
  tags
);
