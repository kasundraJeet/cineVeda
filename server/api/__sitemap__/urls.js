import { defineSitemapEventHandler } from "#imports";

export default defineSitemapEventHandler(async () => {
  const celebrityPages = Array.from({ length: 500 }, (_, index) => ({
    loc: `/celebrity/page/${index + 1}`,
    _sitemap: "celebrity_pages",
  }));

  return [...celebrityPages];
});
