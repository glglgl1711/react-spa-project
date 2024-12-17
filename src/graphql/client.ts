import { ApolloClient , InMemoryCache , createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import config from "../config";
// 서버 URL 설정
const httpLink = createHttpLink({
    uri : 'http://localhost:4000/', // Apollo Server 주소
});

// 헤더에 토큰 저장
const authLink = setContext((_, {headers}) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE3MzQ0MjM0MjQsImV4cCI6MTczNDQyNzAyNH0.l0xlVfMUrkV14ZKSK8SuANVf3TNJ_YeYqZEl_f7t4rY";
    return {
        headers : {
            ...headers , 
            Authorization : token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    link : authLink.concat(httpLink) , // authLink와 httpLink 연결
    cache : new InMemoryCache(),
});

export default client;