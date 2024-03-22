// gitprofile.config.ts

const CONFIG = {
  github: {
        username: 'shubham937raval', // Your GitHub org/user name. (Required)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {},
  },
  seo: {
    title: '',
    description: '',
    imageURL: '',
  },
   social: {
    linkedin: 'shubham11r',
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
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
'C','C++','Java','Python','PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
'MUI', 
    'CSS', 
  ],
  experiences: [
    {
      company: 'Freelance.com',
      position: 'Freelancer',
      from: 'September 2022',
      to: 'March 2023',
      companyLink: 'https://example.com',
    },
    
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Dharmsinh Desai University',
      degree: 'B.Tech in Computer Engineering',
      from: '2019',
      to: '2024',
    }
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

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
  footer: `Copyright © 2023 <a 
      class="text-primary" href="https://github.com/Shubham937Raval"
      target="_blank"
      rel="noreferrer"
    >Shubham Raval</a>`,
  enablePWA: true,
};

export default CONFIG;
