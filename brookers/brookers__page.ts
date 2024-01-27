import { type brookers__timeline_op_T } from '@btakita/domain--any--brookebrodack'
import { brookers__page__hy__bind__id } from '@btakita/ui--any--brookebrodack/brookers'
import { heroicons_video_camera_, heroicons_x_mark_ } from '@btakita/ui--any--brookebrodack/icon'
import { spinner_c_ } from '@btakita/ui--any--brookebrodack/spinner'
import { atb_ } from '@btakita/ui--server--blog/anchor'
import { class_ } from 'ctx-core/html'
import { type Node_T, raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { div_, h1_, h2_, h3_, iframe_, img_, li_, ol_, p_, sup_, template_, time_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import { type route_ctx_T } from 'relysjs/server'
import { layout_c_ } from '../layout/index.ts'
import '@btakita/ui--any--brookebrodack/neon'
import './index.css'
const [
	cooler_in_space_gif,
] = await asset_path_a_(
	import('../public/assets/images/cooler-in-space--look-aud-right.gif'),
)
export function brookers__page_({ ctx }:{
	ctx:route_ctx_T
}) {
	return (
		layout_c_(
			{ ctx },
			div_({
				class: class_(
					'brookers__page',
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
				brookers__page__hero_c_(),
				brookers__page__detail_c_(),
				brookers__page__master_c_(),
				brookers__page__img_a_c_(),
			]))
	)
	function brookers__page__hero_c_() {
		return (
			div_({
				class: class_(
					'brookers__page__hero_c',
					'absolute',
					'z-20',
					'top-0',
					'h-24',
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
	function brookers__page__detail_c_() {
		return (
			div_({
				class: class_(
					'brookers__page__detail_c',
					'fixed',
					'hidden',
					'sm:block',
					'z-30',
					'sm:z-0',
					'top-0',
					'right-0',
					'bottom-0',
					'h-screen',
					'max-h-screen',
					'w-screen',
					'sm:w-[calc(100%-20rem)]',
					'container',
					'flex-1',
					'sm:px-8',
					'bg-white',
					'dark:bg-black')
			}, [
				div_({
					id: 'html_op__top',
					class: class_(
						'flex',
						'flex-column',
						'h-16',
						'dark:text-white')
				}, [
					div_({
						id: 'op__title',
						class: class_(
							'flex-grow',
							'flex',
							'justify-center',
							'mt-2')
					}),
					div_({
						id: 'html_op__close',
						class: class_(
							'sm:hidden',
							'flex-none',
							'h-6',
							'w-6',
							'mt-2',
							'mr-2',
							'cursor-pointer')
					}, [
						heroicons_x_mark_({
							class: class_('dark:stroke-gray-100')
						})
					]),
				]),
				div_({
					id: 'html_op__container',
					class: class_(
						'hidden',
						'relative',
						'top-16',
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
						'top-16',
						'left-0',
						'w-full',
						'aspect-video'
					)
				})
			])
		)
	}
	function brookers__page__master_c_() {
		return (
			div_({
				class: class_(
					'brookers__page__master_c',
					'relative',
					'mt--24',
					'min-h-screen',
					'mt-auto',
					'max-w-xs',
					'ml-4')
			}, [
				brookers__timeline_c_({}, [
					brookers__timeline__item_c_({
						at: 'September 2005',
						title: 'Brookers first video on YouTube'
					}),
					brookers__timeline__item_c_({
						at: 'Oct 23, 2005',
						description_a: [
							[
								'>8.4 Million views ',
								cite_(atb_({
									href: 'https://web.archive.org/web/20160210225252/https://www.youtube.com/watch?v=N6j475XI1Xg'
								}, 'Internet Archive'))
							]
						],
						op: {
							type: 'youtube',
							title: 'CRAZED NUMA FAN !!!!',
							bullet: 'video',
							videoId: 'wflZKdXC8Vo'
						}
					}),
					brookers__timeline__item_c_({
						at: 'May 21, 2006',
						op: {
							type: 'youtube',
							title: 'what is...',
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
							[
								'A spoof suspense drama about eating potato chips, has been called "brilliant" by' +
								' Entertainment Weekly, which has listed it among the "great moments in' +
								' YouTube history." ',
								cite_(
									atb_({
										href: 'https://knowyourmeme.com/memes/people/brookers'
									}, 'knowyourmeme.com'))
							]
						],
						op: {
							type: 'html',
							title: 'Chips',
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
						at: 'December 6 2006',
						title: 'Tyra Banks Show',
						description_a: [`judge for a student video competition`]
					}),
					brookers__timeline__item_c_({
						at: 'circa 2006-2007',
						description_a: ['Who drank my orange juice?'],
						op: {
							type: 'youtube',
							title: 'Orange Juice',
							bullet: 'video',
							videoId: 'h0InxfwadiM'
						}
					}),
					brookers__timeline__item_c_({
						at: 'February 2007',
						description_a: [
							'Appeared in ',
							atb_({ href: 'https://www.youtube.com/watch?v=FoFMRXlNJ6Y' }, 'music video'),
							' with fellow YouTubers',
						],
						op: {
							type: 'youtube',
							title: 'The Sound of Your Voice—Barenaked Ladies',
							bullet: 'video',
							videoId: 'FoFMRXlNJ6Y'
						}
					}),
					brookers__timeline__item_c_({
						at: 'February 7, 2007',
						description_a: [
							'"Web Celebrity" published by Brookers on IYS on Feb 7, 2007 and then quickly removed.',
						],
						op: {
							type: 'youtube',
							title: '"Web Celebrity"',
							bullet: 'video',
							videoId: 'izc8q91Yet0'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Sep 7, 2007',
						description_a: [
							'"there was a murder in my back yard if this leg is yours can you come and claim it ... its stinking' +
							' up my yard..thanks"',
							[
								'>530k views',
								cite_(
									atb_({
										href: 'https://web.archive.org/web/20120710175206/http://www.youtube.com/user/Brookers/videos',
									}, 'Internet Archive'))]
						],
						op: {
							type: 'youtube',
							title: 'Who\'s Leg is this ?!',
							bullet: 'video',
							videoId: 'uYfYu2pB-yE'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Nov 18, 2007',
						description_a: [
							'Old laddys,',
							'Little squichy purple balls thing will make you die!'
						],
						op: {
							type: 'youtube',
							title: '"Brookers News"',
							bullet: 'video',
							videoId: 'x_7oyWcg7AU'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Aug 6, 2010',
						description_a: [
							'Brooke Brodack as Sukashi\'s girlfriend'
						],
						op: {
							type: 'youtube',
							title: 'Go Sukashi! - Episode #1',
							bullet: 'video',
							videoId: '8KqD2RNFW5E'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Aug 13, 2010',
						op: {
							type: 'youtube',
							title: 'Go Sukashi! - The Picnic',
							bullet: 'video',
							videoId: 'H3GpZ82uVQE'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Aug 23, 2010',
						op: {
							type: 'youtube',
							title: 'Go Sukashi! - A Green Menace',
							bullet: 'video',
							videoId: 'zleNliomOGA'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Sep 10, 2010',
						op: {
							type: 'youtube',
							title: 'Go Sukashi! - Love Whispers Not',
							bullet: 'video',
							videoId: 'LwmdQSSiYRw'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Dec 22, 2010',
						op: {
							type: 'youtube',
							title: 'Go Sukashi! Christmas Special',
							bullet: 'video',
							videoId: 'd7G4nCppWy4'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Feb 7, 2011',
						op: {
							type: 'youtube',
							title: 'Go Sukashi! - Season 1 Recap Trailer',
							bullet: 'video',
							videoId: 'P3D5B2Pt-Lo'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Feb 9, 2011',
						op: {
							type: 'youtube',
							title: 'Go Sukashi! - Season 2 - Ep #1: Chopality',
							bullet: 'video',
							videoId: 'Qaf5TYm8CNE'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Feb 24, 2011',
						op: {
							type: 'youtube',
							title: 'Go Sukashi! - Season 2 - Ep #2: Love & Taxes',
							bullet: 'video',
							videoId: 'Gc25NsgO_qg'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Apr 5, 2011',
						op: {
							type: 'youtube',
							title: 'Go Sukashi: Outtakes and Bloopers',
							bullet: 'video',
							videoId: 'enuphAemSRo'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Mar 10, 2012',
						description_a: [
							[
								'>2.4 Million views ',
								cite_(atb_({
									href: 'https://web.archive.org/web/20150109114045/https://www.youtube.com/watch?v=SLbFDMplZDs'
								}, 'Internet Archive'))
							],
						],
						op: {
							type: 'youtube',
							title: 'My united states of...WHATEVA !!!',
							bullet: 'video',
							videoId: 's35NaNkKwR4'
						}
					}),
					brookers__timeline__item_c_({
						at: 'Feb 8, 2022',
						description_a: [
							'Colm Flynn\' documentary on Brookers & long form interview with Brooke Brodack.'
						],
						op: {
							type: 'youtube',
							title: 'I was the world\'s first Youtube star: Brooke Brodack',
							bullet: 'video',
							videoId: 'dvzfyCM5pVQ'
						}
					})
				]),
			]))
	}
}
export function brookers__timeline_c_<env_T extends relement_env_T>({ style, ...$p }:{
	class?:string
	style?:string
}, ...children:tag__dom_T[]) {
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
export function brookers__timeline__item_c_<env_T extends relement_env_T>({
	at,
	title,
	description_a,
	op
}:{
	at:string
	title:string
	description_a?:tag__dom_T[],
	op?:brookers__timeline_op_T
}|{
	at:string
	title?:string
	description_a?:tag__dom_T[],
	op:brookers__timeline_op_T
}, ...children:tag__dom_T<env_T>[]):brookers__timeline__item_T<env_T> {
	return (
		li_({
			class: class_(
				'brookers__timeline__item_c',
				'mb-10',
				'ml-4',
				'first:mt-24',
				op?.bullet === 'video'
					? ['cursor-pointer']
					: undefined,
				'group'
			),
			'data-op': encodeURIComponent(JSON.stringify(op)),
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
							'neon-teal',
							'hover:animate-[neon-fade_0.03s_infinite_alternate]',
							'active:animate-[neon-fade_0.03s_infinite_alternate]'
						]
						: [
							'bg-gray-200',
							'rounded-full',
							'border',
							'border-white',
							'dark:border-gray-900',
							'dark:bg-gray-700'
						]),
			}, [
				op?.bullet === 'video'
					? heroicons_video_camera_({
						class: class_(
							'dark:stroke-gray-100',
							'group-hover:animate-[neon-fade_0.03s_infinite_alternate]',
							'group-active:animate-[neon-fade_0.03s_infinite_alternate]')
					})
					: undefined
			]),
			time_({
				class: class_(
					'mb-1',
					'text-sm',
					'font-normal',
					'leading-none',
					'text-gray-400',
					'dark:text-gray-500',
					op?.bullet === 'video'
						? [
							'neon-teal',
							'group-hover:animate-[neon-blink_0.03s_infinite_alternate]',
							'group-active:animate-[neon-blink_0.03s_infinite_alternate]',
						]
						: undefined)
			}, at),
			h3_({
				class: class_(
					'text-lg',
					'font-semibold',
					'text-gray-900',
					'dark:text-gray-100',
					// 'dark:invert'
					op?.bullet === 'video'
						? [
							'neon-teal',
							'group-hover:animate-[neon-blink_0.03s_infinite_alternate]',
							'group-active:animate-[neon-blink_0.03s_infinite_alternate]',
						]
						: undefined
				)
			}, op?.title ?? title),
			(description_a || []).map(line=>
				p_({
					class: class_(
						'text-base',
						'font-normal',
						'text-gray-500',
						'dark:text-gray-400',
						op?.bullet === 'video'
							? [
								'neon-teal',
								'group-hover:animate-[neon-blink_0.03s_infinite_alternate]',
								'group-active:animate-[neon-blink_0.03s_infinite_alternate]',
							]
							: undefined
					)
				}, line)),
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
				'fixed',
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
function cite_(...children:tag__dom_T[]) {
	return sup_(children)
}
declare const brookers__timeline__item__sym:unique symbol
export type brookers__timeline__item_T<env_T extends relement_env_T> = tag__dom_T<env_T>&{
	[brookers__timeline__item__sym]:never
}
