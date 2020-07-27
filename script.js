// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let cargoInput = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
         alert("All fields are required.");
         event.preventDefault();
      };
      if (isNaN(pilotInput.value) === false) {
         alert ("Enter a valid pilot's name.");
         event.preventDefault();
      }
      else if (isNaN(copilotInput.value) === false) {
         alert ("Enter a valid co-pilot's name.");
         event.preventDefault();
      }
      else if (isNaN(fuelInput.value)) {
         alert("Invalid fuel entry.");
         event.preventDefault();
      }
      else if (isNaN(cargoInput.value)) {
         alert("Invalid cargo entry.");
         event.preventDefault();
      };
      pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch.`;
      copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} is ready for launch.`;

      if (fuelInput.value <= 10000 && cargoInput.value <= 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.textContent = "Fuel level is too low for launch.";
         cargoStatus.textContent = "Cargo mass is low enough for launch.";
         launchStatus.textContent = "Shuttle is not ready for launch.";
         launchStatus.style.color = "red";
      }
      else if (cargoInput.value > 10000 && fuelInput.value > 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.textContent = "Fuel level is high enough for launch.";
         cargoStatus.textContent = "Cargo mass is too heavy for launch.";
         launchStatus.textContent = "Shuttle is not ready for launch.";
         launchStatus.style.color = "red";
      }
      else if (cargoInput.value > 10000 && fuelInput.value <= 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.textContent = "Fuel level is too low for launch.";
         cargoStatus.textContent = "Cargo mass is too heavy for launch.";
         launchStatus.textContent = "Shuttle is not ready for launch.";
         launchStatus.style.color = "red";
      }
      else {
         faultyItems.style.visibility = "visible";
         fuelStatus.textContent = "Fuel level high enough for launch.";
         cargoStatus.textContent = "Cargo mass is low enough for launch.";
         launchStatus.textContent = "Shuttle is ready for launch.";
         launchStatus.style.color = "green";
      }
   })
})



window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       response.json().then(function(json) {
          let index = 0 + Math.floor(Math.random() * (5 - 0 + 1) + 0)
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `
       })
   })
})

