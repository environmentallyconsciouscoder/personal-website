interface Skill {
    skill: string;
    experience: string;
  }

  export const skills: Record<number, Skill> = {
    0: {
      skill: 'Integrity',
      experience: 'I am not hesitant to take on leadership roles. I initiated my own business, and through this experience, I gained valuable knowledge and experiences.',
    },
    1: {
      skill: 'Problem solving',
      experience: 'Experiences in designing and developing solutions for both mobile and website applications, catering to internal team needs as well as B2B clients.',
    },
    2: {
      skill: 'Strategic thinking',
      experience: 'Experiences in pivoting and ideating strategies in good and tough times, for example during Covid I have introduced new strategies for my business.',
    },
    3: {
      skill: 'Self development',
      experience: 'Completed an AI course, system design and Java course on code academy and Linkedin. I am planning to continue my learning in data science and AI.',
    },
    4: {
      skill: 'Mentorship',
      experience: 'Assisting other developers with AWS resource access, frontend and backend support, as well as data support. In addition to performing my own tasks.',
    },
    5: {
      skill: 'Time management',
      experience: 'I\'ve had to take ownership of every project I\'ve worked on, deadlines including funding, team, product launch, product feature deadlines and etc.',
    },
    6: {
      skill: 'Communication',
      experience: 'I have extensive experience in communicating with various stakeholders, including the founders, my own team, customers, investors, and advisory board.',
    },
    7: {
      skill: 'Collaboration',
      experience: 'I collaborated with technical teams from other companies to design, code, and test solutions. Documenting my work using the Swagger API and Notion.',
    },
    8: {
      skill: 'Adaptability',
      experience: 'I undertook projects involving the selection and implementation of fresh frontend, backend and database technologies.',
    },
  };


export const careerJourneys = [
    {
        heading: "self taught coder",
        information: [
            {   title: "My passion for tech",
                description: "I taught myself how to code by learning online and attending workshops. I was motivated by my aspiration to build great products that can have a big impact on the world. I particularly enjoyed building serverless applications with AWS."
            },
            {   title: "Junior Web Developer",
            description: "I started my tech career as a Junior Web Developer, where I learned to work in a technical team in an agile way, manage the company's codebase, and meet deadlines while working under pressure."
        }
        ]
    },
    {
        heading: "Founded My Own Tech Company",
        information: [
            {   title: "Product Innovator",
                description: "In my startup, I managed the product development lifecycle of different products from concept to production stage, executing cloud-based solutions for high-profile venues such as O2 Stadium, Harvey Nichols, and the Francis Crick Institute."
            },
            {   title: "Team & Stakeholder Leadership",
            description: "In my startup, I hired and supervised new developers using AWS tools, Zoom, and Slack. I also organised mobbing sessions with stakeholders like team, investors and advisory board members to explore new strategies and product concepts, as well as reporting our progress."
        }
        ]
    },
    {
        heading: "Chief Technology Officer",
        information: [
            {   title: "Strategist",
                description: "After I left my startup, I got an offer to join Scoop as their CTO. In this role, I was responsible for making technical decisions, advising the CEO and advisory board on the current and future technical roadmap of the company's product, and implementing our solution."
            },
            {   title: "Leading the way",
            description: "Under my leadership at Scoop, we have successfully launched our MVP and CRM system, and I have also successfully integrated our solution with the Thyngs platform, which involved a collaboration between our team and the technical team at Thyngs Limited."
        }
        ]
    },
    {
        heading: "Full Stack Developer",
        information: [
            {   title: "Project Management",
                description: "In my next role as a full-stack developer, I managed an Innovate UK Smart Grant-funded project, co-designing the solution with users, seeking weekly feedback from the CEO and team, and building the MVP and software using lean and agile principles."
            },
            {   title: "Learning new technologies",
                description: "To meet the specific needs of the Innovate UK Smart Grant-funded project, I learned new technologies for the frontend, backend, and database, such as Python, Selenium, BeautifulSoup, GitHub Actions, NumPy, Pandas, Flutter, Dart, Neo4j, and GraphQL."
        }
        ]
    },
    {
        heading: "Career Break",
        information: [
            {   title: "Researching (career break)",
                description: "I have founded a business problem. I interviewed different stakeholders and industry experts including Energy Sprong, United Living, Digital Catapult and SELCE. Some companies expressed interest in my idea, including London Legacy Development Corporation, Retrofit Solution, and Quidos."
            },
            {   title: "Pitching to investors (career break)",
                description: "I pitched my blockchain and AI solution at prominent events like EWOR, Block Dojo, SIBB, Climate X Accelerator, and Urban Hackathon, reaching the final selection stages at each."
        }
        ]
    },
    {
        heading: "Tech Returner",
        information: [
            {   title: "New mindset for Tech",
                description: "I joined Tech Returners after I didn't manage to secure enough investment for my new venture. I saw the programme as a great opportunity. I refreshed my skills by taking part in mindset sessions and learning new tech such as Java and Typescript."
            }
        ]
    }
]

