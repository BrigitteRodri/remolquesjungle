const containerImage=document.querySelector('.containerImg');
const btnNext=document.querySelector('#next');
console.log(btnNext)
const gal=document.querySelector('gal');
const btnClose=document.querySelector('#close');
const btnPrevious=document.querySelector('#previous');
const imageShow=document.querySelector('.imgShow');
let indexImg=0;
document.addEventListener('DOMContentLoaded', (e) => {
    createImg()
    const images=document.querySelectorAll('.galeryImg');
    images.forEach(image=>{
        image.addEventListener('click',()=>{ 
        addImage(image.getAttribute('src'))
        })
    })
  
    btnNext.addEventListener('click',()=>{next(images)})
    btnPrevious.addEventListener('click',()=>{previous(images)})
   
});

const addImage=(src)=>{
    change();
    imageShow.src=src
}

const change=()=>{
    containerImage.classList.toggle('move')
}
const previous=(images)=>{
    if(indexImg===0){
        indexImg=images.length-1;
    }
    imageShow.src=images[indexImg-1].src;
    indexImg--;
}

const next=(images)=>{
    if(indexImg===images.length-1){
        indexImg=-1;
    }
    imageShow.src=images[indexImg+1].src;
    indexImg++;
}

function createImg(){
    const galeryFood1=document.getElementById('galeryFood1')
    const galeryFood2=document.getElementById('galeryFood2')
    const galeryFood3=document.getElementById('galeryFood3')
    const horses=document.getElementById('horses')
    const cattle=document.getElementById('cattle')
    const materials=document.getElementById('mat')
    const work=document.getElementById('work')

    for (let i=1; i<6;i++){
        galeryFood1.innerHTML+=`<img src="/imagenes/foodtrucks/grande/Grande${i}.jpeg" alt="" class="galeryImg hoverable">`
    } 

    for (let i=1; i<6;i++){
        galeryFood2.innerHTML+=`<img src="/imagenes/foodtrucks/mediano/${i}.jpeg" alt="" class="galeryImg  hoverable">`
    } 

    for (let i=1; i<6;i++){
        galeryFood3.innerHTML+=`<img src="/imagenes/foodtrucks/peque/${i}.jpeg" alt="" class="galeryImg  hoverable">`
    } 
    
    for (let i=1; i<6;i++){
        horses.innerHTML+=`<img src="/imagenes/horse/${i}.jpeg" alt="" class="galeryImg  hoverable">`
    } 

    for (let i=1; i<6;i++){
        cattle.innerHTML+=`<img src="/imagenes/cattle/cattle${i}.jpeg" alt="" class="galeryImg  hoverable">`
    } 

    for (let i=1; i<6;i++){
        work.innerHTML+=`<img src="/imagenes/work/${i}.jpeg" alt="" class="galeryImg  hoverable">`
    } 

    for (let i=1; i<6;i++){
        materials.innerHTML+=`<img src="/imagenes/materials/${i}.jpeg" alt="" class="galeryImg  hoverable">`
    } 
}

window.addEventListener('scroll',()=>{
    const scroll=window.scrollY;
    const aside=document.getElementById('aside')
   // console.log(scroll)
    if(scroll>1000){
        aside.style.display='block'
    }else{
        aside.style.display='none'
    }
})


















