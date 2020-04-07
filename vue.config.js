const MarkdownItContainer = require('markdown-it-container');
const MarkdownItCheckBox = require('markdown-it-task-checkbox');
const MarkdownItDec = require('markdown-it-decorate');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const wrapCustomClass = render => (...args) => render(...args)
  .replace('<code class="', '<code class="hljs ')
  .replace('<code>', '<code class="hljs">');

const vueMarkdown = {
  raw: true,
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = () => '<table class="table">';
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = wrapCustomClass(
      MarkdownIt.renderer.rules.fence,
    );
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline;
    MarkdownIt.renderer.rules.code_inline = (...args) => {
      args[0][args[1]].attrJoin('class', 'code_inline');
      return codeInline(...args);
    };
    return source;
  },
  use: [
    [
      MarkdownItContainer,
      'demo',
      {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return `<demo-block>
                        <div slot="highlight">`;
          }
          return '</div></demo-block>\n';
        },
      },
    ],
    [
      MarkdownItCheckBox,
      {
        disabled: true,
      },
    ],
    [MarkdownItDec],
  ],
};

module.exports = {
  publicPath: './',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  configureWebpack: (config) => {
    const optimization = {
      minimizer: [new UglifyPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ['console.log'],
          },
        },
      }),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./vendor-manifest.json'),
      }),
      ],
    };
    Object.assign(config, {
      optimization,
    });
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(png|svg|jpg|gif|otf)$/i)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }));
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(vueMarkdown);
  },
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://10.10.20.71:8032/v1', // 代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '', // 代理的路径
        },
      },
    },
  },
};
