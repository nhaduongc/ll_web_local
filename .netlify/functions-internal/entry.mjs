import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { escape as escape$1 } from 'html-escaper';
/* empty css                                 */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import { compile } from 'path-to-regexp';

function check$1(Component) {
	return Component['render'] && Component['$$render'];
}

async function renderToStaticMarkup$1(Component, props, slotted) {
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		slots[key] = () =>
			`<astro-slot${key === 'default' ? '' : ` name="${key}"`}>${value}</astro-slot>`;
	}
	const { html } = Component.render(props, { $$slots: slots });
	return { html };
}

const _renderer1 = {
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
};

const ASTRO_VERSION = "1.6.12";

function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(filePathname, _site, projectRootStr) {
  const site = _site ? new URL(_site) : void 0;
  const referenceURL = new URL(filePathname, `http://localhost`);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    generator: `Astro v${ASTRO_VERSION}`,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u, segment) => new URL(segment, u), referenceURL).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}

const escapeHTML = escape$1;
class HTMLString extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}

var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;

var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;

var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;

var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;

var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;

var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;

function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
const hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}

const defineErrors = (errs) => errs;
const AstroErrorData = defineErrors({
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    code: 1e3
  },
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    code: 3001,
    message: "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    code: 3002,
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    code: 3003,
    message: "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    code: 3004,
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    code: 3005,
    message: (route, returnedValue) => `Route ${route ? route : ""} returned a \`${returnedValue}\`. Only a Response can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    code: 3006,
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    code: 3007,
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are." : "is."} ${validRenderersCount} renderer${plural ? "s." : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were." : "it was not."} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    code: 3008,
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    code: 3009,
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    code: 3010,
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    code: 3011,
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    code: 3012,
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    code: 3013,
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    code: 3014,
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    code: 3015,
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  ReservedSlotName: {
    title: "Invalid slot name.",
    code: 3016,
    message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
  },
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    code: 3017,
    message: `Cannot use \`output: 'server'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  NoMatchingImport: {
    title: "No import found for component.",
    code: 3018,
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  UnknownViteError: {
    title: "Unknown Vite Error.",
    code: 4e3
  },
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    code: 4001,
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  InvalidGlob: {
    title: "Invalid glob pattern.",
    code: 4002,
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  UnknownCSSError: {
    title: "Unknown CSS Error.",
    code: 5e3
  },
  CSSSyntaxError: {
    title: "CSS Syntax Error.",
    code: 5001
  },
  UnknownMarkdownError: {
    title: "Unknown Markdown Error.",
    code: 6e3
  },
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter.",
    code: 6001
  },
  UnknownConfigError: {
    title: "Unknown configuration error.",
    code: 7e3
  },
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    code: 7001,
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    code: 7002,
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  UnknownError: {
    title: "Unknown Error.",
    code: 99999
  }
});

function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByCode(code) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].code === code);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}

function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}

class AstroError extends Error {
  constructor(props, ...params) {
    var _a;
    super(...params);
    this.type = "AstroError";
    const { code, name, title, message, stack, location, hint, frame } = props;
    this.errorCode = code;
    if (name) {
      this.name = name;
    } else {
      this.name = ((_a = getErrorDataByCode(this.errorCode)) == null ? void 0 : _a.name) ?? "UnknownError";
    }
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setErrorCode(errorCode) {
    var _a;
    this.errorCode = errorCode;
    this.name = ((_a = getErrorDataByCode(this.errorCode)) == null ? void 0 : _a.name) ?? "UnknownError";
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
}

const PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}

function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}

const HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
const HydrationDirectives = new Set(HydrationDirectivesRaw);
const HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n) => `client:${n}`));
function extractDirectives(displayName, inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}

function validateComponentProps(props, displayName) {
  var _a;
  if (((_a = (Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true},{_:process.env._,}))) == null ? void 0 : _a.DEV) && props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
class AstroComponent {
  constructor(htmlParts, expressions) {
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html);
      yield* renderChild(expression);
    }
  }
}
function isAstroComponent(obj) {
  return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object AstroComponent]";
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
async function* renderAstroComponent(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
async function renderToString(result, componentFactory, props, children) {
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent(Component)) {
    const response = Component;
    throw response;
  }
  let parts = new HTMLParts();
  for await (const chunk of renderAstroComponent(Component)) {
    parts.append(chunk, result);
  }
  return parts.toString();
}
async function renderToIterable(result, componentFactory, displayName, props, children) {
  validateComponentProps(props, displayName);
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent(Component)) {
    console.warn(
      `Returning a Response is only supported inside of page components. Consider refactoring this logic into something like a function that can be used in the page.`
    );
    const response = Component;
    throw response;
  }
  return renderAstroComponent(Component);
}
async function renderTemplate(htmlParts, ...expressions) {
  return new AstroComponent(htmlParts, expressions);
}

async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0) ; else if (child instanceof AstroComponent || Object.prototype.toString.call(child) === "[object AstroComponent]") {
    yield* renderAstroComponent(child);
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}

const slotString = Symbol.for("astro:slot-string");
class SlotString extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
}
function isSlotString(str) {
  return !!str[slotString];
}
async function renderSlot(_result, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    let instructions = null;
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(new SlotString(content, instructions));
  }
  return fallback;
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}

const Fragment = Symbol.for("astro:fragment");
const Renderer = Symbol.for("astro:renderer");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts(prescriptType, hydration.directive);
        return markHTMLString(prescripts);
      } else {
        return "";
      }
    }
    default: {
      if (isSlotString(chunk)) {
        let out = "";
        const c = chunk;
        if (c.instructions) {
          for (const instr of c.instructions) {
            out += stringifyChunk(result, instr);
          }
        }
        out += chunk.toString();
        return out;
      }
      return chunk.toString();
    }
  }
}
class HTMLParts {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
}

const ClientOnlyPlaceholder = "astro-client-only";
class Skip {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
}
Skip.symbol = Symbol("astro:jsx:skip");
let originalConsoleError;
let consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString(await renderToString(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement$1(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 && output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponent(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponent(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement$1(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}

/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
const binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}

const voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
const htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
const htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
const svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
const toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
const kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
const toStyleString = (obj) => Object.entries(obj).map(([k, v]) => `${kebab(k)}:${v}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}

