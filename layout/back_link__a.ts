import { heroicons_uturn_left_ } from '@btakita/ui--any--brookebrodack/icon'
import { class_ } from 'ctx-core/html'
import { a_ } from 'relementjs/html'
export function back_link__a_({
	class: _class
}:{ class?:string }) {
	return (
		a_({
			href: '/',
			class: class_(
				'back_link__a',
				'fixed',
				'top-4',
				'right-4',
				'z-30',
				'flex-none',
				'h-6',
				'w-6',
				'cursor-pointer',
				_class)
		}, [
			heroicons_uturn_left_({
				class: class_(
					'shadow-sm',
					'stroke-gray-100')
			})
		])
	)
}
