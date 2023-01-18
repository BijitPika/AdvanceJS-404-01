planets=[
    {name:"Earth", value:0, value1:1, add:"https://th.bing.com/th/id/R.0e44c9dab4cb1e5ca0aa9777e98d1718?rik=KiR6CE8zlUb21A&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-earth-planet-globe-worldnatureearthglobeplanetworld-9615246779010hvvt.png&ehk=eHh%2bUpvkEIdrnYszQca98wLi%2fZoicdAQBalf3%2bEtEqk%3d&risl=1&pid=ImgRaw&r=0"},
    {name:"Mercury", value:1, value1:3.61 ,add:"https://th.bing.com/th/id/R.8e1e86e3b1dcf3b2a3ec5f331deb3259?rik=%2b2eY5ew4CLNThQ&riu=http%3a%2f%2fpre03.deviantart.net%2f2965%2fth%2fpre%2ff%2f2011%2f316%2f5%2f1%2fmercury_render_by_laurenshebberecht-d4fx2ir.png&ehk=qn%2fqCFj9DbtZKfAVIDAE6LCdi7k5i8DZwPudnHM4YBc%3d&risl=&pid=ImgRaw&r=0://cdn.britannica.com/05/110305-050-42CA686B/Mercury-Wide-Angle-Messenger-probe-hemisphere-image-Jan-14-2008.jpg"},
    {name:"Venus", value:2, value1:8.83,add:"https://th.bing.com/th/id/R.2901e3da973b12e0b3bf2f803d99a22d?rik=XxwCafSwxNivGQ&riu=http%3a%2f%2fwww.pngimagesfree.com%2fNATURE%2fPlanet%2fVenus%2fPNG-Venus-Planet-image.png&ehk=RvpIKBBxH8vh0NvfFJY8Cku362ALZJfzQZAH40gknys%3d&risl=&pid=ImgRaw&r=0"},
    {name:"Mars", value:3, value1:3.75,add:"https://www.freepnglogos.com/uploads/mars-png/planet-mars-grahamtg-deviantart-1.png"},
    {name:"Jupiter", value:4, value1:26,add:"https://th.bing.com/th/id/R.53ce2cd9b39f2f90b8317bc762ee402a?rik=e3YlYXbJjIkq9A&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f6%2f68%2fJupiter.png&ehk=KgIh0xSu77d7quilN0zv1E9bVRAddwy%2b6f%2fplagXb8c%3d&risl=&pid=ImgRaw&r=0"},
    {name:"Saturn", value:5, value1:11.2,add:"https://th.bing.com/th/id/R.9672268f036f88b16cc9d0a32bd24946?rik=IdKOMzBLtUYaOw&riu=http%3a%2f%2fspace-facts.com%2fwp-content%2fuploads%2fsaturn-transparent.png&ehk=M6GMPJCd9TOZhBuvQLuqj4P2BZt05ASP1Z%2bCopD%2fbh0%3d&risl=&pid=ImgRaw&r=0"},
    {name:'Uranus', value:6, value1:10.5,add:"https://th.bing.com/th/id/R.4bb449ca254cce3d40bf9d148ed41b77?rik=8BBQW70%2fkR%2fiNg&riu=http%3a%2f%2fspace-facts.com%2fwp-content%2fuploads%2furanus-transparent.png&ehk=htaN%2bB0Cr%2b%2fkJDV2xqrOrWP7Jk4whpW058IVOxirHBE%3d&risl=&pid=ImgRaw&r=0"},
    {name:'Neptune', value:7, value1:13.3,add:"https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/AW_187527_OUTERPLANETS_Neptune_hx4ioc.png"},
    {name:'Pluto', value:8, value1:0.61,add:"https://th.bing.com/th/id/R.42f171c361d188d4af49e938be1223f7?rik=Cz6WAiAExDp2QA&riu=http%3a%2f%2fsites.psu.edu%2fscinews%2fwp-content%2fuploads%2fsites%2f29024%2f2015%2f09%2fPluto-Icon-01.png&ehk=5y%2bhPTztiiPkYnHLWcF8ZGyXw2S1AHZM1u06jcfCYzE%3d&risl=&pid=ImgRaw&r=0"},
    {name:'Moon', value:9, value1:1.625, add:"https://purepng.com/public/uploads/medium/purepng.com-moonmoonastronomical-bodyfifth-largest-natural-satellitenatural-satellitemoon-light-1411527067371obkao.png"},
    {name:'Sun', value:10, value1:28.2, add:"https://th.bing.com/th/id/R.3ab61b2566db7a3ea287c84cbe366a83?rik=Lkm%2buIkQWyV%2fxg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fsun-png-bright-sun-2249.png&ehk=RFiM7TYhJPpGfUBJjrBSqgbayQ%2bQ1B8qv7ZO9WW9Uv8%3d&risl=&pid=ImgRaw&r=0"},
]
planets.map((e)=>{
      let ele=document.getElementById('planet');
      let opt=document.createElement('option');
      opt.setAttribute("value",e.value);
      opt.innerText=`${e.name}`
      ele.appendChild(opt);
    
})

let city="";
    document.getElementById('planet').addEventListener('change', (showCity)=>{
        city=showCity.target.value;
        let text=document.getElementById('text')
        
       
    })



    function hello(){
        
        if(text.value!="")  {
            console.log(planets[Number(city)].add);
            let ans=planets[Number(city)].value1+Number(text.value)
            document.getElementsByClassName("card")[0].innerHTML=`<div class="innercard"><img src="${planets[Number(city)].add}" alt="" height="250px" width="250px">
            <div><p>Your Weight On planet : ${planets[Number(city)].name}</p>
            <h3> ${ans} kg</h3></div></div>`
        }
        else{
            document.getElementsByClassName("card")[0].innerHTML=`<div class="innercard">Enter a Value First</div>`
            
           
        }
    
}

