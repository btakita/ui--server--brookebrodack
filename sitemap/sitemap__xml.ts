import { doc__render, xml_doctype } from '@rappstack/ui--server/doc'
import { loc_, url_, urlset_ } from '@rappstack/ui--server/sitemap'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T, request_url_ } from 'relysjs/server'
export function sitemap__xml_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const { origin } = request_url_(ctx)
	return doc__render(
		xml_doctype,
		urlset_([
			url_([
				loc_(origin)
			]),
			url_([
				loc_(url__join(origin, '/brookers'))
			]),
			url_([
				loc_(url__join(origin, '/content'))
			]),
			url_([
				loc_(url__join(origin, '/site'))
			]),
		])
	)
}
