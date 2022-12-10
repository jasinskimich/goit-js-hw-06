
const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);
const categoryElements = categoryList.forEach((e) => {
  console.log(
    `Category: ${e.querySelector("h2").textContent} \n Elements: ${
      e.querySelector("ul").childElementCount
    }`
  );
});
