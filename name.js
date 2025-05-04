var title = [
    "Prof. ",
    "Mr. ",
    "Mrs. ",
    "Dr. ",
    "Sr. "
  ]
  var firstName = [
    "Dweedle ",
    "Quagon ",
    "Booty ",
    "Randel ",
    "Grant ",
    "Dylan ",
    "Warren "
  ]
  var lastName = [
    "dickenstein ",
    "Twindle ",
    "Smith ",
    "Roberts ",
    "Raposa ",
    "Cedrid ",
    "Molif "
  ]

  const btn = document.getElementById("button");
  const output = document.getElementById("uNameInput");
  const output2 = document.querySelector(".randomName");

document.getElementById("button").addEventListener("click", generate)
  
  function generate() {
  var randomTitle = title[Math.floor(Math.random() * title.length)];
  var randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
  var randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
  var finalName = randomTitle + randomFirstName + randomLastName;
  output.value = finalName;
  output2.textContent = finalName;
  };



  