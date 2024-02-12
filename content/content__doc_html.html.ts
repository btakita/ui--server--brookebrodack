import { class_, style_ } from 'ctx-core/html'
import { div_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
const [
	nature_origami_bg_jpg,
] = await asset_path_a_(
	import('../public/assets/images/nature-origami-bg.jpg'))
export function content__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout__doc_html_({
			ctx,
			title: 'Brooke Brodack Content Feed',
			html_props: {
				class: class_('content__doc_html'),
			}
		}, [
			div_({
				class: class_(
					'min-h-screen',
					'overflow-x-hidden',
					'relative',
					'bg-cover',
					'bg-no-repeat'),
				style: style_({
					'background-image': 'url(' + nature_origami_bg_jpg + ')'
				})
			}, [
				site__header_({
					title: 'Content Feed'
				}),
				content_feed__div_(),
				site__footer_(),
			])
		])
	)
}
export function content_feed__div_() {
	return (
		div_({
			class: class_(
				'content_feed')
		})
	)
}
