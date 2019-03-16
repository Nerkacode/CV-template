import viacon from './viacon.png';
import sweco from './sweco.png';
import reactLogo from './react.png';
import html5Logo from './html5.png';
import css3Logo from './css3.png';
import jsLogo from './javascript.png';
import nodejsLogo from './nodejs.png';
import vuejsLogo from './vuejs.png';
import npmLogo from './npm.png';
import gulpLogo from './gulp.png';
import sassLogo from './sass.png';
import githubLogo from './github.png';
import reduxLogo from './redux.png';
import eslintLogo from './eslint.png';
import visualstudioLogo from './visualstudio.png';
import browsersyncLogo from './browsersync.png';
import mongodbLogo from './mongodb.png';
import bootstrapLogo from './bootstrap.png';
import expressLogo from './express.png';
import mongooseLogo from './mongoose.png';
import insomniaLogo from './insomnia.png';
import robo3tLogo from './robo3t.png';

const education = {
  en: {
    label: 'Education',
    school: 'Vilnius Gediminas Technical University',
    major: {
      label: 'Master`s degree - Civil Engineering',
      value: '- Building structures, special structures',
    },
    minor: {
      label: 'Bachelor`s degree - Civil Engineering',
      value:
        '- Energy and transport structural engineering, special structures',
    },
  },
  lt: {
    label: 'Išsilavinimas',
    school: 'Vilniaus Gedimino Technikos Universitetas',
    major: {
      label: 'Magistro laipsnis - statybos inžinerija',
      value: '- statinių konstrukcijos, specialieji statiniai',
    },
    minor: {
      label: 'Bakalauro laipsnis - statybos inžinerija',
      value: '- energetikos ir transporto statyba, energetikos statiniai',
    },
  },
};

const experiance = {
  en: {
    label: 'Work Experiance',
    list: [
      {
        logo: {
          alt: 'viacon',
          src: viacon,
        },
        link: 'http://viacon.lt/',
        title: 'ViaCon Baltic',
        subtitle: 'Head of Technical Department, 2017.01 - present',
        responsibilities: [
          'Technical department activity planning,',
          'blabla.',
        ],
      },
      {
        logo: {
          alt: 'viacon',
          src: viacon,
        },
        link: 'http://viacon.lt/',
        title: 'ViaCon Baltic',
        subtitle: 'Deputy Technical Director, 2014.06 - 2017.01',
        responsibilities: [
          'Technical department activity planning,',
          'Technical department processes and sub-processes improvement,',
          'Distribution of tasks,',
          'Organizing and planing seminars,',
          'Help for Technical Director.',
        ],
      },
      {
        logo: {
          alt: 'viacon',
          src: viacon,
        },
        link: 'http://viacon.lt/',
        title: 'ViaCon Baltic',
        subtitle: 'Engineer, 2011.05 - 2014.06',
        responsibilities: [
          'Project analysis,',
          'Products management, design,',
          'Preparation of technical-commercial offers,',
          'Technical department processes and sub-processes improvement.',
        ],
      },
      {
        logo: {
          alt: 'sweco',
          src: sweco,
        },
        link: 'https://www.sweco.lt/',
        title: 'Sweco Lithuania',
        subtitle: 'Engineer, 2007.08 - 2011.05',
        responsibilities: [
          'Project analysis,',
          'Design of steel and reinforced concrete structures,',
          'FEM modeling, structural calculations, drawing.',
        ],
      },
    ],
  },
  lt: {
    label: 'Darbo patirtis',
    list: [
      {
        logo: {
          alt: 'viacon',
          src: viacon,
        },
        link: 'http://viacon.lt/',
        title: 'ViaCon Baltic',
        subtitle: 'Techninio skyriaus vadovas, 2017.01 - dabar',
        responsibilities: ['Techninio skyriaus veiklos planavimas,', 'blabla.'],
      },
      {
        logo: {
          alt: 'viacon',
          src: viacon,
        },
        link: 'http://viacon.lt/',
        title: 'ViaCon Baltic',
        subtitle: 'Technikos direktoriaus pavaduotojas, 2014.06 - 2017.01',
        responsibilities: [
          'Techninio skyriaus veiklos planavimas,',
          'Techninio skyriaus procesų ir sub-procesų tobulinimas,',
          'Užduočių paskirstymas,',
          'Seminarų planavimas ir organizavimas,',
          'Pagalba techniniamdirektoriui.',
        ],
      },
      {
        logo: {
          alt: 'viacon',
          src: viacon,
        },
        link: 'http://viacon.lt/',
        title: 'ViaCon Baltic',
        subtitle: 'Inžinierius, 2011.05 - 2014.06',
        responsibilities: [
          'Projektų analizė,',
          'Produktų valdymas, projektavimas,',
          'Techninių-komercinių pasiūlymų ruošimas,',
          'Techninio skyriaus procesų ir sub-procesų tobulinimas.',
        ],
      },
      {
        logo: {
          alt: 'sweco',
          src: sweco,
        },
        link: 'https://www.sweco.lt/',
        title: 'Sweco Lithuania',
        subtitle: 'Inžinierius, 2007.08 - 2011.05',
        responsibilities: [
          'Projektų analizė,',
          'Plieninių ir gelžbetoninių konstrukcijų projektavimas,',
          'BIM modeliavimas, konstrukcijų skaičiavimai, braižymas.',
        ],
      },
    ],
  },
};