function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

const rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function getComponentType(Component) {
  if (Component === Fragment) {
    return "fragment";
  }
  if (Component && typeof Component === "object" && Component["astro:html"]) {
    return "html";
  }
  if (isAstroComponentFactory(Component)) {
    return "astro-factory";
  }
  return "unknown";
}
async function renderComponent(result, displayName, Component, _props, slots = {}, route) {
  var _a, _b;
  Component = await Component ?? Component;
  switch (getComponentType(Component)) {
    case "fragment": {
      const children2 = await renderSlot(result, slots == null ? void 0 : slots.default);
      if (children2 == null) {
        return children2;
      }
      return markHTMLString(children2);
    }
    case "html": {
      const { slotInstructions: slotInstructions2, children: children2 } = await renderSlots(result, slots);
      const html2 = Component.render({ slots: children2 });
      const hydrationHtml = slotInstructions2 ? slotInstructions2.map((instr) => stringifyChunk(result, instr)).join("") : "";
      return markHTMLString(hydrationHtml + html2);
    }
    case "astro-factory": {
      async function* renderAstroComponentInline() {
        let iterable = await renderToIterable(result, Component, displayName, _props, slots);
        yield* iterable;
      }
      return renderAstroComponentInline();
    }
  }
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(displayName, _props);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error;
      for (const r of renderers) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error ?? (error = e);
        }
      }
      if (!renderer && error) {
        throw error;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = (_a = metadata.componentUrl) == null ? void 0 : _a.split(".").pop();
      renderer = renderers.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroComponent(
      await renderTemplate`<${Component}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Component) ? `/>` : `>${childSlots}</${Component}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
        yield html;
      } else {
        yield markHTMLString(html.replace(/\<\/?astro-slot\>/g, ""));
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement("astro-island", island, false));
  }
  return renderAll();
}

const uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
function renderHead(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
    return renderElement("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
  return markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n"));
}
async function* maybeRenderHead(result) {
  if (result._metadata.hasRenderedHead) {
    return;
  }
  yield renderHead(result);
}

typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";

function createComponent(cb) {
  cb.isAstroComponentFactory = true;
  return cb;
}
function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}

const AstroJSX = "astro:jsx";
const Empty = Symbol("empty");
const toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};

const $$Astro$i = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Container.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead($$result)}<div class="container px-8 mx-auto">
  ${renderSlot($$result, $$slots["default"])}
</div>`;
});

const $$Astro$h = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Button.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    colour,
    href
  } = Astro2.props;
  const colourClasses = {
    dark: "text-green",
    light: "bg-transparent hover:bg-white active:bg-grey active:border-grey active:text-green text-white hover:text-green border-white"
  };
  const classes = [
    `inline-flex items-center justify-center h-[49px] px-[27px] border-[3px] whitespace-nowrap leading-5 rounded-full min-w-button
  text-body-small font-semibold overflow-hidden transition-colors`,
    colourClasses[colour] ?? ""
  ].join(" ");
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}>
  ${renderSlot($$result, $$slots["default"])}
</a>`;
});

const $$Astro$g = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Typography/TextBody.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$TextBody = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TextBody;
  const {
    is = "p"
  } = Astro2.props;
  const El = is;
  return renderTemplate`${renderComponent($$result, "El", El, { "class": "text-body" }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
});

const $$Astro$f = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Typography/TextBodyLead.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$TextBodyLead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$TextBodyLead;
  const { is = "p" } = Astro2.props;
  const El = is;
  return renderTemplate`${renderComponent($$result, "El", El, { "class": "text-body-lead" }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
});

const $$Astro$e = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Typography/TextBodyLarge.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$TextBodyLarge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$TextBodyLarge;
  const {
    is = "p"
  } = Astro2.props;
  const El = is;
  return renderTemplate`${renderComponent($$result, "El", El, { "class": "text-body-large" }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
});

const $$Astro$d = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Typography/TextBodySmall.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$TextBodySmall = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TextBodySmall;
  const {
    is = "p"
  } = Astro2.props;
  const El = is;
  return renderTemplate`${renderComponent($$result, "El", El, { "class": "text-body-small" }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
});

const $$Astro$c = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Typography/TextHeaderXLarge.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$TextHeaderXLarge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TextHeaderXLarge;
  const { is = "h1" } = Astro2.props;
  const El = is;
  return renderTemplate`${renderComponent($$result, "El", El, { "class": "text-header-medium md:text-header-xlarge font-black" }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
});

const $$Astro$b = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Typography/TextHeaderLarge.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$TextHeaderLarge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TextHeaderLarge;
  const { is = "h2" } = Astro2.props;
  const El = is;
  return renderTemplate`${renderComponent($$result, "El", El, { "class": "text-header-small md:text-header-large font-black" }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
});

const $$Astro$a = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Typography/TextHeaderMedium.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$TextHeaderMedium = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TextHeaderMedium;
  const { is = "h3" } = Astro2.props;
  const El = is;
  return renderTemplate`${renderComponent($$result, "El", El, { "class": "text-body-lead md:text-header-medium font-bold" }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
});

const $$Astro$9 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Typography/TextHeaderSmall.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$TextHeaderSmall = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TextHeaderSmall;
  const {
    is = "h4"
  } = Astro2.props;
  const El = is;
  return renderTemplate`${renderComponent($$result, "El", El, { "class": "text-header-small font-bold" }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
});

function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
Promise.resolve();
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape(value, true)}"`;
    return ` ${name}${assignment}`;
}
function style_object_to_string(style_object) {
    return Object.keys(style_object)
        .filter(key => style_object[key])
        .map(key => `${key}: ${style_object[key]};`)
        .join(' ');
}
function add_styles(style_object) {
    const styles = style_object_to_string(style_object);
    return styles ? ` style="${styles}"` : '';
}

