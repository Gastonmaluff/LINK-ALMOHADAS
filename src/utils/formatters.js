function toDate(value) {
  if (!value) {
    return null;
  }

  if (value instanceof Date) {
    return value;
  }

  if (typeof value.toDate === 'function') {
    return value.toDate();
  }

  return new Date(value);
}

export function formatStockLabel(stockPares) {
  const stock = Number(stockPares) || 0;
  return stock === 1 ? '1 par disponible' : `${stock} pares disponibles`;
}

export function formatDateTime(value) {
  const date = toDate(value);

  if (!date || Number.isNaN(date.getTime())) {
    return 'Sin fecha';
  }

  return new Intl.DateTimeFormat('es-PY', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

export function formatBytes(value) {
  if (!value) {
    return '0 KB';
  }

  if (value < 1024) {
    return `${value} B`;
  }

  if (value < 1024 * 1024) {
    return `${(value / 1024).toFixed(1)} KB`;
  }

  return `${(value / (1024 * 1024)).toFixed(2)} MB`;
}

export function getPublicCatalogUrl() {
  return `${window.location.origin}${window.location.pathname}#/`;
}

export function getWhatsappLink(code) {
  const sellerNumber = (import.meta.env.VITE_WHATSAPP_SELLER_NUMBER || '').replace(/\D/g, '');

  if (!sellerNumber) {
    return '';
  }

  const message = encodeURIComponent(`Hola, quiero consultar por el diseño ${code}.`);
  return `https://wa.me/${sellerNumber}?text=${message}`;
}
