async function getData(url,show){
    show.innerHTML=null;
    let res=await fetch(url);
    let data=await res.json();
    
    return data;

}


 function append(data,show){
    let fdata= data
    console.log(fdata);
    console.log(fdata.meals[0].strSource);
    


    fdata.meals.forEach(({strMealThumb,strCategory,strInstructions,strMeal,strArea,strSource,strYoutube}) => {
       
        
        var i=document.createElement('img');
        i.src=strMealThumb;

        
        var e=document.createElement('p');
        e.innerHTML=strMeal;
         
        
        var c=document.createElement('p');
        c.innerHTML=strCategory;

         
        var d=document.createElement('p');
        d.innerHTML=strInstructions;
         
        
        var f=document.createElement('p');
        f.innerHTML=strArea;
        
        
        var a1=document.createElement('div');
        var a=document.createElement('a');
        a.innerHTML="click here to learn more";
        a1.append(a);
        
        a.href=strSource;
         

        var y1=document.createElement('div');
        
        var y=document.createElement('a');
        y.innerHTML='Click here to watch recipe video';
        y.href=strYoutube;
        y1.append(y);
       

        var hr=document.createElement('hr');
        hr.style="margin-bottom:10%";

        show.append(i,e,c,f,d,a1,y1,hr);


        
        console.log(strMealThumb);
    });
    

    
}

export {getData,append};