import "./App.css";
import { createContext, Dispatch, useEffect, lazy, Suspense } from "react";
import { Footer, Header, ScreenElements } from "./layouts";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MasterProvider } from "./components/wrappers";
import Loading from "./pages/Loading";
const Home = lazy(() => import("./pages/Home"));
const Workpieces = lazy(() => import("./pages/Workpieces"));
const Blog = lazy(() => import("./pages/Blog"));

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* border: 2px solid transparent; */
	min-height: calc(100vh - 64px);
	transition: all 0.45s;
	> main {
		max-width: 1200px;
		width: 80vw;
	}
`;

interface IRouterContext {
	number: string | undefined;
	search: string | undefined;
}
type TestDispatch = Dispatch<React.SetStateAction<string>>;
export const RouterContext = createContext<IRouterContext>({
	number: undefined,
	search: undefined,
});

function App() {
	const colorTheme = localStorage.getItem("colorTheme");
	useEffect(() => {
		document.documentElement.setAttribute("color-theme", colorTheme || "light");

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<MasterProvider>
			<div className="App">
				{/* <ScreenElements /> */}
				<Header />
				<Container id="container">
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path="/" element={<Home />} />
							{/* <Route path="/blog/" element={<Blog />} />
              <Route path="/blog/:number" element={<Blog />} /> */}
							<Route path="/workpieces" element={<Workpieces />} />
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</Suspense>
					<Footer />
				</Container>
			</div>
		</MasterProvider>
	);
}

function NotFound() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/");
	}, []);
	return <></>;
}

export default App;
