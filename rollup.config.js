import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import dts from "rollup-plugin-dts"
import svgr from "@svgr/rollup"
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';

export default [

    {
        input: './source/index.ts',
        output: [{ file: 'build/index.js', format: 'es' }],
        plugins: [
            typescript({ useTsconfigDeclarationDir: true }),
            external(),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.webp', '.jpg'] }),
            commonjs(),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: [['@babel/preset-react', { "runtime": "automatic" }]],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }),
            postcss({
                extract: false,
                inject: true,
                minimize: true,
                use: [
                    [
                        'sass',
                        {
                            data: '@import "./source/styles/branding.scss"; '
                        }
                    ]
                ],
            }),
            svgr({
                svgoConfig: {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false,
                          },
                        },
                      },
                    ],
                }
            }),
            image({exclude: ['**/*.svg']}),
        ]
    },
    {
        input: './source/index.ts',
        output: [{ file: 'build/index.d.ts', format: 'es' }],
        plugins: [
            dts(),
            external(),
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.webp', '.jpg'] }),
            postcss({
                extract: false,
                inject: true,
                minimize: true,
                use: [
                    [
                        'sass',
                        {
                            data: '@import "./source/styles/branding.scss"; '
                        }
                    ]
                ],
            }),
            svgr({
                svgoConfig: {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false,
                          },
                        },
                      },
                    ],
                }
            }),
            image({exclude: ['**/*.svg']}),
        ]
    },

]
