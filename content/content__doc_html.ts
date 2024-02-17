import { videoId_thumbnail_url_, youtube_video_a1_ } from '@btakita/domain--server--brookebrodack/youtube'
import { heroicons_pause_, heroicons_uturn_left_, heroicons_video_camera_ } from '@btakita/ui--any--brookebrodack/icon'
import { spinner__template_ } from '@btakita/ui--any--brookebrodack/spinner'
import { class_, style_ } from 'ctx-core/html'
import { a_, div_, h2_, img_, main_, section_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
import nature_origami_bg_jpg from '../public/assets/images/nature-origami-bg.jpg'
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
					'background-image': 'url(' + nature_origami_bg_jpg + ')'
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
					title: 'Content Feed'
				}, [
					a_({
						href: '/',
						class: class_(
							'back_link',
							'fixed',
							'top-4',
							'right-4',
							'z-30',
							'flex-none',
							'h-6',
							'w-6',
							'cursor-pointer')
					}, [
						heroicons_uturn_left_({
							class: class_(
								'shadow-sm',
								'stroke-gray-500')
						})
					])
				]),
				top_half__div_(),
				bottom_half__div_(),
			])
		])
	)
	function top_half__div_() {
		return (
			div_({
				id: 'top_half__div',
				class: class_(
					'max-h-50dvh',
					'top-0',
					'z-10',
					'pb-4',
					'motion-reduce:bg-cyan-600/90')
			}, [
				div_({
					class: class_(
						'video__div',
						'relative',
						'noscript:h-1/3',
						'noscript:lg:h-[600px]',
						'max-h-1/3',
						'lg:max-h-[600px]',
						'motion-reduce:lg:h-[600px]',
					)
				}, [
					YT_player__div_({
						class: class_(
							'hidden',
							'h-full',
							'w-full',
							'max-h-[600px]',
							'max-w-7xl',
							'aspect-video',
							'mx-auto',
							'scale-0',
							'motion-reduce:scale-100')
					})
				]),
			])
		)
	}
	function bottom_half__div_() {
	  return (
			div_({
				class: 'overflow-y-auto',
			}, [
				content_feed__section_({ ctx }),
				site__footer_({
					class: 'bg-cyan-600/90',
					icon_class: 'fill-white'
				}),
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
				'mx-auto')
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
					'group')
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
