import "./App.css";
import Nav from "./components/navbar/Nav";
import ThemeRegistry from "./Themereg";
import { AuthProvider } from "./utils/Auth/authContext";
import isAuth from "@/app/utils/Auth/isAuth";


export const metadata = {
	title: 'News today',
	description: "جميع الأخبار المحلية والعالمية"
  }
export default async function RootLayout({ children }) {
	const isAuthenticated = isAuth();	

	return (
		<html lang="ar">
			<head>
				<script defer src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
			</head>
			<body>
				<div id="root">
					<AuthProvider isAuth={isAuthenticated}>
						<Nav />
						<ThemeRegistry options={{ key: "joy" }}>{children}</ThemeRegistry>
					</AuthProvider>
				</div>
			</body>
		</html>
	);
}