/* src/components/Menu.svelte generated by Svelte v3.50.1 */

const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let open;
	const burgerLine = `h-1 w-10 my-1 rounded-full bg-white transition ease transform duration-300`;

	open = false;

	return `<button class="${"lg:hidden flex flex-col h-12 w-12 rounded justify-center items-center group"}"><div class="${"flex flex-col items-center justify-center scale-75 md:scale-100"}"><div${add_attribute("class", [burgerLine, open ? "rotate-45 translate-y-3" : ""].join(" "), 0)}></div>
    <div${add_attribute("class", [burgerLine, open ? "opacity-0" : "opacity-100"].join(" "), 0)}></div>
    <div${add_attribute("class", [burgerLine, open ? "-rotate-45 -translate-y-3" : ""].join(" "), 0)}></div></div></button>
<div${add_attribute(
		"class",
		[
			"fixed lg:relative -z-10 lg:z-0",
			"inset-0 lg:inset-auto",
			"flex justify-center items-center lg:justify-start lg:items-start",
			"bg-green/90 lg:bg-transparent",
			open ? "opacity-100 visible" : "opacity-0 invisible",
			"transition-all lg:visible lg:opacity-100"
		].join(" "),
		0
	)}>${slots.default ? slots.default({}) : ``}</div>`;
});

function useApi() {
  const useQuery = async (
    query,
    url = {"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true}.GRAPHQL_ENDPOINT,
    method = 'POST',
    headers = {}
  ) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...headers
        },
        body: JSON.stringify({
          query: query
        }),
      });
    
      return response.json()
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const useImage = (img) => {
    if (!img) return "";

    return `${{"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true}.UPLOAD_PATH}/${img.id}`
  };

  // Set string value to "exists" if a property is set
  const exists = (property) => {
    return property ? "exists" : null;
  };

  return {
    useQuery,
    useImage,
    exists
  }
}

const $$Astro$8 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/layouts/Layout.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { useImage } = useApi();
  const defaultDescription = "LitterLotto\xAE is a free to enter Prize Draw, with regular spot prizes and huge jackpots, supported by the brands that want a cleaner environment. To enter, simply use the app to take a picture of litter as you place it in the bin. Each time you submit a new piece of litter it's another chance to win!";
  const {
    title,
    icons,
    headerButtons,
    footerLinks,
    description = defaultDescription
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full text-base font-sans">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#a2d929">
    <meta name="msapplication-TileColor" content="#08122c">
    <meta name="theme-color" content="#08122c">

    <title>${title}</title>
    <link rel="stylesheet" href="https://use.typekit.net/hyi3ttn.css">
    <meta name="description"${addAttribute(description, "content")}>

    <!-- OG tags -->
    <meta property="og:url" content="https://litterlotto.com">
    <meta property="og:type" content="website">
    <meta property="og:title" content="LitterLotto">
    <meta property="og:description" content="">
    <meta property="og:image" content="">

    <!-- Twitter tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@LitterLotto">
    <meta name="twitter:author" content="@LitterLotto">
    <meta name="twitter:image" content="">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap" rel="stylesheet">
  ${renderHead($$result)}</head>
  <body class="min-h-full bg-grey relative flex flex-col">
    <div class="w-full flex-1 flex flex-col mx-auto max-w-[1920px] shadow-lg bg-white">
      <header class="sticky z-50 w-100 h-16 md:h-[82px] top-0 right-0 left-0 bg-green text-white flex items-center">
        ${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="flex items-center justify-start gap-8">
            <div class="mr-auto pb-1">
              <a href="/">
                <img src="/logo-white.svg" alt="LitterLotto Logo" class="h-8 md:h-11 w-auto">
              </a>
            </div>

            ${renderComponent($$result, "Menu", Menu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/joshualyness/Sites/litterlotto-front-end/src/components/Menu.svelte", "client:component-export": "default" }, { "default": () => renderTemplate`<div class="flex flex-col lg:flex-row space-y-9 lg:space-y-0 lg:space-x-9">
                ${renderComponent($$result, "Button", $$Button, { "colour": "light", "href": "#our-mission" }, { "default": () => renderTemplate`Our Mission` })}
                ${renderComponent($$result, "Button", $$Button, { "colour": "light", "href": "https://intercom.help/litterlotto/en/collections/3057665-faq-s" }, { "default": () => renderTemplate`FAQs` })}
              </div>` })}
          </div>` })}
      </header>
      <main class="flex-1">
        ${renderSlot($$result, $$slots["default"])}
      </main>
      <footer class="flex-shrink-1 flex-grow-0 text-center text-white">
        <div class="bg-navy pb-16">
          ${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="space-y-4">
              <div class="text-green mb-12">
                ${renderComponent($$result, "TextHeaderMedium", $$TextHeaderMedium, {}, { "default": () => renderTemplate`<span class="font-black">Get social with us!</span>` })}
              </div>
              <div class="flex items-center justify-center space-x-9">
                ${icons.map((icon) => renderTemplate`<a${addAttribute(icon.url, "href")} target="_blank">
                      <img${addAttribute(useImage(icon.icon), "src")}${addAttribute(icon.name, "alt")}>
                    </a>`)}
                <a href="https://facebook.com/litterlotto" target="_blank" class="text-white">
                  <img src="/icon-facebook.svg">
                </a>
                <a href="https://twitter.com/litterlotto" target="_blank">
                  <img src="/icon-twitter.svg">
                </a>
                <a href="https://instagram.com/litterlotto" target="_blank">
                  <img src="/icon-instagram.svg">
                </a>
                <a href="https://www.tiktok.com/@litterlotto" target="_blank">
                  <img src="/icon-tiktok.svg">
                </a>
              </div>
            </div>` })}
        </div>
        <div class="bg-green py-10">
          ${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="flex flex-col space-y-8 items-center font-semibold">
              <img src="/logo-white.svg" alt="LitterLotto Logo" class="h-[53px] mb-2">
              <ul class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-center">
                ${footerLinks.map((link) => renderTemplate`<li>
                      <a${addAttribute(link.url, "href")} target="_blank" class="transition-opacity text-white hover:opacity-75">
                        ${renderComponent($$result, "TextBodySmall", $$TextBodySmall, {}, { "default": () => renderTemplate`${link.text}` })}
                      </a>
                    </li>`)}
              </ul>
              ${renderComponent($$result, "TextBodySmall", $$TextBodySmall, {}, { "default": () => renderTemplate`&copy; LitterLotto ${new Date().getFullYear()}` })}
            </div><div class="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 text-center md:text-left">
              <div class="flex flex-col text-center md:text-left items-center md:items-start">
              </div>
            </div>` })}
        </div>
      </footer>
    </div>
    

    ${maybeRenderHead($$result)}
  </body>
