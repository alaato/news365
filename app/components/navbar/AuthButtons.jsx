import LogoutButton from "./LogoutButton.jsx"
import { useAuth } from '@/app/utils/Auth/authContext';
import Link from 'next/link';

export default function AuthButtons({isHamburger}) {
	const {logout, isAuthenticated, isAuthor } = useAuth();

	return <div className={isHamburger? " " : 'Nav-header-buttons'}>
		{isAuthenticated === false && <Link className='button-28' href="/signup"> اشترك</Link>}
		{isAuthenticated === false && <Link className='button-28' href="/login"> تسجيل الدخول</Link>}
		{isAuthenticated && <LogoutButton logout={logout}></LogoutButton>}
		{isAuthenticated && isAuthor && <Link className='button-28' href="/news/posts/create"> إنشاء مقال</Link>}
	</div>;
}