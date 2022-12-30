import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin',
		icon: <HiOutlineViewGrid />,
		role: 'admin'
	},
	{
		key: 'products',
		label: 'Products',
		path: '/admin/products',
		icon: <HiOutlineCube />,
		role: 'admin'
	},
	{
		key: 'users',
		label: 'Users',
		path: '/admin/users',
		icon: <HiOutlineUsers />,
		role: 'admin'
	},
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/factory',
		icon: <HiOutlineViewGrid />,
		role: 'factory'
	},
	{
		key: 'products',
		label: 'Products',
		path: '/factory/products',
		icon: <HiOutlineCube />,
		role: 'factory'
	},
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/store',
		icon: <HiOutlineViewGrid />,
		role: 'store'
	},
	{
		key: 'products',
		label: 'Products',
		path: '/store/products',
		icon: <HiOutlineCube />,
		role: 'store'
	},
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/service',
		icon: <HiOutlineViewGrid />,
		role: 'service'
	},
	{
		key: 'products',
		label: 'Products',
		path: '/service/products',
		icon: <HiOutlineCube />,
		role: 'service'
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]