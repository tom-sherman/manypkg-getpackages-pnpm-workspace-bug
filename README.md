# manypkg-getpackages-pnpm-workspace-bug

## To reproduce

```
node reproduction.mjs
```

### Expected behaviour

Should log `tool: 'pnpm'` and two packages: foo and bar

### Actual behaviour:

Logs tool as yarn and only one package.

## Why?

Because `workspaces` is set in `package.json` eroneously and doesn't include `libs/` (in my real example this was leftover from an initial yarn workspace setup and I didn't remove it).

Workaround is to remove the `workspaces` key.
