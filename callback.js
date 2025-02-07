// URL에서 코드 추출
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
    // 여기에 서버로 코드를 보내는 로직 구현
    fetch('/exchange-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.access_token) {
            // 액세스 토큰을 사용하여 사용자 정보 가져오기
            fetchUserInfo(data.access_token);
        } else {
            document.getElementById('status').textContent = '인증 실패';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('status').textContent = '오류 발생';
    });
} else {
    document.getElementById('status').textContent = '인증 코드가 없습니다.';
}

function fetchUserInfo(accessToken) {
    fetch('https://discord.com/api/users/@me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    .then(response => response.json())
    .then(userData => {
        // 사용자 정보 처리
        document.getElementById('status').textContent = `환영합니다, ${userData.username}!`;
        // 여기에 추가적인 사용자 정보 처리 로직 구현
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('status').textContent = '사용자 정보 가져오기 실패';
    });
}
