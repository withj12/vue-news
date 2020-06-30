import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};

// 2. API 함수들을 정리
// News의 리스트업 함수
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    // es6 템플릿 스트링 이용
    // views/NewsView.vue에서 사용한다.
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);    
  }
  
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

// 하이오더 컴포넌트 구현을 위한 API(fetchNewsList, fetchAskList, fetchJobsList)
async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}${pageName}/1.json`);
  } catch (error) {
    console.log(error);
  }  
}

function fetchUserInfo(username) {
  // console.log(username);  
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchCommentItem(id) {
  // console.log(userid); 
  return axios.get(`${config.baseUrl}item/${id}.json`);
}



export {
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  fetchList, 
  fetchUserInfo, 
  fetchCommentItem, 
  
}