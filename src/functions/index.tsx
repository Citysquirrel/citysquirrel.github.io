import { useEffect } from 'react';
import { Octokit } from 'octokit';
import { FaRegCopy } from 'react-icons/fa';
import styled from 'styled-components';

export function useFadeIn() {
  useEffect(() => {
    console.log(123);
  }, []);
}

export function useScreenBorder(
  options: {
    top: string;
    right: string;
    bottom: string;
    left: string;
    container: string;
  },
  color: string = '#c4e0fa'
) {
  useEffect(() => {
    const top = document.getElementById('top');
    const right = document.getElementById('right');
    const bottom = document.getElementById('bottom');
    const left = document.getElementById('left');
    const container = document.getElementById('container');
    const footer = document.getElementById('footer');
    if (top !== null) {
      top.style.height = options.top;
      top.style.backgroundColor = color;
    }
    if (right !== null) {
      right.style.width = options.right;
      right.style.backgroundColor = color;
    }
    if (bottom !== null) {
      bottom.style.height = options.bottom;
      bottom.style.backgroundColor = color;
    }
    if (left !== null) {
      left.style.width = options.left;
      left.style.backgroundColor = color;
    }
    if (container !== null) {
      container.style.borderWidth = options.container;
    }
    if (footer !== null) {
      footer.style.backgroundColor = color;
    }
    return () => {
      if (top !== null) {
        top.style.height = '2px';
        top.style.backgroundColor = '#c4e0fa';
      }
      if (right !== null) {
        right.style.width = '2px';
        right.style.backgroundColor = '#c4e0fa';
      }
      if (bottom !== null) {
        bottom.style.height = '2px';
        bottom.style.backgroundColor = '#c4e0fa';
      }
      if (left !== null) {
        left.style.width = '2px';
        left.style.backgroundColor = '#c4e0fa';
      }
      if (container !== null) {
        container.style.borderWidth = '2px';
      }
      if (footer !== null) {
        footer.style.backgroundColor = '#c4e0fa';
      }
    };
    // eslint-disable-next-line
  }, []);
}

/**
 * body 태그에 stop-scrolling 클래스를 부여합니다.
 */
export function useStopBodyScroll() {
  useEffect(() => {
    document.body.classList.add('stop-scrolling');
    return () => {
      document.body.classList.remove('stop-scrolling');
    };
  }, []);
}

/**
 * body 태그에 주어진 color를 배경색으로 지정합니다. 언마운트될 경우 #fff로 설정합니다.
 * @param color 색상코드
 * @returns nothing
 */
