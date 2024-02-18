import { md__raw_ } from '@rappstack/ui--any--blog/md'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { class_, style_ } from 'ctx-core/html'
import { div_, main_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import nature_origami_bg_jpg from '../../../public/assets/images/nature-origami-bg.jpg'
import { back_link__a_, layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
export function site__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout__doc_html_({
			ctx,
			title: 'About this Site',
			html_props: {
				class: class_('site__doc_html'),
			},
			body__props: {
				class: class_(
					'bg-cover',
					'bg-no-repeat'),
				style: style_({
					'background-image': 'url(' + nature_origami_bg_jpg + ')'
				})
			}
		}, [
			main_({
				class: class_(
					'min-h-screen',
					'relative',
					'backdrop-blur-3xl'),
			}, [
				site__header_({
					ctx,
					title: 'About this site'
				}, [
					back_link__a_({})
				]),
				div_({
					class: class_(
						'm-auto',
						'prose',
						'p-2',
						'rounded',
						'max-w-prose',
						'bg-cyan-600/40',
						'border-1px',
						'border-white/.3',
						'shadow-md',
						'[&>h2]:my-2',
						'[&>h2]:text-2xl',
					)
				}, [
					// language=md
					md__raw_(`
This site is developed by [Brian Takita](https://briantakita.me) under the Apache 2 license for Brooke Brodack & her audience. Here is the [source code](https://github.com/btakita/brookebrodack-dev). You are free to study the source code, modify it, fork it, contribute pull requests, etc.

## Technology Stack

- ${tb_a_({ href: 'https://github.com/rappstack' }, 'rappstack')}
- ${tb_a_({ href: 'https://github.com/ctx-core/rmemo' }, 'rmemo')}
- ${tb_a_({ href: 'https://github.com/relysjs/relysjs' }, 'relysjs')}
- ${tb_a_({ href: 'https://github.com/relementjs/relementjs' }, 'relysjs')}
- ${tb_a_({ href: 'https://github.com/ctx-core/ctx-core' }, 'ctx-core')}
- ${tb_a_({ href: 'https://github.com/elysiajs/elysia' }, 'elysiajs')}
- ${tb_a_({ href: 'https://bun.sh/' }, 'bunjs')}
- ${tb_a_({ href: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API' }, 'web animations')}
				`),
				]),
			]),
			site__footer_({})
		])
	)
}
