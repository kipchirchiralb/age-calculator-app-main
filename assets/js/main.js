const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");

const today = new Date(); // current date

dayEl.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
monthEl.addEventListener("keyup", (e) => {
  if (e.target.value < 1 || e.target.value > 12) {
    let pError = document.createElement("p");
    pError.textContent = "Must be a valid month";
    if (document.getElementById("month-error")) {
      // do nothing
    } else {
      pError.setAttribute("id", "month-error");
      e.target.parentElement.append(pError);
    }
  } else if (yearEl.value == 2023 && e.target.value > today.getMonth()) {
    let pError = document.createElement("p");
    pError.textContent = "Must be in the past";
    if (document.getElementById("month-error")) {
      document.getElementById("month-error").textContent =
        "Must be in the past";
    } else {
      pError.setAttribute("id", "month-error");
      e.target.parentElement.append(pError);
    }
  } else {
    if (document.getElementById("month-error")) {
      document.getElementById("month-error").remove();
    }
  }
});
yearEl.addEventListener("keyup", (e) => {
  if (e.target.value.length > 4) {
    e.target.value = e.target.value.substr(0, 4);
  }
  if (e.target.value > today.getFullYear()) {
    let pError = document.createElement("p");
    pError.textContent = "Must be in the past";
    if (document.getElementById("year-error")) {
      //do nothing
    } else {
      pError.setAttribute("id", "year-error");
      e.target.parentElement.append(pError);
    }
  } else {
    if (document.getElementById("year-error")) {
      document.getElementById("year-error").remove();
    }
  }
});
