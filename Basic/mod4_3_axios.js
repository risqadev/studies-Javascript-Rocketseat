axios.get('https://api.github.com/users/rscamacho')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });