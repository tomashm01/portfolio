{
    const fwSkills={
        MongoDB:['#01DF01',"70%"],
        React: ['#81DAF5',"20%"],
        Docker:['#0080FF',"50%"],
        AWS:['#FFBF00',"40%"],
        NodeJS:['#6DA55F',"20%"]
    };
    
    
    document.addEventListener('DOMContentLoaded',function(e){
        let skillsDOM=document.querySelectorAll('.otraSkill');  
        skillsDOM.forEach((elemento,index)=>{
            let nombreSkill=skillsDOM[index].textContent;
            elemento.style.backgroundColor=fwSkills[nombreSkill][0];
            elemento.style.width=fwSkills[nombreSkill][1];
        });
    });
     
    
}