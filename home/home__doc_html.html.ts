import { fa_instagram_, fa_linkedin_in_, fa_patreon_, fa_youtube_ } from '@btakita/ui--any--brookebrodack/icon'
import { class_ } from 'ctx-core/html'
import { raw_, type tag_T } from 'relementjs'
import { a_, div_, h1_, li_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_ } from '../layout/index.js'
export function home__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout__doc_html_({
			ctx,
			title: 'Brooke Brodack',
			html_props: {
				class: class_('home__doc_html'),
			}
		}, [
			div_({
				class: class_(
					'min-h-screen',
					'overflow-x-hidden',
					'relative',
					'dark:bg-black',
					'dark:text-white')
			}, [
				h1_({
					class: class_(
						'mt-4',
						'text-center')
				}, 'Brooke Brodack'),
				ul_([
					li_({
						class: class_(
							'text-center',
							'mt-12')
					},
					a_({
						href: '/brookers',
						class: class_(
							'inline',
							'text-center')
					},
					raw_('Brookers&hellip;')))
				]),
				ul_({
					class: class_(
						'fixed',
						'bottom-2',
						'z-10',
						'h-6',
						'w-screen',
						'flex',
						'flex-column',
						'items-center',
						'justify-center')
				}, ([
					['https://www.youtube.com/@BrookeABrodack', fa_youtube_],
					['https://www.patreon.com/BrookeBrodack', fa_patreon_],
					['https://www.instagram.com/brookebrodack', fa_instagram_],
					['https://www.linkedin.com/in/brooke-brodack-2223427', fa_linkedin_in_],
				] as social_aa).map(([href, icon_])=>
					li_({
						class: class_(
							'h-6',
							'w-6',
							'mx-1')
					}, [
						a_({
							href,
							target: '_blank'
						}, icon_({
							class: class_('dark:fill-gray-100')
						}))
					])))
			])
		])
	)
}
type social_aa = [href:string, icon_:tag_T][]
