import { useEffect } from "react";
import { Octokit } from "octokit";
import { FaRegCopy } from "react-icons/fa";
import styled from "styled-components";

export function useFadeIn() {
	useEffect(() => {
		console.log(123);
	}, []);
}

/**
 * 색상을 받아 해당 색상을 gray톤으로 변환해 hexcode로 리턴합니다.
 * @param color 6자리 hex 색상코드
 * @param conversion `0: 평균값(default)`, `1: Luma ITU-R BT.601`, `2: Luma ITU-R BT.709`
 * @returns 6자리 hex 색상코드
 */
export function colorApplyGrayscale(color: string, conversion: number = 0) {
	// 색상코드에 #이 존재하는지 판별 후 16진수 숫자만 추출
	const code = color[0] === "#" ? color.slice(1) : color.slice();

	// rgb 각 색상들을 뽑아 10진수로 변환
	const red = parseInt(code.slice(0, 2), 16);
	const green = parseInt(code.slice(2, 4), 16);
	const blue = parseInt(code.slice(4, 6), 16);

	// 각 grayscale 계산식
	const avg = ((red + green + blue) / 3) >> 0;
	const luma601 = (red * 0.299 + green * 0.587 + blue * 0.114) >> 0;
	const luma709 = (red * 0.2126 + green * 0.7152 + blue * 0.0722) >> 0;

	// 비트 계산 후 hexcode로 리턴
	const formulas = [avg, luma601, luma709];
	const conv = formulas[conversion];
	const gray = (conv << 16) | (conv << 8) | conv;

	return "#" + gray.toString(16).padStart(6, "0");
}

/**
 * 색상을 받아 해당 색상을 반전시켜 hexcode로 리턴합니다.
 * @param color 6자리 hex 색상코드
 * @returns 6자리 hex 색상코드
 */
export function colorNegate(color: string) {
	// 색상코드에 #이 존재하는지 판별 후 16진수 숫자만 추출
	const code = color[0] === "#" ? color.slice(1) : color.slice();

	const hex = Number("0x" + code); // 0xFFFFFF 형태의 16진수로변환
	const negated = hex ^ 0xffffff; // 색상반전: XOR 기호로 비트 계산

	return "#" + negated.toString(16).padStart(6, "0");
}

/**
 * 색상코드 받아서 해당 색상코드의 반전색에 해당하는 흑백색을 리턴합니다.
 * @param color 6자리 색상코드
 * @returns 규칙에 따라 검정색("#141414") 또는 백색("#fcfcfc")
 */
function fontColorByContrastRule(color: string) {
	const code = color[0] === "#" ? color.slice(1) : color.slice();
	const hex = Number("0x" + code);

	const red = (hex >>> 16) & 255;
	const green = (hex >>> 8) & 255;
	const blue = hex & 255;
	const yiq = (red * 299 + green * 587 + blue * 114) / 1000;
	return yiq >= 128 ? "#141414" : "#fcfcfc";
}

/**
 * 전체 화면 테두리를 주어진 두께와 배경색으로 변경합니다. 적용된 컴포넌트가 Unmount될 때 기본값(`2px`, `soft-blue-100`)으로 되돌립니다.
 * @param options 각 Element 별 크기 속성을 담은 옵션
 * @param color 변경될 배경색
 */
