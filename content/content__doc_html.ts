import { videoId_thumbnail_url_, youtube_video_a1_ } from '@btakita/domain--server--brookebrodack/youtube'
import { heroicons_pause_, heroicons_video_camera_, heroicons_x_mark_ } from '@btakita/ui--any--brookebrodack/icon'
import { spinner__template_ } from '@btakita/ui--any--brookebrodack/spinner'
import { class_, style_ } from 'ctx-core/html'
import { a_, div_, h2_, img_, main_, section_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { back_link__a_, layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
import nature_origami_bg_webp from '../public/assets/images/nature-origami-bg.webp'
import { YT_player__div_ } from '../youtube/index.js'
export function content__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout__doc_html_({
			ctx,
			title: 'Brooke Brodack Content Feed',
			html_props: {
				class: class_('content__doc_html'),
			},
			body__props: {
				class: class_(
					'bg-cover',
					'bg-no-repeat'),
				style: style_({
					'background-image': 'url(' + nature_origami_bg_webp + ')'
				})
			}
		}, [
			main_({
				class: class_(
					'min-h-screen',
					'relative',
					'backdrop-blur-3xl'),
				/** @see {import('@btakita/ui--browser--brookebrodack/content').content__hyop} */
				hyop: 'content__hyop',
			}, [
				spinner__template_({
					center_x: true,
					spinner_class: class_('top-32')
				}),
				site__header_({
					ctx,
					title: 'Content Feed',
					/** @see {import('@btakita/ui--browser--brookebrodack/content').content__site__header__hyop} */
					hyop: 'content__site__header__hyop'
				}),
				video__div_(),
				content_feed__section_({ ctx }),
			]),
			back_link__a_({
				/** @see {import('@btakita/ui--browser--brookebrodack/content').content__back_link__a__hyop} */
				hyop: 'content__back_link__a__hyop'
			}),
			site__footer_({ ctx })
		])
	)
	function video__div_() {
		return (
			div_({
				id: 'video__div',
				class: class_(
					'relative',
					'noscript:h-1/3',
					'noscript:lg:h-[600px]',
					'landscape:h-screen',
					'noscript:landscape:h-screen',
					'landscape:lg:h-full',
					'max-h-1/3',
					'lg:max-h-[600px]',
					'top-0',
					'z-10',
					'pb-0',
					'lg:pb-4',
					'motion-reduce:bg-cyan-600/90',
					'motion-reduce:border-b-1px',
					'motion-reduce:border-white/.3',
					'motion-reduce:shadow-md',
					'motion-reduce:lg:h-[600px]'),
				/** @see {import('@btakita/ui--browser--brookebrodack/content').content__video__div__hyop} */
				hyop: 'content__video__div__hyop'
			}, [
				YT_player__div_({
					class: class_(
						'hidden',
						'h-full',
						'landscape:h-screen',
						'landscape:lg:h-full',
						'w-full',
						'max-h-[600px]',
						'landscape:max-h-screen',
						'landscape:lg:max-h-[600px]',
						'max-w-7xl',
						'aspect-video',
						'mx-auto',
						'scale-0',
						'motion-reduce:scale-100')
				}),
				div_({
					id: 'video_close__div',
					class: class_(
						'hidden',
						'motion-reduce:block',
						'absolute',
						'z-10',
						'top-1/2',
						'-translate-y-1/2',
						'right-4',
						'flex-none',
						'h-6',
						'w-6',
						'cursor-pointer'),
					/** @see {import('@btakita/ui--browser--brookebrodack/content').content__video_close__div__hyop} */
					hyop: 'content__video_close__div__hyop'
				}, [
					heroicons_x_mark_({
						class: class_(
							'stroke-gray-100')
					})
				])
			])
		)
	}
}
export function content_feed__section_({ ctx }:{
	ctx:request_ctx_T
}) {
	return (
		section_({
			id: 'content_feed',
			class: class_(
				'mt-8',
				'flex',
				'flex-wrap',
				'sm:grid',
				'lg:grid-cols-2',
				'xl:grid-cols-3',
				'grid-flow-row',
				'max-w-7xl',
				'mx-auto',
				'overflow-y-auto')
		}, youtube_video_a1_(ctx)!.map(brookebrodack_youtube_video=>{
			const { description, title, videoId } = brookebrodack_youtube_video
			return a_({
				href: 'https://www.youtube.com/watch?v=' + videoId,
				target: '_blank',
				rel: 'noopener',
				title,
				'data-op': encodeURIComponent(JSON.stringify({ videoId })),
				class: class_(
					'relative',
					'w-96',
					'mb-16',
					'mx-[3px]',
					'sm:mx-auto',
					'p-4',
					'relative',
					'rounded-lg',
					'bg-white/50',
					'no-underline',
					'hover:scale-105',
					'focus:scale-105',
					'group'),
				/** @see {import('@btakita/ui--browser--brookebrodack/content').content_feed__a__hyop} */
				hyop: 'content_feed__a__hyop'
			}, [
				heroicons_video_camera_({
					class: class_(
						'absolute',
						'top-12',
						'aspect-video',
						'w-[calc(100%-36px)]',
						'hidden',
						'group-[.play]:block',
						'opacity-50',
						'stroke-white')
				}),
				heroicons_pause_({
					class: class_(
						'absolute',
						'top-12',
						'aspect-video',
						'w-[calc(100%-36px)]',
						'hidden',
						'group-[.pause]:block',
						'opacity-50',
						'stroke-white')
				}),
				img_({
					src: videoId_thumbnail_url_(videoId, 'high'),
					class: class_(
						'w-full',
						'aspect-[4/3]',
						'rounded-lg'),
					loading: 'lazy'
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
