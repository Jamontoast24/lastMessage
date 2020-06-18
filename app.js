var buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", function() {
  var result = document.getElementById("textContents");
  lastText.textContent = result.value;
  if (lastText.textContent === ""){
    test.textContent = "Enter A Valid Message";
  } else {
    lastText.textContent = result.value;
    test.textContent = "";
  }

});



