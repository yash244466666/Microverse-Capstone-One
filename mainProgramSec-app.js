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
<div class="program-block-container">
    <div class="program-block pb1">
        <img src="${programData[0].letureImg}" alt="Lecture Image"> 
        <h6 class="program-header">Lecture</h6>
        <p class="program-para">I website, but you must personalize the content,you can build.</p>          
    </div>
    <div class="program-block pb2">
        <img src="${programData[0].exhibitionImg}" alt="CC image">  
        <h6 class="program-header">CC Exhibition</h6>
        <p class="program-para">I website, but you must personalize the content,you can build.</p>          
    </div>
    <div class="program-block pb3">
        <img src="${programData[0].forumImg}" alt="forum img">   
        <h6 class="program-header">Forum</h6>
        <p class="program-para">I website, but you must personalize the content,you can build.</p>          
    </div>
    <div class="program-block pb4">
        <img src="${programData[0].workshopImg}" alt="workshop img">   
        <h6 class="program-header">Workshop</h6>
        <p class="program-para">I website, but you must personalize the content,you can build.</p>          
    </div>
    <div class="program-block pb5">
        <img src="${programData[0].ingniteImg}" alt="ignite img">  
        <h6 class="program-header">CC Ignite</h6>
        <p class="program-para">I website, but you must personalize the content,you can build .</p>          
    </div>
    <div class="join-cc">
        <a href="#" class="see-program">SEE THE WHOLE PROGRAM</a>
        <button class="join-cc-btn">Join Summit</button>
    </div>
</div>

`;
