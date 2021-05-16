// 필요한 네트워크 처리 담당
class YoutubeFetch {
  constructor(key) {
    this.key = key;
    // 기본 옵션 설정
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(query) {
    return (
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
      )
        .then((response) => response.json())
        // 기존의 item의 데이터를 유지하면서 item안의 id만 오브젝트가 아닌 id로 업데이트
        .then((result) =>
          result.items.map((item) => ({ ...item, id: item.id.videoId }))
        )
    );
  }
}

export default YoutubeFetch;
