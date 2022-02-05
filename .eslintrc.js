module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: "true",
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:tailwindcss/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "tailwindcss"],
	rules: {
		// quotes: "error",
		// "no-undef": "error",
		// "react/prop-types": "off",
		// "react/jsx-props-no-spreading": "off",
		"no-var": "error",
	},
	settings: {
		react: {
			version: "detect",
		},
		tailwindcss: {
			groupByResponsive: true,
			whitelist: [],
		},
	},
};
