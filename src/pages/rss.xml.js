import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await Astro.glob('../pages/posts/*.md');
  return rss({
    title: 'Emaswati Skate | Blog',
    description: 'Latest updates from Emaswati Skate',
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.pubDate),
      description: post.frontmatter.description,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}
