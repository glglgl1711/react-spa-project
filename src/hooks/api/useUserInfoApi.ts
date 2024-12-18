import { gql, useQuery } from "@apollo/client";

// 회원정보 조회 GraphQL 쿼리
const GET_USER_INFO = gql`
    query {
        me {
            id
            username
        }
    }
`;

export default function useUserInfo() {
    const { data, loading, error } = useQuery(GET_USER_INFO, {
        fetchPolicy: 'network-only', // 항상 네트워크를 통해 데이터 가져오기
    });

    return {
        user: data?.me, // 사용자 정보
        loading,        // 로딩 상태
        error,          // 오류 상태
    };
}