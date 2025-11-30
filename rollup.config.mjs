import nodeResolve from '@rollup/plugin-node-resolve';  // helps finding any modules in node_modules folder
import commonjs from '@rollup/plugin-commonjs'; // converts commonjs modules to ES6
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts'; // to generate .d.ts files
import postcss from 'rollup-plugin-postcss'; // process css files
import packageJson from './package.json' with { type: 'json' }; // to access package.json data

const isWatch = Boolean(process.env.ROLLUP_WATCH);

const cjsConfig = {
    input: 'src/index.ts',
    output: {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        postcss(),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: false,
            declarationMap: false
        })
    ],
    external: ['react', 'react-dom']
};

const esmConfig = {
    input: 'src/index.ts',
    output: {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        postcss(),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist/esm/types',
            rootDir: 'src'
        })
    ],
    external: ['react', 'react-dom']
};

const dtsConfig = {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/]
};

const configs = [cjsConfig, esmConfig];
// only include .d.ts bundling when not in watch mode (i.e. for build)
if (!isWatch) configs.push(dtsConfig);

export default configs;