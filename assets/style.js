
const loadDataLates = async () =>{

    const spin2=document.getElementById("spinner2");
    spin2.classList.remove("hidden");

    const resp = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");

    const data = await resp.json();

    const news= data;

    setTimeout(() => {
        displayLatesNews(news);
      }, 2000);
   

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


    const spin2=document.getElementById("spinner2");
    spin2.classList.add("hidden");

   


}

loadDataLates();


// for dicussion section

const loadDataNews = async (conDiton) =>{

    const spin1=document.getElementById("spinner1");
    spin1.classList.remove("hidden");


    if(conDiton === undefined)
    {
        const resp = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");

        const data = await resp.json();
        const news= data.posts;

        setTimeout(() => {
            displayAllNews(news);
          }, 2000);

   
  
    }
    else
    {
        const resp = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${conDiton}`);

        const data = await resp.json();
        const news= data.posts;

        setTimeout(() => {
            displayAllNews(news);
          }, 2000);
    }
  


    

}

const displayAllNews= news =>{
     
    const allnewsCardContainer = document.getElementById("newsContainer");

    allnewsCardContainer.textContent='';

    news.forEach(value => {
        
        const lNewsCard = document.createElement("div");
       

        lNewsCard.classList=`hero max-w-[772px] bg-base-200 rounded-3xl my-3`;

        lNewsCard.innerHTML =`
        <div id="${value.id}" class="hero-content flex-col lg:flex-row">
        <div class="indicator rounded-2xl ">
            <span class="indicator-item badge ${value.isActive ? "bg-green-600":"bg-red-600"}"></span>
            <div class="grid w-20 h-20 bg-base-300 "><img class=" w-20 h-20 rounded-2xl" src="${value.image}" alt="Shoes" /></div>
        </div>

      <div class="p-3 md:w-[550px]">
        <div class="flex flex-row justify-start gap-2">
            <p class="font-medium text-gray-600 text-xs">#${value.category}</p>
            <p class="font-medium text-gray-600 text-xs">Author : ${value.author.name}</p>
        </div>
        <h1 class=" font-bold text-xl text-black">${value.title}</h1>
        <p class="py-1 text-sm font-normal text-gray-700">${value.description}</p>
         
        <div class=" p-2 mt-1 border-t border-dashed  border-gray-900 w-full mx-auto "></div>

        <div class="flex flex-row justify-between">

            <div class="flex flex-row justify-start gap-2">
                 <p class="text-xs"> <span class="px-1"><i class="fa-regular fa-message"></i></span>${value.comment_count}</p>
                 <p class="text-xs"> <span class="px-1"><i class="fa-regular fa-eye"></i></span>${value.view_count}</p>
                 <p class="text-xs"> <span class="px-1"><i class="fa-regular fa-clock"></i></span>${value.posted_time}</p>
            </div>

            <div>
                <p  class="Read-email-section text-xs bg-green-500 rounded-full p-2 flex items-center justify-center" onclick="showdetails('${value.title}','${value.view_count}')"> <span class="px-1 text-white"><i class="fa-regular fa-envelope-open"></i></span></p>
            </div>
        </div>

      </div>
       </div>`;


        allnewsCardContainer.appendChild(lNewsCard);


    });


    const spin1=document.getElementById("spinner1");
    spin1.classList.add("hidden");

    const spin11=document.getElementById("newsRead");
    spin11.classList.remove("hidden");




  
    
}

// loadDataNews();

window.addEventListener('load' ,loadDataNews());
window.removeEventListener('load' ,loadDataNews);



const handleSearch=()=>
{
    const searchInput = document.getElementById("nSearch");

    const sInputTxt = searchInput.value;
     loadDataNews(sInputTxt);
   
}


// Now eventlistner 
let count1 =0;


const remailnumber = document.getElementById("remail1");
const remailnumberR = document.getElementById("containerReadEmail");

function showdetails(title,count){

    ++count1;
    remailnumber.innerText=count1;
      
    const lNewsCard = document.createElement("div");
       

        lNewsCard.classList=`flex flex-row justify-between gap-2 bg-white p-2 rounded-2xl mt-4`;

        lNewsCard.innerHTML =`
        <p class="text-sm text-gray-400">${title}</p>
        <div class="flex flex-row justify-start gap-2 items-center">
            <p class="text-xs"><span class="px-1"><i class="fa-regular fa-eye"></i></span></p>
            <p class="text-xs">${count}</p>
        </div>
        `;

        remailnumberR.appendChild(lNewsCard);

}



