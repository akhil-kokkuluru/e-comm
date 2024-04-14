/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.js", "./src/Home Component/Home.jsx",'node_modules/flowbite-react/lib/esm/**/*.js', '../e-comm-app/src/FavProductsPage/FavProducts.jsx' ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
