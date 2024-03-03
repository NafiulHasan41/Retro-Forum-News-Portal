
const loadDataLates = async () =>{

    const resp = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");

    const data = await resp.json();

    const news= data;

   
    displayLatesNews(news)

}

const displayLatesNews= news =>{

    const newsCardContainer = document.getElementById("newsCardContainer");
    
    news.forEach(value => {
        
        const lNewsCard = document.createElement("div");
       

        lNewsCard.classList=`card md:w-96 bg-base-100  shadow-xl`;

        lNewsCard.innerHTML =`

        <figure class="px-5 md:px-10 pt-5 md:pt-10">
        <img src="${value.cover_image}" alt="Shoes" class="rounded-xl w-full" />
      </figure>

      <div class="card-body items-start text-start p-2 md:p-5">
          <div>
              <p class="text-xs"> <span class="px-2"><i class="fa-regular fa-calendar"></i></span>${value.author?.posted_date ? value.author.posted_date: "No publish date" }</p>
          </div>
        <h2 class="card-title text-lg text-black font-extrabold">${value.title}</h2>
        <p class="text-sm md:text-base">${value.description}</p>
        <div class=" mt-2 flex flex-row gap-2">
           <div class="card-actions">
              <img src="${value.profile_image}" alt="Shoes" class="rounded-full h-11 w-11 object-cover">
           </div>

           <div>
              <h2 class="card-title text-sm text-black font-extrabold">${value.author?.name ? value.author.name: "Name not found"}</h2>
              <p class="text-xs ">${value.author?.designation ? value.author.designation: "Unknown"}</p>
           </div>
        </div>
      </div>
        
        `;

        newsCardContainer.appendChild(lNewsCard);

        
    });

   


}

loadDataLates();