</html>`;
});

const $$Astro$7 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/AppStoreButtons.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$AppStoreButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AppStoreButtons;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
  <a href="https://apps.apple.com/us/app/litterlotto/id1550451187?itsct=apps_box_link&itscg=30200">
    <img src="download-app-store.svg" alt="Download on the App Store" class="h-12 w-auto transition-opacity hover:opacity-80">
  </a>
  <a href="https://play.google.com/store/apps/details?id=com.litterlotto.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
    <img src="download-play-store.svg" alt="Get in on Google Play" class="h-12 w-auto transition-opacity hover:opacity-80">
  </a>
</div>`;
});

const $$Astro$6 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/sections/CallToAction.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { bgImage, logo, screens = [], id = "" } = Astro2.props;
  const getTextColour = (index) => {
    switch (index) {
      case 0:
        return "text-blue";
      case 1:
        return "text-pink";
      case 2:
        return "text-yellow-dark";
      case 3:
        return "text-green";
    }
  };
  return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(`background-image: url('${bgImage}')`, "style")} class="pt-14 pb-[194px] bg-cover bg-bottom bg-white max-w-full overflow-hidden"${addAttribute(id, "id")}>
  ${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="w-full max-w-[1050px] mx-auto flex flex-col items-center text-center mb-14">
      <img${addAttribute(logo, "src")} class="h-[97px] mb-14">
      ${renderSlot($$result, $$slots["top-content"])}
    </div><div class="mb-16 splide app-slider xl:px-9">
      <div class="splide__track">
        <ul class="splide__list">
          ${screens.map((screen, index) => renderTemplate`<li${addAttribute([getTextColour(index), "splide__slide"], "class:list")}>
                <div class="font-bold mb-6 text-center">
                  ${renderComponent($$result, "TextBody", $$TextBody, {}, { "default": () => renderTemplate`${screen.title}` })}
                </div>
                <div class="w-full relative">
                  <div class="absolute inset-0 rounded-[15%] shadow-lg"></div>
                  <img${addAttribute(screen.image, "src")} alt="App Screen" class="w-full h-auto relative z-10">
                </div>
              </li>`)}
        </ul>
      </div>
    </div><div class="w-full max-w-[1050px] mx-auto flex flex-col items-center text-center mb-10">
      <div class="mb-10">
        ${renderSlot($$result, $$slots["bottom-content"])}
      </div>
      ${renderComponent($$result, "AppStoreButtons", $$AppStoreButtons, {})}
    </div>` })}
</section>`;
});

const $$Astro$5 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/sections/FullWidthText.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$FullWidthText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FullWidthText;
  const { id = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="pt-14 pb-[70px] bg-navy text-white text-center"${addAttribute(id, "id")}>
  ${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="flex flex-col items-center space-y-[30px] text-center max-w-[900px] mx-auto">
      ${renderSlot($$result, $$slots["header"])}
      ${renderSlot($$result, $$slots["lead"])}
      ${renderSlot($$result, $$slots["content"])}
    </div>` })}
</section>`;
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/components/Counter.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$Counter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Counter;
  const response = await fetch("https://europe-west2-litterlotto.cloudfunctions.net/public/entries/entries", {
    method: "POST",
    headers: {
      api_key: "ayGNUTj4rFOKVhCuCxLJ"
    }
  });
  const data = await response.json();
  const initialTotal = data.totalEntries;
  return renderTemplate(_a || (_a = __template(["", '<div class="justify-center items-center flex py-8 -mx-4 w-[calc(100%+32px)]">\n\n    <div class="border-white/[.5] border rounded-lg bg-white/[.07] w-[600px] max-w-full">\n        <p id="counter" class="text-header-medium xs:text-header-large md:text-header-xlarge font-inconsolata tracking-tighter px-8 md:px-16 py-4 md:py-8"></p>\n        <p class="text-body-small font-semibold border-t border-white/[.3] bg-white/[.08] p-3">pieces of litter binned, and counting!</p>\n    </div>\n\n</div>\n\n<script>(function(){', `

    const numberWithCommas = (x) => {
        return parseInt(x).toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
    }

    const easeOutQuart = (x) => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    const countUp = (el, start, target, duration) => {

        const startTimestamp = new Date().getTime();

        let currentValue = 0;

        const requestNextCount = () => {

            el.innerHTML = numberWithCommas(easeOutQuart(currentValue) * (target - start) + start);

            if(currentValue === 1) return;

            window.requestAnimationFrame(() => {

                const currentTimestamp = new Date().getTime();

                currentValue = Math.min((parseInt(currentTimestamp) - parseInt(startTimestamp)) / duration, 1);

                requestNextCount();

            });
        }

        requestNextCount();

    }

    const el = document.querySelector( '#counter' );

    let interval = null;

    let total = initialTotal;

    let lastTotal = total;

    const getNewTotal = async () => {

        const response = await fetch('/total-entries', {
            method: "POST"
        });

        if(response.ok){

            const data = await response.json();

            return data;

        }

    }

    // Start counting, do this on DOM ready or with Waypoints.
    window.addEventListener('load', () => {

        countUp( el, Math.max(initialTotal - 2000000,0), initialTotal, 6000 );

        interval = window.setInterval(async () => {

            const res = await getNewTotal();

            console.log(res);

            total = res.totalEntries ?? total;

            countUp( el, lastTotal, total, 6000 );

        }, 10000);
    });

    window.addEventListener('beforeunload', (e) => {

        if(interval){
            window.clearInterval(interval);

            alert(interval);
        }

    });

})();<\/script>`], ["", '<div class="justify-center items-center flex py-8 -mx-4 w-[calc(100%+32px)]">\n\n    <div class="border-white/[.5] border rounded-lg bg-white/[.07] w-[600px] max-w-full">\n        <p id="counter" class="text-header-medium xs:text-header-large md:text-header-xlarge font-inconsolata tracking-tighter px-8 md:px-16 py-4 md:py-8"></p>\n        <p class="text-body-small font-semibold border-t border-white/[.3] bg-white/[.08] p-3">pieces of litter binned, and counting!</p>\n    </div>\n\n</div>\n\n<script>(function(){', `

    const numberWithCommas = (x) => {
        return parseInt(x).toString().replace(/\\\\B(?=(\\\\d{3})+(?!\\\\d))/g, ",");
    }

    const easeOutQuart = (x) => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    const countUp = (el, start, target, duration) => {

        const startTimestamp = new Date().getTime();

        let currentValue = 0;

        const requestNextCount = () => {

            el.innerHTML = numberWithCommas(easeOutQuart(currentValue) * (target - start) + start);

            if(currentValue === 1) return;

            window.requestAnimationFrame(() => {

                const currentTimestamp = new Date().getTime();

                currentValue = Math.min((parseInt(currentTimestamp) - parseInt(startTimestamp)) / duration, 1);

                requestNextCount();

            });
        }

        requestNextCount();

    }

    const el = document.querySelector( '#counter' );

    let interval = null;

    let total = initialTotal;

    let lastTotal = total;

    const getNewTotal = async () => {

        const response = await fetch('/total-entries', {
            method: "POST"
        });

        if(response.ok){

            const data = await response.json();

            return data;

        }

    }

    // Start counting, do this on DOM ready or with Waypoints.
    window.addEventListener('load', () => {

        countUp( el, Math.max(initialTotal - 2000000,0), initialTotal, 6000 );

        interval = window.setInterval(async () => {

            const res = await getNewTotal();

            console.log(res);

            total = res.totalEntries ?? total;

            countUp( el, lastTotal, total, 6000 );

        }, 10000);
    });

    window.addEventListener('beforeunload', (e) => {

        if(interval){
            window.clearInterval(interval);

            alert(interval);
        }

    });

})();<\/script>`])), maybeRenderHead($$result), defineScriptVars({ initialTotal }));
});

