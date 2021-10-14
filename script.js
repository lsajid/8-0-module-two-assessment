let url = "https://ghibliapi.herokuapp.com/films"

fetch(url)
    .then((res)=>{
        return res.json();
    }).then((movies)=>{
        console.log(movies);
        /////// categories ///////
        let select = document.querySelector("#select-movie");

        for(let movie of movies){
            let newOption = document.createElement("option");
            newOption.textContent = movie.title;
            newOption.value = movie.title;
            select.append(newOption);
            /////// ///////
        }
        let names = document.querySelectorAll("#select-movie")
        /////Movie Description //// 


        select.addEventListener("change",(e)=>{
            console.log(e.target.value);
            let container = document.querySelector("#display-info-container");
            let movieTitle = document.createElement("h3");
            let year = document.createElement("p");
            let description = document.createElement("p")

            for(let movie of movies){
            movieTitle.textContent = e.target.value;
            year.textContent = movie.release_date;
            description.textContent = movie.description;
           }
        container.append(movieTitle, year, description)
        })
        ///////////
    }).catch((err)=>{
        console.log(err)
    })