export default {
    bio: {
        about: {
            text: [
                "Hi &#128075;",
                "I'm Anton Kuksov. I’m currently working as a software specialized in JavaScript Applications.",
                "I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
                "I love to read, listen to music, and travel.",
            ],
        },
        contact: {
            text: [
                "If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: antkuk123@gmail.com",
            ],
        },
    },
    skills: [{
            title: "Design",
            skillName: "HTML5/CSS, Bootstrap 5",
            color: "4",
            percentage: "90",
        },
        {
            title: "Languages",
            skillName: "C#, PHP, Python",
            color: "1",
            percentage: "60",
        },
        {
            title: "Frameworks/Libraries",
            skillName: "Angular/Typescript",
            color: "6",
            percentage: "60",
        },
        {
            title: "Frameworks/Libraries",
            skillName: "JavaScript/jQuery ",
            color: "8",
            percentage: "80",
        },
        {
            title: "Frameworks/Libraries",
            skillName: "React, Vue.js, Django",
            color: "5",
            percentage: "50",
        },
        {
            title: "Backend",
            skillName: "MySQL, OracleDB",
            color: "2",
            percentage: "60",
        },
        {
            title: "Version Control",
            skillName: "Figma, Axure RP 9 (UX/UI)",
            color: "9",
            percentage: "70",
        },
        {
            title: "Version Control",
            skillName: "Adobe Illustrator, Photoshop",
            color: "6",
            percentage: "70",
        },
        {
            title: "Version Control",
            skillName: "GitHub, JIRA",
            color: "7",
            percentage: "70",
        },
        {
            title: "Tools",
            skillName: "Postman, Chrome DevTools",
            color: "3",
            percentage: "80",
        },
        {
            title: "Editor",
            skillName: "VS Code, IntelliJ IDEA",
            color: "6",
            percentage: "80",
        },
    ],
    projects: {
        web: [{
                projectName: "Programming Diaries",
                image: "images/programmingdiaries.png",
                summary: "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
                //   preview: "https://programmingdiaries.herokuapp.com/",
                techStack: [
                    "Django",
                    "SQLite",
                    "Bootstrap",
                    "JavaScript",
                    "Heroku",
                ],
            },
            {
                projectName: "Find Your Bank",
                image: "images/findyourbank.png",
                summary: "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
                // preview: "https://clever-fermi-0d5d76.netlify.app",
                techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
            },
            {
                projectName: "Web Portfolio",
                image: "images/portfolio.png",
                summary: "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
                //  preview: "https://github.com/vinaysomawat/Travographer-Portal",
                techStack: ["HTML", "Bootstrap", "JavaScript"],
            },
            {
                projectName: "Resume Builder",
                image: "images/resume-builder.png",
                summary: "Browser based editor to build and download Resumes in a customizable templates.",
                //  preview: "https://vinaysomawat.github.io/Resume-Builder",
                techStack: ["HTML", "Bootstrap", "JavaScript"],
            },
        ],
        software: [{
                projectName: "Pizza Ordering ChatBot",
                image: "images/pizzaorderchatbot.png",
                summary: "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
                // preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
                techStack: ["Dailogflow", "Firebase"],
            },
            {
                projectName: "WhatsApp-Bot",
                image: "images/whatsappbot.jpg",
                summary: "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
                // preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
                techStack: ["Selenium", "Chrome Webdriver", "Python"],
            },
            {
                projectName: "Bill Generator",
                image: "images/billgenerator.png",
                summary: "GUI to transfer data to excel sheets and generate bills on the local shops.",
                // preview: "https://github.com/vinaysomawat/Bill-Generator",
                techStack: ["Tkinter", "Openxlpy", "Python"],
            },
        ],
        freelance: [{
                projectName: "SnylloAir.com",
                image: "images/snylloair.png",
                summary: "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
                //preview: "https://www.snylloair.com/",
                techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
            },
            {
                projectName: "Delivery+",
                image: "images/AM-Logo-.png",
                summary: "Android Application to display website in android devices.",
                //preview: "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
                techStack: ["Android", "JAVA", "Play Store"],
            },
        ],
    },
    experience: [{
            title: "Novopay Solutions Pvt. Ltd.",
            duration: "June 2020 - Present",
            subtitle: "Software Engineer, SDE Intern",
            details: [
                "Supporting both frontend & backend teams for AEPS, DMT transaction, CMS Service, gateways.",
                "Working on biometric eKYCs, CDM card and onboarding retailers flows.",
            ],
            tags: [
                "JavaScript",
                "Angular",
                "React",
                "Bootstrap",
                "Nodejs",
                "Jenkins",
            ],
            icon: "qrcode",
        },
        {
            title: "ThinkPedia LLP",
            duration: "May 2019 - June 2019",
            subtitle: "SDE Intern",
            details: [
                "Worked as a full stack developer to support tech team.",
                "Developed a customer Web Application from scratch for social media management.",
            ],
            tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
            icon: "group",
        },
    ],
    education: [{
            title: "Bachelors in Computer Science and Engineering",
            duration: "",
            subtitle: "National Institute of Technology, Warangal",
            details: [
                "Qualified GATE-2020.",
                "Active Competitive Programmer with CodeChef Rating 1841*.",
                "Received 500+ stars and 300+ forks on GitHub projects.",
            ],
            tags: [
                "Data Structures & Algorithms",
                "Operating Systems",
                "Database Management System",
                "Computer Networks",
                "Compiler Designing",
                "Cloud Computing",
            ],
            icon: "graduation-cap",
        },
        {
            title: "Class 11-12th in Science and Mathematics",
            duration: "",
            subtitle: "Board of Secondary Education, Rajasthan",
            details: [
                "Qualified JEE Advanced, Main & BITSAT.",
                "Secured 99.5 percentile in Class 12th Boards Examinations.",
            ],
            tags: ["Physics", "Chemistry", "Mathematics"],
            icon: "book",
        },
    ],
    footer: [{
            label: "Dev Profiles",
            data: [{
                text: "GitHub",
                link: "https://github.com/AntonKuksov",
            }],
        },
        {
            label: "Resources",
            data: [{
                    text: "Enable Dark/Light Mode",
                    func: "enableDarkMode()",
                },
                {
                    text: "Print this page",
                    func: "window.print()",
                }
            ],
        },
        {
            label: "Social Profiles",
            data: [{
                text: "Linkedin",
                link: "https://www.linkedin.com/in/anton-kuksov-43449b19a/",
            }],
        },
        {
            label: "copyright-text",
            data: [
                "Made with &hearts; by Anton Kuksov.",
                "&copy; No Copyrights. Feel free to use this template."
            ],
        },
    ],
};