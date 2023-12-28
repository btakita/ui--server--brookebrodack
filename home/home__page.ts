import { raw_, type relement_env_T } from 'relementjs'
import { a_, div_, h1_, li_, ul_ } from 'relementjs/html'
import type { route_ctx_T } from 'relysjs'
import { layout_c_ } from '../layout/index.ts'
export function home__page_<env_T extends relement_env_T = 'server'>({ ctx }:{ ctx: route_ctx_T }) {
  return (
		layout_c_<env_T>({ ctx },
			div_({ class: 'home__page' },
				h1_('Brooke Brodack')),
			ul_(
				li_({ class: 'text-center mt-12' },
					a_({ href: '/brookers', class: 'inline text-center' },
						raw_('Brookers&hellip;')))))
	)
}
