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
            technologies: ['JavaScript', 'bootstrape','Strapi'],
            description: "Designed and implemented a Quotation Management System to streamline the creation, updating, deletion, and retrieval of quotations. The system is a comprehensive solution for managing quotes efficiently.",
            categories: ['featured', 'webdev']
        },
       
        {
            image: 'assets/images/fireface.jpg',
            link: 'https://github.com/jasim92/FIRE-PROJECT',
            title: 'FireFace Guardian',
            demo: false,
            technologies: ['JavaScript', 'bootstrape','Megvii APIs'],
            description: "FireFace Guardian, a web app, captures and counts human faces, utilizing Megvii Facial APIs for powerful facial recognition. It offers detailed facial information, ensuring seamless integration and robust capabilities.",
            categories: ['webdev', 'featured']
        },
        {
            image: 'assets/images/tmdb.png',
            link: 'https://github.com/jasim92/TMDB-Web',
            title: 'Movie Mania',
            demo: false,
            technologies: ['JavaScript', 'bootstrape','TMDB API'],
            description: "Movie Mania, a web app, uses TMDB movie APIs to offer in-depth movie details. Users can explore genres, search movies, and access a vast cinematic database for comprehensive film information.",
            categories: ['webdev', 'featured']
        },
        {
            image: 'assets/images/weathry.png',
            link: 'https://github.com/jasim92/Weathery-Web',
            title: 'Wheathery',
            demo: false,
            technologies: ['JavaScript', 'bootstrape','Weather API'],
            description: "Wheathery app uses Weather APIs for real-time weather updates. Users can search and stay informed on the latest weather conditions in different locations, enhancing their overall weather-tracking experience.",
            categories: ['webdev', 'featured']
        },
        {
            image: 'assets/images/pepper_retail_nav.jpg',
            link: 'https://github.com/yasseraiomoh/pepper-frontend',
            title: 'Pepper Retail',
            demo: false,
            technologies: ['Java', 'Strapi','Robotic'],
            description: "Pepper Retail, an Android app for Pepper Robot by SoftBank, guides supermarket customers with product details, categories, and discounts. It utilizes Pepper SDK, enabling search, barcode scanning, and Strapi CMS APIs for content management.",
            categories: ['android', 'robotic', 'featured']
        },
        {
            image: 'assets/images/pepper_hotel_main.jpg',
            link: 'https://github.com/jasim92/Pepper_Hotel',
            title: 'Pepper Hotel',
            demo: false,
            technologies: ['Java', 'Strapi','Robotic'],
            description: "Pepper Hotel, an Android app for Pepper Robot by SoftBank, guides Dubai hotel visitors with details on services, local attractions, and bookings for taxi and laundry. It seamlessly integrates with Pepper using Pepper SDK and Strapi CMS APIs.",
            categories: ['android', 'robotic', 'featured']
        },
        {
            image: 'assets/images/pepper_airport_main.jpg',
            link: 'https://github.com/jasim92/pepper-airport',
            title: 'Pepper Airport',
            demo: false,
            technologies: ['Java', 'Strapi','Robotic'],
            description: "Pepper Airport, an Android app for Pepper Robot by SoftBank, offers flyers detailed flight information and integrates with Strapi CMS APIs. Passengers can access details via voice commands and scan boarding passes for gate information.",
            categories: ['android', 'robotic', 'featured']
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