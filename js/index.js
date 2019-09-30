const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let bodyPaint = document.querySelector('html'); //color change event will work for node list but not for HTMLCollection


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])

let biggestImage = document.getElementById('middle-img');
  biggestImage.setAttribute('src', siteContent['main-content']['middle-img-src'])//DONT ASSIGN THE SOURCE, just set it!!!

let circleImage = document.getElementById('cta-img');
  circleImage.setAttribute('src', siteContent['cta']['img-src'])

let navAll = document.querySelectorAll('nav a');

// navAll.forEach(item => {
//   let i = 0;
//   item.textContent(siteContent['nav'][`nav-item-${item[i] + 1}`]);
//   i += 1;
// })

  navAll[0].textContent = siteContent['nav'][`nav-item-1`];
  navAll[1].textContent = siteContent['nav'][`nav-item-2`];
  navAll[2].textContent = siteContent['nav'][`nav-item-3`];
  navAll[3].textContent = siteContent['nav'][`nav-item-4`];
  navAll[4].textContent = siteContent['nav'][`nav-item-5`];
  navAll[5].textContent = siteContent['nav'][`nav-item-6`];

  navAll.forEach(item => {
    item.style.color = 'green';
  });


  const newVigationFront =  document.createElement('a');
  const newVigationEnd =  document.createElement('a');

    newVigationFront.textContent = "Similar Apps";
    newVigationEnd.textContent = "Partners";

  let navBar = document.querySelector('nav');
    navBar.prepend(newVigationFront);
    navBar.appendChild(newVigationEnd);
    newVigationFront.style.color ='green';
    newVigationEnd.style.color ='green';
   

let awesomeMessage = document.querySelector('.cta .cta-text h1');
  awesomeMessage.textContent = siteContent['cta']['h1'];

let awesomeBtn = document.querySelector('.cta .cta-text button');
  awesomeBtn.textContent = siteContent['cta']['button'];

      awesomeBtn.addEventListener("click", (event => {
              event.target.style.background = 'black';
              navBar.style.flexDirection = "column";
              bodyPaint.style.background = "grey";
      }));

      awesomeBtn.addEventListener("mouseleave", (event => {
        event.target.style.background = 'white';
        navBar.style.flexDirection = "column-reverse";
}));

let topSubHeadings = document.querySelectorAll('.main-content .top-content .text-content h4');
  topSubHeadings[0].textContent = siteContent['main-content']['features-h4']
  topSubHeadings[1].textContent = siteContent['main-content']['about-h4'];

let topSubPrgs = document.querySelectorAll('.main-content .top-content .text-content p');
  topSubPrgs[0].textContent = siteContent['main-content']['features-content'];
  topSubPrgs[1].textContent = siteContent['main-content']['about-content'];

let btmSubHeadings = document.querySelectorAll('.main-content .bottom-content .text-content h4');
  btmSubHeadings[0].textContent = siteContent['main-content']['services-h4'];
  btmSubHeadings[1].textContent = siteContent['main-content']['product-h4'];
  btmSubHeadings[2].textContent = siteContent['main-content']['vision-h4'];

let btmSubPrgs = document.querySelectorAll('.main-content .bottom-content .text-content p');
  btmSubPrgs[0].textContent = siteContent['main-content']['services-content'];
  btmSubPrgs[1].textContent = siteContent['main-content']['product-content'];
  btmSubPrgs[2].textContent = siteContent['main-content']['vision-content'];

let contactHeading = document.querySelector('.contact h4');
  contactHeading.textContent = siteContent['contact']['contact-h4'];

let contactPrgs = document.querySelectorAll('.contact p');
  contactPrgs[0].textContent = siteContent['contact']['address'];
  contactPrgs[1].textContent = siteContent['contact']['phone'];
  contactPrgs[2].textContent = siteContent['contact']['email'];

let domFoot = document.querySelector('footer p');
  domFoot.textContent = siteContent['footer']['copyright'];


