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
  SpeakerOnePara: 'The Speker is internationaally recognized, and the speaker will answare all your questioms.',
  SpeakerTowPara: 'The Speker is internationaally recognized, and the speaker will answare all your questioms.',
  SpeakerThreePara: 'The Speker is internationaally recognized, and the speaker will answare all your questioms.',
  SpeakerFourPara: 'The Speker is internationaally recognized, and the speaker will answare all your questioms.',
  SpeakerFivePara: 'The Speker is internationaally recognized, and the speaker will answare all your questioms.',
  SpeakerSixPara: 'The Speker is internationaally recognized, and the speaker will answare all your questioms.',
}];

const speakersDtls = document.getElementById('speakersDtls');
speakersDtls.innerHTML = `
<div class="speker-intro">
    <h2>Featured Speakers</h2>
    <hr>
</div>
<div class="speakers-container">
    <div class="speakers s1">
        <div class="speaker-img-cont">
            <img class="speaker-img" src="${speakersImgData[0].speakerOne}" alt="speaker 2">
        </div>
        <h3 class="speaker-header">${speakerTxtData[0].speakerOneName}</h3>
        <p class="speaker-para">${speakerTxtData[1].SpeakerOnePara}</p>
    </div>
    <div class="speakers s2">
        <div class="speaker-img-cont">
            <img class="speaker-img" src="${speakersImgData[0].speakerTow}" alt="speaker 2">
        </div>
        <h3 class="speaker-header">${speakerTxtData[0].speakerTowName}</h3>
        <p class="speaker-para">${speakerTxtData[1].SpeakerTowPara}</p>
    </div>
    <div class="speakers s3">
        <div class="speaker-img-cont">
            <img class="speaker-img" src="${speakersImgData[0].speakerThree}" alt="speaker 2">
        </div>
        <h3 class="speaker-header">${speakerTxtData[0].speakerThreeName}</h3>
        <p class="speaker-para">${speakerTxtData[1].SpeakerThreePara}</p>
    </div>
    <div class="speakers s4">
        <div class="speaker-img-cont">
            <img class="speaker-img" src="${speakersImgData[0].speakerFour}" alt="speaker 2">
        </div>
        <h3 class="speaker-header">${speakerTxtData[0].speakerFourName}</h3>
        <p class="speaker-para">${speakerTxtData[1].SpeakerFourPara}</p>
    </div>
    <div class="speakers s5">
        <div class="speaker-img-cont">
            <img class="speaker-img" src="${speakersImgData[0].speakerFive}" alt="speaker 2">
        </div>
        <h3 class="speaker-header">${speakerTxtData[0].speakerFiveName}</h3>
        <p class="speaker-para">${speakerTxtData[1].SpeakerFivePara}</p>
    </div>
    <div class="speakers s6">
        <div class="speaker-img-cont">
            <img class="speaker-img" src="${speakersImgData[0].speakerSix}" alt="speaker 2">
        </div>
        <h3 class="speaker-header">${speakerTxtData[0].speakerSixName}</h3>
        <p class="speaker-para">${speakerTxtData[1].SpeakerSixPara}</p>
    </div>
</div>


`;
