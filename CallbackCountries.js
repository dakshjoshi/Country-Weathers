var new1 = fetch(`https://restcountries.eu/rest/v2/all`);
//var new2 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=6f9f831ef298d3f20353e265d9e70052`)

new1
  .then(function (a) {
    return a.json();
  })

  .then(function (data) {
    console.log(data);

    var CardDeck = document.createElement(`div`);
    CardDeck.className = `card-wrapper row col-lg-9`;
    CardDeck.id = `CardDeckAbsolute`;

    for (var i in data) {
      var newCard = document.createElement(`div`);
      newCard.classList.add(`card`);
      newCard.id = `Card` + i;

      var img = document.createElement(`img`);
      img.className = `flagImage`;
      img.src = data[i].flag;
      newCard.appendChild(img);

      var Country = document.createElement(`div`);
      Country.classList.add(`country`);
      Country.id = `Country` + i;
      var countryData = document.createTextNode(data[i].name);
      Country.appendChild(countryData);
      newCard.appendChild(Country);

      var Population = document.createElement(`div`);
      PopulationData = document.createTextNode(
        `Population: ` + data[i].population
      );
      Population.appendChild(PopulationData);
      newCard.appendChild(Population);

      var Region = document.createElement(`div`);
      var RegionData = document.createTextNode(`Region: ` + data[i].region);
      Region.appendChild(RegionData);
      newCard.appendChild(Region);

      var ButtonDiv = document.createElement(`div`);
      ButtonDiv.className = `ButtonDiv`;

      var Button = document.createElement(`button`);
      Button.className = `button`;

      var WhetherLink = document.createElement(`div`);
      var linkText = document.createTextNode(`Whether`);

      WhetherLink.appendChild(linkText);

      Button.setAttribute(`onclick`, `getWeather('${data[i].capital}')`);

      Button.appendChild(WhetherLink);
      ButtonDiv.appendChild(Button);
      newCard.appendChild(ButtonDiv);

      CardDeck.appendChild(newCard);
    }

    document.body.appendChild(CardDeck);
  })
  .catch(function (err) {
    console.log(err);
  });

var division = document.createElement(`div`);
division.className = `Yoyo Oyoy`;
var divisionText = document.createTextNode(`Hey There!`);
division.appendChild(divisionText);
console.log(division);

function getWeather(a) {
  var WeatherWebsite = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=6f9f831ef298d3f20353e265d9e70052`
  );

  WeatherWebsite.then(function (bata) {
    return bata.json();
  })
    .then(function (bata1) {
      alert(
        `City: ` +
          bata1.name +
          `\nTemp: ` +
          bata1.main.temp +
          `\nFeels like: ` +
          bata1.main.feels_like +
          `\nMin Temperature: ` +
          bata1.main.temp_min +
          `\nMax Temperature: ` +
          bata1.main.temp_max +
          `\nPressure: ` +
          bata1.main.pressure +
          `\nVisibility: ` +
          bata1.visibility
      );
      console.log(bata1);
    })
    .catch(function (err) {
      return err;
    });
}
