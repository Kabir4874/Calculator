document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;

      if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Error";
        }
      } else if (value === ".") {
        display.value = display.value + ".";
      } else if (value === "C") {
        display.value = "";
      } else if (value === "÷") {
        display.value += "/";
      } else {
        display.value += value === "x" ? "*" : value;
      }
    });
  });
});
