import { defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async () => {
  const [posts, pages] = await Promise.all([
    $fetch("https://api.example.com/posts").then((posts) =>
      posts.map((p) => ({
        loc: p.path,
        _sitemap: "posts",
      }))
    ),
    $fetch("https://api.example.com/pages").then((posts) =>
      posts.map((p) => ({
        loc: p.path,
        _sitemap: "pages",
      }))
    ),
  ]);

  return [...posts, ...pages];
});
