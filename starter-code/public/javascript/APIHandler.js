class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
    .get(`${this.BASE_URL}/characters`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
  };

  getOneRegister () {
    const characterId = document.getElementById("character-id").value;
    console.log(characterId)
    return axios
    .get(`${this.BASE_URL}/characters/${characterId}`)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err);
    });
  }

  createOneRegister () {
    // const idInput = document.getElementById("chr-id")
    const name = document.getElementById("add-name").value
    const occupation = document.getElementById("add-occupation").value
    const weapon = document.getElementById("add-weapon").value
    const cartoon = document.getElementById("add-cartoon").value

    return axios
    .post(`${this.BASE_URL}/characters`, {
      name,
      weapon,
      occupation,
      cartoon
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
  }

  updateOneRegister () {
    const characterId = document.getElementById("chr-id").value;
    
    const id = document.getElementById("chr-id").value;
    const name = document.getElementById("chr-name").value;
    const occupation = document.getElementById("chr-occupation").value;
    const weapon = document.getElementById("chr-weapon").value;
    const cartoon = document.getElementById("chr-cartoon").value;

    console.log(characterId)
    return axios
    .put(`${this.BASE_URL}/characters/${characterId}`, {
      id,
      name,
      weapon,
      occupation,
      cartoon
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteOneRegister () {
    const characterId = document.getElementById("character-id-delete").value;
    return axios
    .delete(`${this.BASE_URL}/characters/${characterId}`)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
  }
}


