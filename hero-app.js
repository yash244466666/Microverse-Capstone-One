const heroData = [{
  heroSmHeader: '"Hello! Sharing world"',
  heroMnheader: 'CREATIVE COMMONS GLOBAL SUMMIT 2015',
  heroPara: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum dignissimos sequi modi! Dolores error architecto impedit fuga, debitis repellendus molestias quidem esse, reprehenderit magnam rem perspiciatis eaque suscipit a.',
}, {
  heroVenuTime: '2015.10.15(THU)~16(FRI)',
  heroVenuPlace: '@National Meseum of Karea, Art Center Nabi and more.',

}];

const heroSec = document.getElementById('heroSec');
heroSec.innerHTML = `
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
`;
