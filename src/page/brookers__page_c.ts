import { brookers__page__onbind } from '@btakita/ui--all--brookebrodack'
import { atb_, footnote_c_, footnote_list_c_ } from '@btakita/ui--server--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import { type Node_T, type relement_env_T, type tag__dom_T } from 'relementjs'
import { a_, div_, h1_, h2_, h3_, img_, li_, ol_, p_, time_ } from 'relementjs/html'
export function brookers__page_c_<env_T extends relement_env_T>({ ctx }:{
	ctx:Ctx
}) {
	return (
		div_({
				class: 'brookers__page_c min-h-screen overflow-x-hidden',
				'data-onbind': '' + brookers__page__onbind
			},
			brookers__page__content_c_(),
			brookers__page__img_a_c_(),
			div_({ class: 'relative mt-24' },))
	) as Node_T<env_T, HTMLElementTagNameMap['div']>
	function brookers__page__img_a_c_() {
		return (
			div_({ class: 'brookers__page__img_a_c_ hidden absolute z-10 h-96 bottom-0 w-full' },
				img_({
					class: 'cooler-in-space absolute top-0 m-auto',
					src: '/assets/images/cooler-in-space--look-aud-right.gif'
				}))
		)
	}
	function brookers__page__content_c_() {
		return (
			div_({
					class: 'brookers__page__content_c_ w-screen'
				},
				brookers__page__hero_c_(),
				brookers__page__sidebar_c_())
		)
	}
	function brookers__page__hero_c_() {
		return (
			div_({
					class: `brookers__page__hero_c_ absolute top-0 left-50 h-24 ml-4 mb-4 flex flex-col items-center justify-top`
				},
				h1_({ class: 'mt-4' }, `Hello, my name is Brooke Brodack`),
				h2_(`& I am an artist`))
		)
	}
	function brookers__page__sidebar_c_() {
		return (
			div_({
					class: `brookers__page__sidebar_c_ hidden relative mt--24 min-h-screen ml-4 mt-auto bottom-0 right-0 max-w-xs`
				},
				brookers__timeline_c_<env_T>({
						ctx,
					}, brookers__timeline__item_c_<env_T>({
						ctx,
						at: 'February 2007',
						title: 'The Sound of Your Voice—Barenaked Ladies',
						description_a: [
							`Appeared in `,
							a_({ href: 'https://www.youtube.com/watch?v=FoFMRXlNJ6Y' }, 'music video'),
							` with fellow YouTubers`,
						],
					}),
					brookers__timeline__item_c_<env_T>({
						ctx,
						at: 'December 6 2006',
						title: 'Tyra Banks Show',
						description_a: [`Guest appearance`]
					}),
					brookers__timeline__item_c_<env_T>({
						ctx,
						at: 'July 5 2006',
						title: 'CRAZED NUMA FAN !!!!',
						description_a: ['Over 18 Million Views']
					}),
					brookers__timeline__item_c_<env_T>({
						ctx,
						at: 'July 3 - Aug 7 2006',
						title: 'Most-subscribed on YouTube',
						description_a: ['> 64000 subscribers']
					}),
					brookers__timeline__item_c_<env_T>({
						ctx,
						at: 'June 2006',
						title: 'Chips',
						description_a: [
							`A spoof suspense drama about eating potato chips, has been called "brilliant" by Entertainment Weekly,
						which has listed it among the "great moments in YouTube history."`,
							footnote_c_<env_T>({ ctx, id: 'knowyourmeme' },
								atb_<env_T>({
									href: 'https://knowyourmeme.com/memes/people/brookers'
								}, 'knowyourmeme.com'))
						]
					}),
					brookers__timeline__item_c_<env_T>({
						ctx,
						at: 'June 2006',
						title: 'Carson Daly NBC',
						description_a: ['18 month development contract']
					}),
					brookers__timeline__item_c_<env_T>({
						ctx,
						at: 'September 2005',
						title: 'Brookers first video on YouTube'
					}),
				),
				footnote_list_c_<env_T>({ ctx }))
		)
	}
}
export function brookers__timeline_c_<env_T extends relement_env_T>({ ctx, style, ...$p }:{
	ctx:Ctx
	class?:string
	style?:string
}, ...children:brookers__timeline__item_T<env_T>[]) {
	return ol_({
			class: class_('brookers__timeline_c_ flex flex-col border-l border-gray-200 dark:border-gray-700', $p.class),
			style,
		}, ...children
	) as Node_T<env_T, HTMLElementTagNameMap['ol']>
}
declare const brookers__timeline__item__sym:unique symbol
export type brookers__timeline__item_T<env_T extends relement_env_T> = tag__dom_T<env_T>&{ brookers__timeline__item__sym:never }
export function brookers__timeline__item_c_<env_T extends relement_env_T>({ ctx, at, title, description_a }:{
	ctx:Ctx
	at:string
	title:string
	description_a?:tag__dom_T<env_T>[]
}, ...children:tag__dom_T<env_T>[]):brookers__timeline__item_T<env_T> {
	return (
		li_({ class: 'brookers__timeline__item_c_ mb-10 ml-4 first:mt-24' },
			div_({
				class: 'absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'
			}),
			time_({
				class: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'
			}, at),
			h3_({
				class: 'text-lg font-semibold text-gray-900 dark:text-white'
			}, title),
			p_({
				class: 'text-base font-normal text-gray-500 dark:text-gray-400'
			}, ...(description_a || [])),
			...children)
	) as brookers__timeline__item_T<env_T>
}
