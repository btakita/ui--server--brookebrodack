import { instagram_url, linkedin_url, patreon_url, youtube_url } from '@btakita/domain--any--brookebrodack/social'
import {
	fa_instagram_,
	fa_linkedin_in_,
	fa_patreon_,
	fa_youtube_,
	heroicons_film_
} from '@btakita/ui--any--brookebrodack/icon'
import { class_, style_ } from 'ctx-core/html'
import { type tag_dom_T, type tag_T } from 'relementjs'
import { a_, div_, h1_, header_, img_, li_, ul_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_ } from '../layout/index.js'
const [
	brooke_brodack_profile_jpg,
	nature_origami_bg_jpg,
] = await asset_path_a_(
	import('../public/assets/images/brooke-brodack-profile.jpg'),
	import('../public/assets/images/nature-origami-bg.jpg'),
)
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
					'bg-cover',
					'bg-no-repeat'),
				style: style_({
					'background-image': 'url(' + nature_origami_bg_jpg + ')'
				})
			}, [
				header_({
					class: class_(
						'flex',
						'items-center',
						'justify-center')
				}, [
					div_({
						class: class_(
							'flex-1',
							'flex',
							'items-center',
							'justify-end',
							'pr-2')
					}, [
						img_({
							src: brooke_brodack_profile_jpg,
							class: class_(
								'inline-block',
								'h-24',
								'w-24',
								'mt-4',
								'rounded-full')
						})
					]),
					div_({
						class: class_(
							'flex-1',
							'flex',
							'items-center',
							'justify-start',
							'pl-2')
					}, [
						h1_({
							class: class_(
								'mt-4',
								'text-center',
								'text-3xl')
						}, 'Brooke Brodack')
					])
				]),
				home_link__ul_(),
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
					[youtube_url, fa_youtube_],
					[patreon_url, fa_patreon_],
					[instagram_url, fa_instagram_],
					[linkedin_url, fa_linkedin_in_],
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
							class: class_('fill-gray-900')
						}))
					])))
			])
		])
	)
	function home_link__ul_() {
		return (
			ul_({
				class: class_(
					'flex',
					'flex-col',
					'items-center',
					'justify-center',
					'mt-12')
			}, [
				home_link__li_({}, [
					a_({
						href: '/brookers',
						class: class_(
							'inline',
							'text-center')
					}, [
						'Brookers Timeline',
						div_({
							class: class_(
								'inline-block',
								'h-6',
								'w-6',
								'translate-y-[7px]',
								'translate-x-2',
								'text-center')
						}, [
							heroicons_film_({
								class: class_('fill-gray-900')
							})
						])
					])
				]),
				home_link__li_({}, [
					a_({
						href: youtube_url,
						target: '_blank',
						class: class_(
							'inline',
							'text-center')
					}, [
						'Youtube',
						div_({
							class: class_(
								'inline-block',
								'h-6',
								'w-6',
								'translate-y-2',
								'translate-x-2',
								'text-center')
						}, [
							fa_youtube_({
								class: class_('fill-gray-900')
							})
						])
					])
				]),
				home_link__li_({}, [
					a_({
						href: patreon_url,
						target: '_blank',
						class: class_(
							'inline',
							'text-center')
					}, [
						'Patreon',
						a_({
							youtube_url,
							target: '_blank',
							class: class_(
								'inline-block',
								'h-6',
								'w-6',
								'translate-x-2',
								'text-center')
						}, [
							fa_patreon_({
								class: class_('fill-gray-900')
							})
						])
					])
				]),
				home_link__li_({}, [
					a_({
						href: instagram_url,
						target: '_blank',
						class: class_(
							'inline',
							'text-center')
					}, [
						'Instagram',
						a_({
							youtube_url,
							target: '_blank',
							class: class_(
								'inline-block',
								'h-6',
								'w-6',
								'translate-x-2',
								'text-center')
						}, [
							fa_instagram_({
								class: class_('fill-gray-900')
							})
						])
					])
				]),
				home_link__li_({}, [
					a_({
						href: linkedin_url,
						target: '_blank',
						class: class_(
							'inline',
							'text-center')
					}, [
						'LinkedIn',
						a_({
							youtube_url,
							target: '_blank',
							class: class_(
								'inline-block',
								'h-6',
								'w-6',
								'translate-x-2',
								'text-center')
						}, [
							fa_linkedin_in_({
								class: class_('fill-gray-900')
							})
						])
					])
				])
			])
		)
	}
	function home_link__li_({
		class: _class,
		hyop,
	}:{
		class?:string
		hyop?:string
	}, ...children:tag_dom_T[]) {
		return (
			li_({
				class: class_(
					'flex',
					'items-center',
					'justify-center',
					'min-h-10',
					'w-full',
					'max-w-3xl',
					'mb-3',
					'py-1',
					'px-4',
					'rounded-md',
					'bg-[rgba(243,244,246,0.6)]',
					'text-center',
					'hover:scale-105',
					'transition-all',
					_class),
				hyop,
			}, ...children)
		)
	}
}
type social_aa = [href:string, icon_:tag_T][]
