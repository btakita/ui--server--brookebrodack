import { brookebrodack_youtube_video_a1_ } from '@btakita/domain--server--brookebrodack/youtube'
import { spinner__template_ } from '@btakita/ui--any--brookebrodack/spinner'
import { class_, style_ } from 'ctx-core/html'
import { a_, div_, h2_, img_, section_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
import { YT_player__div_ } from '../youtube/index.js'
const [
	nature_origami_bg_jpg,
] = await asset_path_a_(
	import('../public/assets/images/nature-origami-bg.jpg'))
export function content__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout__doc_html_({
			ctx,
			title: 'Brooke Brodack Content Feed',
			html_props: {
				class: class_('content__doc_html'),
			}
		}, [
			div_({
				class: class_(
					'min-h-screen',
					'overflow-x-hidden',
					'relative',
					'bg-cover',
					'bg-no-repeat'),
				/** @see {import('@btakita/ui--browser--brookebrodack/content').content__hyop} */
				hyop: 'content__hyop',
				style: style_({
					'background-image': 'url(' + nature_origami_bg_jpg + ')'
				})
			}, [
				spinner__template_({}),
				site__header_({
					title: 'Content Feed'
				}),
				YT_player__div_({
					class: class_(
						'hidden',
						'h-[600px]',
						'max-h-80dvh',
						'aspect-video',
						'mx-auto',
						'scale-0')
				}),
				content_feed__section_({ ctx }),
				site__footer_(),
			])
		])
	)
}
export function content_feed__section_({ ctx }:{
	ctx:request_ctx_T
}) {
	return (
		section_({
			id: 'content_feed',
			class: class_(
				'mt-16',
				'flex',
				'flex-wrap',
				'sm:grid',
				'sm:grid-cols-3',
				'grid-flow-row',
				'max-w-7xl',
				'mx-auto')
		}, brookebrodack_youtube_video_a1_(ctx)!.map(brookebrodack_youtube_video=>{
			const { description, thumbnail, title, videoId } = brookebrodack_youtube_video
			return a_({
				href: 'https://www.youtube.com/watch?v=' + videoId,
				target: '_blank',
				rel: 'noopener',
				title,
				'data-op': JSON.stringify({ videoId }),
				class: class_(
					'w-96',
					'sm:w-96',
					'h-128',
					'mb-16',
					'mx-[3px]',
					'sm:mx-auto',
					'p-4',
					'rounded-lg',
					'bg-white/50',
					'no-underline',
					'hover:scale-105',
					'focus:scale-105')
			}, [
				img_({
					src: thumbnail,
					class: class_(
						'w-full',
						'aspect-[4/3]',
						'rounded-lg')
				}),
				h2_({
					class: class_(
						'text-xl',
						'font-bold')
				}, title),
				description
					? div_({
						class: class_('text-l')
					}, description)
					: undefined,
			])
		}))
	)
}
