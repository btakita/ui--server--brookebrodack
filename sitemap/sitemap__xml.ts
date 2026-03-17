import { sorted_dehydrated_post_meta_a1_ } from '@rappstack/domain--any--blog/post'
import { site__website_ } from '@rappstack/domain--server/site'
import { doc__render, xml_doctype } from '@rappstack/ui--server/doc'
import {
	loc_,
	url_,
	urlset_,
	video_content_loc_,
	video_description_,
	video_publication_date_,
	video_thumbnail_loc_,
	video_title_,
	video_video_,
} from '@rappstack/ui--server/sitemap'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T } from 'rhonojs/server'
function xml_escape(s:string):string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
}
function video_id__from_url(video_url:string):string|null {
	try {
		const url = new URL(video_url)
		return url.searchParams.get('v')
	} catch {
		return null
	}
}
export function sitemap__xml_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const website = site__website_(ctx)
	const post_meta_a1 = sorted_dehydrated_post_meta_a1_(ctx)
	return doc__render(
		xml_doctype,
		urlset_({ 'xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1' }, [
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
				? post_meta_a1.map(meta=>{
					const video_url = (meta as any).video_url as string|undefined
					const video_id = video_url ? video_id__from_url(video_url) : null
					return url_([
						loc_(url__join(website, '/content', meta.slug)),
						...(video_id
							? [video_video_([
								video_thumbnail_loc_(`https://i.ytimg.com/vi/${video_id}/hqdefault.jpg`),
								video_title_(xml_escape(meta.title)),
								video_description_(xml_escape(meta.description || meta.title)),
								video_content_loc_(`https://www.youtube.com/watch?v=${video_id}`),
								video_publication_date_(meta.pub_date.split('T')[0]),
							])]
							: []),
					])
				})
				: []),
		])
	)
}
