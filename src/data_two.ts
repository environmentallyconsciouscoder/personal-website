
export const aspirations = "I'm seeking a role that is preferably remote or hybrid, as I highly value a flexible working pattern. My preferred work hours are full-time. In the next six months, my goal is to work collaboratively in a team or independently on a project, gaining a comprehensive understanding of the business. I aim to seamlessly integrate into my team, learn the technology stack, and engage with customers to understand for whom I am building. I'm excited to share my previous experiences in product development and team management, as well as to learn from my colleagues. Looking ahead, my career aspiration is to grow within the company I am working for and eventually manage a large team."

export const projects = [
    {
        name:"Food Waste Monitoring System",
        skills: ['Cloud Management', 'Full Stack Development', 'Project Management', 'Stakeholder Management'],
        link: 'https://softwarecornwall.org/news/cornish-start-up-greenkode-wins-place-on-european-accelerator-programme/',
        image: "/personal-website/images/portfolio_one.png",
        description: 'Visualise a high-level summary of the financial and environmental impacts resulting from food waste. Present more granular data, including forecasts and trends, to help users plan their businesses. Additionally, I have created a customer live feed to showcase the positive impact for our B2C clients.'
    },
    {
        name:"Business Intelligence System",
        skills: ['Agile Management', 'Full Stack Development', 'ETL', 'Project Management', 'Users Management'],
        link: 'https://limetrack.earth/',
        image: "/personal-website/images/portfolio_two.png",
        description: 'Headed an Innovate UK project, where I created an interactive map showcasing the density of hospitality businesses across the UK. This initiative empowered our sales team to strategically choose new network locations. I sourced the data using ETL and developed the front end, back end, and database. Additionally, I created an interactive dashboard for the mobile app designed for B2B clients.'
    },
    {
        name:"CRM System",
        skills: ['Cloud Management', 'Full Stack Development', 'Project Management', 'Stakeholder Management'],
        link: 'https://scoopmybin.com/',
        image: "/personal-website/images/portfolio_three.png",
        description: 'Developed a CRM system for onboarding new users and managing pilots. The automated onboarding process incorporates tasks such as sending emails, completing multiple forms, creating company accounts, and integrating QR codes. Additionally, I designed and built a dashboard to display various waste records for our clients.'
    }
]

export const projectsTwo = [
    {
        name:"Formula 1",
        skills: ['Azure Databricks', 'Azure Data Factory', 'Delta Lake', 'Apache Spark', 'Python', 'SQL'],
        link: '',
        image: "/personal-website/images/formula1_db_schema.png",
        description: 'Configured and managed a Databricks workspace, including cluster setup, storage, and secure access using service principals. Created notebooks for ETL processes in the ingestion and processing layers, displaying results in reports and tables. Utilized various data patterns, such as full load and incremental load, to meet pipeline requirements. Employed Azure Data Factory to schedule and run notebooks for ingestion and transformations.'
    },
    {
        name:"Auto ML Platform",
        skills: ['mySQL', 'Fast API', 'Vite', 'Open AI', 'scikit-learn', 'TensorFlow', 'matplotlib', 'pandas'],
        link: '',
        image: "/personal-website/images/auto_ml_platform.png",
        description: 'Prototyped a no-code platform for performing data science and machine learning tasks. Users can upload their CSV files and choose their parameters. They can also chat with OpenAI to ask machine learning-related questions'
    },
    {
        name:"Financial Sentiment Analysis Platform",
        skills: ['Next.js', 'React.js', 'Taiwind', 'Hugging Faces Transformers Library (financial sentiment analysis and summarization)', 'Fast API', 'MySQL'],
        link: 'https://www.youtube.com/shorts/LO-5uvN3y8Y',
        image: "/personal-website/images/market_sentiment_app.png",
        description: 'Prototyped an AI-driven Financial Sentiment Analysis app for analyzing news articles in real time.'
    }
]

export const technologies = [
    {
        title: 'Data Engineer Skills',
        technologies: [
          'Azure Databricks', 'Azure Data Factory', 'Azure Data Lake', 'Apache Spark', 'Python', 'SQL'
        ]
      },
    {
      title: 'Proficient',
      technologies: [
        'React', 'Redux', 'Context API', 'AWS Serverless', 'CSS', 'HTML',
        'CI/CD', 'Docker', 'Visual Studio Code', 'Python',
        'Agile', 'REST API', 'UX Design', 'JavaScript', 'Databases', 'TypeScript',
        'Scikit-learn', 'EDA', 'Jupyter Notebook', 'Neo4j', 'AWS DynamoDB',
        'FastAPI', 'Swagger API', 'Vite', 'Vitest', 'Unit Test', 'Vercel', 'Open AI', 'Google Colab', 'Stable Diffusion'
      ]
    },
    {
      title: 'Exposure',
      technologies: [
        'Adobe Illustrator', 'Adobe Photoshop', 'Gatsby', 'Docker', 'MongoDB',
        'php', 'PostgreSQL', 'WordPress', 'PHPMyAdmin', 'mySQL', 'Ruby on Rails',
        'Tailwind', 'Express.js', 'MongoDB Atlas', 'jQuery', 'Bitbucket',
        'React Native', 'Chakra UI', 'Vanilla Javascript', 'Terraform', 'Node.js',
        'SASS', 'Bootstrap', 'Selenium', 'BeautifulSoup', 'NumPy',
        'IntelliJ', 'TypeScript', 'Java', 'UML', 'Maven', 'Spring Boot','Amazon S3',
        'Github Cron', 'Cloud Hosting', 'AWS Code Commit', 'Git', 'Gitlab', 'Linux',
        'Object-oriented Programming', 'Pandas', 'Flutter', 'Dart', 'Heroku','YAML', 'Swagger',
        'AWS Cognito User Pools', 'AWS Lambda', 'AWS API Gateway', 'AWS Cognito SDK', 'AWS CLI',
        'AWS Amplify', 'D3 Charts', 'chart.js', 'AWS Cron Functions', 'JSON', 'Authentication', 'GraphQL', 'TensorFlow', 'UML Design'
      ]
    }
  ];

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
      experience: 'I have completed a full stack refresher course and also enrolled in a data science bootcamp.',
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
        heading: "Learning To Code",
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
                description: "To meet the specific needs of the Innovate UK Smart Grant-funded project, I learned new technologies for the frontend, backend, and database."
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
                description: "I joined Tech Returners after I didn't manage to secure enough investment for my new venture. I saw the programme as a great opportunity. I refreshed my skills by taking part in mindset sessions and learning new tech such as Typescript."
            },
            {   title: "Data Science & AI Bootcamp",
                description: "I enrolled in a data science and AI bootcamp, where I trained various machine learning models, fine-tuned them, and integrated them with full-stack development"
            }
        ]
    }
]

