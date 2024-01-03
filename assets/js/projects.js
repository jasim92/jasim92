$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/quotation.png',
            link: 'https://github.com/jasim92/Quotation-Managment-System',
            title: 'Quotation Management System',
            demo: false,
            technologies: ['JavaScript', 'bootstrape', 'HTML', 'CSS', 'Strapi(Backend)'],
            description: "Designed and implemented a Quotation Management System to streamline the creation, updating, deletion, and retrieval of quotations. The system is a comprehensive solution for managing quotes efficiently.",
            categories: ['featured', 'webdev']
        },
       
        {
            image: 'assets/images/fireface.jpg',
            link: 'https://github.com/jasim92/FIRE-PROJECT',
            title: 'FireFace Guardian',
            demo: false,
            technologies: ['JavaScript', 'bootstrape', 'HTML', 'CSS', 'Megvii Face APIs'],
            description: "FireFace Guardian is a web application designed for capturing human faces and counting the total number of humans detected, along with detailed facial information. The application leverages Megvii Facial APIs for seamless integration, providing robust facial recognition capabilities.",
            categories: ['webdev', 'featured']
        },
        {
            image: 'assets/images/tmdb.png',
            link: 'https://github.com/jasim92/TMDB-Web',
            title: 'Movie Mania',
            demo: false,
            technologies: ['JavaScript', 'bootstrape', 'HTML', 'CSS', 'TMDB Movie APIs'],
            description: "Movie Mania is a web application that provides comprehensive information about movies. Leveraging TMDB movie APIs, the app allows users to explore details about movies, search for movies based on genres, and access a vast database of cinematic information.",
            categories: ['webdev', 'featured']
        },
        {
            image: 'assets/images/weathry.png',
            link: 'https://github.com/jasim92/Weathery-Web',
            title: 'Wheathery',
            demo: false,
            technologies: ['JavaScript', 'bootstrape', 'HTML', 'CSS', 'Weather APIs'],
            description: "Wheathery app leverages Weather APIs to fetch real-time weather data, allowing users to search for and stay updated on the latest weather conditions in different locations.",
            categories: ['webdev', 'featured']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}