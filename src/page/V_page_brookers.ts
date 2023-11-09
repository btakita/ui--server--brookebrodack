import { V_page_brookers__onbind } from '@btakita/ui--all--brookebrodack'
import { V_atb, V_footnote, V_footnote_list } from '@btakita/ui--server--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { H_ } from '@ctx-core/vanjs'
import type { ChildDom, VanShape } from 'van-type-delegate'
export function V_page_brookers<van_T extends VanShape>({ ctx }:{
	ctx:Ctx
}) {
	let H = H_<van_T>(ctx)
	return (
		H.div({
				class: 'V_page_home min-h-screen overflow-x-hidden',
				'data-onbind': '' + V_page_brookers__onbind
			},
			V_page_brookers_content(),
			V_page_brookers_img_a(),
			H.div({ class: 'relative mt-24' },
			)))
	function V_page_brookers_img_a() {
	  return (
			H.div({ class: 'V_page_brookers_img_a hidden absolute z-10 h-96 bottom-0 w-full' },
				H.img({
					class: 'cooler-in-space absolute top-0 m-auto',
					src: '/assets/images/cooler-in-space--look-aud-right.gif'
				}))
		)
	}
	function V_page_brookers_content() {
	  return (
			H.div({
				class: 'V_page_brookers_content w-screen'
			},
				V_page_brookers_hero(),
				V_page_brookers_sidebar(),
			)
		)
	}
	function V_page_brookers_hero() {
		return (
			H.div({
					class: `V_page_brookers_hero absolute top-0 left-50 h-24 ml-4 mb-4 flex flex-col items-center justify-top`
				},
				H.h1({ class: 'mt-4' }, `Hello, my name is Brooke Brodack`),
				H.h2(`& I am an artist`))
		)
	}
	function V_page_brookers_sidebar() {
		return (
			H.div({
					class: `V_page_brookers_sidebar hidden relative mt--24 min-h-screen ml-4 mt-auto bottom-0 right-0 max-w-xs`
				},
				V_timeline<van_T>({
						ctx,
					}, V_timeline_item({
						ctx,
						at: 'February 2007',
						title: 'The Sound of Your Voice—Barenaked Ladies',
						description_a: [
							`Appeared in `,
							H.a({ href: 'https://www.youtube.com/watch?v=FoFMRXlNJ6Y' }, 'music video'),
							` with fellow YouTubers`,
						],
					}),
					V_timeline_item({
						ctx,
						at: 'December 6 2006',
						title: 'Tyra Banks Show',
						description_a: [`Guest appearance`]
					}),
					V_timeline_item({
						ctx,
						at: 'July 5 2006',
						title: 'CRAZED NUMA FAN !!!!',
						description_a: ['Over 18 Million Views']
					}),
					V_timeline_item({
						ctx,
						at: 'July 3 - Aug 7 2006',
						title: 'Most-subscribed on YouTube',
						description_a: ['> 64000 subscribers']
					}),
					V_timeline_item({
						ctx,
						at: 'June 2006',
						title: 'Chips',
						description_a: [
							`A spoof suspense drama about eating potato chips, has been called "brilliant" by Entertainment Weekly,
						which has listed it among the "great moments in YouTube history."`,
							V_footnote({ ctx, id: 'knowyourmeme' }, V_atb({
								ctx,
								href: 'https://knowyourmeme.com/memes/people/brookers'
							}, 'knowyourmeme.com'))
						]
					}),
					V_timeline_item({
						ctx,
						at: 'June 2006',
						title: 'Carson Daly NBC',
						description_a: ['18 month development contract']
					}),
					V_timeline_item({
						ctx,
						at: 'September 2005',
						title: 'Brookers first video on YouTube'
					}),
				),
				V_footnote_list({ ctx }))
		)
	}
}
export function V_timeline<van_T extends VanShape>({ ctx, style, ...$p }:{
	ctx:Ctx
	class?:string
	style?:string
}, ...children:V_timeline_item_T<van_T>[]) {
	let H = H_<van_T>(ctx)
	return H.ol({
		class: class_('V_timeline flex flex-col border-l border-gray-200 dark:border-gray-700', $p.class),
		style,
	}, ...children)
}
declare const V_timeline_item__sym:unique symbol
export type V_timeline_item_T<van_T extends VanShape> = ChildDom<van_T>&{ V_timeline_item__sym:never }
export function V_timeline_item<van_T extends VanShape>({ ctx, at, title, description_a }:{
	ctx:Ctx
	at:string
	title:string
	description_a?:ChildDom<van_T>[]
}, ...children:ChildDom<van_T>[]):V_timeline_item_T<van_T> {
	let H = H_<van_T>(ctx)
	return (
		H.li({ class: 'V_timeline_item mb-10 ml-4 first:mt-24' },
			H.div({
				class: 'absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'
			}),
			H.time({
				class: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'
			}, at),
			H.h3({
				class: 'text-lg font-semibold text-gray-900 dark:text-white'
			}, title),
			H.p({
				class: 'text-base font-normal text-gray-500 dark:text-gray-400'
			}, ...(description_a || [])),
			...children)
	) as V_timeline_item_T<van_T>
}
