let changeDisplay = (name, name2) => {
  let hamburger = document.getElementsByClassName(name);
  let mobileNav = document.getElementsByClassName(name2);

  if (hamburger[0].style.display === "none") {
    hamburger[0].style.display = "flex";
    mobileNav[0].style.display = "none";

    return;
  }
  hamburger[0].style.display = "none";
  mobileNav[0].style.display = "flex";
};
