document
  .querySelector("#hero .indicator")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector("#hero .nav-item")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("data-target");
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  });