const $$Astro$3 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/sections/Hero.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { bgImage, id = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="relative min-h-[789px] flex items-center bg-navy text-white text-center pb-48 bg-cover bg-center bg-no-repeat"${addAttribute(`background-image: url('${bgImage ?? ""}')`, "style")}${addAttribute(id, "id")}>
  <!-- <div class="hidden lg:block absolute bottom-0 right-0">
    <img src="phone-border.png" class="pointer-events-none" alt="">
  </div> -->
  ${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="relative z-20 w-[520px] lg:w-full max-w-full space-y-[30px] mx-auto py-14">
      ${renderSlot($$result, $$slots["header"])}
      ${renderSlot($$result, $$slots["content"])}
      ${renderComponent($$result, "Counter", $$Counter, {})}
      ${renderSlot($$result, $$slots["buttons"])}
    </div>` })}

  <img src="/hand.png" alt="Phone screen displaying the LitterLotto app" class="absolute right-0 bottom-0 w-auto h-[500px] 2xl:h-auto hidden lg:block">
</section>`;
});

const $$Astro$2 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/sections/PreviousWinners.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$PreviousWinners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PreviousWinners;
  const { winners, id = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="py-14 bg-white text-section relative overflow-hidden max-w-full"${addAttribute(id, "id")}>
  ${renderComponent($$result, "Container", $$Container, {}, { "default": () => renderTemplate`<div class="w-full max-w-[1050px] mx-auto text-center mb-10">
      ${renderSlot($$result, $$slots["content"])}
    </div>` })}

  <div class="splide slider">
    <div class="splide__track cursor-grab hover:active:cursor-grabbing">
      <ul class="splide__list">
        ${winners.map((winner, index) => renderTemplate`<li class="splide__slide px-7 pt-1">
              <article class="text-center group transition-transform hover:-translate-y-1">
                <a${addAttribute(winner.link, "href")} target="_blank">
                  <div class="rounded-lg overflow-hidden relative bg-grey transition shadow-md group-hover:shadow-xl mb-6 w-[255px] h-[310px]">
                    <img${addAttribute(winner.image, "src")}${addAttribute(winner.title, "alt")} class="w-full h-full object-cover object-center rounded-md">
                  </div>

                  <div class="transition-colors group-hover:text-green">
                    ${renderComponent($$result, "TextBody", $$TextBody, { "is": "h3" }, { "default": () => renderTemplate`${winner.title}` })}
                  </div>
                </a>
              </article>
            </li>`)}
      </ul>
    </div>
  </div>
</section>`;
});

const $$Astro$1 = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/sections/SpotWinners.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$SpotWinners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SpotWinners;
  const { winners, id = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="py-14 bg-white text-section relative"${addAttribute(id, "id")}>
  <div class="splide slider" data-reverse="true">
    <div class="splide__track">
      <ul class="splide__list">
        ${winners.map((winner, index) => renderTemplate`<li class="splide__slide px-7">
              <article class="text-center">
                <div class="rounded-full overflow-hidden relative bg-grey mb-10 w-[167px] h-[167px]">
                  <img${addAttribute(winner.image, "src")}${addAttribute(winner.title, "alt")} class="w-full h-full object-cover object-center flex items-center justify-center">
                </div>

                ${renderComponent($$result, "TextBody", $$TextBody, { "is": "h3" }, { "default": () => renderTemplate`${winner.title}` })}
              </article>
            </li>`)}
      </ul>
    </div>
  </div>
</section>`;
});

