# @openendurance/config-typescript

Shared TypeScript configuration presets for Open Endurance Initiative projects.

These presets are intentionally small and composable. Use the most specific preset that matches the project type, then override locally for package-specific constraints.

## Presets

| Preset                   | Intended use                                                         |
| ------------------------ | -------------------------------------------------------------------- |
| `base.json`              | Common strictness and compiler defaults shared by every project type |
| `node.json`              | Node.js apps, CLIs, services, and other server-side code             |
| `node-library.json`      | Published Node.js libraries and workspace packages                   |
| `web.json`               | React and Next.js web applications                                   |
| `react-native.json`      | Expo and React Native applications                                   |
| `electron-main.json`     | Electron main-process projects                                       |
| `electron-renderer.json` | Electron renderer-process projects                                   |

## Usage

Extend the preset that best matches the project, then layer local settings on top:

```json
{
	"extends": "@openendurance/config-typescript/node.json",
	"compilerOptions": {
		"outDir": "dist",
		"rootDir": "src"
	}
}
```

## Conventions

- Keep the shared presets focused on reusable compiler defaults
- Let consuming repos decide their own `include`, `exclude`, and output paths
- Add new presets only when multiple repos genuinely need the same baseline
