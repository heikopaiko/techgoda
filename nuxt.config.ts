// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["~/plugins/vee-validate"],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@vee-validate/nuxt",
    "nuxt-multi-tenancy",
    "dayjs-nuxt",
    "nuxt-vuefire",
  ],
  routeRules: {
    "/": { swr: 300 },
    "/forums/**": { swr: 300 },
    "/devfeeds/**": { swr: 300 },
  },
  devServer: {
    port: 8080,
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      publizApiUrl: process.env.VITE_PUBLIZ_API_URL,
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
    },
  },
});
