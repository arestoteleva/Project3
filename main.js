
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var now = new Date('02/12/2013');
// console.log(days[now.getDay()] + ' ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear()); //Tuesday February 12 2013



const content = [
    {
        authorphoto: "./author.png",
        author: "Dinara ",
        date : "July 7",
        time: "12 min read",
        access: "Member only",

        icon1: "./LinkedIn.png",
        icon2: "./Facebook.png",
        icon3:"./Twitter.png",
        
        title: "7 Practical CSS Tips",
        abstract: "How product designers can break from the status quo and help our planet",
        photo: "./page2visual.png",

        subheader: "Subheader",
        information1: `How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.`,

        information2: `And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.`,

        information3: `But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.
       `,
        
        like: "Java Script",
        comment: "Selected for you",
        
    }
]


const contentdiv = document.getElementById("06");
if (contentdiv) {
content.map((item) => {
    const file = `<div class = "page2">

    <div class = "page2_line1">
<div class = column1>
    <img src = ${item.authorphoto} width = 64px, height = 64px/>

    <div class = page2_text>
        <div>${item.author} </div>
        <div class = "grey_text" > ${item.date} · ${item.time}  ${item.access}</div> 
    </div>
</div>

<div>
    <img src = ${item.icon1} width = 24px, height = 24px />
    <img src = ${item.icon2} width = 24px, height = 24px />
    <img src = ${item.icon3} width = 24px, height = 24px />
</div>

</div>

    <div>
    <h2 class = "article_name">${item.title}</h2>
    <p class = "caption"> ${item.abstract}</p>
    <div> <img src = ${item.photo} width = 1120px, height = 480px style = "margin-top:5%" /> </div>
    </div>

    <div class = "p2_line3">

    <h4 class = "subheader">${item.subheader}</h4>
    <p class = "information"> ${item.information1}</p>
    <p class = "information"> ${item.information2}</p>
    <p class = "information"> ${item.information3}</p>

    <div class = "icon"> 
    <img src = ${item.icon1} width = 24px, height = 24px />
    <img src = ${item.icon2} width = 24px, height = 24px />
    <img src = ${item.icon3} width = 24px, height = 24px />
    </div>


    </div>
    

    </div> 
    
    

    </div>`;

    contentdiv.innerHTML += file;
});

}


// fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=RR7ORvVIkPIFM28MsDUXKff8I9KAN6UU')
// .then(response => response.json())
// .then(data => {
//     const articles = data.response.docs.slice(0, 3); // Retrieve the first three articles
//     const list = document.getElementById('articles');

//     articles.forEach(article => {
//         const li = document.createElement('li');
//         const title = document.createElement('h2');
//         const author = document.createElement('p');
//         const date = document.createElement('p');
//         const snippet = document.createElement('p');
//         const url = document.createElement('p');

//         title.textContent = article.headline.main;
//             author.textContent = `By ${article.byline.original}`;
//             date.textContent = new Date(article.pub_date).toLocaleDateString();
//             snippet.textContent = article.abstract;
//             url.textContent = article.url;

//             li.appendChild(title);
//             li.appendChild(author);
//             li.appendChild(date);
//             li.appendChild(snippet);
//             li.appendChild(url);

//             list.appendChild(li);
//           });
//         })
//         .catch(error => {
//           console.error(error);
//         });

        const getTopStories = async () => {
            const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=RR7ORvVIkPIFM28MsDUXKff8I9KAN6UU')
            if(!response.ok && response.status==='404'){
                console.log('request is incorrect!')
            }
            const respJson = await response.json();
            // const NameOfarticle = respJson.response.docs[0].abstract;
            // const titleElement = document.getElementById('008');
            // titleElement.textContent = NameOfarticle;
            console.log(respJson);

            const titleElement = document.getElementById('008');
            const AllArticles = respJson.results.slice(5,8);
            AllArticles.forEach(testResponse => {
                        const content = [
                            {
                        author: testResponse.byline,
                        topic: testResponse.section,
                        date: testResponse.published_date,

                        title: testResponse.title,
                        caption: testResponse.abstract,
                        button: "Open to read",
                        time: "12 min read",
                        word: "Selected for you",

                        photo: testResponse.multimedia[0].url,
                        icon1: "./LinkedIn.png",
                        icon2: "./Facebook.png", 
                        icon3:"./Twitter.png",
                            }    
                    ]

                            if (titleElement) {
                                content.map((item) => {
                                   const info = `<div class = "paragraph">

                                   <div class = "textblock">
                               
                                   <div class = "line1"; style="display: flex; align-items: center;">
                    
                                   <p>${item.author} <span class = "grey_text" > in </span> ${item.topic} · <span class = "grey_text" > ${item.date} </span> </p>
                                   </div>
                               
                                   <div>
                                   <h2 class = "article_name">${item.title}</h2>
                                   <p class = "caption">${item.caption}</p>
                                   </div>
                               
                                   <div class = "line3">
                               
                                   <div class = "line3_text"> <button class = "button">${item.button}</button>
                                   <p class = "grey_text">${item.time} · ${item.word} </p> </div>
                               
                               
                                   <div class = "icon"> 
                                   <img src = ${item.icon1} width = 24px, height = 24px />
                                   <img src = ${item.icon2} width = 24px, height = 24px />
                                   <img src = ${item.icon3} width = 24px, height = 24px />
                                   </div>
                               
                               
                                   </div>
                                   
                               
                                   </div> 
                                   
                                   <div> <img src = ${item.photo} width = 265px, height = 265px /> </div>
                               
                
                                   </div>`
                                  
                                   titleElement.innerHTML += info;
                    })
                    
                }
                
            });
        }

        getTopStories()

        // -------------------------------------------------------------------

