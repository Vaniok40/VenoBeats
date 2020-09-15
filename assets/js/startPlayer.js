let n = document.querySelectorAll("[id^=beat]").length; //numarul de elemente care se numara in beaturi

// setarea unui anumit beat la player
for (let i = 0; i < n; i++) {
  document.getElementById(`beat${i}`).addEventListener("click", () => {
    document.getElementById("player").style.height = "80px";
    changeData(i);
    document.getElementById("song").play();
  });
}

//schimbarea de date in player
function changeData(current) {
  let name = document.querySelector(`div#beat${current}>div:first-child>span`)
    .innerHTML;
  document.querySelector("div#player>div.data>div.song-name").innerHTML = name;
  document.getElementById("song").src = `assets/audio/${beatlink[current]}`;
  document.querySelector("i.play").style.display = "none";
  document.querySelector("i.pause").style.display = "block";
}

function changeData2(current) {
  let name = document.querySelector(`div#beat${current}>div:first-child>span`)
    .innerHTML;
  document.querySelector("div#player>div.data>div.song-name").innerHTML = name;
  document.querySelector("i.play").style.display = "none";
  document.querySelector("i.pause").style.display = "block";
}

document.querySelector("div.play-pause").addEventListener("click", () => {
  if (document.querySelector("i.play").style.display == "block") {
    document.querySelector("i.play").style.display = "none";
    document.querySelector("i.pause").style.display = "block";
  } else {
    document.querySelector("i.play").style.display = "block";
    document.querySelector("i.pause").style.display = "none";
  }
});

//aparitia si diparitia volumului mute/up
document.querySelector(".volume>div").addEventListener("click", () => {
  if (document.querySelector(".fa-volume-up").classList.contains("show")) {
    document.querySelector(".fa-volume-up").classList.add("hide");
    document.querySelector(".fa-volume-up").classList.remove("show");
    document.querySelector(".fa-volume-off").classList.add("show");
    document.querySelector(".fa-volume-off").classList.remove("hide");
    document.getElementById("song").volume = 0;
    document.querySelector(".volume>input").value = 0;
  } else {
    document.querySelector(".fa-volume-up").classList.add("show");
    document.querySelector(".fa-volume-up").classList.remove("hide");
    document.querySelector(".fa-volume-off").classList.add("hide");
    document.querySelector(".fa-volume-off").classList.remove("show");
    document.getElementById("song").volume = 0.5;
    document.querySelector(".volume>input").value = 0.5;
  }
});

//schimbarea volumului
document.querySelector(".volume>input").addEventListener("change", () => {
  let vol = document.querySelector(".volume>input").value;
  document.getElementById("song").volume = vol;
});

//next si prev butoane
document.querySelector(".backward").addEventListener("click", () => {
  let path = document.getElementById("song").src;
  document.getElementById("song").pause();
  let res = path.split("audio/")[1];
  for (let i = 0; i < n; i++) {
    if (res == beatlink[i]) {
      document.getElementById("song").src = `assets/audio/${beatlink[i - 1]}`;
      document.getElementById("song").play();
      changeData2(i - 1);
    }
  }
});

document.querySelector(".forward").addEventListener("click", () => {
  let path = document.getElementById("song").src;
  document.getElementById("song").pause();
  let res = path.split("audio/")[1];
  for (let i = 0; i < n; i++) {
    if (res == beatlink[i]) {
      document.getElementById("song").src = `assets/audio/${beatlink[i + 1]}`;
      document.getElementById("song").play();
      changeData2(i + 1);
    }
  }
});