export const menuItems = [{
    icon: "",
    title: "About Me",
    description: "learn more about who i am outside of work",
    divRef: "firstDivRef"
},
{
    icon: "",
    title: "Career Journey",
    description: "explore my career path to date",
    divRef: "secondDivRef"
},
{
    icon: "",
    title: "Skills",
    description: "see how i can add value to your organisation",
    divRef: "thirdDivRef"
},
{
    icon: "",
    title: "Tech Stack",
    description: "learn more about my technical experience",
    divRef: "fourthDivRef"
},
{
    icon: "",
    title: "Projects",
    description: "look at a portfolio of my technical projects",
    divRef: "fifthDivRef"
},
{
    icon: "",
    title: "Aspirations",
    description: "a brief summary of what i'm looking for in my next position",
    divRef: "sixthDivRef"
}
]

export const aboutMe = [{
    text: "I want to return to tech after taking a brief career break. Previously, I worked as a CTO, lead developer and full-stack developer. I look forward to mentoring and sharing my expertise with new developers. I possess strong skills in learning new technologies, working independently, managing teams, being agile, handling pressure and uncertainty, and collaborating closely with customers.",
},
{    text: "During my career break, I explored new entrepreneurial ideas. This involved validating problems, designing solutions, crafting pitch decks, and building traction. I have pitched and reached the final selection stages of prominent events, including EWOR, Block Dojo, SIBB, Climate X Accelerator, and Urban Hackathon.",
},
{   text: "I'm looking forward to making a positive impact at work, and I'm enthusiastic about assisting customers in solving complex technical problems, collaborating with a new team, and mentoring others. Additionally, I look forward to learning new skills and technologies in my new workplace."}
]

export const standOutFacts = [{
    text: "I've started my own startup, where I have worked with clients such as O2 Stadium, Harvey Nichols, the Francis Crick Institute, and more. I have won grants and built my own team. Additionally, I established a podcast series of 37 episodes and got selected for an accelerator program.",
},
{    text: "I thrive on challenging myself and pushing beyond my comfort zone. I've confronted personal fears in heights. To conquer this fear, I did bungee jumping. My aim is not only to conquer my own fears but also to inspire those around me to overcome their own challenges in life.",
},
{   text: "I have attained recognitions from teaching, community engagement, and personal development. These accomplishment include Coding Teacher of the Week, UPF Peace Ambassador Award, Dale Carnegie Award, Former UN Youth Delegate and Gravesend Community Award."}
]

export const interests = [{
    icon: undefined,
    image: "/images/image.png",
    title: "Giving back to the community",
    discription: "I enjoy speaking in public. I have spoken at different tech events, sharing my knowledge and experience."
},
{
    icon: undefined,
    image: "/images/image_two.jpg",
    title: "Interests",
    discription: "I enjoy cycling, visiting museums, studying, doing photography, going to the gym, and cooking in my spare time."
},
{
    icon: undefined,
    image: "/images/image_three.jpg",
    title: "Well-being",
    discription: "I like to look after my wellbeing by doing martial arts. I have practiced taekwondo, kung fu, boxing, judo, and Krav Maga in the past; I am currently training for a marathon."
}
]

export const values = [{
    icon: undefined,
    image: "",
    title: "Consistency",
    discription: "I've learned that results require consistency. Impatience and neglecting self-care can disrupt our consistency."
},
{
    icon: undefined,
    image: "",
    title: "Determination",
    discription: "I set myself goals, and to achieve them I rely on self-motivation and emotional resilience as sources of determination."
},
{
    icon: undefined,
    image: "",
    title: "Leadership",
    discription: "I believe that true leadership is defined by actions rather than words alone. Words gain their meaning through accompanying actions."
},
{
    icon: undefined,
    image: "",
    title: "Responsibility",
    discription: "I am committed to taking ownership and assuming responsibility for my actions, ensuring that others are also held accountable."
}
]