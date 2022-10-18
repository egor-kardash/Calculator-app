export const baseTheme = {
  lightTheme: {
    header: '#FFFFFF',
    button: '#FFFFFF',
    background: '#EEEFF0',
    buttonHover: '#d6d6d6',
    text: '#000',
    burger: '#000',
    navMenu: '#ede9e7',
    selectText: '#000',
  },

  darkTheme: {
    header: '#222222',
    button: '#7a7a7a',
    buttonHover: '#303030',
    background: '#141414',
    text: '#cccccc',
    burger: '#FFF',
    navMenu: '#19181A',
    selectText: '#000',
  },

  font: 'normal normal normal Helvetica',

  colors: {
    lightGrey: '#707070',
    grey: '#434343',
    black: '#000000',
    white: '#ffffff',
    error: '#c86464',
    primary: '#c06c84',
    secondary: '#6c5b7b',
    secondaryLight: '#6a6b7b',
  },

  boxShadows: [
    'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
  ],

  fontSize: {
    builderDisplay: '24px',
    settingsButton: '24px',
    settingsName: '32px',
    switchName: '18px',
    basic: '3vw',
    laptopL: '3.25vw',
    laptop: '3.5vw',
    tablet: '7vw',
  },

  border: {
    width: {
      basic: '1px',
      large: '2px',
    },
    radius: {
      zeroButton: '0 0 0 1rem',
      equalsButton: '0 0 1rem 0',
      display: '1rem 1rem 0 0',
      navTogglerChild: '10px',
      settingsButton: '8px',
    },
  },

  position: {
    top: {
      navMenu: '10vh',
      historyIcon: '13vh',
      historyToggleIcon: '12vh',
    },
    right: {
      navMenu: '0',
      trashIcon: '0',
      historyToggleIcon: '0',
    },
    bottom: {
      trachIcon: '0',
    },
  },

  width: {
    content: '100%',
    header: '100vw',
    navMenu: '50vw',
    navToggler: '2rem',
    navTogglerChild: '2rem',
    display: '40vw',
    mobileDisplay: '85vw',
    keypad: '40vw',
    mobileKeypad: '85vw',
    layout: '100vw',
    wrapper: '75vw',
    settings: '100vw',
    settingsButton: '27.5%',
    mobileSettingsButton: '200px',
    historyIcon: '44px',
    calculatorIcon: '50px',
  },

  height: {
    content: '100%',
    header: '10vh',
    navMenu: '90vh',
    navToggler: '2rem',
    navTogglerChild: '0.25rem',
    display: '7rem',
    controlPanel: '88vh',
    keypad: '30rem',
    mobileKeypad: '120vw',
    layout: '88vh',
    wrapper: '88vh',
    settings: '100vh',
    mobileSettingsButton: '66px',
    historyIcon: '44px',
    calculatorIcon: '50px',
  },

  margin: {
    loader: 'auto',
    navLink: '0 20px 0 20px',
    logo: '20px',
    layout: '0px',
    clearHistoryButton: '10px 0 0 0',
    historyIcon: '0 0 0 2px',
    calculatorIcon: '0 10px 0 0',
  },

  padding: {
    content: '0px',
    header: '0 20px',
    history: '3vh 0 0 2vw',
    navItem: '18px 10px',
    historyName: '14px 0 0 0',
    layout: '0px',
    wrapper: '15px',
    settingsButton: '0 0 0 2%',
    settingsWrapper: '0 0 0 6%',
    settingsName: '4.5% 0 3.5% 0',
    switchName: '0 0 7px 0',
    display: '0 5px 0 0',
  },

  size: {
    mobile: '550px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
  },
};
