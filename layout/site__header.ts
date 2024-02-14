import { heroicons_link_ } from '@btakita/ui--any--brookebrodack/icon'
import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { a_, div_, h1_, header_, img_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import { type request_ctx_T, request_url_ } from 'relysjs/server'
const [
	brooke_brodack_profile_jpg
] = await asset_path_a_(
	import('../public/assets/images/brooke-brodack-profile.jpg'))
export function site__header_({
	ctx,
	title,
	class:_class
}:{
	ctx:request_ctx_T
	title?:string
	class?:string
}, ...children:tag_dom_T[]) {
	return (
		header_({
			class: class_(
				'site__header',
				'relative',
				'grid',
				'grid-rows-1',
				'grid-flow-col',
				'justify-items-start',
				'sm:justify-items-stretch',
				'h-16',
				'sm:h-32',
				'pl-5',
				'sm:pl-0',
				_class)
		}, [
			div_({
				class: class_(
					'grid',
					'grid-rows-1',
					'grid-flow-col',
					'place-content-center',
					'pr-2')
			}, [
				(request_url_(ctx).pathname === '/' ? div_ : a_)({
					href: '/',
					class: class_(
						'relative',
						'flex',
						'items-center',
						'justify-end',
						'group')
				}, [
					img_({
						src: brooke_brodack_profile_jpg,
						class: class_(
							'inline-block',
							'h-12',
							'sm:h-24',
							'w-12',
							'sm:w-24',
							'aspect-square',
							'rounded-full')
					}),
					request_url_(ctx).pathname !== '/'
						? heroicons_link_({
							class: class_(
								'absolute',
								'top-1/2',
								'-right-6',
								'sm:-right-8',
								'-translate-y-[45%]',
								'z-10',
								'h-6',
								'w-6',
								'group-hover:stroke-white')
						})
						: undefined
				]),
				h1_({
					class: class_(
						'flex-1',
						'flex',
						'items-center',
						'justify-start',
						'pl-2',
						...(request_url_(ctx).pathname === '/' ? [] : ['ml-6']),
						'text-xl',
						'sm:text-3xl')
				}, title ?? 'Brooke Brodack')
			]),
			...children
		])
	)
}
