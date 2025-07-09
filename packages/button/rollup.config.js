import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './index.ts',    // Entry file where your component/types is exported
  output: [
    {
      file: 'lib/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    del({ targets: ['lib/*', 'types/*'] }),   // Cleans output folders before build
    resolve(), // Needed to include dependencies like clsx, tailwind-merge, etc., into the bundle if not marked as external
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true,
      abortOnError: false,
      check: false
    })
  ],
  external: [ // Tells rollup not to bundle modules
    'react',
    'react-dom',
    'react/jsx-runtime'
  ]
}