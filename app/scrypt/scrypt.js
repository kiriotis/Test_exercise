let button = document
  .querySelector(".BtnTitle")
  .addEventListener("click", () => {
    document
      .querySelector(".popUP_container")
      .classList.remove("popUP_Disable");
  });

let buttonClose = document
  .querySelector(".popUP_closeBtn")
  .addEventListener("click", () => {
    document.querySelector(".popUP_container").classList.add("popUP_Disable");
  });