/* src/sections/Marquee.svelte generated by Svelte v3.50.1 */
const trackWidth = "w-[calc(100%_+_40px)] max-w-[calc(100%_+_40px) -ml-4";

const Marquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { items = [], reverse = false, topColour = "bg-white", bottomColour = "bg-white", speed = 90 } = $$props;
	let list;
	const transform = reverse ? "rotate-[-2deg]" : "rotate-[2deg]";
	const justify = reverse ? "justify-end" : "justify-start";
	const animation = reverse ? "animate-marquee-reverse" : "animate-marquee";
	let time = 0;

	if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
	if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0) $$bindings.reverse(reverse);
	if ($$props.topColour === void 0 && $$bindings.topColour && topColour !== void 0) $$bindings.topColour(topColour);
	if ($$props.bottomColour === void 0 && $$bindings.bottomColour && bottomColour !== void 0) $$bindings.bottomColour(bottomColour);
	if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0) $$bindings.speed(speed);

	return `<div${add_attribute(
		"class",
		[
			topColour,
			bottomColour,
			"relative z-10 h-[140px] flex flex-col overflow-hidden"
		].join(" "),
		0
	)}><div${add_attribute("class", [topColour, "flex-1"].join(" "), 0)}></div>
  <div${add_attribute("class", [bottomColour, "flex-1"].join(" "), 0)}></div>
  <div${add_attribute(
		"class",
		[
			trackWidth,
			"absolute top-1/2 -translateY-[1/2] -left-[20px] h-0 flex items-center"
		].join(" "),
		0
	)}><div${add_attribute(
		"class",
		[
			transform,
			justify,
			"bg-white shadow-[0_0_8px_0_rgba(0,0,0,0.15)] py-[7px] overflow-x-hidden",
			"w-full flex"
		].join(" "),
		0
	)}><ul${add_attribute("class", [animation, "flex justify-start"].join(" "), 0)}${add_styles({ "animation-duration": `${time}s` })}${add_attribute("this", list, 0)}>${each({ length: 20 }, (_, i) => {
		return `${each(items, item => {
			return `<li class="${"text-green uppercase font-bold whitespace-nowrap px-6"}"${add_attribute("aria-hidden", i !== 0, 0)}><span class="${"text-body-lead"}">${escape(item)}</span>
            </li>`;
		})}`;
	})}</ul></div></div></div>`;
});

