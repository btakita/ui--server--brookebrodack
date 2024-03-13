import { heroicons_link_ } from '@btakita/ui--any--brookebrodack/icon'
import { logo_image_ } from '@rappstack/domain--server/logo'
import { request_url__pathname_ } from '@rappstack/domain--server/request'
import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { a_, div_, h1_, header_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
export function site__header_({
	ctx,
	h1_text,
	class: _class,
	hyop
}:{
	ctx:request_ctx_T
	h1_text:string
	class?:string
	hyop?:string
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
				_class),
			hyop,
		}, [
			div_({
				class: class_(
					'grid',
					'grid-rows-1',
					'grid-flow-col',
					'place-content-center',
					'pr-2')
			}, [
				(request_url__pathname_(ctx) === '/' ? div_ : a_)({
					href: '/',
					class: class_(
						'relative',
						'flex',
						'items-center',
						'justify-end',
						'group')
				}, [
					logo_image_(ctx, {
						class: class_(
							'h-12',
							'sm:h-24',
							'w-12',
							'sm:w-24')
					}),
					request_url__pathname_(ctx) !== '/'
						? heroicons_link_({
							class: class_(
								'absolute',
								'top-1/2',
								'-right-7',
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
						...(request_url__pathname_(ctx) === '/' ? [] : ['ml-6']),
						'text-lg',
						'sm:text-3xl')
				}, h1_text)
			]),
			...children
		])
	)
}
