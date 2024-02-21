import { youtube_video_a1_ } from '@btakita/domain--server--brookebrodack/youtube'
import { site__description_, site__website_ } from '@rappstack/domain--server/site'
import { author_, channel_, description_, guid_, item_, link_, pubDate_, rss_, title_ } from '@rappstack/ui--server/rss'
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
				description_(site__description_(ctx)),
				link_(site__website_(ctx)),
				...youtube_video_a1_(ctx)!.map(youtube_video=>
					item_([
						title_(youtube_video.title),
						link_([
							'https://www.youtube.com/watch?v=' + youtube_video.videoId
						]),
						guid_({
							isPermaLink: 'true'
						}, [
							'https://www.youtube.com/watch?v=' + youtube_video.videoId
						]),
						description_(youtube_video.description),
						pubDate_(youtube_video.publishedAt),
						author_(youtube_video.channelTitle)
					]))
			])
		])
	])
}
