// get data

fetch("https://goweather.herokuapp.com/weather/%7Bcity%7D")
    .then((res) => {
        console.log(res.status); //it will show the status 
        console.log(res.ok); //it will show the response code 
        return res.json(); //it will fetch the json object from the url
    }).then((data) => {
        console.log(data); //print the json data on console
    })

// post data

let option = {
    method: "post",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        title: "title",
        body: "this is body",
        userId: 10,
        id: 201
    }),
}
fetch('https://jsonplaceholder.typicode.com/posts', option) //posting on demo jason placeholder server
    .then(response => response.json())
    .then(json => console.log(json))