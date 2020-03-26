// Write your JavaScript code here!




window.addEventListener("load", function() {

this.fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      const missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[5].name}</li>
            <li>Diameter: ${json[5].diameter}</li>
            <li>Star: ${json[5].star}</li>
            <li>Distance from Earth: ${json[5].distance}</li>
            <li>Number of Moons: ${json[5].moons}</li>
         </ol>
         <img src="${json[5].image}"></img> 
      `;  
   })
})


   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]").value;
      let copilotInput = document.querySelector("input[name=copilotName]").value;
      let fuelInput = document.querySelector("input[name=fuelLevel]").value;
      let cargoInput = document.querySelector("input[name=cargoMass]").value;

      if (pilotNameInput === "" || copilotInput === "" || fuelInput === "" || cargoInput === "") {
        alert("All fields required."); 
        event.preventDefault();
      } 

         fuelInput = Number(fuelInput);
         cargoInput = Number(cargoInput);
   
      if (isNaN(fuelInput) === true) {
         alert("Please enter a valid number.");
         event.preventDefault();
      } 
      
      if (isNaN(cargoInput) === true) {
         alert("Please enter a valid number.");
         event.preventDefault();
      } 

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotInput} is ready for launch`;

      
      
      if (fuelInput < 10000) {
         let faultyItems = document.getElementById("faultyItems");
         let fuelStatus = document.getElementById("fuelStatus");
         let launchStatus = document.getElementById("launchStatus");
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = `Not enough fuel for mission.`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
      } if (cargoInput > 10000) {
         let faultyItems = document.getElementById("faultyItems");
         let cargoStatus = document.getElementById("cargoStatus");
         let launchStatus = document.getElementById("launchStatus");
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = `Cargo mass too high for liftoff.`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
      } if (fuelInput >= 10000 && cargoInput <= 10000) {
         let launchStatus = document.getElementById("launchStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         launchStatus.style.color = "green";
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;

      } 
   
   });
   
});


