const heroData = [{
  heroSmHeader: '"Hello! Sharing world"',
  heroMnheader: 'GROWTH INTEREST <br> GLOBAL SUMMIT <br> 2022',
  heroPara: 'We provide some design guidelines for you to create the website, but you must personalize the content,you can build a website for a concert or for a web development course.',
}, {
  heroVenuTime: '2022.12.15(THU)~16(FRI)',
  heroVenuPlace: '@National Meseum of Karea, Art Center Nabi and more.',

}];

const heroSec = document.getElementById('heroSec');
heroSec.innerHTML = `
<div class="hero-header-cont">
    <div class="hero-header">
        <h4 class="hero-sm-header">
            ${heroData[0].heroSmHeader}
        </h4>
        <h1 class="hero-mn-header">
        ${heroData[0].heroMnheader}
        </h1>
    </div>
    <div class="hero-para">
        <p class="hero-mn-para">${heroData[0].heroPara}</p>
    </div>
    <div class="hero-venu">
        <div class="time">
            <h3 class="venu-time">${heroData[1].heroVenuTime}</h3>
            <p class="venu-place">${heroData[1].heroVenuPlace}</p>
        </div>
    </div>
</div>
`;
