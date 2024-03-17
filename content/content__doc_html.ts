import { videoId_thumbnail_url_, youtube_video_a1_ } from '@btakita/domain--server--brookebrodack/youtube'
import { heroicons_pause_, heroicons_video_camera_, heroicons_x_mark_ } from '@btakita/ui--any--brookebrodack/icon'
import { spinner__template_ } from '@btakita/ui--any--brookebrodack/spinner'
import { type youtube_video_tbl } from '@rappstack/domain--server--youtube/schema'
import {
	jsonld__add,
	WebPage__description__set,
	WebPage__hasPart__push,
	WebPage__headline__set,
	WebPage__mainContentOfPage__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import {
	schema_org_id_,
	schema_org_id_ref_,
	schema_org_rdfa_,
	schema_org_rdfa_property_,
	schema_org_rdfa_rev_
} from '@rappstack/domain--server/rdfa'
import { class_, style_ } from 'ctx-core/html'
import { a_, div_, em_, h2_, img_, main_, section_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article, VideoObject, WebPageElement } from 'schema-dts'
import { back_link__a_, layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
import nature_origami_bg_webp from '../public/assets/images/nature-origami-bg.webp'
import { YT_player__div_ } from '../youtube/index.js'
export function content__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	const title = 'Brooke Brodack Content Feed'
	const description = 'Brooke Brodack\'s latest content in her YouTube feed.'
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'CollectionPage')
	const Article_id_ref = schema_org_id_ref_(ctx, 'Article')
	WebPage__hasPart__push(ctx, Article_id_ref)
	const mainContentOfPage_id_ref = schema_org_id_ref_(ctx, 'mainContentOfPage')
	WebPage__mainContentOfPage__set(ctx, mainContentOfPage_id_ref)
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
			html_props: {
				class: class_('content__doc_html'),
			},
			body_props: {
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
				...schema_org_rdfa_<WebPageElement>('WebPageElement', mainContentOfPage_id_ref),
				/** @see {import('@btakita/ui--browser--brookebrodack/content').content__hyop} */
				hyop: 'content__hyop',
				...schema_org_rdfa_<Article>('Article', Article_id_ref),
			}, [
				spinner__template_({
					center_x: true,
					spinner_class: class_('top-32')
				}),
				site__header_({
					ctx,
					h1_text: 'Brooke Brodack\'s Content Feed',
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
	const Article_id_ref = schema_org_id_ref_(ctx, 'Article')
	WebPage__hasPart__push(ctx, Article_id_ref)
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
				'overflow-y-auto'),
			...schema_org_rdfa_<Article>('Article', Article_id_ref)
		}, [
			...youtube_video_a1_(ctx)!.map((brookebrodack_youtube_video, idx)=>
				youtube_video__a_(brookebrodack_youtube_video, idx)),
		])
	)
	function youtube_video__a_(
		brookebrodack_youtube_video:typeof youtube_video_tbl.$inferSelect,
		idx:number
	) {
		const { description, publishedAt, title, videoId } = brookebrodack_youtube_video
		const uploadDate = publishedAt.toISOString().split('T')[0]
		const thumbnailUrl = videoId_thumbnail_url_(videoId, 'high')
		// const VideoObject_id_ref = schema_org_id_ref_(ctx, `${videoId}_VideoObject`)
		jsonld__add(ctx, ()=><VideoObject>{
			'@id': schema_org_id_(ctx, `${videoId}_VideoObject`),
			'@type': 'VideoObject',
			isPartOf: Article_id_ref,
			thumbnailUrl,
			name: title,
			description,
			uploadDate
		})
		// WebPage__hasPart__push(ctx, VideoObject_id_ref)
		return a_({
			href: 'https://www.youtube.com/watch?v=' + videoId,
			title,
			// ...schema_org_rdfa_rev_<Article>('isPartOf'),
			// ...schema_org_rdfa_<VideoObject>('VideoObject', VideoObject_id_ref),
			'data-op': encodeURIComponent(JSON.stringify({ videoId })),
			class: class_(
				'relative',
				'flex',
				'flex-col',
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
				src: thumbnailUrl,
				alt: 'Video Thumbnail for ' + title,
				class: class_(
					'w-full',
					'aspect-[4/3]',
					'rounded-lg'),
				loading: idx ? 'lazy' : 'eager',
				// ...schema_org_rdfa_property_<VideoObject>('thumbnailUrl'),
			}),
			h2_({
				class: class_(
					'text-xl',
					'font-bold'),
				// ...schema_org_rdfa_property_<VideoObject>('name'),
			}, title),
			description
				? div_({
					class: class_('text-l'),
					// ...schema_org_rdfa_property_<VideoObject>('description'),
				}, description)
				: undefined,
			publishedAt
				? em_({
					class: class_(
						'relative',
						'bottom-0',
						'inline-block',
						'mt-auto'),
					// ...schema_org_rdfa_property_<VideoObject>('uploadDate')
				}, [uploadDate])
				: undefined,
		])
	}
}
