import React, { useEffect } from 'react';

function Auth() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      exchangeCode(code).then(data => {
        console.log('Access Token:', data.access_token);
        // 여기서 액세스 토큰을 저장하거나 사용자 정보를 가져오는 등의 작업을 수행합니다.
      });
    }
  }, []);

  async function exchangeCode(code) {
    const response = await fetch('/.netlify/functions/exchange-code', {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
    return response.json();
  }

  return (
    <div>
      {/* 인증 관련 UI 컴포넌트들 */}
    </div>
  );
}

export default Auth;
