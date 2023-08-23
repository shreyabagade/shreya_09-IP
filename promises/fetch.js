let url = 'https://catfact.ninja/fact';
function fetchData(url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response =>{
            if(!response.ok){
            throw new Error('Failed to fetch');
        }
        return response.json();
    })
    .then(data => {
        resolve(data);
    })
    .catch(error => {
        reject(error);
    });
});
}
fetchData(url)
  .then(data => {
    console.log(data);
});