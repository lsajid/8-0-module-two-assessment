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

        /////Movie Description //// 
        select.addEventListener("change",(e)=>{
            selectedMovie = e.target.value;
            let container = document.querySelector("#display-info-container");
            container.textContent = "";
            let movieTitle = document.createElement("h3");
            let year = document.createElement("p");
            let description = document.createElement("p")
            
            movieTitle.textContent = e.target.value;

            for(let movie of movies){
                if(selectedMovie === movie.title){
                    year.textContent = movie.release_date;
                    description.textContent = movie.description;
                }
            }
            container.append(movieTitle, year, description);
        /////// ///////
        })

        /////////// Review ///////
        let form = document.querySelector("form");

        form.addEventListener("submit", (event)=>{
            event.preventDefault();

            let input = document.querySelector("#input");
            let li = document.createElement("li");
            let ul = document.querySelector("ul");
            let bold = document.createElement("strong");
            bold.textContent = `${select.value}: `
            li.innerHTML = input.value;
            li.prepend(bold);
            ul.append(li)
            event.target.reset(); 
        })
        ////// ///////
    }).catch((err)=>{
        console.log(err)
    })