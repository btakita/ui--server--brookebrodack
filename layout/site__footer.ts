import { instagram_url, linkedin_url, patreon_url, youtube_url } from '@btakita/domain--any--brookebrodack/social'
import { fa_instagram_, fa_linkedin_in_, fa_patreon_, fa_youtube_ } from '@btakita/ui--any--brookebrodack/icon'
import { class_ } from 'ctx-core/html'
import type { tag_T } from 'relementjs'
import { a_, footer_, li_, ul_ } from 'relementjs/html'
export function site__footer_({
	class:_class,
	icon_class,
}:{
	class?:string
	icon_class?:string
}) {
	return (
		footer_({
			class: class_(
				'fixed',
				'bottom-0',
				'z-10',
				'h-8',
				'w-screen',
				'py-1',
				_class)
		}, [
			ul_({
				class: class_(
					'flex',
					'flex-column',
					'items-center',
					'justify-center',
					'h-6')
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
					}, [
						icon_({
							class: class_(
								'fill-gray-900',
								'h-6',
								'w-6',
								icon_class)
						})
					])
				])))
		])
	)
}
type social_aa = [href:string, icon_:tag_T][]
