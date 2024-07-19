/**
 * Darkens a hex color code by a given amount.
 * @param {string} hex - The hex color code to darken.
 * @param {number} amount - The amount to darken the color by (default is 10).
 * @returns {string} The darkened hex color code.
 */
export default function darkenHexColor(hex, amount = 50) {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  const num = parseInt(color, 16);

  let r = (num >> 16) - amount;
  let g = ((num >> 8) & 0x00ff) - amount;
  let b = (num & 0x0000ff) - amount;

  r = r < 0 ? 0 : r;
  g = g < 0 ? 0 : g;
  b = b < 0 ? 0 : b;

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
