### Docker와 AWS서버를 이용한 데이터베이스 서버 만들기 및 Springboot(SpringSecurity)이용한 로그인 기능 구현(백엔드)

#### 데이터베이스 구축하기

1. 저의 개인 우분트 서버에 접속하여 데이터베이스 docker를 설치할 폴더 구조 구축하기
2. 구축을 완료했으면 docker 설치 ※https://docs.docker.com/engine/install/ubuntu/ 공식홈페이지에서 따라서 다운로드
3. 설치를 완료하였으면 Visual Studio를 통해 원격 접속을하여 폴더 구조열기
4. docker_compose.yml파일과 .env파일 작성
5. 작성완료하였으면 sudo docker compose up -d 명령어를 통해 docker 실행시키기 -- -d를 붙이면 꺼지지않고 계속해서 실행됨
6. AWS을 통하여 compose에서 지정했던 포트번호 뚫어주기(?)
7. DBeaver을 통하여 데이터 베이스 connect 접속 해보기
8. 데이터베이스 설계하기

#### Springboot이용한 로그인 기능 구현
