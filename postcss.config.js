/** @type {import('postcss-load-config').Config} */
export default {
    plugins: {
        "postcss-import": {},
        "postcss-nested": {},
        "postcss-custom-media": {},
        "postcss-sort-media-queries": {},
        "postcss-preset-env": { autoprefixer: true },
        cssnano: { preset: "default" },
    },
};