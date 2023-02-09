planets=[
    {name:"Earth", value:0, value1:1, add:"./planets/earth.png"},
    {name:"Mercury", value:1, value1:3.61 ,add:"./planets/mercury.png"},
    {name:"Venus", value:2, value1:8.83,add:"./planets/venus.png"},
    {name:"Mars", value:3, value1:3.75,add:"./planets/mars"},
    {name:"Saturn", value:5, value1:11.2,add:"./planets/saturn.png"},
    {name:'Uranus', value:6, value1:10.5,add:"./planets/uranus.png"},
    {name:'Neptune', value:7, value1:13.3,add:"./planets/neptune.png"},
    {name:'Pluto', value:8, value1:0.61,add:"./planets/pluto.png"},
    {name:'Moon', value:9, value1:1.625, add:"./planets/moon.png"},
    {name:'Sun', value:10, value1:28.2, add:"./planets/sun.png"},
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

