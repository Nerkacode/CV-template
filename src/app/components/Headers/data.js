import me from './NB_pic.PNG';

// zemiau esanti data paprastai ateina is duomenu bazes :)

const data = {
  en: {
    name: 'Nerijus Bareikis',
    contacts: {
      phone: {
        label: 'Phone:',
        value: '+370 615 60354',
      },
      email: {
        label: 'Email:',
        value: 'nerijus.bareikis@gmail.com',
      },
    },
    location: 'Vilnius, Lithuania',
    summary:
      'Innovative solution seeker and planner. Excited about my career as a web developer. Persistent on learning new things, honest and friendly. Always oriented and concentrated on teamwork rezults.',
    picture: {
      alt: 'NerijusB',
      src: me,
    },
  },
  lt: {
    name: 'Nerijus Bareikis',
    contacts: {
      phone: {
        label: 'Telefonas:',
        value: '+370 615 60354',
      },
      email: {
        label: 'El. paštas:',
        value: 'nerijus.bareikis@gmail.com',
      },
    },
    location: 'Vilnius, Lietuva',
    summary:
      'Inovatyvus sprendimo ieškotojas ir planuotojas. Sužavėtas savo programuotojo karjera. Užsispyręs išmokti naujų dalykų, sąžiningas ir draugiškas. Nuolatos orientuotas ir susikoncentravęs ties komndinio darbo rezultatais.',
    picture: {
      alt: 'NerijusB',
      src: me,
    },
  },
};

export default data;
