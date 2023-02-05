module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'prettier'
    ],
    plugins: ['prettier'],
    rules: {
        'vue/custom-event-name-casing': ['off',
        'camelCase' || 'kebab-case',
        {
          ignores: [],
        },
      ],
      'vue/v-on-event-hyphenation': ['off', {
        autofix: true,
        ignore: [],
      }],
        'prettier/prettier': ['error'],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
    },
    globals: {
        _: true,
    },
}