const $$Astro = createAstro("/Users/joshualyness/Sites/litterlotto-front-end/src/pages/index.astro", "", "file:///Users/joshualyness/Sites/litterlotto-front-end/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const footerLinks = [
    {
      url: "https://intercom.help/litterlotto/en/articles/5447243-official-rules",
      text: "Official Rules"
    },
    {
      url: "https://intercom.help/litterlotto/en/collections/3057825-privacy-legal",
      text: "Privacy & Legal"
    },
    {
      url: "https://intercom.help/litterlotto/en/collections/3057665-faq-s",
      text: "FAQs"
    },
    {
      url: "mailto:partnerships@litterlotto.com",
      text: "Work With Us!"
    }
  ];
  const winners = [
    {
      image: "/jackpot-winners/Sophie.jpg",
      title: "Read Sophie's Story",
      link: "https://intercom.help/litterlotto/en/articles/6525200-sophie-our-latest-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Janice.jpg",
      title: "Read Janice's Story",
      link: "https://intercom.help/litterlotto/en/articles/6461988-janice-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Deb.jpg",
      title: "Read Deb's Story",
      link: "https://intercom.help/litterlotto/en/articles/6560570-deb-our-latest-uk-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Ben K.jpg",
      title: "Read Ben K's Story",
      link: "https://intercom.help/litterlotto/en/articles/6475842-ben-our-latest-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Oli.jpg",
      title: "Read Oli's Story",
      link: "https://intercom.help/litterlotto/en/articles/6540385-oli-our-latest-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Valerie.jpg",
      title: "Read Valerie's Story",
      link: "https://intercom.help/litterlotto/en/articles/6504559-valerie-latest-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Neil.jpg",
      title: "Read Neil's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447310-neil-our-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Mariola.jpg",
      title: "Read Mariola's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447336-mariola-our-uk-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Fiona.jpg",
      title: "Read Fi's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447780-fi-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Andrew.jpg",
      title: "Read Andy's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447333-andy-our-mega-uk-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Kazzy.jpg",
      title: "Read Kazzy's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447330-kazzy-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Naomi.jpg",
      title: "Read Naomi's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447328-naomi-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/David.jpg",
      title: "Read David's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447325-david-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Nicola.jpg",
      title: "Read Nicola's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447324-nicola-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Charles.jpg",
      title: "Read Charles' Story",
      link: "https://intercom.help/litterlotto/en/articles/6447323-charles-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Roy.jpg",
      title: "Read Roy's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447321-roy-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Luke.jpg",
      title: "Read Luke's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447319-luke-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Ben.jpg",
      title: "Read Ben's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447317-ben-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Tracey.jpg",
      title: "Read Tracey's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447316-tracey-our-uk-weekly-jackpot-winner"
    },
    {
      image: "/jackpot-winners/Phoebe.jpg",
      title: "Read Phoebe's Story",
      link: "https://intercom.help/litterlotto/en/articles/6447315-phoebe-our-weekly-jackpot-winner"
    }
  ];
  const spotWinners = [
    {
      image: "/spot-prize-winners/Andreas Holzer.jpg",
      title: "Andreas Holzer",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Andrew Bale.jpg",
      title: "Andrew Bale",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Carys R.jpg",
      title: "Carys R",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Catherine Baker.jpg",
      title: "Catherine Baker",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Debz.jpg",
      title: "Debz",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Emma Burton.jpg",
      title: "Emma Burton",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Fiona Smart.jpg",
      title: "Fiona Smart",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Gordon Brown.jpg",
      title: "Gordon Brown",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Johanna Collins.jpg",
      title: "Johanna Collins",
      link: "#"
    },
    {
      image: "/spot-prize-winners/K Hipkin.jpg",
      title: "K Hipkin",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Karen Russo.jpg",
      title: "Karen Russo",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Karsten.jpg",
      title: "Karsten",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Kate Green.jpg",
      title: "Kate Green",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Lindsay Robson.jpg",
      title: "Lindsay Robson",
      link: "#"
    },
    {
      image: "/spot-prize-winners/Lynn Simpson.jpg",
      title: "Lynn Simpson",
      link: "#"
    }
  ];
  const screens = [
    {
      title: "Bin litter",
      image: "/app-screen-1.png"
    },
    {
      title: "Make an impact",
      image: "/app-screen-2.png"
    },
    {
      title: "Spread the word",
      image: "/app-screen-3.png"
    },
    {
      title: "Win prizes",
      image: "/app-screen-4.png"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LitterLotto", "icons": [], "footerLinks": footerLinks }, { "default": () => renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "bgImage": "/hero-background.png" }, { "buttons": () => renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-center">
			${renderComponent($$result, "AppStoreButtons", $$AppStoreButtons, {})}
		</div>`, "content": () => renderTemplate`<div class="prose-white prose-lg w-full max-w-[520px] mx-auto font-semibold">
			<p>Win Spot Prizes & huge Jackpots, just for binning litter!</p>

			<p>Download LitterLotto now!</p>
		</div>`, "header": () => renderTemplate`<header class="uppercase">
			${renderComponent($$result, "TextHeaderXLarge", $$TextHeaderXLarge, {}, { "default": () => renderTemplate`Bin It To Win It!` })}
		</header>` })}${renderComponent($$result, "FullWidthText", $$FullWidthText, {}, { "content": () => renderTemplate`<div class="prose-white prose-base">
			<p>
				To enter, simply use the app to take a picture of litter as you place it
				in a bin. Each time you submit a new piece of litter it's another chance
				to win!
			</p>

			<p>
				LitterLotto is available globally, with different Jackpot levels
				wherever you are!
			</p>
		</div>`, "header": () => renderTemplate`<header class="text-green">
			${renderComponent($$result, "TextHeaderLarge", $$TextHeaderLarge, {}, { "default": () => renderTemplate`What is LitterLotto?` })}
		</header>`, "lead": () => renderTemplate`<div class="prose-white prose-lg md:prose-xl">
			<p>
				LitterLotto® is a free to enter Prize Draw, with regular spot prizes and
				huge jackpots, supported by brands who want a cleaner environment.
			</p>
		</div>` })}${renderComponent($$result, "Marquee", Marquee, { "items": ["Binner Winners"], "topColour": "bg-navy", "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/joshualyness/Sites/litterlotto-front-end/src/sections", "client:component-export": "Marquee" })}${renderComponent($$result, "PreviousWinners", $$PreviousWinners, { "winners": winners }, { "content": () => renderTemplate`<div class="prose-base">
			<p>Here are some of our amazing winners!</p>
			<p>
				You can be one too, all you have to do is <strong>#BinItToWinIt</strong>
			</p>
		</div>` })}${renderComponent($$result, "Marquee", Marquee, { "items": ["Spot Prize Winners", "Jackpot Winners"], "reverse": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/joshualyness/Sites/litterlotto-front-end/src/sections", "client:component-export": "Marquee" })}${renderComponent($$result, "SpotWinners", $$SpotWinners, { "winners": spotWinners })}${renderComponent($$result, "Marquee", Marquee, { "items": ["Binner Winners"], "bottomColour": "bg-navy", "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/joshualyness/Sites/litterlotto-front-end/src/sections", "client:component-export": "Marquee" })}${renderComponent($$result, "FullWidthText", $$FullWidthText, {}, { "content": () => renderTemplate`<div class="prose-white prose-base">
			<p>
				Created and passionately developed by a dedicated team who believe in
				the power of positive action and in technology's ability to facilitate
				world changing solutions.
			</p>

			<p>
				LitterLotto brand aims to reduce and ultimately put an end to the damage
				caused by the rising levels of litter in today's world.
			</p>
		</div>`, "header": () => renderTemplate`<header class="text-green">
			${renderComponent($$result, "TextHeaderLarge", $$TextHeaderLarge, {}, { "default": () => renderTemplate`The LitterLotto Legend` })}
		</header>`, "lead": () => renderTemplate`<div class="prose-white prose-lg md:prose-xl">
			<p>
				LitterLotto was inspired by the desire to find a solution to the growing
				issue of litter.
			</p>
		</div>` })}${renderComponent($$result, "CallToAction", $$CallToAction, { "bgImage": "/cta-background.png", "logo": "/logo-dark.svg", "screens": screens }, { "bottom-content": () => renderTemplate`${renderComponent($$result, "TextHeaderMedium", $$TextHeaderMedium, { "slot": "bottom-content", "is": "p" }, { "default": () => renderTemplate`So, what are you waiting for?` })}`, "top-content": () => renderTemplate`${renderComponent($$result, "TextHeaderMedium", $$TextHeaderMedium, { "slot": "top-content", "is": "h3" }, { "default": () => renderTemplate`#BinItToWinIt` })}` })}${renderComponent($$result, "FullWidthText", $$FullWidthText, { "id": "our-mission" }, { "content": () => renderTemplate`<div class="prose-white prose-base">
			<p>
				Our mission is to play an influencial role in achieving this reality by
				incentivising and rewarding positive action towards litter and the
				environment.
			</p>

			<p>
				LitterLotto is designed to provide a light nudge and remind people about
				the litter issue around them and achieve a positive behavioural change!
			</p>
		</div>`, "header": () => renderTemplate`<header class="text-green">
			${renderComponent($$result, "TextHeaderLarge", $$TextHeaderLarge, {}, { "default": () => renderTemplate`Our Mission & Vision` })}
		</header>`, "lead": () => renderTemplate`<div class="prose-white prose-lg md:prose-xl">
			<p>
				LitterLotto's long-term vision is a world free of litter, waste and
				pollution.
			</p>
		</div>` })}` })}

