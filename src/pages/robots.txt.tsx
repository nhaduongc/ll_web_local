export const getServerSideProps = async ({ res }: any) => {
    // Disallow: /account
    // Noindex: /account

    const robots =
        process.env.NODE_ENV === 'production'
            ? `User-agent: *
Allow: /
Sitemap: ${process.env.SITE_URL}/sitemap.xml`
            : `User-agent: *
Disallow: /`;

    res.setHeader('Content-Type', 'text/plain');
    res.write(robots);
    res.end();

    return {
        props: {},
    };
};

const Robots = () => {};

export default Robots;
