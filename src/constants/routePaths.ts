export const enum AppRoutes {
	Root = '/',
	Home = '/home',
	Login = '/login',
	NotFound = '*',
}

export const enum HomeRoutes {
	Default = AppRoutes.Home + '/default',
	Profile = AppRoutes.Home + '/profile',
	Dashboard = AppRoutes.Home + '/dashboard',
	Report = AppRoutes.Home + '/report',
	Settings = AppRoutes.Home + '/settings',
}
