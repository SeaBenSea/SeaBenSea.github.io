// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SeaBenSea', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'SeaBenSea/playwright-demo',
          'SeaBenSea/guess-who-online',
          'SeaBenSea/HuBERT-SER',
          'SeaBenSea/BFS',
          'SeaBenSea/task-tracker-cli',
          'SeaBenSea/github-activity',
          'SeaBenSea/Smart-Plant-Caring-System',
        ],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Guess Who Online',
          description:
            'A modern, multiplayer implementation of the classic Guess Who? game built with Next.js and Supabase. Play the timeless game of deduction with friends online!',
          imageUrl:
            'https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-f3d4-61f7-a930-c61d77679261/raw?se=2025-04-15T11%3A05%3A14Z&sp=r&sv=2024-08-04&sr=b&scid=2902d8ed-3b71-5cc1-b048-d03f19bd636a&skoid=cbbaa726-4a2e-4147-932c-56e6e553f073&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-14T20%3A36%3A41Z&ske=2025-04-15T20%3A36%3A41Z&sks=b&skv=2024-08-04&sig=xZSCjq1p1%2BHyEztHISn4spcvs5QKcwT3f8ANKvdwxt0%3D',
          link: 'https://guess-who-online-seven.vercel.app/',
        },
        {
          title: 'Emotion Recognition in Turkish Speech',
          description: 'HuBERT model trained on TurEV-DB to achieve speech emotion recognition (SER) in Turkish.',
          imageUrl: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
          link: 'https://huggingface.co/SeaBenSea/hubert-large-turkish-speech-emotion-recognition',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Deniz Günenç',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'deniz-gunenc',
    // x: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    // phone: '',
    email: 'denizgunenc@proton.me',
  },
  resume: {
    fileUrl:
      'https://drive.usercontent.google.com/u/0/uc?id=10-LZFkDFBSNs7gdwOtWEauY0JJs-LZq2&export=download', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Test Planning',
    'Playwright',
    'Jest',
    'React Testing Library',
    'API Testing',
    'GitHub Actions',
    'CI/CD',
    'Jenkins',
    'JavaScript',
    'Git',
    'TypeScript',
    'Cypress',
    'Selenium',
    'Happo',
    'Loki',
    'Storybook',
    'REST',
    'Artillery',
    'GraphQL',
    'Python',
    'Java',
    'SQL',
    'PostgreSQL',
    'Docker',
    'Grafana',
    'Postman',
    'BrowserStack',
    'GCP',
    'Kubernetes',
    'Elasticsearch',
    'Scrum',
  ],
  experiences: [
    {
      company: 'Toptal (Core Team)',
      position: 'QA Automation Engineer',
      from: 'May 2024',
      to: 'Oct 2024',
      companyLink: 'https://www.toptal.com/',
    },
    {
      company: 'Toptal (Core Team)',
      position: 'Junior QA Automation Engineer',
      from: 'Mar 2023',
      to: 'May 2024',
      companyLink: 'https://www.toptal.com/',
    },
    {
      company: 'Toptal (Core Team)',
      position: 'QA Engineering Intern',
      from: 'Sep 2022',
      to: 'Mar 2023',
      companyLink: 'https://www.toptal.com/',
    },
    {
      company: 'ServisSoft',
      position: 'Computer Engineer Intern',
      from: 'Jul 2022',
      to: 'Aug 2022',
      companyLink: 'https://www.servissoft.net/',
    },
  ],
  certifications: [
    {
      name: 'QA Engineering Internship',
      body: 'Toptal',
      year: 'February 2023',
      link: 'https://storage.googleapis.com/toptal-topacademy-certificates/Quality%20Assurance%20Engineering/Deniz%20G%C3%BCnen%C3%A7/Deniz%20Gu%CC%88nenc%CC%A7%20TopAcademy%20Certificate.pdf',
    },
    {
      name: 'Testing JavaScript Course by Kent C. Dodds',
      body: 'Kent C. Dodds',
      year: '2023',
      link: 'www.testingjavascript.com',
    },
    {
      name: 'Computational Approaches to Behavioral and Clinical Sciences',
      body: 'Bogazici University',
      year: '2022',
    },
    {
      name: 'Machine Learning Operations',
      body: 'Akbank',
      year: '2021',
    },
  ],
  educations: [
    {
      institution: 'Istanbul Bilgi University',
      degree: "Bachelor's Degree in Computer Engineering",
      from: '2020',
      to: '2024',
      gpa: 3.68,
      description:
        'Developed a Transformer-Based Speech Emotion Recognition model for school-age children as part of a Senior Design Project, supported by the TÜBİTAK 2209-A University Students Research Projects Support Program. The project was awarded “Best Senior Design Project” by the Computer Engineering Department, recognizing its innovative use of deep learning techniques for emotion classification in child speech.',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cmyk',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
