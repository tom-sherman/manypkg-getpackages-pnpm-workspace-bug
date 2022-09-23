import { getPackages, getPackagesSync } from "@manypkg/get-packages";

const { tool, root, packages } = getPackagesSync(process.cwd());

console.log({ tool, root, packages });