const achievements = {
  en: {
    label: 'Achievements',
    list: [
      {
        title: 'Code Academy',
        subtitle: 'Finished advanced Front-end coding courses (480 hours):',
        responsibilities: [
          'HTML/CSS (80h),',
          'JavaScript (120h),',
          'Node.js (80h),',
          'React (120h) - in progress,',
          'Vue.js (80h) - in progress.',
        ],
      },
      {
        title: 'NKKM IT training agency',
        subtitle: 'Finished beginers WEB coding courses (140 academic hours):',
        responsibilities: ['HTML/CSS and JavaScript (80ah),', 'PHP (60ah).'],
      },
      {
        title: 'Vilnius Gediminas Technical University',
        responsibilities: [
          'Certificated as one of the best technical universities graduate in 2009 and 2011',
        ],
      },
    ],
  },
  lt: {
    label: 'Pasiekimai',
    list: [
      {
        title: 'Code Academy',
        subtitle:
          'Baigti pažengusiųjų Front-end programavimo kursai (480 val.):',
        responsibilities: [
          'HTML/CSS (80 val.),',
          'JavaScript (120 val),',
          'Node.js (80 val.),',
          'React (120 val.) - progrese,',
          'Vue.js (80 val.) - progrese.',
        ],
      },
      {
        title: 'NKKM IT mokymų agentūra',
        subtitle:
          'Baigti pradedančijųjų WEB programavimo kursai (140 akad. val.):',
        responsibilities: [
          'HTML/CSS ir JavaScript (80 akad.val.),',
          'PHP (60 akad.val.).',
        ],
      },
      {
        title: 'Vilniaus Gedimino Technikos Universitetas',
        responsibilities: [
          'Sertifikuotas kaip vienas geriausių 2009 ir 2011 mokslo metų technikos universitetų absolventų',
        ],
      },
    ],
  },
};

