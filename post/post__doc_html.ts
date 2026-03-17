import { Person_id_ref_ } from '@btakita/brookebrodack-site/jsonld/index.js'
import {
	blog_post__description_,
	blog_post__pub_date_,
	blog_post__tag_,
	blog_post__title_,
	blog_post_mod__meta_,
} from '@rappstack/domain--server--blog/post'
import {
	jsonld__add,
	jsonld_id__new,
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { class_ } from 'ctx-core/html'
import { raw_ } from 'relementjs'
import { article_, div_, h1_, main_, section_, style_ } from 'relementjs/html'
import { type request_ctx_T } from 'rhonojs/server'
import type { VideoObject } from 'schema-dts'
import { back_link__a_, layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
import nature_origami_bg_webp from '../public/assets/images/nature-origami-bg.webp'
export function post__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	const title = blog_post__title_(ctx) ?? 'Post'
	const description = blog_post__description_(ctx) ?? ''
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'ItemPage')
	const meta = blog_post_mod__meta_(ctx)
	const video_url = (meta as any)?.video_url as string|undefined
	if (video_url) {
		const videoId = video_id__from_url(video_url)
		if (videoId) {
			const pub_date = blog_post__pub_date_(ctx)
			jsonld__add(ctx, ()=><VideoObject>{
				'@id': jsonld_id__new(ctx, `${videoId}_VideoObject`),
				'@type': 'VideoObject',
				name: title,
				description: description || title,
				thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
				contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
				embedUrl: `https://www.youtube.com/embed/${videoId}`,
				uploadDate: pub_date ?? undefined,
				author: Person_id_ref_(ctx),
			})
		}
	}
	const blog_post__tag = blog_post__tag_(ctx)
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
			html_props: {
				class: class_('post__doc_html'),
			},
			body_props: {
				class: class_(
					'bg-cover',
					'bg-no-repeat'),
				style: `background-image: url(${nature_origami_bg_webp})`
			}
		}, [
			style_(raw_('.post__doc_html article iframe { width: 100%; aspect-ratio: 16/9; height: auto; }')),
			main_({
				class: class_(
					'min-h-screen',
					'relative',
					'backdrop-blur-3xl'),
			}, [
				site__header_({
					ctx,
					h1_text: title,
				}),
				section_({
					class: class_(
						'max-w-4xl',
						'mx-auto',
						'px-4',
						'py-8'),
				}, [
					article_({
						class: class_(
							'prose',
							'prose-lg',
							'prose-invert',
							'max-w-none',
							'bg-white/80',
							'rounded-lg',
							'p-6',
							'shadow-lg'),
					}, [
						blog_post__tag
							? blog_post__tag(ctx)
							: div_('Post not found.')
					])
				])
			]),
			back_link__a_({ href: '/content' }),
			site__footer_({ ctx })
		])
	)
}
function video_id__from_url(video_url:string):string|null {
	try {
		const url = new URL(video_url)
		return url.searchParams.get('v')
	} catch {
		return null
	}
}
