### Docker와 AWS서버를 이용한 데이터베이스 서버 만들기 및 Springboot(SpringSecurity)이용한 로그인 기능 구현(백엔드)

#### 데이터베이스 구축하기

1. 개인 우분트 서버에 접속하여 데이터베이스 docker를 설치할 폴더 구조 구축하기<br>
<img width="577" alt="사진경로" src="https://github.com/Korcp/ecole-project/assets/48702154/619f1e47-b8df-4adb-a898-f1c1851861c6"><br>
2. 구축을 완료했으면 docker 설치 ※https://docs.docker.com/engine/install/ubuntu/ 공식홈페이지에서 따라서 다운로드<br>
<img width="577" alt="DOCKER설치" src="https://github.com/Korcp/ecole-project/assets/48702154/bdbb5865-a28e-4980-b1a3-cc8aae8c64cf"><br>
3. 설치를 완료하였으면 Visual Studio를 통해 원격 접속을하여 폴더 구조열기<br>
<img width="577" alt="vscode remote" src="https://github.com/Korcp/ecole-project/assets/48702154/a702cbf8-c44d-48be-bb55-11d5e14ba2f9"><br>

4. docker_compose.yml파일과 .env파일 작성<br>
<img width="280" alt="compose yml" src="https://github.com/Korcp/ecole-project/assets/48702154/c3caab13-5052-4513-9f6a-e3bb9d79054a">
<img width="221" alt="env" src="https://github.com/Korcp/ecole-project/assets/48702154/1f884dbe-6e33-4216-b1d0-d2a3dd48fc62"><br>

5. 작성완료하였으면 sudo docker compose up -d 명령어를 통해 docker 실행시키기 -- -d를 붙이면 꺼지지않고 계속해서 실행됨
6. AWS을 통하여 compose에서 지정했던 포트번호 뚫어주기(?)<br>
<img width="577" alt="포트고체" src="https://github.com/Korcp/ecole-project/assets/48702154/56e6dd4a-9ea3-418b-a062-f1da6b0a37eb">
<br>
8. DBeaver을 통하여 데이터 베이스 connect 접속 해보기<br>
<img width="577" alt="connecting" src="https://github.com/Korcp/ecole-project/assets/48702154/0b2ec36d-77c2-49d1-ae2d-b2877d6df417"><br>

9. 데이터베이스 설계하기<br>
<img width="205" alt="디비설계" src="https://github.com/Korcp/ecole-project/assets/48702154/83813ec8-a27b-4e57-8d32-775b384bec07">

#### SpringSecurity이용한 로그인 기능 구현

Spring Security란?  Spring 기반의 어플리케이션의 보안(인증과 권한, 인가 등)을 담당하는 스프링 하위 프레임워크이다. -> 인증과 인가에대한 처리를 해주는것
※ 인증(Authentication):해당 사용자가 본인이 맞는지 확인하는 과정
※ 인가(Authorization):해당 사용자가 요청하는 자원을 실행할 수 있는 권한이 있는가를 확인하는 과정
Spring Security에서는 이러한 인증과 인가를 위해 Principal을 아이디로, Credential을 비밀번호로 사용하는 Credential 기반의 인증 방식을 사용한다.
- Principal(접근 주체) : 보호받는 Resource에 접근하는 대상 즉, 대상
- Credential(비밀번호) : Resource에 접근하는 대상의 비밀번호 즉, 대상의 비밀번호
또한 Spring Security는 ‘인증’과 ‘인가’에 대한 부분을 Filter 흐름에 따라 처리하고 있다.
![image](https://github.com/Korcp/ecole-project/assets/48702154/b29b5f0f-e180-4e89-bb1b-5009bfebdef1)
↑

1. 사용자가  로그인 정보와 함께 인증 요청을 한다.(Http Request)
2. AuthenticationFilter가 요청을 가로채고, 가로챈 정보를 통해 UsernamePasswordAuthenticationToken의 인증용 객체를 생성한다.(principal,Credencial)
3. AuthenticationManager의 구현체인 ProvierManager에게 생성한 UserPasswordToken객체를 전달한다.
4. AuthenticationManager는 등록된 AuthenticationProvier들을 조회하여 인증을 요구한다.
5. 실제 DB에서 사용자 인증정보를 가져오는 UserDetailsService에 사용자 정보를 넘겨준다.
6. 넘겨받은 사용자 정보를 통해 DB에서 찾은 사용자 정보인 UserDetails 객체를만든다.
7. AuthenticationProvider들은 UserDetails를 넘겨받고 사용자 정보를 비교한다.
8. 인증이 완료되면 권한 등의 사용자 정보를 담은 Autnenticaiton 객체를 반환한다. (role)
9. 다시 최초의 AuthenticationFilter에 Authentication 객체가 반환된다.
10. Authentication 객체를 SecurityContext에 저장한다.

####구현하기
1. <img width="200" alt="Spring구조ㅓ" src="https://github.com/Korcp/ecole-project/assets/48702154/0fe6fb46-0d29-4dac-becb-8c69c0b57414"><br>
2. <img width="542" alt="image" src="https://github.com/Korcp/ecole-project/assets/48702154/615ae425-8299-492a-9b9a-4b8a2c547751">
3.<img width="716" alt="image" src="https://github.com/Korcp/ecole-project/assets/48702154/0b3b0386-7e4e-470e-ae1f-113e9524d23f">
4.![image](https://github.com/Korcp/ecole-project/assets/48702154/1830ef4c-61c3-40ae-a2af-338a840bba39)


