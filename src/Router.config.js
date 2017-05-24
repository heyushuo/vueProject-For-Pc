import IndexPage from './pages/index'
//详情页面
import DetailPage from './pages/detail'
//详情页面的子页面
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

export default[
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/detail',
			component:DetailPage,
			children:[
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
		}
	]