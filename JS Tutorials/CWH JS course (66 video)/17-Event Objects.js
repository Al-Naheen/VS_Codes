console.log("This is tutorial 17 on events");

document.getElementById("heading").addEventListener("click", function(e) {
  let variable;
  alert("You have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;

  //Not Understand
  variable = e.movementX;
  variable = e.movementY;

  console.log(variable);
  // location.href = '//codewithharry.com'
});

