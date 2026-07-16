import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

test("builds a Vue portfolio shell", async () => {
  const html = await read("dist/index.html");
  const app = await read("src/views/HomeView.vue");
  assert.match(html, /<div id="app"><\/div>/);
  assert.match(app, /我做过的一些项目/);
  assert.match(app, /project-value/);
});

test("keeps project detail routing and contains no React runtime", async () => {
  const detail = await read("src/views/ProjectView.vue");
  const pkg = JSON.parse(await read("package.json"));
  assert.match(detail, /项目介绍/);
  assert.match(detail, /项目价值/);
  assert.equal(pkg.dependencies.react, undefined);
  assert.equal(pkg.dependencies.next, undefined);
  assert.ok(pkg.dependencies.vue);
});
