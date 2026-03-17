import { sorted_dehydrated_post_meta_a1_ } from '@rappstack/domain--any--blog/post'
import { site__website_ } from '@rappstack/domain--server/site'
import { doc__render, xml_doctype } from '@rappstack/ui--server/doc'
import { loc_, url_, urlset_ } from '@rappstack/ui--server/sitemap'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T } from 'rhonojs/server'
export function sitemap__xml_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const website = site__website_(ctx)
	const post_meta_a1 = sorted_dehydrated_post_meta_a1_(ctx)
	return doc__render(
		xml_doctype,
		urlset_([
			url_([
				loc_(website)
			]),
			url_([
				loc_(url__join(website, '/brookers'))
			]),
			url_([
				loc_(url__join(website, '/content'))
			]),
			url_([
				loc_(url__join(website, '/site'))
			]),
			...(post_meta_a1
				? post_meta_a1.map(meta=>
					url_([
						loc_(url__join(website, '/content', meta.slug))
					]))
				: []),
		])
	)
}
