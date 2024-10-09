import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";

const SusThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      "50": "#f3faf3",
      "100": "#e3f5e3",
      "200": "#c8eac9",
      "300": "#9dd89f",
      "400": "#6abe6e",
      "500": "#45a249",
      "600": "#348538",
      "700": "#2c692f",
      "800": "#275429",
      "900": "#224525",
      "950": "#0e2511",
    },
    colorScheme: {
      light: {
        primary: {
          color: "{primary.700}",
          inverseColor: "#ffffff",
          hoverColor: "{primary.800}",
          activeColor: "{primary.800}",
        },
        highlight: {
          background: "{primary.700}",
          focusBackground: "{primary.800}",
          color: "#ffffff",
          focusColor: "#ffffff",
        },
      },
    },
  },
});

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Outfit: [400, 700, 800],
        },
      },
    ],
    "@nuxtjs/google-fonts",
    "nuxt-mdi",
    "@nuxt/image",
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  routeRules: {
    "/fortschritt": {
      redirect: "/#fortschritt",
    }
  },
  primevue: {
    options: {
      theme: {
        preset: SusThemePreset,
        options: {
          darkModeSelector: ".fake-dark-selector",
        },
      },
    },
  },
});