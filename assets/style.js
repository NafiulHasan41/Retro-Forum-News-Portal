
const loadDataLates = async () =>{

    const resp = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");

    const data = await resp.json();

   
    displayLatesNews(data)

}

const displayLatesNews= data =>{

    console.log(data);
}

loadDataLates();