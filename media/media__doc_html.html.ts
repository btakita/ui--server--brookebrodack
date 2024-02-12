import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_ } from '../layout/index.js'
export function media__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout__doc_html_({
			ctx,
			title: 'Brooke Brodack Media Feed',
			html_props: {
				class: class_('media__doc_html'),
			}
		}, [
			
		])
	)
}
export function media_content__div_() {
  
}
