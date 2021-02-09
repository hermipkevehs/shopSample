module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            Lato: ["Lato", "sans-serif"],
            Raleway: ["Raleway", "sans-serif"],
         },
      },
   },
   variants: {
      extend: {
         translate: ["group-hover"],
         transitionDuration: ["group-hover"],
         transitionTimingFunction: ["group-hover"],
         inset: ["group-hover", "focus"],
      },
   },
   plugins: [],
};
