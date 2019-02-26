const education = {
  en: {
    label: 'Education',
    school: 'Vilnius Gediminas Technical University',
    major: {
      label: 'Major:',
      value: 'Engineer',
    },
    minor: {
      label: 'Minor:',
      value: 'Senior Engineer',
    },
  },
  lt: {
    label: 'Išsilavinimas',
    school: 'Vilniaus Gedimino Technikos Universitetas',
    major: {
      label: 'Pagrindinis:',
      value: 'Inžinierius',
    },
    minor: {
      label: 'Papildomas:',
      value: 'Vyr. inžinierius',
    },
  },
};

const skills = {
  en: {
    label: 'Skills',
    list: [
      {
        title: 'MS Office skills',
        discription:
          'Pastry pie cotton candy jelly lollipop chocolate bar pastry tootsie roll. Brownie soufflé liquorice pudding muffin. Sugar plum toffee oat cake gummies lollipop icing.',
      },
      {
        title: 'Computer skills',
        discription:
          'Bonbon chocolate bar chocolate cake marzipan candy canes. Gingerbread halvah wafer cotton candy marzipan candy canes candy carrot cake. Oat cake carrot cake powder bear claw biscuit sweet roll.',
      },
    ],
  },
  lt: {
    label: 'Įgūdžiai',
    list: [
      {
        title: 'Darbo su MS Office įgūdžiai',
        discription:
          'Pastry pie cotton candy jelly lollipop chocolate bar pastry tootsie roll. Brownie soufflé liquorice pudding muffin. Sugar plum toffee oat cake gummies lollipop icing.',
      },
      {
        title: 'Darbo su kompiuteriu įgūdžiai',
        discription:
          'Bonbon chocolate bar chocolate cake marzipan candy canes. Gingerbread halvah wafer cotton candy marzipan candy canes candy carrot cake. Oat cake carrot cake powder bear claw biscuit sweet roll.',
      },
    ],
  },
};

const experiance = {
  en: {
    label: 'Experiance',
    list: [
      {
        title: 'Code Academy',
        subtitle: 'Student, 2018.10 - present',
        responsibilities: [
          'HTML',
          'SCC/SCSS',
          'JavaScript',
          'Node.js',
          'React.js',
        ],
      },
      {
        title: 'The School of Life',
        subtitle: 'Human, 1985.12 - present',
        responsibilities: ['Eat', 'Run', 'Sleep'],
      },
    ],
  },
  lt: {
    label: 'Patirtis',
    list: [
      {
        title: 'Code Academy',
        subtitle: 'Studentas, 2018.10 - dabar',
        responsibilities: [
          'HTML',
          'SCC/SCSS',
          'JavaScript',
          'Node.js',
          'React.js',
        ],
      },
      {
        title: 'Gyvenimo mokykla',
        subtitle: 'Žmogus, 1985.12 - dabar',
        responsibilities: ['Valgyti', 'Bėgioti', 'Miegoti'],
      },
    ],
  },
};

const hobies = {
  en: {
    label: 'Hobbies',
    list: ['Traveling,', 'Playing baskelball,', 'Coding...'],
  },
  lt: {
    label: 'Pomėgiai',
    list: ['Keliavimas,', 'Krepšinis,', 'Programavimas...'],
  },
};

const references = {
  en: {
    label: 'References',
    list: 'Available on request.',
  },
  lt: {
    label: 'Rekomendacijos',
    list: 'Esant poreikiui, prašome kreiptis.',
  },
};

export { education, skills, experiance, hobies, references };
