import process from 'process';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';

const devMode = process.env.NODE_ENV === 'development';
const postcssPlugin = postcss({ minimize: true, inject: true });

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript(),
			postcssPlugin,
			devMode ? terser() : [],
		],
		external: ['react', 'react-dom'],
	},
	{
		input: 'src/index.ts',
		output: { file: 'dist/index.d.ts', format: 'esm' },
		plugins: [dts(), postcssPlugin],
	},
];
