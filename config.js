const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1504235534824771625/mYqtRrbA8vG7buknrDgN2WGsz5QvbD1cjqwGR_-y-F5Hl4ZD9pNy4PGmtk-VgpuCW5DL';

function enviarMensajeDiscord(mensaje) {
  if (!DISCORD_WEBHOOK_URL) {
    console.error('Webhook no configurado');
    return Promise.reject('Webhook no configurado');
  }

  return fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: mensaje,
      username: 'WhatsApp Soporte Técnico',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
    })
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error al enviar a Discord');
    }
    return response.json();
  });
}