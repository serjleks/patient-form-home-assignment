module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/base/_variables.scss";
          @import "@/scss/themes/default/_variables.scss";
        `,
      },
    },
  },
};
