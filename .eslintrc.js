module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
  
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module', 
    },
  
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
  
    rules: {
      'no-console': 'warn', 
      'no-debugger': 'warn',
      'curly': ['warn', 'all'],
      'eqeqeq': 'error',
      'no-eval': 'error',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-var': 'error',
      'prefer-const': 'error',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
    },
  
    parser: 'babel-eslint',
    plugins: ['react', 'prettier'],
    
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  