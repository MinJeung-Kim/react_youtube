import axios from 'axios';

// 필요한 네트워크 처리 담당
class Youtube {
  // 통신 정보를 감추고 싶을때
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  // 기본적으로 유튜브와 통신하는 클라이언트 생성
  // constructor(key) {
  //   this.youtube = axios.create({
  //     baseURL: 'https://www.googleapis.com/youtube/v3',
  //     // 공통적으로 쓰는 파라미터 설정
  //     params: { key: key },
  //   });
  // }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });

    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });

    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
