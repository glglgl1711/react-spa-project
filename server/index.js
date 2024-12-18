const { ApolloServer , gql } = require("apollo-server");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// 테스트 데이터
const users = [
    {
        id : '1' , username : 'test' ,
        password : "123456", // 123456
    }
];

const typeDefs = gql`
    type User {
        id : ID!
        username : String!
        token : String
    }

    type Query {
        me : User
    }

    type Mutation {
        login(username : String! , password : String!) : User
    }
`;

const resolvers = {
    Query : {
        me : (_, __, context) => {
            if(!context.user) throw new Error("인증되지 않은 사용자 입니다.");
            return context.user;
        },
    },

    Mutation : {
        login : async (_, { username , password }) => {
            const user = users.find((u) => u.username === username);
            const userpass = users.find((u) => u.password === password);
            if(!user) throw new Error("사용자를 찾을 수 없습니다.");
            if(!userpass) throw new Error("비밀번호가 일치하지 않습니다.");
            
            const token = jwt.sign({ id : user.id , username : user.username }, '1234' , {
                expiresIn : '1h'
            });

            return {
                id : user.id , 
                username : user.username , 
                token
            };
        },
    },
};

const server = new ApolloServer({
    typeDefs , 
    resolvers , 
    context : ({req}) => {
        const token = req.headers.authorization || "";
        const purseToken = token.replace("Bearer " , "");
        console.log(purseToken)
        if(purseToken) {
            try {
                const user = jwt.verify(purseToken , '1234');
                return {user};
            }catch (e) {
                console.log("JWT 검증 실패:", e.message);
            }
        }
        return {};
    },
});

server.listen().then(({url}) => {
    console.log(`서버 실행 중 : ${url}`)
});
