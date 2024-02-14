import { class_ } from 'ctx-core/html'
import { div_ } from 'relementjs/html'
export function YT_player__div_({
	class: _class
}:{
	class?:string
}) {
	return (
		div_({
			class: class_(
				'YT_player__div',
				_class),
			/** @see {import('@btakita/ui--browser--brookebrodack/youtube').YT_player__div__hyop} */
			hyop: 'YT_player__div__hyop'
		})
	)
}
