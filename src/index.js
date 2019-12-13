console.log("hello");

function my_button() {
  const btn = document.createElement("button");
  btn.textContent = "Click Me";
  btn.addEventListener("click", e => {
    window.alert("hello");
  });
  return btn;
}

document.body.appendChild(my_button());
