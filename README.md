# Open Source Phonics

Homepage for **Open Source Phonics** — free, high-quality phonics materials for
teachers, tutors, and families. Built on the science of reading. Always free.

This is a faithful implementation of the "Bright Classroom" design: warm
paper-and-ink surfaces, playful spot colors, chunky letter tiles, marker
highlights, and sticker-cutout cards — with the final color direction (blue
logomark and primary CTAs, cyan-blue paper background, dark ink mission/footer
bands) applied.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- Plain CSS design system (`src/styles.css`) — no UI framework
- Fonts: Bricolage Grotesque (display) + Hanken Grotesk (body), via Google Fonts

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

```
index.html              # app shell + font preloads
src/
  main.jsx              # React entry, imports the design-system CSS
  App.jsx               # page composition + scroll-spy + smooth-scroll nav
  data.js              # story groups, imagery, and endorsement data
  styles.css           # "Bright Classroom" design system
  components/
    Nav.jsx            # sticky nav, story-group dropdown, mobile drawer
    Hero.jsx           # hero + mission band (+ Tile primitive)
    HowItWorks.jsx     # 3-step "how it works" section
    Stories.jsx        # decodable-stories browser: search, filter, modal
    Footer.jsx         # endorsements slider, final CTA, footer
```

## Sections

- **Nav** — sticky header with hover dropdown of all 10 story groups, full
  mobile hamburger drawer, scroll-spy active states, smooth-scroll anchors.
- **Hero** — headline with marker highlight, dual CTAs, classroom photo with
  floating sticker badges and interactive `s·o·u·n·d` letter tiles.
- **Mission band** — "Literacy is a civil right" with three stats.
- **How it works** — three research-backed steps with real classroom photos.
- **Decodable Stories browser** — search by sound/pattern + level filter chips,
  live count, and clickable cards that open a preview modal with the phonics
  focus and a sample decodable passage.
- **Endorsements** — quote slider with prev/next and dot navigation.
- **Final CTA + Footer** — bold download CTA and full site footer.

> Photography is currently hot-linked from the existing Open Source Phonics
> WordPress CDN. For production these should be hosted locally.