const technologies = {
  en: {
    label: 'Technologies',
    list: [
      {
        logo: {
          alt: 'html5',
          src: html5Logo,
        },
        link: 'https://www.w3.org/html/',
        title: 'HTML5',
      },
      {
        logo: {
          alt: 'css3',
          src: css3Logo,
        },
        link: 'https://www.w3.org/html/',
        title: 'CSS3',
      },
      {
        logo: {
          alt: 'javascript',
          src: jsLogo,
        },
        link: 'https://www.javascript.com/',
        title: 'JS',
      },
      {
        logo: {
          alt: 'nodejs',
          src: nodejsLogo,
        },
        link: 'https://nodejs.org/en/',
        title: 'node.js',
      },
      {
        logo: {
          alt: 'react',
          src: reactLogo,
        },
        link: 'https://reactjs.org/',
        title: 'React',
      },
      {
        logo: {
          alt: 'redux',
          src: reduxLogo,
        },
        link: 'https://redux.js.org/',
        title: 'Redux',
      },
      {
        logo: {
          alt: 'vuejs',
          src: vuejsLogo,
        },
        link: 'https://vuejs.org/',
        title: 'vue.js',
      },
      {
        logo: {
          alt: 'npm',
          src: npmLogo,
        },
        link: 'https://www.npmjs.com/',
        title: 'npm',
      },
      {
        logo: {
          alt: 'gulp',
          src: gulpLogo,
        },
        link: 'https://gulpjs.com/',
        title: 'Gulp',
      },
      {
        logo: {
          alt: 'sass',
          src: sassLogo,
        },
        link: 'https://sass-lang.com/',
        title: 'Sass',
      },
      {
        logo: {
          alt: 'browsersync',
          src: browsersyncLogo,
        },
        link: 'https://www.browsersync.io/',
        title: 'Browsersync',
      },
      {
        logo: {
          alt: 'mongodb',
          src: mongodbLogo,
        },
        link: 'https://www.mongodb.com/',
        title: 'mongoDB',
      },
      {
        logo: {
          alt: 'robo3t',
          src: robo3tLogo,
        },
        link: 'https://robomongo.org/',
        title: 'Robo 3T',
      },

      {
        logo: {
          alt: 'express',
          src: expressLogo,
        },
        link: 'https://expressjs.com/',
        title: 'Express',
      },
      {
        logo: {
          alt: 'mongoose',
          src: mongooseLogo,
        },
        link: 'https://mongoosejs.com/',
        title: 'mongoose',
      },
      {
        logo: {
          alt: 'insomnia',
          src: insomniaLogo,
        },
        link: 'https://insomnia.rest/',
        title: 'Insomnia',
      },
      {
        logo: {
          alt: 'bootstrap',
          src: bootstrapLogo,
        },
        link: 'https://getbootstrap.com/',
        title: 'Bootstrap',
      },
      {
        logo: {
          alt: 'visualStudioCode',
          src: visualstudioLogo,
        },
        link: 'https://code.visualstudio.com/',
        title: 'Visual Studio Code',
      },
      {
        logo: {
          alt: 'eslint',
          src: eslintLogo,
        },
        link: 'https://eslint.org/',
        title: 'ESLint',
      },
      {
        logo: {
          alt: 'github',
          src: githubLogo,
        },
        link: 'https://github.com/',
        title: 'github',
      },
    ],
  },
  lt: {
    label: 'Technologijos',
    list: [
      {
        logo: {
          alt: 'html5',
          src: html5Logo,
        },
        link: 'https://www.w3.org/html/',
        title: 'HTML5',
      },
      {
        logo: {
          alt: 'css3',
          src: css3Logo,
        },
        link: 'https://www.w3.org/html/',
        title: 'CSS3',
      },
      {
        logo: {
          alt: 'javascript',
          src: jsLogo,
        },
        link: 'https://www.javascript.com/',
        title: 'JS',
      },
      {
        logo: {
          alt: 'nodejs',
          src: nodejsLogo,
        },
        link: 'https://nodejs.org/en/',
        title: 'node.js',
      },
      {
        logo: {
          alt: 'react',
          src: reactLogo,
        },
        link: 'https://reactjs.org/',
        title: 'React',
      },
      {
        logo: {
          alt: 'redux',
          src: reduxLogo,
        },
        link: 'https://redux.js.org/',
        title: 'Redux',
      },
      {
        logo: {
          alt: 'vuejs',
          src: vuejsLogo,
        },
        link: 'https://vuejs.org/',
        title: 'vue.js',
      },
      {
        logo: {
          alt: 'npm',
          src: npmLogo,
        },
        link: 'https://www.npmjs.com/',
        title: 'npm',
      },
      {
        logo: {
          alt: 'gulp',
          src: gulpLogo,
        },
        link: 'https://gulpjs.com/',
        title: 'Gulp',
      },
      {
        logo: {
          alt: 'sass',
          src: sassLogo,
        },
        link: 'https://sass-lang.com/',
        title: 'Sass',
      },
      {
        logo: {
          alt: 'browsersync',
          src: browsersyncLogo,
        },
        link: 'https://www.browsersync.io/',
        title: 'Browsersync',
      },
      {
        logo: {
          alt: 'mongodb',
          src: mongodbLogo,
        },
        link: 'https://www.mongodb.com/',
        title: 'mongoDB',
      },
      {
        logo: {
          alt: 'robo3t',
          src: robo3tLogo,
        },
        link: 'https://robomongo.org/',
        title: 'Robo 3T',
      },

      {
        logo: {
          alt: 'express',
          src: expressLogo,
        },
        link: 'https://expressjs.com/',
        title: 'Express',
      },
      {
        logo: {
          alt: 'mongoose',
          src: mongooseLogo,
        },
        link: 'https://mongoosejs.com/',
        title: 'mongoose',
      },
      {
        logo: {
          alt: 'insomnia',
          src: insomniaLogo,
        },
        link: 'https://insomnia.rest/',
        title: 'Insomnia',
      },
      {
        logo: {
          alt: 'bootstrap',
          src: bootstrapLogo,
        },
        link: 'https://getbootstrap.com/',
        title: 'Bootstrap',
      },
      {
        logo: {
          alt: 'visualStudioCode',
          src: visualstudioLogo,
        },
        link: 'https://code.visualstudio.com/',
        title: 'Visual Studio Code',
      },
      {
        logo: {
          alt: 'eslint',
          src: eslintLogo,
        },
        link: 'https://eslint.org/',
        title: 'ESLint',
      },
      {
        logo: {
          alt: 'github',
          src: githubLogo,
        },
        link: 'https://github.com/',
        title: 'github',
      },
    ],
  },
};

const hobies = {
  en: {
    label: 'Hobbies',
    list: ['Active leisure,', 'Traveling,', 'Playing baskelball,', 'Coding ☺️'],
  },
  lt: {
    label: 'Pomėgiai',
    list: [
      'Aktyvus laisalaikis,',
      'Keliavimas,',
      'Krepšinis,',
      'Programavimas ☺️',
    ],
  },
};

export { education, experiance, achievements, technologies, hobies };
