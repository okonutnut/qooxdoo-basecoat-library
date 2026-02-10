qx.Theme.define("basecoat.theme.Decoration", {
  extend: qx.theme.indigo.Decoration,

  decorations: {
    "bc-radius": {
      style: { radius: 8 },
    },

    "bc-shadow-sm": {
      style: {
        shadowBlurRadius: 3,
        shadowColor: "rgba(0,0,0,0.17)",
      },
    },

    "bc-card": {
      style: {
        radius: 8,
        width: 1,
        color: "bc-border",
        shadowBlurRadius: 3,
        shadowColor: "rgba(0,0,0,0.17)",
      },
    },
  },
});
