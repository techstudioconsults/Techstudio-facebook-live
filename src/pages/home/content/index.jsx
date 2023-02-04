import { Images, Icons } from '../../../assets'
const {
  facebookImg,
  numberOne,
  numberTwo,
  numberThree,
  img6,
  sample1,
  sample2,
} = Images

const { location, duration, startdate } = Icons

export const FACEBOOK_CONTENT = {
  heroSection: {
    title: 'Frontend Web Development Live Class',
    subTitle:
      'Learn all you need to become a Frontend Developer and build interesting projects while learning the fundamentals of Web Development.',
    img: facebookImg,
  },
  sectionTwo: {
    header: {
      title: `Our process`,
    },
    cards: [
      {
        img: numberOne,
        title: 'Fundamentals',
        text: `This includes teaching HTML, CSS, and JavaScript, which are the basic building blocks of front-end web development.`,
      },
      {
        img: numberTwo,
        title: 'Design Principles',
        text: `This involves using the principles of good user interface and user experience design, such as typography, color theory, layout, and responsive design.`,
      },
      {
        img: numberThree,
        title: 'Development Tools and Workflow',
        text: `Teaching various development tools such as text editors, version control systems, and browser development tools, as well as a modern development workflow for front-end development, including CSS debugging.`,
      },
    ],
  },
  sectionThree: {
    header: {
      title: `What you will learn`,
    },
    list: [
      {
        id: 1,
        title: `INTRO TO WEB DEVELOPMENT`,
        desc: `This covers the basics of how the World Wide Web works, including an overview of the technologies used to create and display web pages.`,
      },
      {
        id: 3,
        title: `HTML`,
        desc: `HTML (Hypertext Markup Language) is a core technology for creating web pages and is an essential component of web development. Students will learn how to use HTML to structure the content of a web page, including text, images, links, and more. Some topics covered here are HTML Elements, Document Structure, Semantic Markup, Links and Anchors, Images, Tables and Forms, and HTML Attributes.`,
      },
      {
        id: 4,
        title: `CSS`,
        desc: `CSS (Cascading Style Sheets) is a technology used to control the visual style of a web page. Students will learn how to use CSS to control the layout, colors, fonts, and other visual aspects of a web page. Topics covered here includes CSS Selectors, Box Model, Display and Positioning, Colors and Backgrounds, Typography, CSS Grid and Flexbox, and Media Queries`,
      },
      {
        id: 5,
        title: `BOOTSTRAP`,
        desc: `Bootstrap is a popular CSS framework that helps with responsive and mobile-first websites. Students learn how to use the Bootstrap framework to rapidly develop and style web pages. Here, we cover Grid System, UI Components, CSS Utilities, Customization, and Responsive Design.`,
      },
      {
        id: 6,
        title: `GIT`,
        desc: `Git is a version control system that is widely used in software development to manage code changes and track the history of a project. In the Git course, we teach you how to use Git to manage your code and collaborate with others on a project.`,
      },
      {
        id: 7,
        title: `GITHUB`,
        desc: `GitHub is a web-based platform that provides hosting for Git repositories and a set of tools for collaboration, issue tracking, and project management. Students learn how to use the platform to manage and collaborate on software development projects.`,
      },
    ],
  },
  sectionFour: {
    header: {
      caption: `Ready to be a front end developer?`,
      title: `Enrolment details`,
    },
    schedule: [
      {
        icon: location,
        title: 'Location',
        content: 'Zoom (Online)',
      },
      {
        icon: startdate,
        title: 'Start Date',
        content: '28 / 01 / 2023',
      },
      {
        icon: duration,
        title: 'Duration',
        content: '5 Weeks',
      },
    ],
  },
  sectionFive: {
    title: 'Project Samples',
    subTitle:
      'Take a glimpse into your future as a web developer and check out projects you will be handling in class.',
    img6: img6,
    sample1: sample1,
    sample2: sample2,
  },
}
