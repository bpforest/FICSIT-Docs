! 이 문서는 공식적으로 번역한 것이 아니며, 이 README의 대부분 또한 공식에 적용됩니다. 번역 문서에 대한 기여는 아래를 참고해 주십시오 !

## 번역 기여

이 문서는 원본 문서의 업데이트를 반영하기 위해 원본의 포크를 생성하기로 결정했습니다.
또한 저 혼자 하기엔 압도적인 양 때문에 혹여나 기여를 원하시는 분들이 있을 수 있으니 공개 저장소로 만들게 되었습니다.

이러한 번역 방식은 처음이고, 웹페이지를 다뤄 본 경험이 적기 때문에 모든 기능을 반영하지 못했을 수도 있습니다.
기능에 대한 기여 또한 받고 있습니다.

다음은 번역할 때 유의할 점을 나열해 둔 것입니다.

### 일반적으로 모든 번역문에는 문어체를 사용합니다.
경우에 따라 원문이 그러지 않아도 된다고 판단이 서는 경우에 한해서 적용하지 않을 수 있습니다.

### 번역은 원문이 전하고자 하는 내용을 가져가되 독자가 읽기 쉽도록 하는 것을 우선으로 합니다.
이에 따라 원문을 조금 변형하여 번역하는 경우도 있습니다.

### 원문의 작성 형식을 최대한 따라가야 합니다.
Git의 변경 사항 기능을 활용하여 문서에 오류가 없는지 검사하고 추후 업데이트된 원문을 수월하게 적용하기 위함입니다.

### 원문의 하이퍼링크 요소를 고려해야 합니다.
원문에 페이지의 제목을 가리키는 하이퍼링크가 있을 경우
해당 페이지의 제목을 우선적으로 번역 후
VSCode의 전체 변경 기능을 이용하여 해당 링크를 모두 대체할 것을 권장합니다.
그렇지 않으면 추후 문서의 오류를 발견한 독자가 이슈를 요청하는 방법 외엔 찾기 어렵습니다.

### Asciidoc의 문법을 고려해야 합니다.
문자에 `코드 처리`, _기울기 처리_ 등을 적용할 때, 기호 끝에 한글이 있으면 문법이 제대로 적용되지 않습니다. 따라서 기호를 두 번 쓰거나 위의 문법을 사용한 후에는 반드시 띄어쓰기 등의 처리를 해야 합니다.

대괄호 안의 TIP, WARNING, NOTE 등은 번역 요소가 아닌 Asciidoc의 문법입니다. 이를 번역하지 않도록 주의해야 합니다.

저자도 모르는 문법이 있을 수 있으므로 모르는 경우에는 원문의 형식을 최대한 따라가십시오.

### 쉽게 기여하는 방법
README 아래의 빌드 메뉴얼을 통해 사이트를 직접 빌드하고 미리 볼 수 있습니다. 이는 문서가 실제로 어떻게 보이는 지 확인하는 데 도움이 됩니다.

이외의 질문 사항은 이슈를 올리거나 디스코드 bpforest로 연락해 주십시오.

### ! 아래 내용부터는 원문의 README 요소입니다 !

# 새티스팩토리 모딩 문서

