import { Person_id_ref_ } from '@btakita/brookebrodack-site/jsonld/index.js'
import { email_url } from '@btakita/domain--any--brookebrodack/social'
import { fa_email_, heroicons_film_, heroicons_video_camera_ } from '@btakita/ui--any--brookebrodack/icon'
import {
	jsonld__add,
	jsonld_id__new,
	WebPage__author__set,
	WebPage__description__set,
	WebPage__hasPart__push,
	WebPage__headline__set,
	WebPage__mainEntity__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { site__social_a1_, site__title_, site__website_ } from '@rappstack/domain--server/site'
import { iconify_rss_ } from '@rappstack/ui--any--blog/icon'
import { class_, style_ } from 'ctx-core/html'
import { url__join } from 'ctx-core/uri'
import { type tag_dom_T } from 'relementjs'
import { a_, div_, section_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
import nature_origami_bg_webp from '../public/assets/images/nature-origami-bg.webp'
export function home__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	const title = site__title_(ctx)
	const description = 'Brooke Brodack has been on YouTube since 2004. Her channel, Brookers, once had the most subscribers on YouTube. With over 64000 subscribers. Her video, "Crazed Numa Fan" had over 8.4 million views. Brooke was one of the first Youtubers to get a professional contract with a major media studio. With her NBC contract, she worked with Late Night host Carson Daly. Several major publications had feature articles about Brooke Brodack. These include the Los Angeles Times, Entertainment Weekly, & the Wall Street Journal.'
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__author__set(ctx, undefined)
	WebPage__mainEntity__set(ctx, Person_id_ref_(ctx))
	WebPage__type__set(ctx, 'ProfilePage')
	return (
		layout__doc_html_({
			ctx,
			title,
			description,
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
					'background-image': 'url(' + nature_origami_bg_webp + ')'
				}),
			}, [
				site__header_({
					ctx,
					h1_text: 'Brooke Brodack'
				}),
				home_link__section_(),
				site__footer_({ ctx })
			])
		])
	)
	function home_link__section_() {
		const Article_id_ref = jsonld__add(ctx, ()=><Article>{
			'@id': jsonld_id__new(ctx, 'Article'),
			'@type': 'Article',
			author: Person_id_ref_(ctx),
			headline: title,
			image: url__join(site__website_(ctx)!, nature_origami_bg_webp),
			articleBody:
				[
					'Content Feed',
					'Brookers Timeline',
					...site__social_a1_(ctx)!.map(({ link_title })=>link_title),
					'Email',
					'RSS Feed'
				].join(' | '),
		})
		WebPage__hasPart__push(ctx, Article_id_ref)
		return (
			section_({
				class: class_(
					'flex',
					'flex-col',
					'items-center',
					'justify-center',
					'my-12'),
			}, [
				home_link__a_({
					href: '/content',
				}, [
					'Content Feed',
					home_link__a__icon_({}, heroicons_video_camera_)
				]),
				home_link__a_({
					href: '/brookers',
				}, [
					'Brookers Timeline',
					home_link__a__icon_({}, heroicons_film_)
				]),
				...site__social_a1_(ctx)!.map(({ href, link_title, icon_ })=>
					home_link__a_({
						href,
						external: true
					}, [
						link_title,
						home_link__a__icon_({}, icon_)
					])),
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
