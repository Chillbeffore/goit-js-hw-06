const firstItemEl = document.querySelectorAll("#categories, .item");
console.log("Number of categories:", firstItemEl.length);

firstItemEl.forEach((el) => {
  console.log("Category:", el.firstElementChild.innerHTML);

  const secondaryListEl = el.lastElementChild.children.length;
  console.log("Elements:", secondaryListEl);
});
