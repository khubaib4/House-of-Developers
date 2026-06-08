/**
 * Node.js custom ESM loader for static asset files.
 *
 * During SSR prerendering, Node.js can't handle .svg/.png/.jpg etc.
 * This loader intercepts those imports and returns an empty mock module
 * instead of throwing ERR_UNKNOWN_FILE_EXTENSION.
 *
 * Used by: scripts/prerender.ts via `register('./asset-loader.mjs')`
 */

const ASSET_PATTERN = /\.(svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf|otf|eot|mp4|mp3)$/i;

export async function resolve(specifier, context, nextResolve) {
  if (ASSET_PATTERN.test(specifier)) {
    return {
      shortCircuit: true,
      url: new URL(specifier, context.parentURL).href,
    };
  }
  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (ASSET_PATTERN.test(url)) {
    return {
      format: "module",
      shortCircuit: true,
      // Default export: empty string (URL placeholder)
      // Named ReactComponent export: for SVGs imported as React components
      source: `export default ""; export const ReactComponent = () => null;`,
    };
  }
  return nextLoad(url, context);
}
