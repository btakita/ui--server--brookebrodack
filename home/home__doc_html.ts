import {
	email_url,
	instagram_url,
	linkedin_url,
	patreon_url,
	youtube_url
} from '@btakita/domain--any--brookebrodack/social'
import {
	fa_email_,
	fa_instagram_,
	fa_linkedin_,
	fa_patreon_,
	fa_youtube_,
	heroicons_film_,
	heroicons_video_camera_
} from '@btakita/ui--any--brookebrodack/icon'
import { WebPage__description__set, WebPage__headline__set, WebPage__name__set } from '@rappstack/domain--server/jsonld'
import { schema_org_Article_rdfa, type schema_org_props_rdfa_T } from '@rappstack/domain--server/rdfa'
import { site__title_ } from '@rappstack/domain--server/site'
import { iconify_rss_ } from '@rappstack/ui--any--blog/icon'
import { schema_org_Article__link_a1_ } from '@rappstack/ui--server/rdfa'
import { class_, style_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { a_, article_, div_, section_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { type Article } from 'schema-dts'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
import nature_origami_bg_webp from '../public/assets/images/nature-origami-bg.webp'
export function home__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	const title = site__title_(ctx)
	const description = 'Brooke Brodack has been on YouTube since 2004. Her channel, Brookers, once had the most subscribers on YouTube. With over 64000 subscribers. Her video, "Crazed Numa Fan" had over 8.4 million views. Brooke was one of the first Youtubers to get a professional contract with a major media studio. With her NBC contract, she worked with Late Night host Carson Daly. Several major publications had feature articles about Brooke Brodack. These include the Los Angeles Times, Entertainment Weekly, & the Wall Street Journal.'
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
			html_props: {
				class: class_('home__doc_html'),
			}
		}, [
			article_({
				...schema_org_Article_rdfa,
			}, [
				schema_org_Article__link_a1_(ctx),
				div_({
					...<schema_org_props_rdfa_T<Article>>{
						property: 'articleBody'
					},
					class: class_(
						'min-h-screen',
						'overflow-x-hidden',
						'relative',
						'bg-cover',
						'bg-no-repeat'),
					style: style_({
						'background-image': 'url(' + nature_origami_bg_webp + ')'
					})
				}, [
					site__header_({
						ctx,
						h1_text: 'Brooke Brodack'
					}),
					home_link__section_(),
					site__footer_({ ctx })
				])
			]),
		])
	)
	function home_link__section_() {
		return (
			section_({
				class: class_(
					'flex',
					'flex-col',
					'items-center',
					'justify-center',
					'my-12')
			}, [
				home_link__a_({
					href: '/content',
				}, [
					'Content Feed',
					home_link__a__icon_({
					}, heroicons_video_camera_)
				]),
				home_link__a_({
					href: '/brookers',
				}, [
					'Brookers Timeline',
					home_link__a__icon_({
					}, heroicons_film_)
				]),
				home_link__a_({
					href: youtube_url,
					external: true
				}, [
					'Youtube',
					home_link__a__icon_({
					}, fa_youtube_)
				]),
				home_link__a_({
					href: patreon_url,
					external: true
				}, [
					'Patreon',
					home_link__a__icon_({}, fa_patreon_)
				]),
				home_link__a_({
					href: instagram_url,
					external: true
				}, [
					'Instagram',
					home_link__a__icon_({}, fa_instagram_)
				]),
				home_link__a_({
					href: linkedin_url,
					external: true
				}, [
					'LinkedIn',
					home_link__a__icon_({}, fa_linkedin_)
				]),
				home_link__a_({
					href: email_url,
					external: true
				}, [
					'Email',
					home_link__a__icon_({}, fa_email_)
				]),
				home_link__a_({
					href: '/rss',
					external: true
				}, [
					'RSS Feed',
					home_link__a__icon_({}, iconify_rss_)
				])
			])
		)
	}
	function home_link__a_({
		href,
		class: _class,
		external,
	}:{
		href:string
		class?:string
		external?:boolean
	}, ...children:tag_dom_T[]) {
		return (
			a_({
				href,
				...external
					? {
						target: '_blank',
						rel: 'noopener',
					}
					: {},
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
			}, ...children)
		)
	}
	function home_link__a__icon_(
		{ class: _class }:{ class?:string },
		icon_:(props:{ class?:string })=>tag_dom_T
	) {
		return (
			div_({
				class: class_(
					'inline-block',
					'h-6',
					'w-6',
					'translate-x-2',
					'text-center',
					_class)
			}, [
				icon_({
					class: class_('fill-gray-900')
				})
			])
		)
	}
}
