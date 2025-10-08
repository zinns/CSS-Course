// stylelint.config.mjs  (ESM is fine for v16+)
/** @type {import('stylelint').Config} */

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'order/properties-alphabetical-order': true,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-rule-no-unknown': true,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/no-global-function-names': null,
  },
};
