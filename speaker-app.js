const speakersImgData = [{
  speakerOne: './res/speaker_01.png',
  speakerTow: './res/speaker_02.png',
  speakerThree: './res/speaker_03.png',
  speakerFour: './res/speaker_04.png',
  speakerFive: './res/speaker_05.png',
  speakerSix: './res/speaker_06.png',
}];

const speakerTxtData = [{
  speakerOneName: 'Linda Haswel',
  speakerTowName: 'Chang Saw',
  speakerThreeName: 'Dukhai Cha',
  speakerFourName: 'Robert William',
  speakerFiveName: 'Ammada Smith',
  speakerSixName: 'Yash Solo',

}, {
  SpeakerOnePara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo sapiente, voluptate architecto et dolore.',
  SpeakerTowPara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo sapiente, voluptate architecto et dolore.',
  SpeakerThreePara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo sapiente, voluptate architecto et dolore.',
  SpeakerFourPara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo sapiente, voluptate architecto et dolore.',
  SpeakerFivePara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo sapiente, voluptate architecto et dolore.',
  SpeakerSixPara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nemo sapiente, voluptate architecto et dolore.',

}];

const speakersDtls = document.getElementById('speakersDtls');
speakersDtls.innerHTML = `
<div class="speker-intro">
    <h2>Featured Speakers</h2>
    <hr>
</div>
<div class="speakers">
    <img class="speaker-img" src="${speakersImgData[0].speakerOne}" alt="speaker 1">
    <h3 class="speaker-header">${speakerTxtData[0].speakerOneName}</h3>
    <p class="speaker-para">${speakerTxtData[1].SpeakerOnePara}</p>
</div>
<div class="speakers">
    <img class="speaker-img" src="${speakersImgData[0].speakerTow}" alt="speaker 2">
    <h3 class="speaker-header">${speakerTxtData[0].speakerTowName}</h3>
    <p class="speaker-para">${speakerTxtData[1].SpeakerTowPara}</p>
</div>
<div class="speakers">
    <img class="speaker-img" src="${speakersImgData[0].speakerThree}" alt="speaker 3">
    <h3 class="speaker-header">${speakerTxtData[0].speakerThreeName}</h3>
    <p class="speaker-para">${speakerTxtData[1].SpeakerThreePara}</p>
</div>
<div class="speakers">
    <img class="speaker-img" src="${speakersImgData[0].speakerFour}" alt="speaker 4">
    <h3 class="speaker-header">${speakerTxtData[0].speakerFourName}</h3>
    <p class="speaker-para">${speakerTxtData[1].SpeakerFourPara}</p>
</div>
<div class="speakers">
    <img class="speaker-img" src="${speakersImgData[0].speakerFive}" alt="speaker 5">
    <h3 class="speaker-header">${speakerTxtData[0].speakerFiveName}</h3>
    <p class="speaker-para">${speakerTxtData[1].SpeakerFivePara}</p>
</div>
<div class="speakers">
    <img class="speaker-img" src="${speakersImgData[0].speakerSix}" alt="speaker 6">
    <h3 class="speaker-header">${speakerTxtData[0].speakerSixName}</h3>
    <p class="speaker-para">${speakerTxtData[1].SpeakerSixPara}</p>
</div>
`;
