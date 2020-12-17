import React from "react";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import CleanCSS from "clean-css";
import withRoot from "./src/withRoot";

// Keep track of sheets for each page
const globalLeak = new Map();

const prefixer = postcss([autoprefixer]);
const cleanCSS = new CleanCSS();

const defaultOptions = {
  disableAutoprefixing: false,
  disableMinification: false,
};

export const wrapRootElement = withRoot;

export const onRenderBody = (
  { setHeadComponents, pathname },
  pluginOptions
) => {
  const sheets = globalLeak.get(pathname);
  if (sheets) {
    const { disableAutoprefixing, disableMinification } = {
      ...defaultOptions,
      ...pluginOptions,
    };
    let css = sheets.toString();
    css = disableAutoprefixing
      ? css
      : prefixer.process(css, { from: undefined }).css;
    css = disableMinification ? css : cleanCSS.minify(css).styles;

    setHeadComponents([
      <style
        id="jss-server-side"
        key="jss-server-side"
        dangerouslySetInnerHTML={{ __html: css }}
      />,
    ]);

    globalLeak.delete(pathname);
  }
};
