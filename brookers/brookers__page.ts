import { type brookers__timeline_op_T } from '@btakita/domain--any--brookebrodack'
import { brookers__page__hy__bind__id } from '@btakita/ui--any--brookebrodack/brookers'
import { spinner_c_ } from '@btakita/ui--any--brookebrodack/spinner'
import { atb_ } from '@btakita/ui--server--blog/anchor'
import { footnote_c_, footnote_list_c_ } from '@btakita/ui--server--blog/footnote'
import { class_ } from '@ctx-core/html'
import { background_image_style_ } from 'ctx-core/html'
import { type Node_T, raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { a_, div_, h1_, h2_, h3_, iframe_, img_, li_, ol_, p_, template_, time_ } from 'relementjs/html'
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
			div_({
				class: class_(
					'brookers__page_c',
					'min-h-screen',
					'overflow-x-hidden',
					'relative',
					'dark:bg-black'),
				hy__bind: brookers__page__hy__bind__id
			}, [
				template_({
					id: 'spinner_template',
					class: 'hidden'
				}, raw_('' + spinner_c_({
					class: class_(
						'spinner',
						'absolute',
						'z-10',
						'top-56',
						'left-[calc(50%-16px)]')
				}))),
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
					id: 'html_op__container',
					class: class_(
						'hidden',
						'relative',
						'top-0',
						'left-0',
						'z-20',
						'h-full',
						'w-full',
						'overflow-auto')
				}),
				div_({
					id: 'YT_iframe_placeholder',
					class: class_(
						'hidden',
						'relative',
						'top-0',
						'left-0',
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
				brookers__timeline_c_({}, [
					brookers__timeline__item_c_({
						at: 'September 2005',
						title: 'Brookers first video on YouTube'
					}),
					brookers__timeline__item_c_({
						at: 'May 21, 2006',
						title: 'what is...',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'jRA9ujhIs2I'
						}
					}),
					brookers__timeline__item_c_({
						at: 'June 2006',
						title: 'Carson Daly NBC',
						description_a: ['18 month development contract']
					}),
					brookers__timeline__item_c_({
						at: 'June 2006',
						title: 'Chips',
						description_a: [
							'A spoof suspense drama about eating potato chips, has been called "brilliant" by' +
							' Entertainment Weekly, which has listed it among the "great moments in' +
							' YouTube history."',
							footnote_c_({ ctx, id: 'knowyourmeme' },
								atb_({
									href: 'https://knowyourmeme.com/memes/people/brookers'
								}, 'knowyourmeme.com'))
						],
						op: {
							type: 'html',
							bullet: 'video',
							html: '' + iframe_({
								class: class_(
									'w-full',
									'aspect-video'),
								src: 'https://archive.org/embed/chips_202010&autoplay=1',
								frameborder: 0,
								webkitallowfullscreen: true,
								mozallowfullscreen: true,
								allowfullscreen: true,
							})
						}
					}),
					brookers__timeline__item_c_({
						at: 'July 3 - Aug 7 2006',
						title: 'Most-subscribed on YouTube',
						description_a: ['> 64000 subscribers']
					}),
					brookers__timeline__item_c_({
						at: 'July 5 2006',
						title: 'CRAZED NUMA FAN !!!!',
						description_a: ['Over 18 Million Views'],
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'wflZKdXC8Vo'
						}
					}),
					brookers__timeline__item_c_({
						at: 'December 6 2006',
						title: 'Tyra Banks Show',
						description_a: [`judge for a student video competition`]
					}),
					brookers__timeline__item_c_({
						at: 'February 2007',
						title: 'The Sound of Your Voice—Barenaked Ladies',
						description_a: [
							'Appeared in ',
							atb_({ href: 'https://www.youtube.com/watch?v=FoFMRXlNJ6Y' }, 'music video'),
							' with fellow YouTubers',
						],
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'FoFMRXlNJ6Y'
						}
					}),
					brookers__timeline__item_c_({
						at: 'February 7, 2007',
						title: '"Web Celebrity"',
						description_a: [
							'"Web Celebrity" published by Brookers on IYS on Feb 7, 2007 and then quickly removed.',
						],
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'izc8q91Yet0'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Nov 18, 2007',
						title: '"Brookers News"',
						description_a: [
							'Old laddys,',
							'Little squichy purple balls thing will make you die!'
						],
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'x_7oyWcg7AU'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Aug 6, 2010',
						title: 'Go Sukashi! - Episode #1',
						description_a: [
							"Brooke Brodack as Sukashi's girlfriend"
						],
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: '8KqD2RNFW5E'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Aug 13, 2010',
						title: 'Go Sukashi! - The Picnic',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'H3GpZ82uVQE'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Aug 23, 2010',
						title: 'Go Sukashi! - A Green Menace',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'zleNliomOGA'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Sep 10, 2010',
						title: 'Go Sukashi! - Love Whispers Not',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'LwmdQSSiYRw'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Dec 22, 2010',
						title: 'Go Sukashi! Christmas Special',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'd7G4nCppWy4'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Feb 7, 2011',
						title: 'Go Sukashi! - Season 1 Recap Trailer',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'P3D5B2Pt-Lo'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Feb 9, 2011',
						title: 'Go Sukashi! - Season 2 - Ep #1: Chopality',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'Qaf5TYm8CNE'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Feb 24, 2011',
						title: 'Go Sukashi! - Season 2 - Ep #2: Love & Taxes',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'Gc25NsgO_qg'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Apr 5, 2011',
						title: 'Go Sukashi: Outtakes and Bloopers',
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 'enuphAemSRo'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Mar 10, 2012',
						title: 'My united states of...WHATEVA !!!',
						description_a: [
							atb_({
								href: 'https://web.archive.org/web/20150109114045/https://www.youtube.com/watch?v=SLbFDMplZDs'
							}, 'Stats on Internet Archive'),
						],
						op: {
							type: 'youtube',
							bullet: 'video',
							videoId: 's35NaNkKwR4'
						}
					})
				]),
				footnote_list_c_({ ctx })
			]))
	}
}
export function brookers__timeline_c_<env_T extends relement_env_T>({ style, ...$p }:{
	class?:string
	style?:string
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
					op?.bullet === 'video'
						? [
							'h-4',
							'w-4',
							'mr-1',
							'overflow-visible',
							'text-lg',
							'dark:invert'
						]
						: [
							'bg-gray-200',
							'rounded-full',
							'border',
							'border-white',
							'dark:border-gray-900',
							'dark:bg-gray-700'
						]),
				style:
					op?.bullet === 'video'
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
