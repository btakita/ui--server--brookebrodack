import { class_ } from 'ctx-core/html'
import { raw_ } from 'relementjs'
import { a_, div_, h1_, li_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { layout_c_ } from '../layout/index.ts'
export function home__page_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout_c_({ ctx },
			div_({
				class: class_(
					'home__page',
					'min-h-screen',
					'overflow-x-hidden',
					'relative',
					'dark:bg-black',
					'dark:text-white')
			}, [
				h1_({
					class: class_(
						'mt-4',
						'text-center')
				}, 'Brooke Brodack'),
				ul_(
					li_({
						class: class_(
							'text-center',
							'mt-12')
					},
					a_({
						href: '/brookers',
						class: class_(
							'inline',
							'text-center')
					},
					raw_('Brookers&hellip;'))))
			]
			))
	)
}
