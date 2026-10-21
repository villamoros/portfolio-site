// Export estático para el agente de escritorio (out/). La ruta /api/contact necesita un servidor,
// así que se aparta solo durante este build y se restaura siempre, aunque el build falle.
import { existsSync, renameSync } from "node:fs";
import { spawnSync } from "node:child_process";

const api = "app/api";
const parked = ".api-parked";
const hasApi = existsSync(api);

if (hasApi) renameSync(api, parked);
try {
  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    shell: true,
    env: { ...process.env, STATIC_EXPORT: "1" },
  });
  process.exitCode = result.status ?? 1;
} finally {
  if (hasApi && existsSync(parked)) renameSync(parked, api);
}
