// Generates editorial poster SVGs for CORVALIER pieces.
// Moody studio backdrop + soft champagne light + faceted jewel silhouette.
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

const W = 1000;
const H = 1250;

function grain(id) {
  return `
    <filter id="${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n"/>
      <feColorMatrix in="n" type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.06"/></feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>`;
}

function softGlow(id) {
  return `<filter id="${id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="26"/>
    </filter>`;
}

// ── jewel silhouettes (centered around cx, drawn in gold + white facets) ──
function gem(cx, cy, w, h) {
  const x0 = cx;
  return `
    <g filter="url(#facetglow)">
      <polygon points="${x0},${cy - h} ${cx + w},${cy - h * 0.55} ${x0},${cy + h * 0.2} ${cx - w},${cy - h * 0.55}" fill="#ffffff" opacity="0.96"/>
      <polygon points="${cx - w},${cy - h * 0.55} ${x0},${cy + h * 0.2} ${x0},${cy - h * 0.55}" fill="#dfe6ef" opacity="0.85"/>
      <polygon points="${cx + w},${cy - h * 0.55} ${x0},${cy + h * 0.2} ${x0},${cy - h * 0.55}" fill="#c7d0dd" opacity="0.8"/>
      <polygon points="${x0},${cy - h} ${cx + w},${cy - h * 0.55} ${x0},${cy - h * 0.55} ${cx - w},${cy - h * 0.55}" fill="#ffffff" opacity="0.6"/>
    </g>`;
}

function ringShape(g) {
  return `
    ${gem(500, 470, 70, 120)}
    <ellipse cx="500" cy="700" rx="150" ry="156" fill="none" stroke="url(#${g})" stroke-width="26"/>
    <ellipse cx="500" cy="700" rx="150" ry="156" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="4"/>`;
}

function eternityShape(g) {
  let beads = "";
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    const x = 500 + Math.cos(a) * 150;
    const y = 620 + Math.sin(a) * 156;
    beads += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="#ffffff" opacity="0.95"/>`;
  }
  return `
    <ellipse cx="500" cy="620" rx="150" ry="156" fill="none" stroke="url(#${g})" stroke-width="22"/>
    ${beads}`;
}

function necklaceShape(g) {
  let beads = "";
  for (let i = 1; i < 13; i++) {
    const t = i / 13;
    const x = 230 + (770 - 230) * t;
    const y = 360 + Math.sin(Math.PI * t) * 360;
    const r = 7 + Math.sin(Math.PI * t) * 16;
    beads += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="#ffffff" opacity="0.95"/>`;
  }
  return `
    <path d="M230 360 C 360 760, 640 760, 770 360" fill="none" stroke="url(#${g})" stroke-width="6" stroke-linecap="round"/>
    ${beads}
    ${gem(500, 760, 42, 70)}`;
}

function earringsShape(g) {
  const one = (x) => `
    <circle cx="${x}" cy="360" r="40" fill="none" stroke="url(#${g})" stroke-width="11"/>
    <circle cx="${x}" cy="360" r="16" fill="#ffffff" opacity="0.95"/>
    <path d="M${x} 400 L ${x} 560" stroke="url(#${g})" stroke-width="7"/>
    <polygon points="${x},555 ${x + 60},660 ${x},900 ${x - 60},660" fill="#ffffff" opacity="0.95"/>`;
  return one(360) + one(640);
}

function braceletShape(g) {
  let beads = "";
  for (let i = 0; i < 9; i++) {
    const a = Math.PI + (i / 8) * Math.PI;
    const x = 500 + Math.cos(a) * 230;
    const y = 640 + Math.sin(a) * 180;
    beads += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="9" fill="#ffffff" opacity="0.95"/>`;
  }
  return `
    <ellipse cx="500" cy="640" rx="230" ry="180" fill="none" stroke="url(#${g})" stroke-width="44"/>
    <ellipse cx="500" cy="640" rx="230" ry="180" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="8"/>
    ${beads}`;
}

const SHAPES = {
  ring: ringShape,
  eternity: eternityShape,
  necklace: necklaceShape,
  brooch: necklaceShape,
  earrings: earringsShape,
  bracelet: braceletShape,
};

function poster({ shape, glow, gold, light }) {
  const gid = `g-${Math.random().toString(36).slice(2, 7)}`;
  const drawer = SHAPES[shape] || ringShape;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="bg" cx="42%" cy="30%" r="90%">
      <stop offset="0%" stop-color="${glow}"/>
      <stop offset="45%" stop-color="#15110e"/>
      <stop offset="100%" stop-color="#0a0807"/>
    </radialGradient>
    <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${light}"/>
      <stop offset="50%" stop-color="${gold}"/>
      <stop offset="100%" stop-color="${light}"/>
    </linearGradient>
    <radialGradient id="floor" cx="50%" cy="78%" r="60%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    ${softGlow("facetglow")}
    ${grain("grain")}
    <radialGradient id="vig" cx="50%" cy="45%" r="75%">
      <stop offset="60%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.55"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <ellipse cx="500" cy="980" rx="360" ry="120" fill="url(#floor)"/>
  ${drawer(gid)}
  <rect width="${W}" height="${H}" fill="url(#vig)"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.5"/>
</svg>`;
}

const items = [
  { file: "aurore", shape: "ring", glow: "#3a2a20", gold: "#C9A66B", light: "#E2CD9F" },
  { file: "rivage", shape: "necklace", glow: "#3a201f", gold: "#C9A66B", light: "#E7C7A0" },
  { file: "ondine", shape: "earrings", glow: "#1f3038", gold: "#C9A66B", light: "#BFE3EC" },
  { file: "meridien", shape: "bracelet", glow: "#332a1c", gold: "#C9A66B", light: "#E2CD9F" },
  { file: "vesper", shape: "eternity", glow: "#2b2620", gold: "#D9C08A", light: "#F0E4C5" },
  { file: "comtesse", shape: "brooch", glow: "#1d2740", gold: "#C9A66B", light: "#AFC2EA" },
  // editorial scene images
  { file: "hero", shape: "necklace", glow: "#3a2a20", gold: "#C9A66B", light: "#E2CD9F" },
  { file: "atelier", shape: "ring", glow: "#2a221b", gold: "#C9A66B", light: "#E2CD9F" },
];

for (const it of items) {
  writeFileSync(join(OUT, `${it.file}.svg`), poster(it));
  console.log(`wrote ${it.file}.svg`);
}