//PAGE 2 
        const page2 = async () => {
            const page2Resp = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=RR7ORvVIkPIFM28MsDUXKff8I9KAN6UU')
            if(!page2Resp.ok && page2Resp.status==='404'){
                console.log('request is incorrect!')
            }
            const Jsonresponse = await page2Resp.json();
            console.log(Jsonresponse);

            const articleFull = document.getElementById('007');
            const ArticleData = Jsonresponse.response.docs.slice(0, 1);
            ArticleData.forEach(page2Resp => {
                        const page2content = [  
                            {
                            authorphoto: "./author.png",
                            author: page2Resp.byline.original,
                            topic: page2Resp.section_name,
                            time: "15 min read",
                            date: page2Resp.pub_date,
                            access: "Member only",
                            icon1: "./LinkedIn.png",
                            icon2: "./Facebook.png", 
                            icon3:"./Twitter.png",
    
                            subheader: page2Resp.snippet,
                            title: page2Resp.headline.main,
                            abstract: page2Resp.abstract,
                            photo: "./page2visual.png",
    
                            information1: page2Resp.lead_paragraph,
                            information2: page2Resp.lead_paragraph,
                            information3: page2Resp.lead_paragraph,
                            heart: "./Heart.png",
                            speech: "./Speech.png", 
           
                        }
                        ] 
                        page2content.map((item) => {
                            const inf = `<div class = "page2">
                        
                            <div class = "page2_line1">
                        <div class = column1>
                            <img src = ${item.authorphoto} width = 64px, height = 64px/>
                        
                            <div class = page2_text>
                                <div>${item.author} </div>
                                <div class = "grey_text" > ${item.date} · ${item.time}  ${item.access}</div> 
                            </div>
                        </div>
                        
                        <div>
                            <img src = ${item.icon1} width = 24px, height = 24px />
                            <img src = ${item.icon2} width = 24px, height = 24px />
                            <img src = ${item.icon3} width = 24px, height = 24px />
                        </div>
                        
                        </div>
                        
                            <div>
                            <h2 class = "article_name">${item.title}</h2>
                            <p class = "caption"> ${item.abstract}</p>
                            <div> <img src = ${item.photo} width = 1120px, height = 480px style = "margin-top:5%" /> </div>
                            </div>
                        
                            <div class = "p2_line3">
                        
                            <h4 class = "subheader">${item.subheader}</h4>
                            <p class = "information"> ${item.information1}</p>
                            <p class = "information"> ${item.information2}</p>
                            <p class = "information"> ${item.information3}</p>
                        
                            <div class = "icon_page2"> 
                            <img src = ${item.heart} width = 24px, height = 24px />
                            <div>1090</div>
                            <img src = ${item.speech} width = 24px, height = 24px />
                            <div>356</div>
                    
                            </div>
                        
                        
                            </div>
                            
                            <div class = "bottom">
                            <p class = "bottom_text"> Credits: photos from Unsplash.com, icons from Icons8, graphics from craftwork.design. </p>
                            <p class = "end"> Made with ✨❤️ at nFactorial in 2022. </p>
                            </div>
                            </div> 
                            
                            </div>`;
                        
                            articleFull.innerHTML += inf;
                        });
                    })
                }
                
          
        page2()