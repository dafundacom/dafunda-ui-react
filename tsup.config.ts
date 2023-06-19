import { defineConfig } from "tsup"

export default defineConfig({
  minify: false,
  sourcemap: true,
  dts: true,
  entry: ["src/index.ts"],
  clean: true,
  target: "es2020",
  external: ["react"],
  format: ["esm", "cjs"],
})
