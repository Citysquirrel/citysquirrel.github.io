import { useEffect, useState } from 'react';
import { Octokit, App } from 'octokit';

export function useFadeIn() {
  useEffect(() => {
    console.log(123);
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
  auth: process.env.REACT_APP_PERSONAL_TOKEN,
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

  // origin.setHours(origin.getHours() + 9);
  console.log(received.toLocaleString('KR'));
  // 몇분전, 몇시간전, 몇일전, 몇달전, 몇년전
  // 1분 한시간 하루 한달 일년
  const aMinuteAgo = new Date(nowYear, nowMonth, nowDay, nowHour, nowMin - 1);
  const aHourAgo = new Date(nowYear, nowMonth, nowDay, nowHour - 1, nowMin);
  const aDayAgo = new Date(nowYear, nowMonth, nowDay - 1, nowHour, nowMin);
  const aMonthAgo = new Date(nowYear, nowMonth - 1, nowDay, nowHour, nowMin);
  const aYearAgo = new Date(nowYear - 1, nowMonth, nowDay, nowHour, nowMin);
  const difference = now.getTime() - received.getTime();
  let alias;
  if (aMinuteAgo < received) {
    alias = '방금 전';
  } else if (aHourAgo < received) {
    alias = `${Math.ceil(difference / 1000 / 60)}분 전`;
  } else if (aDayAgo < received) {
    alias = `${Math.ceil(difference / 1000 / 60 / 60)}시간 전`;
  } else if (aMonthAgo < received) {
    alias = `${Math.ceil(difference / 1000 / 60 / 60 / 24)}일 전`;
  } else if (aYearAgo < received) {
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
export function useConsole(state: any) {
  useEffect(() => {
    console.log(state);
  }, [state]);
  return state;
}
