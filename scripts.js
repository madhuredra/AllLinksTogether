const myName = "Madhurendra";
const links = [
    {
        _id:1,
        icon:"images/git.svg",
        link:"https://www.github.com/madhuredra",
        name:" - Github"
    }
    ,
    {
        _id:2,
        icon:"images/leetcode.png",
        link:"https://www.leetcode.com/or1equals1",
        name:" - Leetcode"
    }
    ,
    {
        _id:3,
        icon:"images/linkedin.png",
        link:"https://www.linkedin.com/in/madhurendra-nath-tiwari-529470197/",
        name:" - LinkedIn"
    }
    ,
    {
        _id:4,
        icon:"images/hackerrank.webp",
        link:"https://www.hackerrank.com/madhuredra",
        name:" - Hackerrank"
    }
    ,
    {
        _id:5,
        icon:"images/codechef.avif",
        link:"https://www.codechef.com/users/madhurendra_tr",
        name:" - Codechef"
    }
    ,
    {
        _id:6,
        icon:"images/codeforces.webp",
        link:"https://codeforces.com/profile/uninterested._.coder",
        name:" - Codeforces"
    }
    ,
    {
        _id:7,
        icon:"images/insta-icon.png",
        link:"https://www.instagram.com/intellectual.shit/",
        name:" - Instagram"
    }
    ,
    {
        _id:8,
        icon:"images/mail.png",
        link:"mailto:madhurendraakela123@gmail.com",
        name:" - Contact Me"
    }
    ,
    {
        _id:9,
        icon:"images/downlaod.png",
        link:"Doc/resume.pdf",
        name:" - Resume"
    }
]

let link_container = document.getElementById('link-container');

// console.log(link_container);



// console.log(links);
link_container.innerHTML = links.map(_link => {                               
    return (
        `   
        <div  key=${_link._id} class="tilt">
            <a class="link" href=${_link.link} target="_blank" rel="noopener noreferrer">
                <div class="link-icon">
                    <img src=${_link.icon} alt="logo" srcset="">
                </div>
                <div class="link-name">
                    ${myName + _link.name}
                </div>
                <div class="copy-to-clipboard-icon-link">
                    <i class="fa fa-external-link" aria-hidden="true"></i>    
                </div>
            </a>
        </div>
        `
    )
}).join(`<br/>`)


var copied = "https://madhuredra.github.io/AllLinksTogether"
function called() {
    navigator.clipboard.writeText(copied).then(() => alert(`URL Copied`));
}

let footer = document.querySelector('.footer');
const date = new Date().getFullYear();
footer.innerText = `© Madhurendra Nath Tiwari ${date} ♥`




window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav')


    if(scrollY<=10){
        if(!nav.classList.contains('hide')){
            nav.classList.add('hide');
        }
    }else{
        if(nav.classList.contains('hide')){
            nav.classList.remove('hide');
        }
    }
})

VanillaTilt.init(document.querySelectorAll(".tilt"), {
 reverse:                false,  
    max:                    15,     
    startX:                 0,      
    startY:                 0,      
    perspective:            1000,   
    scale:                  1,      
    speed:                  300,    
    transition:             true,   
    axis:                   null,   
    reset:                  true,   
    "reset-to-start":       true,   
    easing:                 "cubic-bezier(.03,.98,.52,.99)",    
    glare:                  false,  
    "max-glare":            1,      
    "glare-prerender":      false,  
                                    
    "mouse-event-element":  null,   
    "full-page-listening":  false,  
    gyroscope:              true,   
    gyroscopeMinAngleX:     -45,    
    gyroscopeMaxAngleX:     45,     
    gyroscopeMinAngleY:     -45,    
    gyroscopeMaxAngleY:     45,     
    gyroscopeSamples:       10      
});
