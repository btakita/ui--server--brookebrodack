import { class_ } from 'ctx-core/html'
import { div_ } from 'relementjs/html'
export function YT_iframe__div_({
	class: _class
}:{
	class?:string
}) {
	return (
		div_({
			id: 'YT_iframe__div',
			class: class_(_class),
			/** @see {import('@btakita/ui--browser--brookebrodack/youtube').YT_iframe__div__hyop} */
			hyop: 'YT_iframe__div__hyop'
		})
	)
}
