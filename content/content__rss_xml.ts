import { site__description_ } from '@rappstack/domain--server/site'
import { channel_, description_, rss_, title_ } from '@rappstack/ui--server/rss'
import { fragment_, raw_ } from 'relementjs'
import { type request_ctx_T } from 'relysjs/server'
export function content__rss_xml_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	return '' + fragment_([
		raw_('<?xml version="1.0" encoding="UTF-8"?>'),
		rss_({ version: '2.0' }, [
			channel_([
				title_('Brooke Brodack'),
				description_(site__description_(ctx))
			])
		])
	])
}
