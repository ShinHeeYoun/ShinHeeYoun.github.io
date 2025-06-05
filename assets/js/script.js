function performSearch() {
  const query = document.getElementById('searchBox').value.trim();
  if (query) {
    alert(`"${query}" 를 검색합니다.`);
    // 실제 검색 기능을 연결하려면 여기서 URL 이동 등 처리
  } else {
    alert("검색어를 입력해주세요.");
  }
}
