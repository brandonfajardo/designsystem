import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import { dts } from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

export default [
  // --- 1. JS build (ESM + CJS) ---
  {
    input: './index.ts',
    output: [
      {
        file: './dist/index.cjs.js',
        format: 'cjs'
      },
      {
        file: './dist/index.es.js',
        format: 'es'
      }
    ],
    plugins: [
      del({ targets: 'dist/*' }), // clean dist folder before build
      resolve(),
      typescript({
        useTsconfigDeclarationDir: true,
        clean: true,
        abortOnError: false,
        check: false
      }),
      terser(),
      visualizer({ open: false })
    ],
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime'
    ]
  }
];

// rollup.config.js
// import typescript from 'rollup-plugin-typescript2';
// import resolve from '@rollup/plugin-node-resolve';
// import terser from '@rollup/plugin-terser';
// import { visualizer } from 'rollup-plugin-visualizer';
// import { dts } from 'rollup-plugin-dts';
// import del from 'rollup-plugin-delete';

// const jsBuild = {
//   input: './index.ts',
//   output: [
//     {
//       file: './dist/index.cjs.js',
//       format: 'cjs'
//     },
//     {
//       file: './dist/index.es.js',
//       format: 'es'
//     }
//   ],
//   external: ['react', 'react-dom', 'react/jsx-runtime'],
//   plugins: [
//     del({ targets: ['dist/*', 'temp-types'] }),
//     resolve(),
//     typescript({
//       useTsconfigDeclarationDir: true,
//       tsconfig: './tsconfig.json',
//       clean: true,
//       abortOnError: false,
//       check: false
//     }),
//     terser(),
//     visualizer({ open: false })
//   ]
// };

// const dtsBuild = {
//   input: './temp-types/index.d.ts',
//   output: {
//     file: './dist/index.d.ts',
//     format: 'es'
//   },
//   plugins: [dts()]
// };

// export default [jsBuild, dtsBuild];
