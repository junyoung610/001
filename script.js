document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막음

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    // 글 객체 생성
    const post = {
        title: title,
        content: content,
        timestamp: new Date().toLocaleString() // 현재 시간을 타임스탬프로 저장
    };

    // localStorage에 글 객체 저장
    // 일반적으로 실제 프로덕션에서는 서버에 데이터를 저장해야 합니다.
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    // 성공 메시지 표시
    const successMessage = document.getElementById('post-success-message');
    successMessage.textContent = '글이 성공적으로 등록되었습니다.';
    
    // 폼 초기화
    document.getElementById('post-form').reset();
});
