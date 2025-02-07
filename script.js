document.getElementById('login-button').addEventListener('click', () => {
    // Discord OAuth2 URL을 여기에 추가합니다.
    const discordOAuthURL = 'https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20guilds.join';
    window.location.href = discordOAuthURL;
});
