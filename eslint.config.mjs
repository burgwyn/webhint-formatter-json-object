import _import from 'eslint-plugin-import';
import markdown from 'eslint-plugin-markdown';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import stylisticTs from '@stylistic/eslint-plugin-ts';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const compat = new FlatCompat({
    allConfig: js.configs.all,
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended
});

export default [{ignores: ['**/coverage', '**/dist', '**/node_modules', '**/fixtures', '**/*.d.ts', '**/*.md']}, ...compat.extends('plugin:markdown/recommended-legacy'), {
    languageOptions: {
        ecmaVersion: 8,
        globals: {...globals.node},
        parser: tsParser,
        parserOptions: {impliedStrict: true},
        sourceType: 'module'
    },

    linterOptions: {reportUnusedDisableDirectives: true},

    plugins: {
        '@stylistic/ts': stylisticTs,
        '@typescript-eslint': typescriptEslint,
        import: fixupPluginRules(_import),
        markdown
    },

    rules: {
        '@stylistic/ts/member-delimiter-style': 'error',
        '@stylistic/ts/type-annotation-spacing': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',

        '@typescript-eslint/naming-convention': ['error', {
            custom: {
                match: true,
                regex: '^I[A-Z]'
            },
            format: ['PascalCase'],
            selector: 'interface'
        }, {
            format: ['PascalCase'],
            selector: 'class'
        }],

        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        'accessor-pairs': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'array-callback-return': 'error',
        'arrow-body-style': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs'],
        'callback-return': ['error', ['callback', 'cb', 'next']],

        camelcase: ['error', {properties: 'always'}],

        'comma-dangle': 'error',

        'comma-spacing': ['error', {
            after: true,
            before: false
        }],

        'comma-style': ['error', 'last'],
        complexity: ['off', 5],
        'computed-property-spacing': ['error', 'never'],
        'consistent-return': 'error',
        'consistent-this': ['error', 'that'],
        curly: ['error', 'all'],
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: 'error',
        'for-direction': 'error',
        'func-call-spacing': 'error',
        'func-names': 'off',
        'func-style': ['error', 'expression'],
        'guard-for-in': 'error',
        'handle-callback-err': 'error',
        'id-length': 'off',
        'id-match': 'off',

        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1
        }],

        'init-declarations': 'off',

        'key-spacing': ['error', {
            afterColon: true,
            beforeColon: false
        }],

        'keyword-spacing': 'error',
        'linebreak-style': 'off',
        'lines-around-comment': 'off',

        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],

        'max-len': 'off',
        'max-nested-callbacks': ['error', 5],
        'max-statements-per-line': 'error',
        'multiline-comment-style': ['error', 'starred-block'],
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'off',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-else-return': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inner-declarations': ['error', 'functions'],
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-mixed-operators': 'off',
        'no-mixed-requires': [1, true],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',

        'no-multiple-empty-lines': ['error', {
            max: 2,
            maxBOF: 0,
            maxEOF: 0
        }],

        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': ['error', {props: false}],
        'no-path-concat': 'error',
        'no-plusplus': 'off',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'off',
        'no-redeclare': 'off',
        'no-regex-spaces': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-modules': 'error',
        'no-restricted-properties': 'error',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-sync': 'error',
        'no-ternary': 'off',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'no-void': 'off',

        'no-warning-comments': ['warn', {
            location: 'start',
            terms: ['fixme']
        }],

        'no-with': 'error',
        'object-curly-newline': ['error', {multiline: true}],
        'object-curly-spacing': ['off', 'always', {
            arraysInObjects: false,
            objectsInObjects: false
        }],
        'object-shorthand': 'error',
        'one-var': 'off',
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],

        'padding-line-between-statements': ['error', {
            blankLine: 'always',
            next: 'return',
            prev: '*'
        }, {
            blankLine: 'always',
            next: '*',
            prev: ['const', 'let', 'var']
        }, {
            blankLine: 'any',
            next: ['const', 'let', 'var'],
            prev: ['const', 'let', 'var']
        }, {
            blankLine: 'always',
            next: '*',
            prev: 'directive'
        }, {
            blankLine: 'any',
            next: 'directive',
            prev: 'directive'
        }],

        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],

        quotes: ['error', 'single', {allowTemplateLiterals: true}],

        radix: 'off',
        'require-await': 'error',
        semi: ['error', 'always'],

        'semi-spacing': ['error', {
            after: true,
            before: false
        }],

        'semi-style': ['error', 'last'],

        'sort-keys': ['error', 'asc', {caseSensitive: false}],

        'sort-vars': 'off',
        'space-in-parens': ['error', 'never'],

        'space-unary-ops': ['error', {
            nonwords: false,
            words: true
        }],

        'spaced-comment': ['error', 'always'],
        strict: ['error', 'never'],

        'switch-colon-spacing': ['error', {
            after: true,
            before: false
        }],

        'template-curly-spacing': 'error',
        'unicode-bom': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'outside'],
        'wrap-regex': 'error',
        yoda: ['error', 'never']
    }
}, {
    files: ['**/*.js', '**/*.ts'],

    rules: {'no-invalid-this': 'off'}
}];
