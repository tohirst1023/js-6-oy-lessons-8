let numberInput = document.querySelector(".name");
let ageInput = document.querySelector(".age");
let button = document.querySelector("button");

button.addEventListener("click", function (event) {
  event.preventDefault();

  fetch("https://dummyjson.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let users = data.users;
      let filteredUsers = users.filter(function (user) {
        return user.age > Number(ageInput.value);
      });

      for (let i = 0; i < Number(numberInput.value); i++) {
        let box = document.createElement ("div")
        let name = document.createElement("h2") 
        let age = document.createElement("p")
      
        name.textContent = `${filteredUsers[i].firstName} ${filteredUsers[i].lastName}`;
        age.textContent =filteredUsers [i].age

        box.appendChild(name);
        box.appendChild(age);
        button.appendChild(box);
      }
    });
});
