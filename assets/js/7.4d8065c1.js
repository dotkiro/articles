(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{258:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("这里简单介绍一下使用 FaceBook 的 Docusaurus 搭建 Blog 系统")]),s._v(" "),a("h2",{attrs:{id:"项目初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目初始化"}},[s._v("#")]),s._v(" 项目初始化")]),s._v(" "),a("ol",[a("li",[s._v("首先需要使用 "),a("code",[s._v("yarn")]),s._v(" 或者  "),a("code",[s._v("npm")]),s._v(" 全局安装  "),a("code",[s._v("docusaurus-init")]),s._v(" 。")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" docusaurus-init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用 npm 进行安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docusaurus-init -g\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("安装完成后，创建你的博客项目文件夹。")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" my-blog\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("再进入项目文件夹通过 "),a("code",[s._v("docusaurus-init")]),s._v(" 初始化项目（注意： npx 需要 npm 5.3+ 支持）。")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my-blog\nnpx docusaurus-init\n")])])]),a("h2",{attrs:{id:"项目自定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目自定义"}},[s._v("#")]),s._v(" 项目自定义")]),s._v(" "),a("ol",[a("li",[s._v("初始化后的项目骨架大体如此：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("my-blog\n├── docs-examples-from-docusaurus\n│   ├── doc1.md\n│   ├── doc2.md\n│   ├── doc3.md\n│   ├── exampledoc4.md\n│   └── exampledoc5.md\n└── website\n    ├── blog-examples-from-docusaurus\n    │   ├── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),s._v("-03-11-blog-post.md\n    │   ├── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-04-10-blog-post-two.md\n    │   ├── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-09-25-testing-rss.md\n    │   ├── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-09-26-adding-rss.md\n    │   └── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-10-24-new-version-1.0.0.md\n    ├── core\n    │   └── Footer.js\n    ├── package.json\n    ├── pages\n    ├── sidebars.json\n    ├── siteConfig.js\n    └── static\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("重命名 "),a("code",[s._v("docs-examples-from-docusaurus")]),s._v(" 为 "),a("code",[s._v("docs")]),s._v(" ； "),a("code",[s._v("blog-examples-from-docusaurus")]),s._v(" 为 "),a("code",[s._v("blog")]),s._v(" 。 并且开启开发预览服务：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" docs-examples-from-docusaurus docs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" website/blog-examples-from-docusaurus blog\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" website\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用 npm start 启动")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("本地浏览器打开 http://localhost:3000 预览。")])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("开始自定页面以及配置：")])]),s._v(" "),a("blockquote",[a("p",[s._v("修改 "),a("code",[s._v("my-blog/website/pages/en/index.js")]),s._v(" 来自定义首页；\n修改 "),a("code",[s._v("my-blog/website/core/Footer.js")]),s._v(" 来自定义页脚；\n修改配置文件 "),a("code",[s._v("my-blog/website/siteConfig.js")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"使用-github-pages-部署项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-github-pages-部署项目"}},[s._v("#")]),s._v(" 使用 GitHub Pages 部署项目")]),s._v(" "),a("ol",[a("li",[s._v("此处使用 "),a("code",[s._v("Travis CI")]),s._v(" 进行自动化部署，对于 "),a("code",[s._v("Travis CI")]),s._v(" ，此处不再叙述了。")]),s._v(" "),a("li",[s._v("配置 "),a("code",[s._v("Travis CI")]),s._v(" 下项目的环境变量 "),a("code",[s._v("GH_NAME")]),s._v(", "),a("code",[s._v("GH_EMAIL")]),s._v(", "),a("code",[s._v("GH_TOKEN")]),s._v("。")]),s._v(" "),a("li",[s._v("项目根目录下创建 "),a("code",[s._v(".travis.yml")]),s._v(" 文件：")])]),s._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .travis.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("yarn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" git config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('global user.name "$'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("GH_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"\n  '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" git config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('global user.email "$'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("GH_EMAIL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"\n  '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' echo "machine github.com login $'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("GH_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" password $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("GH_TOKEN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('" '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" ~/.netrc\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" curl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("L https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//yarnpkg.com/install.sh "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" bash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' export PATH="$HOME/.yarn/bin'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v('$PATH"\n  '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cd website\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("frozen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("lockfile\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(' GIT_USER="$'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("GH_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('" yarn run publish'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);