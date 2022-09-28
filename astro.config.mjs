import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import prefetch from "@astrojs/prefetch"

export default defineConfig({
  integrations: [prefetch(),svelte()]
})

