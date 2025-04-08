//api
const URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";

// country options list
const dropdown = document.querySelectorAll(".dropdown select");

for (let select of dropdown) {
  for (let currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currcode === "INR") {
      //dont give extra space in name
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

//flag change while option change
const updateflag = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode]; //IN,EU...
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let newimg = element.parentElement.querySelector("img");
  newimg.src = newsrc;
};
