const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const {
    title: titleElement,
    description: descriptionElement,
    category: categoryElement
  } = event.target;
  fetch("/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: titleElement.value,
      description: descriptionElement.value,
      category: categoryElement.value
    })
  })
    .then(res => res.json())
    .then(createdCard => console.log(createdCard))
    .catch(err => console.log(err));
});
