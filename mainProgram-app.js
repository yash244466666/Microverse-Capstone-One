const programData = [{
  letureImg: './res/lecture.svg',
  exhibitionImg: './res/cc_exhibition.svg',
  forumImg: './res/forum.svg',
  workshopImg: './res/workshop.svg',
  ingniteImg: './res/cc-ignite.svg',
}];

const programDtls = document.getElementById('programDtls');
programDtls.innerHTML = `
<div class="program-discription">
    <h2>Main Program</h2>
    <hr>
</div>
<div class="program-block">
    <img src="${programData[0].letureImg}" alt="Lecture Image"> 
    <h6 class="program-header">Lecture</h6>
    <p class="program-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iste provident enim ipsum inventore quae sed ullam perspiciatis nesciunt eius?</p>          
</div>
<div class="program-block">
    <img src="${programData[0].exhibitionImg}" alt="CC image">  
    <h6 class="program-header">CC Exhibition</h6>
    <p class="program-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iste provident enim ipsum inventore quae sed ullam perspiciatis nesciunt eius?</p>          
</div>
<div class="program-block">
    <img src="${programData[0].forumImg}" alt="forum img">   
    <h6 class="program-header">Forum</h6>
    <p class="program-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iste provident enim ipsum inventore quae sed ullam perspiciatis nesciunt eius?</p>          
</div>
<div class="program-block">
    <img src="${programData[0].workshopImg}" alt="workshop img">   
    <h6 class="program-header">Workshop</h6>
    <p class="program-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iste provident enim ipsum inventore quae sed ullam perspiciatis nesciunt eius?</p>          
</div>
<div class="program-block">
    <img src="${programData[0].ingniteImg}" alt="ignite img">  
    <h6 class="program-header">CC Ignite</h6>
    <p class="program-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iste provident enim ipsum inventore quae sed ullam perspiciatis nesciunt eius?</p>          
</div>
<div class="join-cc">
    <a href="#" class="see-program">SEE THE WHOLE PROGRAM</a>
    <button class="join-cc-btn">Join CC Global Summit 2015</button>
</div>

`;
