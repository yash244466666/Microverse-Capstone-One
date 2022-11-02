const aboutTxtData = [{
  aboutMainHeader: 'CREATIVE COMMONS GLOBAL SUMMIT 2015',
  aboutMainPara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur similique recusandae aut sed obcaecati atque vero maiores modi dignissimos omnis nam repudiandae cum culpa sequi corrupti officiis assumenda veniam eos aperiam, voluptas quis nemo ad. Placeat voluptate voluptatibus quidem rerum nesciunt tempore, tenetur illo sunt qui consequuntur quod adipisci quo dicta quam voluptatum cumque repudiandae cum? Facere molestiae sunt voluptates, qui nihil, repellendus nemo possimus consequuntur laboriosam atque soluta ratione quod quisquam alias fuga necessitatibus distinctio quo. Sunt cupiditate nisi mollitia voluptatem vel iure autem distinctio nam quisquam nihil dignissimos, molestias atque, quod velit tenetur. Reiciendis officiis sed cum?',
  aboutMainEmail: 'yash.solo.000@gmail.com',
}];

const aboutMain = document.getElementById('aboutMain');
aboutMain.innerHTML = `
<div class="about-txt">
    <h1 class="about-header">${aboutTxtData[0].aboutMainHeader}</h1>
    <p class="about-para">${aboutTxtData[0].aboutMainPara}</p>
    <p class="about-contact-para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati deleniti numquam magnam sequi eaque nam.
        <a href="" class="contact-para-email">${aboutTxtData[0].aboutMainEmail}</a>
    </p>
</div>
`;