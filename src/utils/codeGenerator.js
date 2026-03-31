export function formatProductCode(sequence) {
  return `ALM-${String(sequence).padStart(4, '0')}`;
}
