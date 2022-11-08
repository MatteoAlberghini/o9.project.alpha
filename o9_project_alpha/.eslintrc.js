module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint-config-airbnb'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-undef': 'off',
        'react/jsx-filename-extension': [
          2,
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ], /// Suppresses error about not using jsx in tsx files
        'react/react-in-jsx-scope': 'off', /// Suppress error about React not being in scope, next takes care of it
        semi: ['error', 'never'], /// Give errors on semicolons
        'import/extensions': [
          'error',
          'ignorePackages',
          { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
        ], /// Remove error on packages import with extensions
        'react/prefer-stateless-function': [0], /// Removes error when using class components for pages
        'no-shadow': 'off', /// Error in enums
        'max-len': [
          'error',
          {
            code: 150,
            tabWidth: 2,
            ignoreComments: true,
            ignoreTrailingComments: true,
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
            peerDependencies: true,
          },
        ], /// Storybook should be dev dependency
        'linebreak-style': 'off', /// Turn on if we want to use linux line endings, but git should automatically do that.
        'react/jsx-no-useless-fragment': 'off', /// Removed because we need this rule off for html parsing when we want to ignore certain tags
        'import/prefer-default-export': 'off', /// In some files we want to be able to keep the structure of multiple exports but we only have one now
        'no-restricted-syntax': 'off', /// Remove the for of block
      },
    },
  ],
};
