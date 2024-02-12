function toggleAccordion(item) {
  var content = item.querySelector(".accordion-item-content");
  var accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (otherItem) {
    var otherContent = otherItem.querySelector(".accordion-item-content");
    if (otherItem !== item) {
      otherContent.style.maxHeight = "0";
      otherContent.style.margin = "0 22px 0 22px";
      otherItem.classList.remove("selected");
    }
  });

  if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.margin = "0 22px 22px 22px";
    item.classList.add("selected");
    content.classList.add("selected");
  } else {
    content.style.maxHeight = "0";
    content.style.margin = "0 22px 0px 22px";
    item.classList.remove("selected");
  }
}
