// Svelte runs locally as long as you export at least an empty object,
// but as soon as you try to build on, say, Netlify, you're going to need
// to add to it so as to pass in an "adapter."

import adapter from "@sveltejs/adapter-auto";

const config = {
  kit: {
    adapter: adapter(),
  },
};

export default config;