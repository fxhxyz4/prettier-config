var $schema = "https://json.schemastore.org/prettierrc";
var tabWidth = 2;
var useTabs = false;
var printWidth = 120;
var singleQuote = false;
var jsxSingleQuote = true;
var singleAttributePerLine = true;
var arrowParens = "avoid";
var semi = false;
var bracketSameLine = false;
var trailingComma = "es5";
var bracketSpacing = true;
var proseWrap = "always";
var quoteProps = "as-needed";
var endOfLine = "lf";
var plugins = [
	"@ianvs/prettier-plugin-sort-imports",
	"prettier-plugin-multiline-arrays"
];
var multilineArraysWrapThreshold = 2;
var importOrder = [
	"<BUILTIN_MODULES>",
	"^(react|next(.*))$",
	"<THIRD_PARTY_MODULES>",
	"<TYPES>",
	"",
	"^@/(.*)$",
	"^~/(.*)$",
	"^[./]",
	"<TYPES>^[.]",
	"^(.*)(sass|css|scss)$"
];
var importOrderParserPlugins = [
	"classProperties",
	"decorators-legacy",
	"jsx",
	"typescript"
];
var config = {
	$schema: $schema,
	tabWidth: tabWidth,
	useTabs: useTabs,
	printWidth: printWidth,
	singleQuote: singleQuote,
	jsxSingleQuote: jsxSingleQuote,
	singleAttributePerLine: singleAttributePerLine,
	arrowParens: arrowParens,
	semi: semi,
	bracketSameLine: bracketSameLine,
	trailingComma: trailingComma,
	bracketSpacing: bracketSpacing,
	proseWrap: proseWrap,
	quoteProps: quoteProps,
	endOfLine: endOfLine,
	plugins: plugins,
	multilineArraysWrapThreshold: multilineArraysWrapThreshold,
	importOrder: importOrder,
	importOrderParserPlugins: importOrderParserPlugins
};

/** @type {import("prettier").Config} */
var _prettierrc = {
  ...config,
};

export { _prettierrc as default };
