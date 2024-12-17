import { Route, Routes } from "react-router-dom";
import Home from "./components/Layout/Home";
import Layout from "./components/Layout/Layout";
import { GuestRouterData } from "./data/GuestRouterData";
import LoadingSpinner from "./components/Layout/LoadingSpinner";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

// react-router-dom : URL 주소에 따라 원하는 컴포넌트 (또는 페이지) 로 페이지 전환 가능

function App() {

  return (
    <>
    <ApolloProvider client={client}>
      <LoadingSpinner/>
      
      <Routes>
        <Route element={<Home/>}>

          {/* auth : 로그인 정보 */}
          {/* 로그인 정보가 없다면 False , 있다면 True 로 전달 */}

          <Route element={<Layout auth={false} />}>

            {GuestRouterData?.map((obj : any , objIndex : number) => (
              <Route 
                key={`${obj.path}-${objIndex}`} 
                path={obj?.path} 
                element={obj?.element}
              />
            ))}

          </Route>

        </Route>
      </Routes>
    </ApolloProvider>
    </>
  );
}

export default App;
