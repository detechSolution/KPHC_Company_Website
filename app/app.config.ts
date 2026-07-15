export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'zinc',
    },
    // Drop Nuxt UI's green focus/active outline on links (logo, nav, etc.)
    link: {
      base: 'outline-none focus:outline-none focus-visible:outline-none rounded-md',
    },
    navigationMenu: {
      slots: {
        link: 'focus-visible:before:outline-none',
        childLink: 'focus-visible:before:outline-none',
      },
    },
    button: {
      slots: {
        // Mockups use pill CTAs; merges over default rounded-md
        base: 'rounded-full',
      },
      variants: {
        size: {
          md: {
            base: 'px-4 py-2 text-sm gap-1.5',
          },
          lg: {
            base: 'px-5 py-2.5 text-sm gap-2',
          },
          xl: {
            base: 'px-6 py-3 text-base gap-2',
          },
        },
      },
    },
    badge: {
      slots: {
        base: 'rounded-full',
      },
    },
    card: {
      slots: {
        root: 'rounded-card',
      },
    },
  },
})
