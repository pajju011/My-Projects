//api
// "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";
const baseURL = "https://api.frankfurter.app/latest";

//acess element
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg=document.querySelector(".msg")

// country options list
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

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtvalue = amount.value;
  if (amtvalue === "" || amtvalue < 1) {
    amtvalue = 1;
    amount.value = "1";
  }
  //console.log(fromcurr.value,tocurr.value);
  const url = `${baseURL}?amount=${amtvalue}&from=${fromcurr.value}&to=${tocurr.value}`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data.rates[tocurr.value];
  console.log(rate);

  let finalamount=rate;
  msg.innerText=`${amtvalue} ${fromcurr.value} =${finalamount} ${tocurr.value}`
});
