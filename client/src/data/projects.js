
import projectChat from "../images/project-chat.png";
import projectEcommerce from "../images/project-ecommerce.png";

export const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "Solves the problem of complex checkout flows — a streamlined shopping experience with cart management, secure payments, and order tracking.",
        image: projectEcommerce,
        tech: ["React", "Node", "MongoDB", "Stripe"],
        liveUrl: "https://your-ecommerce-demo.com",
        githubUrl: "https://github.com/yourusername/ecommerce"
    },
    {
        title: "Task Management App",
        description:
            "Eliminates scattered to-do lists — a collaborative workspace where teams can organize, prioritize, and track project progress in real-time.",
        image: "/images/project-tasks.png",
        tech: ["TypeScript", "Express", "JWT", "Socket.io"],
        liveUrl: "https://your-tasks-demo.com",
        githubUrl: "https://github.com/yourusername/task-app"
    },
    {
        title: "Real-Time Chat App",
        description:
            "Bridges communication gaps — instant messaging with typing indicators, read receipts, and file sharing for seamless team collaboration.",
        image: projectChat,
        tech: ["React", "Node", "Socket.io", "MongoDB"],
        liveUrl: "https://chit-chat-five-indol.vercel.app/",
        githubUrl: "https://github.com/mahendrakumarsingh/ChitChat"
    }
];
