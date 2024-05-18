import favicon from "./extensions/favicon.png"

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],

  head: {
  favicon: favicon
  },


   theme: {
    light: {
     colors: {
        primary100: '#c9ffeb',
        primary200: '#2986cc',
        primary500: '#00f298',
        buttonPrimary500: '#fff298',
        primary600: '#00bd77',
        buttonPrimary600: '#ffbd77',
        primary700: '#008755',
      }
    },
    dark: {
     colors: {
       neutral0: "#22517a", // darker background
       neutral100: "#275d8b", // lighter background
      danger100: '#F2E9E4', //danger bg button 
      buttonNeutral0: '#428bca', // button text
      buttonPrimary500: '#ebf3f9', // button bg hover
      buttonPrimary600: '#F2E9E4', // button bg
      
       success100: "#22517a", // success bg
       primary100: '#428bca', // active section background
       primary500: "#74a9d8", // light highlight
       primary600: '#F2E9E4', // user avatar, notifications and icons
       primary700: '#fcf7ff', // active section text
       
        neutral200: '#9bc2e3', //strokes
        neutral150: '#4c91cd', //darker strokes and buttons bg
        neutral500: '#fcf7ff', // icons
        neutral600: '#9bc2e3', // text and darker icons
        neutral700: '#c3daee', // text hover
        neutral800: '#ebf3f9', //main text

      }
     
    }
 
    },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
