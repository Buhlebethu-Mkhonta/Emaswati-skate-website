# Emaswati Skateboarding NGO Website

This is the official website for the Emaswati Skateboarding NGO, built with Astro and TailwindCSS.

## Required Images

The following images need to be added to the `/public` directory:

### Home Page
- `hero-bg.jpg` - Hero background image (1920x1080px)
- `event-1.jpg` - Summer Skate Competition image (800x600px)
- `event-2.jpg` - Beginner's Workshop image (800x600px)
- `event-3.jpg` - Community Skate Day image (800x600px)

### About Page
- `about-story.jpg` - Our Story section image (800x600px)
- `team-member-1.jpg` - Team member photo (400x400px)
- `team-member-2.jpg` - Team member photo (400x400px)
- `team-member-3.jpg` - Team member photo (400x400px)

### Events Page
- `past-event-1.jpg` through `past-event-8.jpg` - Past events gallery images (800x600px)

### Gallery Page
- `gallery-1.jpg` through `gallery-4.jpg` - Gallery images (800x600px)
- `video-thumbnail-1.jpg` - Video thumbnail (800x600px)
- `video-thumbnail-2.jpg` - Video thumbnail (800x600px)

### Blog Page
- `featured-post.jpg` - Featured blog post image (800x600px)
- `blog-1.jpg` through `blog-3.jpg` - Blog post images (800x600px)
- `author-avatar.jpg` - Featured post author avatar (200x200px)
- `author-avatar-1.jpg` through `author-avatar-3.jpg` - Blog post author avatars (200x200px)

## Image Specifications
- All images should be optimized for web use
- Recommended formats: JPG for photos, PNG for graphics
- Maximum file size: 500KB per image
- Resolution: 72 DPI

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
.
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Page components
│   └── styles/      # Global styles
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
