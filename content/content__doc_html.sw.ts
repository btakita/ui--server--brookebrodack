import { brookebrodack_youtube_video_a1_ } from '@btakita/domain--server--brookebrodack/youtube'
import { class_, style_ } from 'ctx-core/html'
import { a_, div_, h2_, img_, section_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
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
				style: style_({
					'background-image': 'url(' + nature_origami_bg_jpg + ')'
				})
			}, [
				site__header_({
					title: 'Content Feed'
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
			class: class_(
				'content_feed',
				'mt-16',
				'flex',
				'flex-wrap',
				'sm:grid',
				'sm:grid-cols-3',
				'grid-flow-row',
				'max-w-7xl',
				'mx-auto')
		}, brookebrodack_youtube_video_a1_(ctx)!.map(brookebrodack_youtube_video=>
			a_({
				href: 'https://www.youtube.com/watch?v=' + brookebrodack_youtube_video.videoId,
				target: '_blank',
				rel: 'noopener',
				title: brookebrodack_youtube_video.title,
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
					src: brookebrodack_youtube_video.thumbnail,
					class: class_(
						'rounded-lg')
				}),
				h2_({
					class: class_(
						'text-xl',
						'font-bold')
				}, brookebrodack_youtube_video.title),
				brookebrodack_youtube_video.description
					? div_({
						class: class_('text-l')
					}, brookebrodack_youtube_video.description)
					: undefined,
			])))
	)
}
