const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById("fetch-all").onclick = function() {
		charactersAPI
			.getFullList()
			.then(characters => {

				let newHtml = characters
					.map(({ name, occupation, weapon, cartoon }) => {
            return `
            <div class="character-info">
            <div class="name">${name}</div>
            <div class="occupation">${occupation}</div>
            <div class="cartoon">${cartoon}</div>
            <div class="weapon">${weapon}</div>
            </div>`;
					})
					.join("");
      
      document.querySelector(
        ".characters-container"
      ).innerHTML = newHtml;
    })
    .catch(err => {
      console.log(err);
    });
};
  
  document.getElementById('fetch-one').onclick = () => {
    charactersAPI
			.getOneRegister()
			.then(response => {
        console.log(response)
        document.querySelector(".characters-container").innerHTML =
        `<div class="character-info">
          <div class="name">${response.name}</div>
          <div class="occupation">${response.occupation}</div>
          <div class="cartoon">${response.cartoon}</div>
          <div class="weapon">${response.weapon}</div>
          </div>`
    });
  };
  
  document.getElementById('delete-one').onclick = () => {
    charactersAPI.deleteOneRegister()
  }
  
  document.getElementById('edit-character-form').onsubmit = () => {
    charactersAPI.updateOneRegister()
  }
  
  document.getElementById('new-character-form').onsubmit = () => {
    charactersAPI.createOneRegister()    
  }
})
