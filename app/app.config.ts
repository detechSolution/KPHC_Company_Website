export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'zinc',
    },
    link: {
      base: 'rounded-md',
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
    // Base layout; AppHeader uses min-[1280px] + data-compact for show/hide (avoids hamburger flash)
    header: {
      slots: {
        left: 'flex items-center gap-1.5',
        center: 'shrink-0 items-center justify-center',
        right: 'flex items-center justify-end gap-2.5 min-w-0',
        toggle: 'shrink-0',
        content: 'w-full max-w-sm',
        overlay: '',
      },
    },
  },
})