export function useBodyColor(color: String) {
  useEffect(() => {
    document.body.style.backgroundColor = `${color}`;
    return () => {
      document.body.style.backgroundColor = '#fff';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/**
 * Octokit 클라이언트 셋업입니다. 이곳에 Personal Token이 env파일을 통해 입력됩니다.
 */
export const octokit = new Octokit({
  auth:
    process.env.REACT_APP_LOCAL_ENV === 'local'
      ? process.env.REACT_APP_PERSONAL_TOKEN
      : process.env.GITHUB_TOKEN,
});

/**
 * 본 레포의 issues 탭 정보를 받아옵니다.
 * @returns issues 탭 정보를 담은 Promise 객체
 */
export function getIssues() {
  return octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'Citysquirrel',
    repo: 'citysquirrel.github.io',
  });
}

/**
 * 마크다운 형식 문자열을 HTML 형식 문자열로 바꿔줍니다.
 * @param text 마크다운 형식의 문자열
 * @returns HTML 형식의 문자열을 담은 Promise
 */
export async function renderMarkdown(text: string) {
  return await octokit.request('POST /markdown', { text });
}

/**
 * datetime을 문자열로 받아 로컬시간과 작성시점으로부터의 시간차를 한글 형태로 바꿔줍니다.
 * @param datetime `string` datetime 형식의 문자열
 * @returns `{ kr: 한글형태의 로컬시간, alias: 작성시점으로부터의 시간차 }`
 */
export const modifyDatetime = (datetime: string) => {
  // datetime: UTC 시간
  const received = new Date(datetime);
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDay = now.getDate();
  const nowHour = now.getHours();
  const nowMin = now.getMinutes();

  // 몇분전, 몇시간전, 몇일전, 몇달전, 몇년전
  // 1분 한시간 하루 한달 일년
  const aMinuteAgo = new Date(nowYear, nowMonth, nowDay, nowHour, nowMin - 1);
  const aHourAgo = new Date(nowYear, nowMonth, nowDay, nowHour - 1, nowMin);
  const aDayAgo = new Date(nowYear, nowMonth, nowDay - 1, nowHour, nowMin);
  const aMonthAgo = new Date(nowYear, nowMonth - 1, nowDay, nowHour, nowMin);
  const aYearAgo = new Date(nowYear - 1, nowMonth, nowDay, nowHour, nowMin);
  const difference = now.getTime() - received.getTime();
  let alias;
  if (aMinuteAgo <= received) {
    alias = '방금 전';
  } else if (aHourAgo <= received) {
    alias = `${Math.ceil(difference / 1000 / 60)}분 전`;
  } else if (aDayAgo <= received) {
    alias = `${Math.ceil(difference / 1000 / 60 / 60)}시간 전`;
  } else if (aMonthAgo <= received) {
    alias = `${Math.ceil(difference / 1000 / 60 / 60 / 24)}일 전`;
  } else if (aYearAgo <= received) {
    alias = `${Math.ceil(difference / 1000 / 60 / 60 / 24 / 30)}개월 전`;
  } else {
    alias = `${Math.ceil(difference / 1000 / 60 / 60 / 24 / 30 / 12)}년 전`;
  }
  return { kr: received.toLocaleString('KR'), alias };
};

/**
 * 임의의 변수를 받아 해당 변수가 변화했을 때 변수를 console.log로 찍어줍니다.
 * @param state 임의의 변수
 * @returns 변수의 이전 상태
 */
export function useConsole(state: any, name = 'console') {
  useEffect(() => {
    console.log(`${name}: `, state);
    // eslint-disable-next-line
  }, [state]);
  return state;
}

interface IQueryObject {
  [key: string]: string;
}

/**
 * 쿼리스트링을 받아 키-값 객체 형태로 변환합니다.
 * @param str `QueryString`
 * @returns `key-value Object`
 */
export function modQueryString(str: string | undefined) {
  const decoded = typeof str === 'string' ? decodeURI(str) : '';
  const array = decoded
    .slice(1)
    .split('&')
    .map((query) => query.split('='));

  const object = array.reduce<IQueryObject>((t, [k, v], i) => {
    t[k] = v;
    return t;
  }, {});

  return object;
}

/**
 * 실행한 컴포넌트가 존재하는 스크린에서, 모든 체크박스를 찾아 라벨을 추가해줍니다.
 * @param def 의존성 배열
 */
export const useLabelAllCheckbox = (def: any = null) => {
  useEffect(() => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input, index) => {
      input.setAttribute('id', `check${index}`);
      const label = document.createElement('label');
      label.setAttribute('for', `check${index}`);
      input.insertAdjacentElement('afterend', label);
    });
  }, [def]);
};

export const useCopyAllCodeblock = (def: any = null) => {
  const Button = styled.button``;
  useEffect(() => {
    document.querySelectorAll('pre').forEach((pre) => {
      const code = pre.childNodes[0];
      const handleClick = (e: React.MouseEvent) => {
        navigator.clipboard.writeText(code.textContent!);
      };
      const jsx = (
        <Button onClick={handleClick}>
          <FaRegCopy />
        </Button>
      );
    });
    // eslint-disable-next-line
  }, [def]);
};
