axios
    .get("https://api.github.com/users/satriairawan05")
    .then(function (response) {
        const img = document.getElementById("img");
        img.src = response.data.avatar_url;
        const repository = document.getElementById("repository");
        repository.innerHTML = response.data.public_repos;
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        //
    });