새티스팩토리 모드 로더 (SML) 및 새티스팩토리 모딩에 대한 문서입니다.
마스터 브랜치는 <https://docs.ficsit.app/>에서 라이브입니다.
질문이나 제안이 있으시면
[새티스팩토리 모딩 디스코드 서버](https://discord.ficsit.app)에서 저희에게 연락해 주시거나, 아래를 참조하여 PR을 통해 기여해 주십시오.

우리는 소스 파일에서 [Semantic Line Break 형식](https://sembr.org/)을 사용하려고 시도하지만,
이는 느슨하게 준수됩니다.

Asciidoc 구문에 대한 개요는 [여기](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/)에서 확인할 수 있습니다.

풀 리퀘스트는 `Dev` 분기를 대상으로 해야 합니다.

변경 사항을 제출하기 전에,
아래의 개발 설정 지침을 따르는 것이 좋습니다
페이지가 예상대로 표시되는지 확인하기 위해서입니다.

다른 모드에 대한 문서도 동일한 사이트를 통해 제공됩니다.
모드에 대한 문서를 작성하셨다면 추가되기를 원하시면 저희에게 연락해 주십시오.

## 기여하기

문서에 대한 기여는 매우 감사하게 생각합니다.
페이지의 대략적인 개요만 있더라도,
디스코드에서 저희에게 연락해 주시면 전체 페이지로 발전시킬 수 있도록 도와드리겠습니다.

기여하는 가장 쉬운 방법은 레포지토리를 포크한 다음,
변경 사항을 검토할 수 있도록 `Dev` 브랜치를 대상으로 하는 풀 리퀘스트를 사용하는 것입니다.

하루 이틀 내에 검토하지 않으면 디스코드에서 저희에게 메시지를 보내 주십시오.

## 개발 설정

Visual Studio Code와 Docker가 이미 설치되어 있다면,
저희는 저장소에 대한 [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers)를 제공하며,
VSCode에서 폴더를 열 때 자동으로 감지됩니다.
설정 지침은 [Devcontainer](#devcontainer) 제목을 확인하십시오.

이것은 Github Codespaces가 다른 사람의 PR을 테스트하는 매우 편리한 방법이라는 것을 의미합니다.

설치하지 않았다면, 괜찮습니다. [수동](#수동) 제목을 확인하여 컴퓨터에 의존성을 설치하십시오.

### Devcontainer

[Remote Containers 확장](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)과
[Docker Desktop](https://www.docker.com/products/docker-desktop)을 설치했는지 확인하십시오.

시스템 시작 시 Docker가 시작되지 않도록 [끄는 것을 잊지 마십시오](https://superuser.com/a/1386584).
그리고 사용이 끝난 후 Docker를 [닫는 것을 잊지 마십시오](https://www.reddit.com/r/docker/comments/ol11ve/how_to_completely_stop_docker_desktop/).
활동적으로 사용하지 않을 때도 많은 시스템 메모리를 예약합니다.

자동으로 프롬프트가 나타나지 않으면 Ctrl+Shift+P를 눌러 명령 팔레트를 열고,
"컨테이너에서 다시 열기"를 입력한 후 나타나는 옵션을 선택하십시오.

컨테이너는 브라우저 또는 VSCode 내에서 미리보기를 위해 열 때 자동으로 빌드된 콘텐츠를 제공하며,
변경 사항을 감지할 때 미리보기를 자동으로 다시 빌드하는 파일 감시기도 포함되어 있습니다.
하지만 여전히 브라우저를 수동으로 새로 고쳐야 합니다...

컨테이너와 로컬 개발 간에 전환하는 경우
`node_modules` 및/또는 `.pnpm_store` 폴더를 삭제해야 할 수도 있습니다.

### 수동

미리 구성된 devcontainer(또는 Codespaces)를 사용하고 싶지 않다면, 아래 지침을 따르십시오.

Visual Studio Code(와 [추천 확장](./.vscode/extensions.json))
또는 IntelliJ를 사용하는 것을 권장합니다.

페이지가 배포되기 전에 라이브 사이트에서 어떻게 보일지 확인하려면,
아래 지침을 따르십시오.

#### 설치

1. [Node.js](https://nodejs.org/en/download/) (CI는 16을 사용하지만 최신 버전도 괜찮음) 및
   [pnpm 패키지 관리자](https://pnpm.io/)를 선호하는 방법으로 설치하십시오.

2. 저장소를 클론하십시오.

3. pnpm을 사용하여 종속성을 설치하십시오:

    ```bash
    pnpm install
    ```

4. VSCode가 있다면, 폴더를 작업 공간으로 열어 기존 기능과 연결하십시오.

#### 빌드

VSCode가 있다면, 명령 팔레트를 사용하여 작업: `Launch hot reloading development server` 를 실행하십시오.
이렇게 하면 문서를 변경할 때 자동으로 재구성하고 웹 브라우저를 열어 미리 볼 수 있습니다.
재구성된 변경 사항을 보려면 페이지를 수동으로 새로 고쳐야 합니다.
그렇지 않으면 아래 지침을 따르십시오.

변경 사항을 만들 때 SML 문서를 자동으로 다시 빌드하는 개발 감시 서버를 설정하려면:

```bash
pnpm run watch:dev
```

대안으로, **SML 및 모든 다른 호스팅된 모드**에 대한 문서를 빌드하려면 (느림):

```bash
pnpm run build
```

대안으로, **오직 SML**에 대한 문서를 빌드하려면 (모든 모드보다 훨씬 빠름):

```bash
pnpm run build:dev
```

두 명령의 출력 HTML 파일은 `\build\site` 에서 찾을 수 있습니다.

#### 미리보기

VSCode가 있다면, 명령 팔레트를 사용하여 작업: `Launch hot reloading development server` 를 실행하십시오.
이렇게 하면 문서를 변경할 때 자동으로 재구성하고 웹 브라우저를 열어 미리 볼 수 있습니다.
재구성된 변경 사항을 보려면 페이지를 수동으로 새로 고쳐야 합니다.
그렇지 않으면 아래 지침을 따르십시오.

내용을 미리 보려면, 브라우저에서 출력 HTML 파일을 열 수 있습니다.
예: `build/site/satisfactory-modding/latest/index.html`

또한 `pnpm run serve` 를 실행하여 로컬 웹 서버를 시작할 수 있습니다.
터미널에서 웹 서버에 사용할 수 있는 주소를 출력합니다.

#### 링크 검사기

CI는 또한
[lychee 링크 검사기](https://github.com/lycheeverse/lychee/tree/master)를
실행하여 끊어진 링크를 확인합니다.
보고서는 저장소의 [Actions 탭](https://github.com/satisfactorymodding/Documentation/actions)에서 확인할 수 있습니다.

로컬에서 실행하고 싶다면 lychee 문서를 따라 도구를 설치할 수 있습니다.

## 다른 모드에 대한 문서 추가

다른 모드에 대한 문서를 작성하고 라이브 사이트에 포함되기를 원하시면, 그렇게 하실 수 있습니다.

이렇게 한 모드에는 FicsIt-Networks, Refined Power, Ficsit Remote Monitoring, TweakIt 등이 포함됩니다.

이 설정을 원하시면 저희에게 연락해 주십시오. 일반적인 단계는 아래와 같습니다:

- 문서 파일이 포함된 저장소를 생성하십시오.
- 저장소에서 [github actions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)를 활성화하십시오.
- 이미 나열된 다른 모드의 형식을 따라 `antora-playbook-ci.yml` 및 `antora-playbook.yml` 파일을 편집하여 저장소를 소스로 추가하십시오.
- 사이트를 소스로 추가하여 이 문서 저장소를 로컬에서 빌드할 수 있는지 확인하십시오. 이를 위해 `package.json` 에 정의된 `build` 작업을 실행하십시오. 속도를 높이기 위해 다른 모드의 저장소를 일시적으로 주석 처리하는 것을 고려하십시오.
- 배포된 복사본이 레포에 변경 사항을 푸시할 때 자동으로 업데이트되기를 원하시면, [이 파일](.github/workflows/SubModPush.yml.example)과 유사한 Actions 파일을 설정하고, 디스코드로 저희에게 연락하여 [비밀에 추가할 토큰](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)을 요청하십시오.
- 플레이북 파일에 대한 변경 사항으로 `Dev` 브랜치에 PR을 제출하십시오.

서브 모드 문서 사이트는 현재 CI에 의해 실행되는 Lychee 링크 검사기의 적용을 받으므로,
문서에 끊어진 링크가 있는 경우 빌드가 실패하고 사이트가 업데이트되지 않습니다.
이 저장소의 [Actions](https://github.com/satisfactorymodding/Documentation/actions)를
확인하여 실패 이유를 확인할 수 있습니다.
모드 문서 업데이트는 SatisfactoryModdingBot 깃허브 사용자에 의해 `mod-docs-update` 라는 작업 이름으로 시작됩니다.

## 새로운 버전 브랜치 추가

새로운 주요 또는 부 버전의 SML이 출시되면 일반적으로 새로운 버전 브랜치를 생성합니다.
목표는 이전 버전으로 작업할 수 있는 문서의 참조 지점을 제공하는 것입니다.

문서의 새로운 고정 버전 브랜치를 추가하려면:

1. `vX.X.X` 형식의 이름을 따르는 커밋에서 브랜치를 생성하십시오. 예: `v3.1.1`
2. `antora-playbook.yml` 및 `antora-playbook-ci.yml` 의 브랜치 목록에 브랜치 이름을 추가하십시오.
3. 브랜치에서 `antora.yml` 을 편집하여 브랜치 이름과 일치하는 `version` 을 설정하십시오 (대신 `latest`).
   왜 그래야 하는지는 [여기](https://gitlab.com/antora/antora/-/issues/496)에 설명되어 있습니다.
4. 준비 완료 - CI가 배포를 처리합니다.
