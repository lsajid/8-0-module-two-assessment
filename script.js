let url = "https://ghibliapi.herokuapp.com/films"

fetch(url)
    .then((res)=>{
        return res.json();
    }).then((movies)=>{
        console.log(movies);
        for(let movie of movies){
            console.log(movie.title)
        let select = document.querySelector("#select-movie");
        ///create options
        let newOption = document.createElement("option");
        newOption.textContent = movie.title;
        newOption.value = movie.title
        select.append(newOption)
        }
    }).catch((err)=>{
        console.log(err)
    })