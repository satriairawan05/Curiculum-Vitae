axios
    .get("https://api.github.com/users/satriairawan05")
    .then(function (response) {
        const img = document.getElementById("img");
        img.src = response.data.avatar_url;
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        //
    });
