/**
 * AlloyTeam ESLint 规则 - React
 *
 * 包含所有 ESLint 规则，以及所有 eslint-plugin-react 规则
 * 使用 babel-eslint 作为解析器
 *
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    plugins: [
        'eslint-plugin-react'
    ],
    rules: {
        'react/jsx-no-comment-textnodes': 'error'
    }
}