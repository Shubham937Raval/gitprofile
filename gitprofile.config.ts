// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Shubham937Raval', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 12, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: '',
    description: '',
    imageURL: '',
  },
social: {
    linkedin: 'Shubham Raval',
    twitter: '@shubham_raval_',
    mastodon: '',
    facebook: 'Shubham Raval',
    instagram: 'shubhamraval2002',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    format: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'shubhamkraval@gmail.com',
  },
   resume: {
    fileUrl:'', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'C#',
    'C',
    'C++',
    'Java',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'CSS',
    'HTML',
    'React.js',
    'Node.js',
    'Git',
    'GitHub',
    'Docker',
    'Flask',
    '.NET Core',
    'Spring Boot',
  ],
  experiences: [
    {
      company: 'Freelancer.com',
      position: 'Freelancer',
      from: 'November 2021',
      to: 'Present',
      companyLink: 'https://freelancer.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'DDIT, Nadiad',
      degree: 'B.Tech.',
      from: '2019',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3451091',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
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
  footer: `Copyright © 2023 <a 
      class="text-primary" href="https://github.com/Shubham937Raval"
      target="_blank"
      rel="noreferrer"
    >Shubham Raval</a>`,
};

export default config;
