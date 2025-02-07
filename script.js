document.getElementById('login-button').addEventListener('click', () => {
    // Discord OAuth2 URL을 여기에 추가합니다.
    const discordOAuthURL = 'https://discord.com/api/oauth2/authorize?client_id=1337231980009492640&redirect_uri=https://kwon-a11y.github.io/callback&response_type=code&scope=identify%20guilds.join';
    window.location.href = discordOAuthURL;
});
