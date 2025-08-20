import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await import.meta.glob('./posts/*.md');
  const allPosts = await Promise.all(
    Object.values(posts).map(post => post())
  );

  return rss({
    title: 'Emaswati Skate | Blog',
    description: 'Latest updates from Emaswati Skate',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.frontmatter.title,
      pubDate: new Date(post.frontmatter.pubDate),
      description: post.frontmatter.description,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}
