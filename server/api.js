const axios = require('axios');

let options = {
  url: 'https://acnhapi.com/'
}

const getVillagerData = (endpoint) => {
  return axios.get(options.url + `${endpoint}`)
  .then(data => {
    return data;
  })
  .catch(err => console.log(err))
}

module.exports.getVillagerData = getVillagerData;