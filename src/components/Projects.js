import ProjectDisplay from "./ProjectDisplay"
const Projects = () => {
    const projectInfo = [
        {
            title: "Workout Tracker",
            img: "https://user-images.githubusercontent.com/91674419/222504313-fcad0023-39a7-4a91-b77e-ec857deff4f3.png",
            description: "Our workout tracker is an easy-to-use tool that helps you monitor and save your progress in a secure database. You can create custom workout plans, log your progress after each session, set goals, and access your progress history anytime. ",
            techUsed: ["HTML", "CSS", "JavaScript", "React", "MongoDB","Express", "Node"],
            linkToDemo: "https//",
            linkToGithub:"https://github.com/NoahCrown/Workout-Tracker",
            
        },
        {
            title: "Pomodoro Timer",
            img: "https://user-images.githubusercontent.com/91674419/213916248-4245e163-41f3-4565-a958-ee073ce8e103.png",
            description: "Introducing the Pomodoro Timer, the perfect productivity app made with React! This simple and intuitive app helps you focus on your tasks by breaking them down into 25-minute intervals called Pomodoros, followed by short breaks. With a clean and minimalist design, you can customize your Pomodoro and break lengths, set daily goals, and track your progress. Say goodbye to distractions and hello to a more productive day with the Pomodoro Timer app!",
            techUsed: ["HTML", "CSS", "JavaScript", "React", "Rest API"],
            linkToDemo: "https://main--pomodor-timer-study.netlify.app/",
            linkToGithub:"https://github.com/NoahCrown/Pomodoro-Timer-Final",

        },
        {
            title: "Stoic Quotes Generator",
            img: "https://user-images.githubusercontent.com/91674419/205507414-d5689dbd-ab47-4273-b135-a6bbe8eb026f.png",
            description: "Introducing the Stoic Generator app - an application that helps you find daily inspiration and motivation from the teachings of Stoicism. Built with HTML, CSS, JavaScript, and React, the app utilizes a Stoic API to generate quotes, sayings, and insights from famous Stoic philosophers such as Seneca, Marcus Aurelius, and Epictetus. With a sleek and modern design, the Stoic Generator app is the perfect tool to help you cultivate resilience, inner strength, and a positive mindset. Try it out and discover the wisdom of the Stoics today!",
            techUsed: ["HTML", "CSS", "JavaScript", "React", "Stoic API"],
            linkToDemo: "https://stoic-quotes-generator.netlify.app/",
            linkToGithub:"https://github.com/NoahCrown/Stoic-Quotes-Generator",
        },
        {
            title: "Keeper App",
            img: "https://user-images.githubusercontent.com/91674419/194080548-f101a81a-f5e6-435d-876e-bd3b2f074c39.png",
            description: "Introducing our note-taking app - a simple and intuitive application that helps you keep track of your ideas, tasks, and reminders. With a clean and organized interface, the app allows you to create, edit, and delete notes with ease. You can also categorize your notes with tags, search for specific notes, and customize the app's settings to suit your preferences. Whether you're a student, professional, or just someone who likes to stay organized, our note-taking app is the perfect tool to help you stay on top of your game.",
            techUsed: ["HTML", "CSS", "JavaScript", "React",],
            linkToDemo: "https://main--keeper-notes-a.netlify.app/",
            linkToGithub:"https://github.com/NoahCrown/Keeper-App",
        },
        {
            title: "Tenzies",
            img: "https://user-images.githubusercontent.com/91674419/192143996-18069fd0-25c3-4005-8e80-3ad5de2ab7bf.png",
            description:"Introducing Tenzies - a web application built with HTML, CSS, JavaScript, and React that allows you to play the classic dice game of Tenzies. With a user-friendly interface and customizable settings, you can play with up to four players and adjust the number of dice and the winning score. Whether you're a fan of board games or just looking for a fun way to pass the time, Tenzies is the perfect game for you!",
            techUsed: ["HTML", "CSS", "JavaScript", "React",],
            linkToDemo: "",
            linkToGithub:"https://github.com/NoahCrown/Tenzies",
        },
        {
            title: "Rock Paper Scissors",
            img: "https://user-images.githubusercontent.com/91674419/166465591-6137edf8-9983-4d31-a17c-71b52305b58e.png",
            description:"Introducing our rock paper scissors web app - a fun and interactive game built with HTML, CSS, and JavaScript. With a sleek and modern design, the app allows you to play the classic game of rock paper scissors against the computer. You can track your score and see the game history, making it the perfect way to pass the time or challenge your friends. Try it out now and see if you have what it takes to beat the computer!",
            techUsed: ["HTML", "CSS", "JavaScript",],
            linkToDemo: "https://rock-paper-scissors-aa.netlify.app/",
            linkToGithub:"https://github.com/NoahCrown/Rock-Paper-Scissors",
        },
        {
            title: "Portfolio",
            img: "https://user-images.githubusercontent.com/91674419/222631909-65ae385f-ec7e-453a-93a4-fdf7457f6b43.png",
            description:"Introducing my portfolio - a sleek and modern website built with HTML, CSS, and JavaScript. Featuring my personal projects, skills, and experience, the portfolio showcases my expertise in web development and design. With a user-friendly interface and responsive design, the portfolio is the perfect way to showcase your work and impress potential employers or clients. Check it out now and see what I can do!",
            techUsed: ["HTML", "CSS", "JavaScript", "React"],
            linkToDemo: "",
            linkToGithub:"https://github.com/NoahCrown/Portofolio",
        },
        {
            title: "Casa De Communidad",
            img: "https://user-images.githubusercontent.com/91674419/163372352-2934b549-134c-49de-a3e0-ca5fa33a3544.png",
            description:"A library management system is a software application designed to help manage the operations of a library. It provides a centralized location for storing and managing library resources such as books, journals, and multimedia. The system helps librarians to efficiently manage their library collections by automating tasks such as cataloging, circulation, and inventory management. Additionally, library users can use the system to search for and reserve library resources, view their borrowing history, and manage their accounts. Overall, a library management system can help libraries provide better services to their patrons while increasing efficiency and reducing workload for library staff.",
            techUsed: ["Python", "Tkinter", "Pandas"],
            linkToDemo: "",
            linkToGithub:"https://github.com/NoahCrown/Casa-De-Communidad",
        }
        
    ]
    return (
        <div id="projects">

        <h1 className="projects-title ">Projects</h1>
        <hr></hr>


        <div className="statement-nav">
            <div className=" circle red-button"></div>
            <div className=" circle yellow-button"></div>
            <div className=" circle green-button"></div>
        </div>
        {projectInfo.map((val) => (
            <ProjectDisplay
            title={val.title}
            img={val.img}
            desc={val.description}
            tech={val.techUsed}
            demo={val.linkToDemo}
            github={val.linkToGithub}
            />
        ))}
        
        </div>
    )
}

export default Projects