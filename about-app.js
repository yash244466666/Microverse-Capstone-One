const aboutTxtData = [{
  aboutMainHeader: 'GROWTH INTERST <br> GLOBAL SUMMIT <br> 2022',
  aboutMainPara: 'We need to future-proof this pass the mayo, appeal to the client, sue the vice president deploy, and through the lens of deploy to production, yet rehydrate the team. We need to aspirationalise our offerings increase the pipelines marketing, illustration, so dont over think it. Nobodys fault it could have been managed better cannibalize. That jerk from finance really threw me under the bus bottleneck mice, so to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders. Encourage & support business growth message the initiative player-coach.',
  aboutMainEmail: 'yash.solo.000@gmail.com',
}];

const aboutMain = document.getElementById('aboutMain');
aboutMain.innerHTML = `
<div class="about-txt">
    <h1 class="about-header">${aboutTxtData[0].aboutMainHeader}</h1>
    <p class="about-para">${aboutTxtData[0].aboutMainPara}</p>
    <p class="about-contact-para">
    Tbrand terrorists tiger team, for corporate synergy don't over think it.
        <a href="" class="contact-para-email">${aboutTxtData[0].aboutMainEmail}</a>
    </p>
</div>
`;