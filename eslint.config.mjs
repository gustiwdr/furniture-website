import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// Core SQA Rules - Errors for testing
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "warn",
			"no-console": "warn",
			"no-debugger": "error",
			"no-duplicate-imports": "error",
			"no-unreachable": "error",
			"no-unsafe-negation": "error",

			// React/Next.js Specific Rules
			"react/jsx-no-duplicate-props": "error",
			"react/jsx-no-undef": "error",
			"react/no-danger": "warn",
			"react/no-deprecated": "error",
			"react/no-direct-mutation-state": "error",
			"react/no-unsafe": "error",
			"react/jsx-key": "error",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",

			// Next.js Specific Rules
			"@next/next/no-img-element": "error",
			"@next/next/no-page-custom-font": "error",
			"@next/next/no-unwanted-polyfillio": "error",

			// Code Style - More permissive for testing
			"prefer-const": "warn",
			"no-var": "error",
			eqeqeq: ["error", "always"],
			curly: "off",
			"brace-style": "off",
			indent: "off",
			quotes: "off",
			semi: ["error", "always"],

			// Security Rules
			"no-eval": "error",
			"no-implied-eval": "error",
			"no-new-func": "error",
			"no-script-url": "error",

			// Performance Rules
			"no-inner-declarations": "error",
			"no-loop-func": "error",
			"prefer-template": "warn",

			// TypeScript Specific Rules
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/no-non-null-assertion": "warn",
		},
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"dist/**",
			"*.config.js",
			"*.config.ts",
			"coverage/**",
		],
	},
];

export default eslintConfig;