export function useScreenBorder(
	options: {
		top: string;
		right: string;
		bottom: string;
		left: string;
		container: string;
	},
	color: string = "#c4e0fa"
) {
	useEffect(() => {
		const top = document.getElementById("top");
		const right = document.getElementById("right");
		const bottom = document.getElementById("bottom");
		const left = document.getElementById("left");
		const container = document.getElementById("container");
		const footer = document.getElementById("footer");
		const footerCopyright = document.getElementById("footer-copyright");
		const footerEmail = document.getElementById("footer-email");
		const footerGithub = document.getElementById("footer-github");
		const contrastColor = fontColorByContrastRule(color);
		const footerCopyColor = contrastColor === "#141414" ? "#424242" : "#dadada";
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
		if (footerCopyright !== null) {
			footerCopyright.style.color = footerCopyColor;
		}
		if (footerEmail !== null) {
			footerEmail.style.transition = "color 0.5s";
			footerEmail.style.color = contrastColor;
		}
		if (footerGithub !== null) {
			footerGithub.style.transition = "color 0.5s";
			footerGithub.style.color = contrastColor;
		}
		return () => {
			if (top !== null) {
				top.style.height = "2px";
				top.style.backgroundColor = "#c4e0fa";
			}
			if (right !== null) {
				right.style.width = "2px";
				right.style.backgroundColor = "#c4e0fa";
			}
			if (bottom !== null) {
				bottom.style.height = "2px";
				bottom.style.backgroundColor = "#c4e0fa";
			}
			if (left !== null) {
				left.style.width = "2px";
				left.style.backgroundColor = "#c4e0fa";
			}
			if (container !== null) {
				container.style.borderWidth = "2px";
			}
			if (footer !== null) {
				footer.style.backgroundColor = "#c4e0fa";
			}
			if (footerCopyright !== null) {
				footerCopyright.style.color = "#424242";
			}
			if (footerEmail !== null) {
				footerEmail.style.color = "#141414";
			}
			if (footerGithub !== null) {
				footerGithub.style.color = "#141414";
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
		document.body.classList.add("stop-scrolling");
		return () => {
			document.body.classList.remove("stop-scrolling");
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
		document.body.style.transition = "background-color 0.5s";
		document.body.style.backgroundColor = `${color}`;
		return () => {
			document.body.style.backgroundColor = "#fff";
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}

/**
 * Octokit 클라이언트 셋업입니다. Public 권한으로 실행되는 octokit입니다.
 */
export const octokitForBlog = new Octokit({
	auth:
		// process.env.REACT_APP_PERSONAL_TOKEN
		// process.env.GITHUB_TOKEN,
		"",
});

/**
 * 본 레포의 issues 탭 정보를 받아옵니다.
 * @returns issues 탭 정보를 담은 Promise 객체
 */
export function getIssues() {
	return octokitForBlog.request("GET /repos/{owner}/{repo}/issues", {
		owner: "Citysquirrel",
		repo: "citysquirrel.github.io",
	});
}

/**
 * 깃허브 OAuth 인증을 수행합니다(Redirect).
 * {@link https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps}
 */
export function execGithubLogin() {
	window.location.assign("https://github.com/login/oauth/authorize?client_id=dbbd22f1eae2c8421188");
}

/**
 * 액세스 토큰을 사용해 Github 유저 인증을 실행합니다.
 * {@link https://docs.github.com/en/rest/users/users#get-the-authenticated-user}
 */
export function getUserInfo() {
	const octokit = new Octokit({
		auth: "YOUR-TOKEN",
	});
	octokit.request("GET /user", {});
	//Authorization: Bearer OAUTH-TOKEN
	// axios.get("https://api.github.com/user",{headers: {authorization:`Bearer ${token}` }})
}

/**
 * 마크다운 형식 문자열을 HTML 형식 문자열로 바꿔줍니다.
 * @param text 마크다운 형식의 문자열
 * @returns HTML 형식의 문자열을 담은 Promise
 */
export async function renderMarkdown(text: string) {
	return await octokitForBlog.request("POST /markdown", { text });
}

/**
 * datetime을 문자열로 받아 로컬시간과 작성시점으로부터의 시간차를 한글 형태로 바꿔줍니다.
 * @param datetime `string` datetime 형식의 문자열
 * @returns `{ kr: 한글형태의 로컬시간, alias: 작성시점으로부터의 시간차 }`
 */
export const modifyDatetime = (datetime: string | undefined) => {
	// datetime: UTC 시간
	if (datetime === undefined) return { kr: undefined, alias: undefined };
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
		alias = "방금 전";
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
	return { kr: received.toLocaleString("KR"), alias };
};

/**
 * 임의의 변수를 받아 해당 변수가 변화했을 때 변수를 console.log로 찍어줍니다.
 * @param state 임의의 변수
 * @returns 변수의 이전 상태
 */
export function useConsole(state: any, name: string | undefined = "console") {
	const text = `${state}`;
	const methods = [console.log(state), console.count(state)];
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
	const decoded = typeof str === "string" ? decodeURI(str) : "";
	const array = decoded
		.slice(1)
		.split("&")
		.map((query) => query.split("="));

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
		const inputs = document.querySelectorAll("input");

		inputs.forEach((input, index) => {
			input.setAttribute("id", `check${index}`);
			const label = document.createElement("label");
			label.setAttribute("for", `check${index}`);
			input.insertAdjacentElement("afterend", label);
		});
	}, [def]);
};

export const useCopyAllCodeblock = (def: any = null) => {
	const Button = styled.button``;
	useEffect(() => {
		document.querySelectorAll("pre").forEach((pre) => {
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
