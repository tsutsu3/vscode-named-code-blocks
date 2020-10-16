"use strict";

function activate(context) {
  return {
    extendMarkdownIt(md) {
      // If you want to use inline CSS, comment out named-code-blocks.css lines.
      // return md.use(require("markdown-it-named-code-blocks"), {
      //   isEnableInlineCss: true,
      // });
      // // padding does not work
      return md.use(require("markdown-it-named-code-blocks"));
    },
  };
}
exports.activate = activate;
