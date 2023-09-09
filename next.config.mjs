// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));
/** @type {import("next").NextConfig} */

const configuration = {
	experimental: {
		serverActions: true
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en"
	},
	reactStrictMode: true,
	images: {
		domains: ["res.imagekit.io", "ik.imagekit.io", "rickandmortyapi.com", "i.giphy.com", "resizer.otstatic.com"],
		minimumCacheTTL: 3600
	},
	/**
	 * @param {{ module: { rules: { test: RegExp[]; sideEffects: boolean; }[]; }; }} config
	 */
	webpack(config) {
		config.module.rules.push({
			test: [/(src|components|api|constants|schema|utils|hooks|server|pages|hoc|types)\/index.ts/i],
			sideEffects: false
		});
		return config;
	}
};
export default configuration;
