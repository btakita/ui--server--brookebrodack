import { class_ } from 'ctx-core/html'
import { div_, h2_, main_, p_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { back_link__a_, layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
export function store__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout__doc_html_({
			ctx,
			title: 'Store',
			html_props: {
				class: class_('store__doc_html'),
			},
		}, [
			main_({
				class: class_(
					'min-h-screen',
					'relative',
					'pb-12'),
			}, [
				site__header_({
					ctx,
					h1_text: 'Store'
				}),
				div_({
					class: class_(
						'm-auto',
						'prose',
						'p-2',
						'max-w-prose')
				}, [
					h2_({}, 'Coming Soon'),
					p_({}, 'The Brooke Brodack store is coming soon!'),
				]),
			]),
			back_link__a_({}),
			site__footer_({ ctx })
		])
	)
}
