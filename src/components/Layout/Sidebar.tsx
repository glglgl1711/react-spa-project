import React from "react";

export default function Sidebar () {

    return(
        <>
        <div className="sidebar">
            <div className="sidebar-logo">
                {/* U+ 커넥트 */} 테스트
            </div>
            <ul className="menu">
                <li className="active"><a href="#"><i className="fas fa-tachometer-alt"></i> 대시보드</a></li>
                {/* <li><a href="#"><i className="fas fa-car"></i> 운영 관리</a></li>
                <li><a href="#"><i className="fas fa-shield-alt"></i> 안전 관리</a></li>
                <li><a href="#"><i className="fas fa-cogs"></i> 환경 설정</a></li> */}
            </ul>
            <div className="sidebar-footer">
                <a href="#">서비스 이용약관</a> | <a href="#">개인정보처리방침</a>
            </div>
        </div>
        </>
    )
}