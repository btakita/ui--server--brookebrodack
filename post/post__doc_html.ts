import { blog_post__tag_, blog_post__title_, blog_post__description_ } from '@rappstack/domain--server--blog/post'
import {
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { class_ } from 'ctx-core/html'
import { raw_ } from 'relementjs'
import { article_, div_, h1_, main_, section_, style_ } from 'relementjs/html'
import { type request_ctx_T } from 'rhonojs/server'
import { back_link__a_, layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
import nature_origami_bg_webp from '../public/assets/images/nature-origami-bg.webp'
export function post__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	const title = blog_post__title_(ctx) ?? 'Post'
	const description = blog_post__description_(ctx) ?? ''
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'ItemPage')
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
