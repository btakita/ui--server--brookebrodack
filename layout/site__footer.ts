import { fa_osi_ } from '@btakita/ui--any--brookebrodack/icon'
import { social_a1_ } from '@rappstack/domain--server/social'
import { iconify_rss_ } from '@rappstack/ui--any--blog/icon'
import { class_ } from 'ctx-core/html'
import { type tag_T, type wide_ctx_T } from 'relementjs'
import { a_, div_, footer_, li_, ul_ } from 'relementjs/html'
export function site__footer_({
	ctx,
	class: _class,
	icon_class,
}:{
	ctx:wide_ctx_T
	class?:string
	icon_class?:string
}) {
	icon_class = class_(
		'fill-gray-900',
		'h-6',
		'w-6',
		'fill-white',
		icon_class)
	return (
		footer_({
			id: 'site__footer',
			class: class_(
				'fixed',
				'bottom-0',
				'z-10',
				'h-8',
				'w-screen',
				'py-1',
				'bg-cyan-600/90',
				_class)
		}, [
			ul_({
				class: class_(
					'flex',
					'flex-column',
					'items-center',
					'justify-center',
					'h-6')
			}, [
				(social_a1_(ctx)).map(social=>
					li_({
						class: class_(
							'h-6',
							'w-6',
							'mx-1')
					}, [
						a_({
							href: social.href,
							title: social.link_title,
							target: '_blank'
						}, [
							social.icon_({
								class: icon_class
							})
						])
					])),
				li_({
					class: class_(
						'h-6',
						'w-6',
						'mx-1')
				}, [
					a_({
						href: '/rss',
					}, [
						iconify_rss_({ class: icon_class })
					])
				])
			]),
			div_({
				class: class_(
					'relative',
					'h-6',
					'w-6',
					'ml-auto',
					'mr-2',
					'-translate-y-2/3',
					'bottom-2',
					'right-2')
			}, [
				a_({
					href: '/site',
				}, [
					fa_osi_({
						class: class_(icon_class)
					})
				])
			])
		])
	)
}
type social_aa = [href:string, icon_:tag_T][]
