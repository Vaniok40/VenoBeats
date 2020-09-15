function generatePacks(parent, count, packName, packPrice) {
  let rezultat = "";
  for (let i = 0; i < count; i++) {
    rezultat += `<div class="pack" id="pack${i}">
    <img width="450" height="300" src="assets/img/kit.jpg" alt="Photo" />
    <p id="pack-name${i}" class="pack-name">${packName[i]}</p>
    <p id="pack-price${i}" class="pack-price">${packPrice[i]}</p>
    <button id="pack-button${i}" class="pack-button">
      <a>Detalii</a>
    </button>
    <div class="pack-share">
      <i class="fa fa-share-alt" aria-hidden="true"></i>
    </div>
  </div>`;
  }
  parent.innerHTML = rezultat;
  addEvent();
}

function addEvent() {
  for (let i = 0; i < packName.length; i++) {
    document.getElementById(`pack-button${i}`).addEventListener("click", () => {
      details(i);
    });
  }
}

function details(current) {
  let page = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="assets/css/details.css" />
      <link rel="stylesheet" href="assets/css/burger.css" />
      <title>VenoBeats</title>
    </head>
    <body>
      <div id="myNav" class="overlay">
        <div class="overlay-content">
          <a href="beats.html">Beaturi</a>
          <a href="packs.html">Sunete</a>
          <a href="contacts.html">Contacte</a>
          <a href="cart.html"
            ><i class="fa fa-shopping-cart" aria-hidden="true"></i> $0.00</a
          >
          <div class="logIn"><a href="logIn.html">Log In</a></div>
        </div>
      </div>
      <nav>
        <div class="logo"><a href="index.html">VenoBeats</a></div>
        <div>
          <ul>
            <li><a href="beats.html">Beaturi</a></li>
            <li><a href="packs.html">Sunete</a></li>
            <li><a href="contacts.html">Contacte</a></li>
          </ul>
          <div>
            <a href="cart.html"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i> $0.00</a
            >
          </div>
          <div class="logIn"><a href="logIn.html">Log In</a></div>
          <i
            onclick="toggleNav()"
            class="fa fa-bars burger"
            aria-hidden="true"
          ></i>
        </div>
      </nav>
      <section class="details">
        <div>
          <img src="assets/img/logo.jpg" alt="photo" />
        </div>
        <div>
          <p class="detail-name">
            ${packName[current]}
          </p>
          <button class="detail-button">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add ${packPrice[current]}
          </button>
          <div>
            <p>10 Claps</p>
            <p>15 Hihats</p>
            <p>10 808's</p>
            <p>5 Percs</p>
            <p>10 Openhats</p>
            <p>10 Kicks</p>
            <p>10 Snares</p>
          </div>
        </div>
      </section>
      <footer>
        <div class="logo"><a href="index.html">VenoBeats</a></div>
        <div>
          <span class="footer-item1"><a href="index.html">Acasă</a></span>
          <span class="footer-item2"><a href="beats.html">Beaturi</a></span>
          <br />
          <br />
          <span class="footer-item3"><a href="packs.html">Pack-uri</a></span>
          <span class="footer-item4"><a href="licency.html">Licențe</a></span>
          <br />
          <br />
          <span class="footer-item5"><a href="contacts.html">Contacte</a></span>
        </div>
        <div>
          <div class="footer-icons">
            <a href="https://soundcloud.com/ciobanu-ion-101160788"
              ><i class="fab fa-soundcloud"></i
            ></a>
          </div>
          <div class="footer-icons">
            <a href="https://www.youtube.com/channel/UCEiI1X-78S7_fkCMHYtOfiA"
              ><i class="fab fa-youtube"></i
            ></a>
          </div>
          <div class="footer-icons">
            <a href="https://www.instagram.com/vaniok__vaniok/"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
      </footer>
      <script src="assets/js/burger.js"></script>
    </body>
  </html>
  `;
  let oppened = window.open("", "_blank");

  oppened.document.write(page);
}

let packName = ["Nume1", "Nume2", "Nume3"];

let packPrice = ["$13.00", "$14.00", "$5.00"];

generatePacks(
  document.getElementById("containerForPacks"),
  3,
  packName,
  packPrice
);