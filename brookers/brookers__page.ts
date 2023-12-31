import { type brookers__timeline_op_T } from '@btakita/domain--any--brookebrodack'
import { brookers__page__hy__bind__id } from '@btakita/ui--any--brookebrodack/brookers'
import { atb_ } from '@btakita/ui--server--blog/anchor'
import { footnote_c_, footnote_list_c_ } from '@btakita/ui--server--blog/footnote'
import { class_ } from '@ctx-core/html'
import { type Node_T, type relement_env_T, type tag__dom_T } from 'relementjs'
import { a_, div_, h1_, h2_, h3_, img_, li_, ol_, p_, time_ } from 'relementjs/html'
import { asset_path_a_, type route_ctx_T } from 'relysjs'
import { layout_c_ } from '../layout/index.ts'
import './index.css'
const [
	cooler_in_space_gif,
] = await asset_path_a_(
	import('../public/assets/images/cooler-in-space--look-aud-right.gif'),
)
export function brookers__page_<env_T extends relement_env_T = 'server'>({ ctx }:{
	ctx:route_ctx_T
}) {
	return (
		layout_c_(
			{ ctx },
			div_({
				class: [
					'brookers__page_c',
					'min-h-screen',
					'overflow-x-hidden',
					'relative',
					'dark:bg-black'
				].join(' '),
				hy__bind: brookers__page__hy__bind__id
			}, [
				brookers__page__main_c_(),
				brookers__page__content_c_(),
				brookers__page__img_a_c_(),
				div_({ class: 'relative mt-24' })
			]))
	)
	function brookers__page__main_c_() {
		return (
			div_({
				class: [
					'brookers__page__main_c',
					'fixed',
					'top-0',
					'right-0',
					'bottom-0',
					'min-h-screen',
					'max-h-screen',
					'w-[calc(100%-20rem)]',
					'flex-1',
					'pt-24',
					'pl-8',
					'pr-8'
				].join(' ')
			})
		)
	}
	function brookers__page__content_c_() {
		return [
			div_({
				class: [
					'brookers__page__content_c',
					'w-screen'
				].join(' ')
			}, [
				brookers__page__hero_c_(),
				brookers__page__content__inner_c_(),
			])
		]
	}
	function brookers__page__hero_c_() {
		return (
			div_({
				class: [
					'brookers__page__hero_c',
					'absolute',
					'top-0',
					'h-24',
					'ml-4',
					'mb-4',
					'flex',
					'flex-col',
					'items-center',
					'justify-top',
					'dark:text-white',
				].join(' ')
			}, [
				h1_({ class: 'mt-4' }, `Hello, my name is Brooke Brodack`),
				h2_(`& I am an artist`)
			])
		)
	}
	function brookers__page__content__inner_c_() {
		return (
			div_({
				class: [
					'brookers__page__content__inner_c',
					'hidden',
					'w-screen',
					'flex',
					'flex-row',
					'ml-4',
				].join(' ')
			}, [
				brookers__page__sidebar_c_(),
			])
		)
	}
	function brookers__page__sidebar_c_() {
		return (
			div_({
				class: [
					'brookers__page__sidebar_c',
					'relative',
					'mt--24',
					'min-h-screen',
					'mt-auto',
					'bottom-0',
					'right-0',
					'max-w-xs',
				].join(' ')
			}, [
				brookers__timeline_c_<env_T>({}, [
					brookers__timeline__item_c_<env_T>({
						at: 'September 2005',
						title: 'Brookers first video on YouTube'
					}),
					brookers__timeline__item_c_<env_T>({
						at: 'June 2006',
						title: 'Carson Daly NBC',
						description_a: ['18 month development contract']
					}),
					brookers__timeline__item_c_<env_T>({
						at: 'June 2006',
						title: 'Chips',
						description_a: [
							'A spoof suspense drama about eating potato chips, has been called "brilliant" by' +
							' Entertainment Weekly, which has listed it among the "great moments in' +
							' YouTube history."',
							footnote_c_<env_T>({ ctx, id: 'knowyourmeme' },
								atb_<env_T>({
									href: 'https://knowyourmeme.com/memes/people/brookers'
								}, 'knowyourmeme.com'))
						]
					}),
					brookers__timeline__item_c_<env_T>({
						at: 'July 3 - Aug 7 2006',
						title: 'Most-subscribed on YouTube',
						description_a: ['> 64000 subscribers']
					}),
					brookers__timeline__item_c_<env_T>({
						at: 'July 5 2006',
						title: 'CRAZED NUMA FAN !!!!',
						description_a: ['Over 18 Million Views']
					}),
					brookers__timeline__item_c_<env_T>({
						at: 'December 6 2006',
						title: 'Tyra Banks Show',
						description_a: [`judge for a student video competition`]
					}),
					brookers__timeline__item_c_<env_T>({
						at: 'February 2007',
						title: 'The Sound of Your Voice—Barenaked Ladies',
						description_a: [
							'Appeared in ',
							a_({ href: 'https://www.youtube.com/watch?v=FoFMRXlNJ6Y' }, 'music video'),
							' with fellow YouTubers',
						],
						op_a: [
							{
								type: 'youtube',
								src: 'https://www.youtube.com/embed/FoFMRXlNJ6Y?si=lFkPNi-y6ixfWcW7'
							}
						]
					}),
				]),
				footnote_list_c_<env_T>({ ctx })
			]))
	}
}
export function brookers__timeline_c_<env_T extends relement_env_T>({ style, ...$p }:{
	class?:string
	style?:string
}, ...children:brookers__timeline__item_T<env_T>[]) {
	return ol_({
		class: class_(
			'brookers__timeline_c',
			'flex',
			'flex-col',
			'border-l',
			'border-gray-200',
			'dark:border-gray-700',
			$p.class),
		style,
	}, ...children) as Node_T<env_T, HTMLElementTagNameMap['ol']>
}
declare const brookers__timeline__item__sym:unique symbol
export type brookers__timeline__item_T<env_T extends relement_env_T> = tag__dom_T<env_T>&{
	[brookers__timeline__item__sym]:never
}
export function brookers__timeline__item_c_<env_T extends relement_env_T>({
	at,
	title,
	description_a,
	op_a
}:{
	at:string
	title:string
	description_a?:tag__dom_T<env_T>[],
	op_a?:brookers__timeline_op_T[]
}, ...children:tag__dom_T<env_T>[]):brookers__timeline__item_T<env_T> {
	return (
		li_({
			class: [
				'brookers__timeline__item_c',
				'mb-10',
				'ml-4',
				'first:mt-24',
				'cursor-pointer',
			].join(' '),
			'data-op_a': JSON.stringify(op_a),
		}, [
			div_({
				class: [
					'absolute',
					'w-3',
					'h-3',
					'bg-gray-200',
					'rounded-full',
					'mt-1.5',
					'-left-1.5',
					'border',
					'border-white',
					'dark:border-gray-900',
					'dark:bg-gray-700',
				].join(' ')
			}),
			time_({
				class: [
					'mb-1',
					'text-sm',
					'font-normal',
					'leading-none',
					'text-gray-400',
					'dark:text-gray-500',
				].join(' ')
			}, at),
			h3_({
				class: [
					'text-lg',
					'font-semibold',
					'text-gray-900',
					'dark:text-white',
				].join(' ')
			}, title),
			p_({
				class: [
					'text-base',
					'font-normal',
					'text-gray-500',
					'dark:text-gray-400',
				].join(' ')
			}, ...(description_a || [])),
			...children
		])
	) as brookers__timeline__item_T<env_T>
}
function brookers__page__img_a_c_() {
	return (
		div_({
			class: [
				'brookers__page__img_a_c',
				'hidden',
				'absolute',
				'z-10',
				'h-96',
				'bottom-0',
				'w-full',
			].join(' ')
		},
		img_({
			class: [
				'cooler-in-space',
				'absolute',
				'top-0',
				'm-auto',
			].join(' '),
			src: cooler_in_space_gif
		}))
	)
}