export const menuItems = [
    {
        icon: "",
        title: "Tech Stack",
        description: "learn more about my technical experience",
        divRef: "firstDivRef"
    },
    {
        icon: "",
        title: "Work Experiences",
        description: "look at a portfolio of my technical projects",
        divRef: "secondDivRef"
    },
    {
        icon: "",
        title: "Data Science Projects",
        description: "look at a portfolio of my data science projects",
        divRef: "thirdDivRef"
    },
    {
        icon: "",
        title: "Skills",
        description: "see how i can add value to your organisation",
        divRef: "fourthDivRef"
    },
    {
        icon: "",
        title: "About Me",
        description: "learn more about who i am outside of work",
        divRef: "fifthDivRef"
    },
    {
        icon: "",
        title: "Career Journey",
        description: "explore my career path to date",
        divRef: "sixthDivRef"
    },
    {
        icon: "",
        title: "Aspirations",
        description: "a brief summary of what i'm looking for in my next position",
        divRef: "sevethDivRef"
    },
    {
        icon: "",
        title: "Contact Me",
        description: "Get in Touch",
        divRef: "eightDivRef"
    }
]

export const aboutMe = [
    {
        text: "I've transitioned into specialising in Data Engineering after an extensive career as a CTO, lead developer, and full-stack developer across multiple startups. This experience has equipped me with a diverse set of both technical and non-technical skills."
    },
    {    text: "I am highly motivated to rejoin the tech scene after a career break. During my career break, I enrolled in a data science and AI bootcamp where I trained different Machine Learning models using scikit-learn and TensorFlow, fine-tuning models, and integrating them with full-stack development.",
    },
    {   text: "Passionate about working with Generative AI, I have played with various GPT models using the Transformers Library (Hugging Face) to complete tasks such as text generation and image generation. Additionally, I have played with the OpenAI API, Prompt Engineering, RAG, Vercel NextJS AI SDK, and LLM developer tools, including text generation web UI and stable diffusion web UI."},
    { text: "I'm excited about making a positive impact at work, helping customers solve problems, collaborating with a new team, and learning from each other."}
//     {
//     text: "I've transitioned into specialising in Data Engineering after nearly five years working as a CTO, lead developer, and full-stack developer across multiple startups. This experience has equipped me with a diverse set of both technical and non-technical skills.",
// },
// {    text: "I am highly motivated to rejoin the tech scene after a career break. During my career break, I enrolled in a data science and AI bootcamp where I trained different Machine Learning models using scikit-learn and TensorFlow, fine-tuning models, and integrating them with full-stack development.",
// },
// {   text: "Passionate about working with Generative AI, I have played with various GPT models using the Transformers Library (Hugging Face) to complete tasks such as text generation and image generation. Additionally, I have played with the OpenAI API, Prompt Engineering, RAG, Vercel NextJS AI SDK, and LLM developer tools, including text generation web UI and stable diffusion web UI."},
// { text: "I'm excited about making a positive impact at work, helping customers solve problems, collaborating with a new team, and learning from each other."}

]

export const standOutFacts = [{
    text: "I've started my own startup, where I have worked with clients such as O2 Stadium, Harvey Nichols, the Francis Crick Institute, and more. I have won grants and built my own team. Additionally, I established a podcast series of 37 episodes and got selected for an accelerator program. (checkout our podcast: https://podcasts.apple.com/ch/podcast/zero-waste-kode-all-episodes)",
},
{    text: "I thrive on challenging myself and pushing beyond my comfort zone. I've confronted personal fears in heights. To conquer this fear, I did bungee jumping. My aim is not only to conquer my own fears but also to inspire those around me to overcome their own challenges in life.",
},
{   text: "I have attained recognitions from teaching, community engagement, and personal development. These accomplishment include Coding Teacher of the Week, UPF Peace Ambassador Award, Dale Carnegie Award, Former UN Youth Delegate and Gravesend Community Award."}
]

export const interests = [
{
    icon: undefined,
    image: "/personal-website/images/image_two.jpg",
    title: "Interests",
    discription: "I enjoy cycling, visiting museums, blogging, and cooking in my spare time."
},
{
    icon: undefined,
    image: "/personal-website/images/image_three.jpg",
    title: "Sports",
    discription: "I enjoy going to the gym, boxing, and jogging. I am currently training for the half marathon."
},
{
    icon: undefined,
    image: "/personal-website/images/image.png",
    title: "Community",
    discription: "I am a member of BCS. Additionally, I have spoken at tech events in the past. I have also set up and led a team of developers in an open-source project where I am building a social media platform."
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