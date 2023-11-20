// Make a request for a user with a given ID
axios.get('https://api.github.com/users/satriairawan05')
.then(function (response) {
// handle success
    const img = document.getElementById('img');
    img.src = response.data.avatar_url;
})
.catch(function (error) {
// handle error
console.log(error);
})
.finally(function () {
// always executed
});
