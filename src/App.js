import React, { useState } from 'react';
import './App.css';


function App() {

  //a에는 '남자 코트 추천', b에는 a를 변경하는 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '럭스 스킨 추천']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  /*<div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick = { 제목바꾸기 }>버튼</button>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <Modal title="테스트제목" date="테스트날짜" naeyong="테스트내용" />*/


  
  return (
    <div className="App">



      

      <div className="container">
        <div className="top-fixed">
          <div className="logo"><img src="logo.png" alt="로고"/></div>
        </div>
        <p className="icon-scroll jump"><img src="scroll.png" alt="스크롤"/></p>
        <div className="section-wrapper">
          
          <header className="section">
            <div className="app-header-img type1"></div>
              <div className="header-condent">
                <div className="header-text">
                  <h1 className="header-text1 app-header-text"><img src="1pagelargetext.png" alt="1페이지큰텍스트"/></h1>
                </div>     
              <a className="app-download" href="https://naver.com"><img src="download.png" alt="다운로드"/></a>
            </div>
          </header>

          <div className="section">
            <div className="content">
              <div className="cont-text">
                <h2 className="con-txt1 app-cont01-text"><img src="2pagelargetext.png" alt="2페이지큰텍스트"/></h2>
              </div>
              <p className="cont-desc">
                2페이지 작은텍스트입니다1<br/>
                2페이지 작은텍스트입니다2
              </p>
              <div className="road"><img src="2pageimg.png" art="2페이지이미지"/></div>
            </div>
          </div>

          <div className="section">
            <div className="content">
              <div className="cont-text">
                <h2 className="con-txt1 app-cont02-text"><img src="3pagelargetext.png" alt="3페이지큰텍스트"/></h2>
              </div>
              <p className="cont-desc">
                3페이지 작은텍스트입니다1<br/>
                3페이지 작은텍스트입니다2<br/>
              </p>
              <div className="animation people"><img src="3pageimg.png" alt="3페이지이미지"/></div>
            </div>
          </div>

          <footer className="footer section">
            <div className="content bg_footer">
              <div className="footer-title">
                <h2 className="txt-footer"><img src="slogan.png" alt="슬로건"/></h2>
              </div>
              <div className="family-link">
                <ui className="family-link-first-line">
                  <li><a href="https://naver.com" target="_blank">
                    <img src="family1.png" alt="family1"/></a></li>
                  <li><a href="https://naver.com" target="_blank">
                    <img src="family2.png" alt="family2"/></a></li>
                </ui>
              </div>
              <div className="company-info">
                <p className="address">
                  <span>엘케이아트워크</span>
                </p>
              </div>
            </div>
          </footer>


        </div>

        <ul className="pagination">     
          <li data-menuanchor="1"><a href="javascript:;"></a></li>
          <li data-menuanchor="2"><a href="javascript:;"></a></li>
          <li data-menuanchor="3"><a href="javascript:;"></a></li>
          <li data-menuanchor="4"><a href="javascript:;"></a></li>
          <li data-menuanchor="5"><a href="javascript:;"></a></li>
          <li data-menuanchor="6"><a href="javascript:;"></a></li>
        </ul>





      </div>







    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.naeyong}</p>
    </div>
  )
}









export default App;