${maybeRenderHead($$result)}`;
});

const $$file = "/Users/joshualyness/Sites/litterlotto-front-end/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

async function get({ request }) {

    const requestUrl = 'https://europe-west2-litterlotto.cloudfunctions.net/public/entries/entries';
    const requestHeaders = {
        api_key: "ayGNUTj4rFOKVhCuCxLJ"
    };

    const response = await fetch(requestUrl, {
        method: "POST",
        headers: requestHeaders
    });

    if(response.ok){

        const responseData = await response.json();

        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });

    }

    return new Response('', {
        status: response.status,
        headers: {
            "Content-Type": "application/json"
        }
    });
}

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get
}, Symbol.toStringTag, { value: 'Module' }));

const pageMap = new Map([['src/pages/index.astro', _page0],['src/pages/total-entries.js', _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/svelte","clientEntrypoint":"@astrojs/svelte/client.js","serverEntrypoint":"@astrojs/svelte/server.js"}, { ssr: _renderer1 }),];

if (typeof process !== "undefined") {
  if (process.argv.includes("--verbose")) ; else if (process.argv.includes("--silent")) ; else ;
}

const SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
new RegExp(
  `\\.(${Array.from(SCRIPT_EXTENSIONS).map((s) => s.slice(1)).join("|")})($|\\?)`
);

const STYLE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".css",
  ".pcss",
  ".postcss",
  ".scss",
  ".sass",
  ".styl",
  ".stylus",
  ".less"
]);
new RegExp(
  `\\.(${Array.from(STYLE_EXTENSIONS).map((s) => s.slice(1)).join("|")})($|\\?)`
);

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  return {
    ...serializedManifest,
    assets,
    routes
  };
}

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["assets/index.61188c55.css"],"scripts":[{"type":"external","value":"hoisted.07427adc.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/total-entries","type":"endpoint","pattern":"^\\/total-entries$","segments":[[{"content":"total-entries","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/total-entries.js","pathname":"/total-entries","_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"extendDefaultPlugins":false,"isAstroFlavoredMd":false},"pageMap":null,"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","/Users/joshualyness/Sites/litterlotto-front-end/src/sections":"index.d92f8155.js","/Users/joshualyness/Sites/litterlotto-front-end/src/components/Menu.svelte":"Menu.5338f9c0.js","@astrojs/svelte/client.js":"client.b27523fa.js","/astro/hoisted.js?q=0":"hoisted.07427adc.js","astro:scripts/before-hydration.js":""},"assets":["/assets/index.61188c55.css","/Menu.5338f9c0.js","/app-screen-1.png","/app-screen-2.png","/app-screen-3.png","/app-screen-4.png","/client.b27523fa.js","/cta-background.png","/download-app-store.svg","/download-play-store.svg","/favicon.ico","/hand.png","/hero-background.png","/hoisted.07427adc.js","/icon-facebook.svg","/icon-instagram.svg","/icon-tiktok.svg","/icon-twitter.svg","/index.d92f8155.js","/logo-dark.svg","/logo-white.svg","/spot-winner-placeholder.png","/winner-placeholder.png","/chunks/index.a63b516c.js","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/browserconfig.xml","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/mstile-150x150.png","/favicon/safari-pinned-tab.svg","/favicon/site.webmanifest","/jackpot-winners/Allan.jpg","/jackpot-winners/Andrew.jpg","/jackpot-winners/Ben K.jpg","/jackpot-winners/Ben.jpg","/jackpot-winners/Callum.jpg","/jackpot-winners/Caroline.jpg","/jackpot-winners/Charles.jpg","/jackpot-winners/Christian Peterson.jpg","/jackpot-winners/David.jpg","/jackpot-winners/Deb.jpg","/jackpot-winners/Fiona.jpg","/jackpot-winners/Helen Millar.jpg","/jackpot-winners/Henry Moller.jpg","/jackpot-winners/Janice.jpg","/jackpot-winners/Kazzy.jpg","/jackpot-winners/Louise Sunderland.jpg","/jackpot-winners/Luke.jpg","/jackpot-winners/Marianne Lund.jpg","/jackpot-winners/Mariola.jpg","/jackpot-winners/Naomi.jpg","/jackpot-winners/Neil.jpg","/jackpot-winners/Nicola.jpg","/jackpot-winners/Oli.jpg","/jackpot-winners/Phoebe.jpg","/jackpot-winners/Roy.jpg","/jackpot-winners/Selina Fernandez.jpg","/jackpot-winners/Sophie.jpg","/jackpot-winners/Tracey.jpg","/jackpot-winners/Valerie.jpg","/jackpot-winners/Viviane.jpg","/jackpot-winners/Zoeb.jpg","/spot-prize-winners/Andreas Holzer.jpg","/spot-prize-winners/Andrew Bale.jpg","/spot-prize-winners/Carys R.jpg","/spot-prize-winners/Catherine Baker.jpg","/spot-prize-winners/Debz.jpg","/spot-prize-winners/Emma Burton.jpg","/spot-prize-winners/Fiona Smart.jpg","/spot-prize-winners/Gordon Brown.jpg","/spot-prize-winners/Johanna Collins.jpg","/spot-prize-winners/K Hipkin.jpg","/spot-prize-winners/Karen Russo.jpg","/spot-prize-winners/Karsten.jpg","/spot-prize-winners/Kate Green.jpg","/spot-prize-winners/Lindsay Robson.jpg","/spot-prize-winners/Lynn Simpson.jpg","/spot-prize-winners/Megan G.jpg","/spot-prize-winners/Mette Busk.jpg","/spot-prize-winners/Morgan A.jpg","/spot-prize-winners/Nelson B.jpg","/spot-prize-winners/Penny D.jpg","/spot-prize-winners/Raymond Stritch.jpg","/spot-prize-winners/Sandra Brown.jpg","/spot-prize-winners/Sarah Murphy.jpg","/spot-prize-winners/Sean Smith.jpg","/spot-prize-winners/Valerie McMullan.jpg","/spot-prize-winners/Wilhelm A.jpg","/fonts/jetbrains-mono/jetbrains-mono.ttf"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler };
