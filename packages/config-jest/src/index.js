const fs = require("node:fs");
const path = require("node:path");

function escapeRegex(value) {
	return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}

function globToModulePattern(pattern) {
	const wildcardIndex = pattern.indexOf("*");
	if (wildcardIndex === -1) {
		return `^${escapeRegex(pattern)}$`;
	}

	const prefix = escapeRegex(pattern.slice(0, wildcardIndex));
	const suffix = escapeRegex(pattern.slice(wildcardIndex + 1));
	return `^${prefix}(.*)${suffix}$`;
}

function resolveTsconfig(tsconfigPath) {
	if (!tsconfigPath) {
		return {};
	}

	const absolutePath = path.isAbsolute(tsconfigPath)
		? tsconfigPath
		: path.resolve(process.cwd(), tsconfigPath);

	if (!fs.existsSync(absolutePath)) {
		return {};
	}

	const raw = fs.readFileSync(absolutePath, "utf8");
	try {
		return JSON.parse(raw);
	} catch {
		return {};
	}
}

function createModuleNameMapper(paths, rootPrefix = "<rootDir>/") {
	if (!paths || typeof paths !== "object") {
		return {};
	}

	return Object.entries(paths).reduce((mapper, [key, targets]) => {
		if (!Array.isArray(targets) || targets.length === 0) {
			return mapper;
		}

		const target = targets[0];
		if (typeof target !== "string") {
			return mapper;
		}

		const pattern = globToModulePattern(key);
		const replacement = `${rootPrefix}${target.replace(/\*/g, "$1")}`;
		mapper[pattern] = replacement;
		return mapper;
	}, {});
}

function createJestConfig(options = {}) {
	const {
		tsconfigPath = "tsconfig.json",
		testEnvironment = "node",
		moduleNameMapper = {},
		transform = {},
		...rest
	} = options;

	const tsconfig = resolveTsconfig(tsconfigPath);
	const compilerOptions = tsconfig.compilerOptions || {};
	const mappedAliases = createModuleNameMapper(compilerOptions.paths);

	return {
		testEnvironment,
		moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "mjs", "cjs"],
		transform: {
			"^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: tsconfigPath }],
			...transform,
		},
		moduleNameMapper: {
			...mappedAliases,
			...moduleNameMapper,
		},
		...rest,
	};
}

module.exports = createJestConfig;
module.exports.createJestConfig = createJestConfig;
module.exports.createModuleNameMapper = createModuleNameMapper;
