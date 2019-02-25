import me from './NB_pic.PNG';

// zemiau esanti data paprastai ateina is duomenu bazes :)

const data = {
  name: 'Nerijus',
  contacts: {
    phone: {
      label: 'Phone:',
      value: '+370 688 88888',
    },
    email: {
      label: 'Email:',
      value: 'nerijus.bareikis@gmail.com',
    },
  },
  summary:
    'Pastry pie cotton candy jelly lollipop chocolate bar pastry tootsie roll.Brownie soufflé liquorice pudding muffin.Sugar plum toffee oat cake gummies lollipop icing.Bonbon chocolate bar chocolate cake marzipan candy canes.Gingerbread halvah wafer cotton candy marzipan candy canes candy carrot cake.Oat cake carrot cake powder bear claw biscuit sweet roll.Muffin topping ice cream soufflé sweet roll oat cake chocolate bar pastry.',
  picture: {
    alt: 'This is me',
    src: me,
  },
};

export default data;
