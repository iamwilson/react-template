export const enum AppRoutes {
	Root = '/',
	Home = '/home',
	Login = '/login',
	NotFound = '*',
}

export const enum HomeRoutes {
	Default = AppRoutes.Home + '/default',
}
