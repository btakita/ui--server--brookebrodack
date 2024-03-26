import '@btakita/ui--any--brookebrodack/neon'
import { Person_id_ref_ } from '@btakita/brookebrodack-site/jsonld/index.js'
import { type brookers_timeline_op_T } from '@btakita/domain--any--brookebrodack/brookers'
import { heroicons_video_camera_, heroicons_x_mark_ } from '@btakita/ui--any--brookebrodack/icon'
import { spinner__template_ } from '@btakita/ui--any--brookebrodack/spinner'
import {
	jsonld__add,
	jsonld_id__new,
	WebPage__description__set,
	WebPage__hasPart__push,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { site__website_ } from '@rappstack/domain--server/site'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { class_ } from 'ctx-core/html'
import { url__join } from 'ctx-core/uri'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { div_, h1_, h2_, h3_, iframe_, img_, li_, ol_, p_, sup_, time_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article, ItemList, ListItem } from 'schema-dts'
import { back_link__a_, layout__doc_html_ } from '../layout/index.js'
import cooler_in_space_gif from '../public/assets/images/cooler-in-space--look-aud-right.gif'
import nature_origami_bg_webp from '../public/assets/images/nature-origami-bg.webp'
import { YT_player__div_ } from '../youtube/index.js'
export function brookers__doc_html_({ ctx }:{
	ctx:request_ctx_T
}) {
	const title = 'Brookers Timeline'
	const description = 'Brooke Brodack posted her first video on her channel, Brookers, in 2004. Brookers became a viral sensation with her comedy routines. Brookers became the most subscribed YouTube channel in 2006. With over 64,000 subscribers. Brookers appeared in media publications, guest appearances, & media. From 2004 to 2015. Entertainment Weekly hailed "Chips" among the "great moments in YouTube history". Crazed Numa fan had over 8.4 million views. My united states of...WHATEVA !!! had over 2.4 million views. She made a guest appearance on the Tyra Banks show. Brookers made an appearance on the Bare Naked Ladies. Brooke Brodack played a starring role in the web series Go Sukashi. In 2023, BBC reporter Colm Flynn made a documentary on Brooke Brodack & Brookers.'
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'CollectionPage')
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
			html_props: {
				class: class_('brookers__doc_html')
			}
		}, [
			div_({
				class: class_(
					'min-h-screen',
					'overflow-x-hidden',
					'relative',
					'bg-black'),
				/** @see {import('@btakita/ui--browser--brookebrodack/brookers').brookers__hyop} */
				hyop: 'brookers__hyop',
			}, [
				spinner__template_({
					center_x: true,
					spinner_class: class_(
						'z-10',
						'top-56')
				}),
				brookers_hero__div_(),
				back_link__a_({}),
				brookers_detail__div_(),
				brookers_master__div_(),
				brookers_img__div_(),
			])
		])
	)
	function brookers_hero__div_() {
		return (
			div_({
				class: class_(
					'brookers_hero__div',
					'opacity-0',
					'noscript:opacity-100',
					'absolute',
					'z-20',
					'top-0',
					'h-24',
					'mx-auto',
					'mb-4',
					'flex',
					'flex-col',
					'justify-top',
					'text-white')
			}, [
				h1_({
					class: class_(
						'relative',
						'left-0',
						'mt-4',
						'opacity-0',
						'noscript:opacity-100',
						'text-white')
				}, `Brooke Brodack`),
				h2_({
					class: class_(
						'opacity-0',
						'left-0',
						'noscript:opacity-100',
						'text-white')
				}, 'YouTubing since 2004'),
			])
		)
	}
	function brookers_detail__div_() {
		return (
			div_({
				class: class_(
					'brookers_detail__div',
					'hidden',
					'fixed',
					'z-30',
					'lg:z-0',
					'top-0',
					'right-0',
					'landscape:left-0',
					'landscape:lg:left-auto',
					'bottom-0',
					'h-screen',
					'max-h-screen',
					'w-screen',
					'lg:w-[calc(100dvw-20rem)]',
					'flex-1',
					'lg:px-8',
					'bg-black')
			}, [
				div_({
					id: 'op_top__div',
					class: class_(
						'flex',
						'flex-column',
						'h-16',
						'landscape:absolute',
						'landscape:lg:static',
						'landscape:w-4',
						'landscape:lg:w-auto',
						'top-0',
						'right-0',
						'z-30',
						'text-white')
				}, [
					div_({
						id: 'op_title__div',
						class: class_(
							'flex-grow',
							'flex',
							'landscape:hidden',
							'landscape:lg:flex',
							'justify-center',
							'mt-4')
					}),
					div_({
						id: 'op_close__div',
						class: class_(
							'lg:hidden',
							'absolute',
							'top-4',
							'landscape:top-[50dvh]',
							'landscape:lg:top-4',
							'landscape:-translate-y-1/2',
							'landscape:lg:translate-y-0',
							'right-4',
							'flex-none',
							'h-6',
							'w-6',
							'cursor-pointer')
					}, [
						heroicons_x_mark_({
							class: class_(
								'stroke-gray-100')
						}),
					]),
				]),
				div_({
					id: 'html_op__div',
					class: class_(
						'hidden',
						'relative',
						'top-16',
						'landscape:top-0',
						'landscape:lg:top-16',
						'left-0',
						'z-20',
						'h-full',
						'w-full',
						'overflow-auto')
				}),
				YT_player__div_({
					class: class_(
						'hidden',
						'relative',
						'top-16',
						'landscape:top-0',
						'landscape:lg:top-16',
						'left-0',
						'w-full',
						'aspect-video')
				})
			])
		)
	}
	function brookers_master__div_() {
		const brookers_timeline_a1 = brookers_timeline_a1_()
		const ItemList_id_ref = jsonld__add(ctx, ()=><ItemList>{
			'@id': jsonld_id__new(ctx, 'timeline'),
			'@type': 'ItemList',
			itemListElement:
				brookers_timeline_a1
					.map(({ id, title, description, op })=>
						jsonld__add(ctx, ()=><ListItem>{
							'@id': jsonld_id__new(ctx, `${id}_ListItem`),
							'@type': 'ListItem',
							name: op?.title ?? title,
							description: description ?? '—',
						})),
		})
		const Article_id_ref = jsonld__add(ctx, ()=><Article>{
			'@id': jsonld_id__new(ctx, 'Article'),
			'@type': 'Article',
			author: Person_id_ref_(ctx),
			headline: title,
			image: url__join(site__website_(ctx)!, nature_origami_bg_webp),
			articleBody:
				brookers_timeline_a1
					.map(({ title, description, op })=>`${op?.title ?? title}: ${description ?? '—'}`)
					.join(' |\n'),
			about: ItemList_id_ref,
		})
		WebPage__hasPart__push(ctx, Article_id_ref)
		return (
			div_({
				class: class_(
					'brookers_master__div',
					'opacity-0',
					'noscript:opacity-100',
					'relative',
					'mt--24',
					'min-h-screen',
					'mt-auto',
					'max-w-xs',
					'ml-4'),
			}, [
				brookers_timeline__ol_({ ctx }, [
					...brookers_timeline_a1.map(brookers_timeline=>
						brookers_timeline__li_(brookers_timeline))
				]),
			]))
	}
	function brookers_timeline_a1_():brookers_timeline_T[] {
		return [
			{
				id: 'brookers-first-video',
				at: 'September 2005',
				title: 'Brookers first video on YouTube'
			},
			{
				id: 'crazed-numa-fan',
				at: 'Oct 23, 2005',
				description: '>8.4 Million views',
				description_line_a: [
					[
						'>8.4 Million views ',
						cite__sup_(tb_a_({
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
			},
			{
				id: 'what-is',
				at: 'May 21, 2006',
				op: {
					type: 'youtube',
					title: 'what is...',
					bullet: 'video',
					videoId: 'jRA9ujhIs2I'
				}
			},
			{
				id: 'carson-daly-nbc',
				at: 'June 2006',
				title: 'Carson Daly NBC',
				description: '18 month development contract',
				description_line_a: ['18 month development contract']
			},
			{
				id: 'chips',
				at: 'June 2006',
				title: 'Chips',
				description: 'A spoof suspense drama about eating potato chips, has been called "brilliant" by Entertainment Weekly, which has listed it among the "great moments in YouTube history."',
				description_line_a: [
					[
						'A spoof suspense drama about eating potato chips, has been called "brilliant" by Entertainment Weekly, which has listed it among the "great moments in YouTube history." ',
						cite__sup_(
							tb_a_({
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
			},
			{
				id: 'most-subscribed-youtube',
				at: 'July 3 - Aug 7 2006',
				title: 'Most-subscribed on YouTube',
				description: '> 64000 subscribers',
				description_line_a: ['> 64000 subscribers']
			},
			{
				id: 'tyra-banks',
				at: 'December 6 2006',
				title: 'Tyra Banks Show',
				description: 'judge for a student video competition',
				description_line_a: ['judge for a student video competition']
			},
			{
				id: 'who-drank-my-orange-juice',
				at: 'circa 2006-2007',
				description: 'Who drank my orange juice?',
				description_line_a: ['Who drank my orange juice?'],
				op: {
					type: 'youtube',
					title: 'Orange Juice',
					bullet: 'video',
					videoId: 'h0InxfwadiM'
				}
			},
			{
				id: 'the-sound-of-your-voice-barenaked-ladies',
				at: 'February 2007',
				description: 'Appeared in music video with fellow YouTubers',
				description_line_a: [
					'Appeared in ',
					tb_a_({ href: 'https://www.youtube.com/watch?v=FoFMRXlNJ6Y' }, 'music video'),
					' with fellow YouTubers',
				],
				op: {
					type: 'youtube',
					title: 'The Sound of Your Voice—Barenaked Ladies',
					bullet: 'video',
					videoId: 'FoFMRXlNJ6Y'
				}
			},
			{
				id: 'web-celebrity',
				at: 'February 7, 2007',
				description: '"Web Celebrity" published by Brookers on IYS on Feb 7, 2007 and then quickly removed.',
				description_line_a: [
					'"Web Celebrity" published by Brookers on IYS on Feb 7, 2007 and then quickly removed.',
				],
				op: {
					type: 'youtube',
					title: '"Web Celebrity"',
					bullet: 'video',
					videoId: 'izc8q91Yet0'
				}
			},
			{
				id: 'whos-leg-is-this',
				at: 'Sep 7, 2007',
				description: '"if this leg is yours can you come and claim it ... its stinking up my yard..thanks" >530k views',
				description_line_a: [
					'"if this leg is yours can you come and claim it ... its stinking up my yard..thanks"',
					[
						'>530k views',
						cite__sup_(
							tb_a_({
								href: 'https://web.archive.org/web/20120710175206/http://www.youtube.com/user/Brookers/videos',
							}, 'Internet Archive'))
					]
				],
				op: {
					type: 'youtube',
					title: 'Who\'s Leg is this ?!',
					bullet: 'video',
					videoId: 'uYfYu2pB-yE'
				}
			},
			{
				id: 'go-sukashi-ep-1',
				at: 'Aug 6, 2010',
				description: 'Brooke Brodack as Sukashi\'s girlfriend',
				description_line_a: [
					'Brooke Brodack as Sukashi\'s girlfriend'
				],
				op: {
					type: 'youtube',
					title: 'Go Sukashi! - Episode #1',
					bullet: 'video',
					videoId: '8KqD2RNFW5E'
				}
			},
			{
				id: 'go-sukashi-the-picnic',
				at: 'Aug 13, 2010',
				op: {
					type: 'youtube',
					title: 'Go Sukashi! - The Picnic',
					bullet: 'video',
					videoId: 'H3GpZ82uVQE'
				}
			},
			{
				id: 'go-sukashi-a-green-menace',
				at: 'Aug 23, 2010',
				op: {
					type: 'youtube',
					title: 'Go Sukashi! - A Green Menace',
					bullet: 'video',
					videoId: 'zleNliomOGA'
				}
			},
			{
				id: 'go-sukashi-love-whispers-not',
				at: 'Sep 10, 2010',
				op: {
					type: 'youtube',
					title: 'Go Sukashi! - Love Whispers Not',
					bullet: 'video',
					videoId: 'LwmdQSSiYRw'
				}
			},
			{
				id: 'go-sukashi-christmas-special',
				at: 'Dec 22, 2010',
				op: {
					type: 'youtube',
					title: 'Go Sukashi! Christmas Special',
					bullet: 'video',
					videoId: 'd7G4nCppWy4'
				}
			},
			{
				id: 'go-sukashi-recap-traier',
				at: 'Feb 7, 2011',
				op: {
					type: 'youtube',
					title: 'Go Sukashi! - Season 1 Recap Trailer',
					bullet: 'video',
					videoId: 'P3D5B2Pt-Lo'
				}
			},
			{
				id: 'go-sukashi-season2-ep1',
				at: 'Feb 9, 2011',
				op: {
					type: 'youtube',
					title: 'Go Sukashi! - Season 2 - Ep #1: Chopality',
					bullet: 'video',
					videoId: 'Qaf5TYm8CNE'
				}
			},
			{
				id: 'go-sukashi-season2-ep2',
				at: 'Feb 24, 2011',
				op: {
					type: 'youtube',
					title: 'Go Sukashi! - Season 2 - Ep #2: Love & Taxes',
					bullet: 'video',
					videoId: 'Gc25NsgO_qg'
				}
			},
			{
				id: 'go-sukashi-outtakes-and-bloopers',
				at: 'Apr 5, 2011',
				op: {
					type: 'youtube',
					title: 'Go Sukashi: Outtakes and Bloopers',
					bullet: 'video',
					videoId: 'enuphAemSRo'
				}
			},
			{
				id: 'united-states-of-whateva',
				at: 'Mar 10, 2012',
				description: '>2.4 Million views',
				description_line_a: [
					[
						'>2.4 Million views ',
						cite__sup_(tb_a_({
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
			},
			{
				id: 'colm-flynn',
				at: 'Feb 8, 2022',
				description: 'Colm Flynn\' documentary on Brookers & long form interview with Brooke Brodack.',
				description_line_a: [
					'Colm Flynn\' documentary on Brookers & long form interview with Brooke Brodack.'
				],
				op: {
					type: 'youtube',
					title: 'I was the world\'s first Youtube star: Brooke Brodack',
					bullet: 'video',
					videoId: 'dvzfyCM5pVQ'
				}
			},
		]
	}
}
export function brookers_timeline__ol_<env_T extends relement_env_T>({ style, ...$p }:{
	ctx:request_ctx_T,
	class?:string
	style?:string
}, ...children:tag_dom_T[]) {
	return ol_<env_T>({
		class: class_(
			'brookers_timeline__ol',
			'flex',
			'flex-col',
			'border-l',
			'border-gray-200',
			'border-gray-700',
			$p.class),
		style,
	}, ...children)
}
export function brookers_timeline__li_<env_T extends relement_env_T>(
	{
		at,
		title,
		description_line_a,
		op
	}:brookers_timeline_T,
	...children:tag_dom_T<env_T>[]
) {
	return (
		li_<env_T>({
			class: class_(
				'brookers_timeline__li',
				'mb-10',
				'ml-4',
				'first:mt-24',
				op?.bullet === 'video'
					? ['cursor-pointer']
					: undefined,
				'group'),
			'data-op': op ? encodeURIComponent(JSON.stringify(op)) : undefined,
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
							'dark',
							'group-hover:animate-[neon-fade_0.03s_infinite_alternate]',
							'group-active:animate-[neon-fade_0.03s_infinite_alternate]',
						]
						: [
							'rounded-full',
							'border',
							'border-gray-900',
							'bg-gray-700'
						]),
			}, [
				op?.bullet === 'video'
					? heroicons_video_camera_({
						class: class_(
							'stroke-gray-100',
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
					'text-gray-500',
					op?.bullet === 'video'
						? [
							'neon-teal',
							'dark',
							'group-hover:animate-[neon-blink_0.03s_infinite_alternate]',
							'group-active:animate-[neon-blink_0.03s_infinite_alternate]',
						]
						: undefined)
			}, at),
			h3_({
				class: class_(
					'text-lg',
					'font-semibold',
					'text-gray-100',
					op?.bullet === 'video'
						? [
							'neon-teal',
							'dark',
							'group-hover:animate-[neon-blink_0.03s_infinite_alternate]',
							'group-active:animate-[neon-blink_0.03s_infinite_alternate]',
						]
						: undefined),
			}, (op?.title ?? title) + ' '),
			(description_line_a || []).map(description_line=>
				p_({
					class: class_(
						'text-base',
						'font-normal',
						'text-gray-400',
						op?.bullet === 'video'
							? [
								'neon-teal',
								'dark',
								'group-hover:animate-[neon-blink_0.03s_infinite_alternate]',
								'group-active:animate-[neon-blink_0.03s_infinite_alternate]',
							]
							: undefined),
				}, [description_line, ' '])),
			...children
		])
	)
}
function brookers_img__div_() {
	return (
		div_({
			class: class_(
				'brookers_img__div',
				'opacity-0',
				'noscript:opacity-100',
				'fixed',
				'z-10',
				'sm:h-[370px]',
				'w-full',
				'sm:w-[420px]',
				'aspect-[420/370]',
				'bottom-0')
		}, [
			img_({
				class: [
					'cooler-in-space',
					'absolute',
					'top-0',
					'm-auto',
				].join(' '),
				src: cooler_in_space_gif,
				alt: 'Brooke Brodack\'s MySpace gif'
			})
		])
	)
}
function cite__sup_(...children:tag_dom_T[]) {
	return sup_(children)
}
type brookers_timeline_T = {
	id:string
	at:string
	title:string
	description?:string
	description_line_a?:tag_dom_T[],
	op?:brookers_timeline_op_T
}|{
	id:string
	at:string
	title?:string
	description?:string
	description_line_a?:tag_dom_T[],
	op:brookers_timeline_op_T
}
