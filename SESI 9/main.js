console.log("ok")

const endpoint = "https://regres.in/api/users/3"

fetch(endpoint)
.then((data) => data.json())
.then((result) => console.log(result.data))