const partnerLogoData = [{
  partnerOneLogo: './res/partner1.svg',
  partnerTowLogo: './res/partner2.svg',
  partnerThreeLogo: './res/partner3.svg',
  partnerFourLogo: './res/partner4.svg',
  partnerFiveLogo: './res/partner5.svg',
}];

const partnerDtls = document.getElementById('partnerDtls');
partnerDtls.innerHTML = `
<div class="partner-intro">
    <h2 class="partner-intro-header">Partner</h2>
    <hr>
</div>
<div class="partner">
    <img src="${partnerLogoData[0].partnerOneLogo}" alt="partner 1">
</div>
<div class="partner">
    <img src="${partnerLogoData[0].partnerTowLogo}" alt="partner 2">
</div>
<div class="partner">
    <img src="${partnerLogoData[0].partnerThreeLogo}" alt="partner 3">
</div>
<div class="partner">
    <img src="${partnerLogoData[0].partnerFourLogo}" alt="partner 4">
</div>
<div class="partner">
    <img src="${partnerLogoData[0].partnerFiveLogo}" alt="partner 5">
</div>
`;
