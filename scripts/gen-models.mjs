// Procedurally generates jewelry GLB models for CORVALIER.
// No external dependencies — writes a valid binary glTF (GLB) container.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "models");
mkdirSync(OUT, { recursive: true });

// ---------- math helpers ----------
function add(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function normalize(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

// ---------- mesh primitives ----------
// Each builder returns { positions:[], normals:[], indices:[] }

function torus(R, r, seg, side, sweep = Math.PI * 2, start = 0) {
  const positions = [];
  const normals = [];
  const indices = [];
  for (let i = 0; i <= seg; i++) {
    const u = start + (i / seg) * sweep;
    const cu = Math.cos(u);
    const su = Math.sin(u);
    for (let j = 0; j <= side; j++) {
      const v = (j / side) * Math.PI * 2;
      const cv = Math.cos(v);
      const sv = Math.sin(v);
      const x = (R + r * cv) * cu;
      const y = r * sv;
      const z = (R + r * cv) * su;
      positions.push(x, y, z);
      normals.push(cv * cu, sv, cv * su);
    }
  }
  const stride = side + 1;
  for (let i = 0; i < seg; i++) {
    for (let j = 0; j < side; j++) {
      const a = i * stride + j;
      const b = (i + 1) * stride + j;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  return { positions, normals, indices };
}

function sphere(radius, segU, segV, center = [0, 0, 0]) {
  const positions = [];
  const normals = [];
  const indices = [];
  for (let i = 0; i <= segV; i++) {
    const theta = (i / segV) * Math.PI;
    const st = Math.sin(theta);
    const ct = Math.cos(theta);
    for (let j = 0; j <= segU; j++) {
      const phi = (j / segU) * Math.PI * 2;
      const n = [st * Math.cos(phi), ct, st * Math.sin(phi)];
      positions.push(
        center[0] + radius * n[0],
        center[1] + radius * n[1],
        center[2] + radius * n[2]
      );
      normals.push(...n);
    }
  }
  const stride = segU + 1;
  for (let i = 0; i < segV; i++) {
    for (let j = 0; j < segU; j++) {
      const a = i * stride + j;
      const b = (i + 1) * stride + j;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  return { positions, normals, indices };
}

// Faceted brilliant-cut style gem: a crown (cone of facets) + pavilion (point)
function brilliant(radius, height, facets, center = [0, 0, 0]) {
  const positions = [];
  const normals = [];
  const indices = [];
  const cx = center[0];
  const cy = center[1];
  const cz = center[2];
  const tableY = cy + height * 0.45;
  const girdleY = cy + height * 0.12;
  const tipY = cy - height * 0.55;
  const tableR = radius * 0.5;

  const tableCenter = positions.length / 3;
  positions.push(cx, tableY, cz);
  normals.push(0, 1, 0);

  const tableRing = positions.length / 3;
  for (let i = 0; i < facets; i++) {
    const a = (i / facets) * Math.PI * 2;
    positions.push(cx + tableR * Math.cos(a), tableY, cz + tableR * Math.sin(a));
    normals.push(0, 1, 0);
  }
  const girdleRing = positions.length / 3;
  for (let i = 0; i < facets; i++) {
    const a = (i / facets) * Math.PI * 2;
    const nx = Math.cos(a);
    const nz = Math.sin(a);
    positions.push(cx + radius * nx, girdleY, cz + radius * nz);
    normals.push(...normalize([nx, 0.6, nz]));
  }
  const tip = positions.length / 3;
  positions.push(cx, tipY, cz);
  normals.push(0, -1, 0);

  for (let i = 0; i < facets; i++) {
    const next = (i + 1) % facets;
    indices.push(tableCenter, tableRing + i, tableRing + next);
    indices.push(tableRing + i, girdleRing + i, tableRing + next);
    indices.push(tableRing + next, girdleRing + i, girdleRing + next);
    indices.push(girdleRing + i, tip, girdleRing + next);
  }
  return { positions, normals, indices };
}

function translate(mesh, t) {
  const p = mesh.positions.slice();
  for (let i = 0; i < p.length; i += 3) {
    p[i] += t[0];
    p[i + 1] += t[1];
    p[i + 2] += t[2];
  }
  return { positions: p, normals: mesh.normals.slice(), indices: mesh.indices.slice() };
}

// ---------- GLB writer ----------
const GOLD = {
  pbrMetallicRoughness: {
    baseColorFactor: [0.79, 0.65, 0.42, 1],
    metallicFactor: 1,
    roughnessFactor: 0.28,
  },
  name: "ChampagneGold",
};
const PLATINUM = {
  pbrMetallicRoughness: {
    baseColorFactor: [0.86, 0.86, 0.87, 1],
    metallicFactor: 1,
    roughnessFactor: 0.22,
  },
  name: "Platinum",
};
const DIAMOND = {
  pbrMetallicRoughness: {
    baseColorFactor: [0.92, 0.95, 0.98, 1],
    metallicFactor: 0.1,
    roughnessFactor: 0.02,
  },
  emissiveFactor: [0.06, 0.07, 0.09],
  name: "Diamond",
};
const RUBY = {
  pbrMetallicRoughness: {
    baseColorFactor: [0.55, 0.05, 0.12, 1],
    metallicFactor: 0.2,
    roughnessFactor: 0.04,
  },
  emissiveFactor: [0.12, 0.0, 0.02],
  name: "Ruby",
};
const SAPPHIRE = {
  pbrMetallicRoughness: {
    baseColorFactor: [0.07, 0.18, 0.5, 1],
    metallicFactor: 0.2,
    roughnessFactor: 0.04,
  },
  emissiveFactor: [0.0, 0.02, 0.12],
  name: "Sapphire",
};

function buildGLB(primitives, materials) {
  // primitives: [{ mesh, material }]
  const buffers = [];
  let offset = 0;
  const bufferViews = [];
  const accessors = [];

  function pushView(typedArray, target) {
    const buf = Buffer.from(
      typedArray.buffer,
      typedArray.byteOffset,
      typedArray.byteLength
    );
    // 4-byte alignment
    const pad = (4 - (offset % 4)) % 4;
    if (pad) {
      buffers.push(Buffer.alloc(pad));
      offset += pad;
    }
    const viewIndex = bufferViews.length;
    bufferViews.push({
      buffer: 0,
      byteOffset: offset,
      byteLength: buf.length,
      ...(target ? { target } : {}),
    });
    buffers.push(buf);
    offset += buf.length;
    return viewIndex;
  }

  const meshPrimitives = [];
  for (const { mesh, material } of primitives) {
    const pos = new Float32Array(mesh.positions);
    const nrm = new Float32Array(mesh.normals);
    const idx = new Uint16Array(mesh.indices);

    let min = [Infinity, Infinity, Infinity];
    let max = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < pos.length; i += 3) {
      for (let k = 0; k < 3; k++) {
        min[k] = Math.min(min[k], pos[i + k]);
        max[k] = Math.max(max[k], pos[i + k]);
      }
    }

    const posView = pushView(pos, 34962);
    const posAcc = accessors.length;
    accessors.push({
      bufferView: posView,
      componentType: 5126,
      count: pos.length / 3,
      type: "VEC3",
      min,
      max,
    });

    const nrmView = pushView(nrm, 34962);
    const nrmAcc = accessors.length;
    accessors.push({
      bufferView: nrmView,
      componentType: 5126,
      count: nrm.length / 3,
      type: "VEC3",
    });

    const idxView = pushView(idx, 34963);
    const idxAcc = accessors.length;
    accessors.push({
      bufferView: idxView,
      componentType: 5123,
      count: idx.length,
      type: "SCALAR",
    });

    meshPrimitives.push({
      attributes: { POSITION: posAcc, NORMAL: nrmAcc },
      indices: idxAcc,
      material,
    });
  }

  const bin = Buffer.concat(buffers);
  const gltf = {
    asset: { version: "2.0", generator: "corvalier-gen" },
    scene: 0,
    scenes: [{ nodes: [0] }],
    nodes: [{ mesh: 0, name: "jewel" }],
    meshes: [{ primitives: meshPrimitives }],
    materials,
    accessors,
    bufferViews,
    buffers: [{ byteLength: bin.length }],
  };

  let json = Buffer.from(JSON.stringify(gltf), "utf8");
  const jsonPad = (4 - (json.length % 4)) % 4;
  if (jsonPad) json = Buffer.concat([json, Buffer.from(" ".repeat(jsonPad))]);
  const binPad = (4 - (bin.length % 4)) % 4;
  const binPadded = binPad ? Buffer.concat([bin, Buffer.alloc(binPad)]) : bin;

  const totalLength = 12 + 8 + json.length + 8 + binPadded.length;
  const header = Buffer.alloc(12);
  header.writeUInt32LE(0x46546c67, 0); // 'glTF'
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(totalLength, 8);

  const jsonHeader = Buffer.alloc(8);
  jsonHeader.writeUInt32LE(json.length, 0);
  jsonHeader.writeUInt32LE(0x4e4f534a, 4); // 'JSON'

  const binHeader = Buffer.alloc(8);
  binHeader.writeUInt32LE(binPadded.length, 0);
  binHeader.writeUInt32LE(0x004e4942, 4); // 'BIN'

  return Buffer.concat([header, jsonHeader, json, binHeader, binPadded]);
}

// ---------- model assemblies ----------
function ringModel() {
  const band = torus(1.0, 0.12, 96, 24);
  const gem = brilliant(0.34, 0.5, 16, [0, 1.05, 0]);
  return buildGLB(
    [
      { mesh: band, material: 0 },
      { mesh: gem, material: 1 },
    ],
    [GOLD, DIAMOND]
  );
}

function eternityModel() {
  const band = torus(1.0, 0.12, 120, 24);
  const prims = [{ mesh: band, material: 0 }];
  const n = 22;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const g = brilliant(0.14, 0.2, 10, [
      Math.cos(a) * 1.0,
      0,
      Math.sin(a) * 1.0,
    ]);
    prims.push({ mesh: g, material: 1 });
  }
  return buildGLB(prims, [PLATINUM, DIAMOND]);
}

function necklaceModel() {
  // An arc of graduated gems hung from a fine curve.
  const prims = [];
  const n = 41;
  const sweep = Math.PI * 1.15;
  const start = Math.PI / 2 + (Math.PI * 2 - sweep) / 2;
  const R = 2.2;
  // the chain (thin partial torus around neckline)
  prims.push({ mesh: torus(R, 0.035, 180, 12, sweep, start), material: 0 });
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const a = start + t * sweep;
    const cx = Math.cos(a) * R;
    const cy = Math.sin(a) * R;
    // gems grow toward the centre of the necklace
    const centerWeight = 1 - Math.abs(t - 0.5) * 2;
    const size = 0.07 + centerWeight * 0.16;
    const gem = brilliant(size, size * 1.4, 12, [cx, cy - size * 1.4, 0]);
    prims.push({ mesh: gem, material: i % 3 === 0 ? 2 : 1 });
  }
  return buildGLB(prims, [GOLD, DIAMOND, RUBY]);
}

function earringsModel() {
  const prims = [];
  // two drops side by side
  for (const xo of [-0.9, 0.9]) {
    prims.push({ mesh: translate(torus(0.32, 0.05, 64, 16), [xo, 1.1, 0]), material: 0 });
    // pavé top stud
    prims.push({ mesh: brilliant(0.16, 0.22, 12, [xo, 1.1, 0]), material: 1 });
    // pear drop (elongated faceted gem)
    const drop = brilliant(0.34, 1.0, 14, [xo, 0.1, 0]);
    prims.push({ mesh: drop, material: 2 });
    // connector
    prims.push({ mesh: sphere(0.06, 16, 12, [xo, 0.62, 0]), material: 0 });
  }
  return buildGLB(prims, [GOLD, DIAMOND, SAPPHIRE]);
}

function cuffModel() {
  // open cuff: ~300deg thick torus + a meridian line of gems
  const sweep = Math.PI * 1.7;
  const start = Math.PI * 0.15;
  const R = 1.0;
  const prims = [{ mesh: torus(R, 0.3, 140, 28, sweep, start), material: 0 }];
  const n = 26;
  for (let i = 0; i <= n; i++) {
    const a = start + (i / n) * sweep;
    const cx = Math.cos(a) * R;
    const cz = Math.sin(a) * R;
    const g = brilliant(0.09, 0.14, 8, [cx, 0.3, cz]);
    prims.push({ mesh: g, material: 1 });
  }
  return buildGLB(prims, [GOLD, DIAMOND]);
}

const models = {
  "ring.glb": ringModel(),
  "eternity.glb": eternityModel(),
  "necklace.glb": necklaceModel(),
  "earrings.glb": earringsModel(),
  "cuff.glb": cuffModel(),
};

for (const [name, data] of Object.entries(models)) {
  writeFileSync(join(OUT, name), data);
  console.log(`wrote ${name} (${(data.length / 1024).toFixed(1)} kB)`);
}
