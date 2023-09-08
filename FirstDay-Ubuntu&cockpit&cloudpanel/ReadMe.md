# ubuntu 설치 및 cockpit을 통해서 cloudpanel 연결하기

<h1>ubuntu 설치</h1>

<h2>1. VMware Workstation을 통하여 ubuntu Iso파일을 통해서 설치환경 셋팅</h2>
<img width="544" alt="VM으로 우분트 깔기" src="https://github.com/Korcp/ecole-project/assets/48702154/ddf6be42-af3f-4778-a02b-ea6be0fc2a5c">

<h2>2.ubuntu 설치 순서</h2>
<br/>
<b>◎try...install..</b> <br/>
<img width="713" alt="우분트 설치" src="https://github.com/Korcp/ecole-project/assets/48702154/b9c7d623-681b-4261-a102-6e4bc74bc2b2"><br/>
<b>◎언어선택</b><br/>

<img width="637" alt="초기실행창" src="https://github.com/Korcp/ecole-project/assets/48702154/cc1a516e-0e20-47e0-8293-63d4c6d0c4ad">
<br/>

<b>◎업데이트</b> <br/>
<img width="733" alt="우분트 업데이트" src="https://github.com/Korcp/ecole-project/assets/48702154/e73edca8-f0dd-4eb2-9c34-b99545a12436">

<b>◎네트워크설정</b> <br/>
<img width="663" alt="우분트 네트워크설정" src="https://github.com/Korcp/ecole-project/assets/48702154/259c84a5-a062-478d-bd5e-20f130b61fec"><br/>

<b>◎디렉토리 구조 그룹 </b><br/>
<img width="678" alt="그룹취소" src="https://github.com/Korcp/ecole-project/assets/48702154/427527fb-93be-4f16-987e-cffa71e65eac">

<b>◎파일 시스템 요약</b> <br/>
<img width="649" alt="파일시스템요약" src="https://github.com/Korcp/ecole-project/assets/48702154/0782c446-3b82-4465-9c0e-7afdfbf073f6">

<b>◎프로필 설정</b> <br/>
<img width="707" alt="우분트 설치전 이름과 서버이름정하기" src="https://github.com/Korcp/ecole-project/assets/48702154/5beeb383-58f3-4a29-a19d-63677f251819">

<b>◎이름과 패스워드</b> <br/>
<img width="673" alt="우분트 이름과 패스워드설정" src="https://github.com/Korcp/ecole-project/assets/48702154/19799914-034a-402e-98b1-2761e8097cd7">

<b>◎ubuntu 설치완료</b> <br/>
<img width="715" alt="설치완료" src="https://github.com/Korcp/ecole-project/assets/48702154/7f448f93-6646-4297-97fa-8c476a20348e">

<b>◎ubuntu 설정</b> <br/>

<img width="302" alt="우분투 설정" src="https://github.com/Korcp/ecole-project/assets/48702154/c641fe89-6c54-4166-9cff-1aa85053d607">

<h2>3.ubuntu 설정 및 cockpit 설치</h2><br/>
<b>◎로그인화면</b><br/>
<img width="401" alt="로그인화면" src="https://github.com/Korcp/ecole-project/assets/48702154/894ab2e2-c7d5-45d9-a186-b12eb0ba3d02">

<b>◎sudo코드로 update 및 upgrade</b> <br/>
<img width="461" alt="update" src="https://github.com/Korcp/ecole-project/assets/48702154/04c6d88a-34de-4b26-9781-e2e813154847"><br/>
<img width="476" alt="우분투 sudo upgrade" src="https://github.com/Korcp/ecole-project/assets/48702154/6f81970c-c9b7-46e7-bc1f-5b2d29459b46"><br/>
<img width="509" alt="upgrade화면" src="https://github.com/Korcp/ecole-project/assets/48702154/f78d6f97-fe46-4448-95b9-72abe0bdb331"><br/>

<b>◎sudo code로 cockpit 연결</b> <br>

※sudo apt install cockpit을 통해서 cockpit 다운받기
<br>
<br>
※ 여기서 enable은 로그인을 다시하여도 자동으로 실행하도록하는것 enable대신 start를 사용하면 지금만 시작하는것<br>
<img width="401" alt="cockpit명령어" src="https://github.com/Korcp/ecole-project/assets/48702154/76333ac3-3678-4e5d-821e-b6cec68f3a5d"><br>

※cockpit 현재상태보여주기 <br>
<img width="404" alt="status cockpit" src="https://github.com/Korcp/ecole-project/assets/48702154/d1acf2d0-b365-415c-8900-0a9afd03b194"><br>

<b>ubuntu local 접속</b><br>
<img width="1091" alt="ubuntu화면" src="https://github.com/Korcp/ecole-project/assets/48702154/ed2f4ad8-de44-4e04-a855-00dc754efd86"><br>

<b>접속후 터미널접속</b><br>
<img width="1263" alt="접속후 터미널" src="https://github.com/Korcp/ecole-project/assets/48702154/a875b726-180f-43e9-8f2a-2b7947631d61"><br>

<h2>ubuntu사이트에서 cloudpanel연결하기</h2>

<b>cloudpanel에서 apt update랑 mysql copy하기</b><br>

<img width="624" alt="cloudpanel " src="https://github.com/Korcp/ecole-project/assets/48702154/409935ad-1658-4c55-aca9-40d5191bd808"><br>

<b>apt update</b><br>
<img width="1103" alt="apt update" src="https://github.com/Korcp/ecole-project/assets/48702154/d94b7b6b-d27b-4e87-af6c-3bfe46c67d9f"><br>
<b>mysql update</b><br>
<img width="770" alt="mysqldb연동" src="https://github.com/Korcp/ecole-project/assets/48702154/afc328c1-5b8b-46f1-876d-6e2df6093b86"><br>

※local에서는 서버가 port을 열수없어서 다른방법을 추가해야됨 추가안할경우 밑의그림처럼 응답을하지않음
<img width="605" alt="locaerror" src="https://github.com/Korcp/ecole-project/assets/48702154/646cd3b6-8be1-4f6c-a2f9-54e1ee89018f"><br>

※enable후 다시 로그인 하면 바로 cockpit이 실행

<img width="337" alt="enable login" src="https://github.com/Korcp/ecole-project/assets/48702154/25e18fd1-0018-422c-ac4c-5c7a56edef38">

