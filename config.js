const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1520636826535071785/0-TdBMW-6A6AuzUj3Yf4mzPm17x61OI0qfq3zd9FO9omPYcC1YBRqBzOSwJ-5f2uIq_L';

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
