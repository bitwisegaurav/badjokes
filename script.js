const joke = document.querySelector('#joke');
// const getJoke = async () => {
//     const jokeRes = await fetch('https://icanhazdadjoke.com/', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
//     const jokeData = await jokeRes.json();
//     console.log(jokeData);
//     joke.innerHTML = jokeData.joke;
// }
// getJoke();
fetch('https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,political').then(async (data) => {
    let data1;
    data1 = await data.json();
    if (data1.category === "Dark")
        document.body.classList.add("programmer");
    else
        document.body.classList.remove("programmer");

    if (data1.type === "single")
        joke.innerHTML = data1.joke;
    else
        joke.innerHTML = data1.setup + `<br><br>` + data1.delivery;
    // console.log(data1);
}).catch((err) => {
    console.log("There is some error which is : " + err);
})