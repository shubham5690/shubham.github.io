const Projects = [

 
    {
        name : "Clone of bewakoof",
        about: "Bewakoof is an Online Shopping site for Men and Women's Clothing. Shop from a wide range of T-shirts ,Mobile Covers,Accessories, and more at the best prices.",
        
        // a:"https://shubham5690.github.io/Individual-Project/",
        img : "images/bewakoof.png",
        gitrepo:"https://github.com/shubham5690/Individual-Project",

        project_link:"https://shubham5690.github.io/Individual-Project/",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        
        category : ["all", "html"],

    },
    
    {
        name : "Clone of PluralSlight",
        about : "Pluralsight, Inc. is an American privately held online education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals through its website - Java Script, Html, CSS, Bootstrap and API.",
        img : "images/Disney.png",
        gitrepo:"https://github.com/shubham5690/Pluralsight-Clone",
        project_link:"https://pluralsightproject.netlify.app/",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        
        category : ["all", "html"],

    },
    {
        name : "Clone of CricInfo",
        about: "ESPN cricinfo is a sports news website exclusively for the game of cricket The site features news, articles, live coverage of cricket matches, and StatsGuru, a database of historical matches and players from the 18th century to the present. As of March 2018, Sambit Bal was the editor.",
        
        // a:"https://shubham5690.github.io/Individual-Project/",
        img : "images/cricInfo.png",
        gitrepo:"https://github.com/shubham5690/CricInfo-Clone-1",

        project_link:"https://a-clone-of-espncricinfo.netlify.app/",
        tech_stack : "HTML | CSS | JAVASCRIPT | API's",
        tech_stackicons : [
            `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
            `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
            `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
            `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`
            
        ],
        
        category : ["all", "html"],

    },
    
   
]




let projects__container = document.getElementById("projects--container")

let all_projects = document.querySelector(".all_projects")

let mern_projects = document.querySelector(".mern_projects");
// let other_projects = document.querySelector(".other_projects");
let html_projects = document.querySelector(".html_projects")
all_projects.classList.add("active_tech_project")

all_projects.addEventListener("click", () => {
    filterProjects("all");
    all_projects.classList.add("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.remove("active_tech_project")
})
mern_projects.addEventListener("click", () => {
    filterProjects("mern");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.add("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.remove("active_tech_project")
})

html_projects.addEventListener("click", () => {
    filterProjects("html");
    all_projects.classList.remove("active_tech_project")
    react_projects.classList.remove("active_tech_project")
    mern_projects.classList.remove("active_tech_project")
    // other_projects.classList.remove("active_tech_project")
    html_projects.classList.add("active_tech_project")
})

function filterProjects(basis) {
    let filtered = Projects.filter((el) => {
        return el.category.includes(basis)
    })
    displayProjectData(filtered)
}

function displayProjectData(Projects) {
    projects__container.innerHTML = null;
Projects.reverse().forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack}
      </div>
      
    </div>
  </div>
    `
    projects__container.append(main)

})

}

displayProjectData(Projects);


