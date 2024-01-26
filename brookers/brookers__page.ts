import { type brookers__timeline_op_T } from '@btakita/domain--any--brookebrodack'
import { brookers__page__hy__bind__id } from '@btakita/ui--any--brookebrodack/brookers'
import { atb_ } from '@btakita/ui--server--blog/anchor'
import { footnote_c_, footnote_list_c_ } from '@btakita/ui--server--blog/footnote'
import { class_ } from '@ctx-core/html'
import { background_image_style_ } from 'ctx-core/html'
import { type Node_T, raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { a_, div_, h1_, h2_, h3_, img_, li_, ol_, p_, template_, time_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import { type route_ctx_T } from 'relysjs/server'
import { layout_c_ } from '../layout/index.ts'
import './index.css'
const [
	cooler_in_space_gif,
	fa_video_regular_svg,
] = await asset_path_a_(
	import('../public/assets/images/cooler-in-space--look-aud-right.gif'),
	import('../public/assets/images/fa/fa-video-regular.svg'),
)
export function brookers__page_<env_T extends relement_env_T = 'server'>({ ctx }:{
	ctx:route_ctx_T
}) {
	return (
		layout_c_(
			{ ctx },
			template_({ id: 'spinner' },
				raw_(
					'<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">' +
					'<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""></circle>' +
					'<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style="--darkreader-inline-fill: currentColor;" data-darkreader-inline-fill=""></path>' +
					'</svg>')),
			div_({
				class: class_(
					'brookers__page_c',
					'min-h-screen',
					'overflow-x-hidden',
					'relative',
					'dark:bg-black'),
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
				class: class_(
					'brookers__page__main_c',
					'fixed',
					'z-10',
					'top-0',
					'right-0',
					'bottom-0',
					'min-h-screen',
					'max-h-screen',
					'w-[calc(100%-20rem)]',
					'flex-1',
					'pt-24',
					'pl-8',
					'pr-8')
			}, [
				div_({
					class: class_(
						'YT_iframe_placeholder',
						'hidden',
						'w-full',
						'aspect-video'
					)
				})
			])
		)
	}
	function brookers__page__content_c_() {
		return [
			div_({
				class: class_(
					'brookers__page__content_c',
					'w-screen')
			}, [
				brookers__page__hero_c_(),
				brookers__page__content__inner_c_(),
			])
		]
	}
	function brookers__page__hero_c_() {
		return (
			div_({
				class: class_(
					'brookers__page__hero_c',
					'absolute',
					'top-0',
					'h-24',
					// 'ml-4',
					'mb-4',
					'flex',
					'flex-col',
					'items-center',
					'justify-top',
					'dark:text-white')
			}, [
				h1_({ class: 'mt-4' }, `Hello, my name is Brooke Brodack`),
				h2_(`& I am an artist`)
			])
		)
	}
	function brookers__page__content__inner_c_() {
		return (
			div_({
				class: class_(
					'brookers__page__content__inner_c',
					'hidden',
					'w-screen',
					'flex',
					'flex-row',
					'ml-4')
			}, [
				brookers__page__sidebar_c_(),
			])
		)
	}
	function brookers__page__sidebar_c_() {
		return (
			div_({
				class: class_(
					'brookers__page__sidebar_c',
					'relative',
					'mt--24',
					'min-h-screen',
					'mt-auto',
					'bottom-0',
					'right-0',
					'max-w-xs')
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
						description_a: ['Over 18 Million Views'],
						op: {
							type: 'youtube',
							videoId: 'wflZKdXC8Vo'
						}
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
						op: {
							type: 'youtube',
							videoId: 'FoFMRXlNJ6Y'
						}
					}),
				]),
				footnote_list_c_<env_T>({ ctx })
			]))
	}
}
export function brookers__timeline_c_<env_T extends relement_env_T>({ style, ...$p }:{
	class?:string
	style?:string
// }, ...children:brookers__timeline__item_T<'any'>[]) {
}, ...children:tag__dom_T<'any'>[]) {
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
	op
}:{
	at:string
	title:string
	description_a?:tag__dom_T<'any'>[],
	op?:brookers__timeline_op_T
}, ...children:tag__dom_T<env_T>[]):brookers__timeline__item_T<env_T> {
	return (
		li_({
			class: class_(
				'brookers__timeline__item_c',
				'mb-10',
				'ml-4',
				'first:mt-24',
				'cursor-pointer'),
			'data-op': JSON.stringify(op),
		}, [
			div_({
				class: class_(
					'absolute',
					'-left-1.5',
					'w-3',
					'h-3',
					'mt-1.5',
					op?.type === 'youtube'
						? [
							'h-4',
							'w-4',
							'mr-1',
							'overflow-visible',
							'text-lg',
							'dark:invert']
						: [
							'bg-gray-200',
							'rounded-full',
							'border',
							'border-white',
							'dark:border-gray-900',
							'dark:bg-gray-700']),
				style:
					op?.type === 'youtube'
						? background_image_style_(fa_video_regular_svg)
						: undefined
			}),
			time_({
				class: class_(
					'mb-1',
					'text-sm',
					'font-normal',
					'leading-none',
					'text-gray-400',
					'dark:text-gray-500')
			}, at),
			h3_({
				class: class_(
					'text-lg',
					'font-semibold',
					'text-gray-900',
					'dark:invert')
			}, title),
			p_({
				class: class_(
					'text-base',
					'font-normal',
					'text-gray-500',
					'dark:text-gray-400')
			}, ...(description_a || [])),
			...
			children
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
