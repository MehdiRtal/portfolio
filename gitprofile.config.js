// gitprofile.config.js

const config = {
  github: {
    username: 'MehdiRtal', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['MehdiRtal'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Mehdi-Rtal',
    twitter: '@MehdiRtal',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '@MehdiRtal',
    website: '',
    phone: '+212 6916-17956',
    email: 'contact@mehdirtal.com',
  },
  resume: {
    fileUrl: 'https://cdn.discordapp.com/attachments/921071851365617736/1030445085613097060/Mehdi_Rtals_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'FastAPI',
    'Django',
    'Flask',
    'Qt',
    'HTML',
    'CSS',
    'JavaScript',
    'Vue.js',
    'Nuxt.js',
    'SQLite',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  experiences: [],
  certifications: [],
  education: [
    {
      institution: 'École Supérieure de Management de Télécommunication et d’Informatique Sup MTI',
      degree: 'Information Technology',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Ecole Supérieure Vinci',
      degree: 'Information Technology',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Self-taught',
      degree: 'Python & JavaScript',
      from: '2018',
      to: 'Present',
    },
  ],
  externalProjects: [
    {
      title: 'GetStory.io',
      description:
        'Download Instagram Stories, built with Nuxt.js and FastAPI.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://getstory.io',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-R48L3CC0DB', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

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
    business: {
      '--rounded-box': '10rem',
      '--rounded-btn': '10rem',
    },
  },
};

export default config;
