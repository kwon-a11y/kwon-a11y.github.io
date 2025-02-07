const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { code } = JSON.parse(event.body);
  const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = process.env;

  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    client_secret: DISCORD_CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: 'https://kwon-a11y.github.io/callback',
    scope: 'guilds.join bot',
  });

  try {
    const response = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to exchange code' }),
    };
  }
};
