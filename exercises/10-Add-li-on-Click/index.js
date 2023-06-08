let button = document.querySelector("#superDuperButton");
let myList = document.querySelector("#myList");
button.addEventListener("click", function() {
	//your code here
   let newLi = document.createElement("li");
	 newLi.innerHTML = "FourthElemnt";
	 myList.appendChild(newLi);
});
