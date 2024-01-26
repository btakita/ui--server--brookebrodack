#!/usr/bin/env bun
import { param_r_ } from 'ctx-core/cli-args'
import { link, rm } from 'node:fs/promises'
import { dirname, join } from 'path'
const param_r = param_r_(process.argv.slice(2), {
	help: '-h, --help',
	public: '-p, --public'
})
if (param_r.help) {
	console.info(help_msg_())
	process.exit(0)
}
const public_dir = param_r.public[0]
if (!public_dir) {
	throw Error('--public is required')
}
const project_dir = join(
	dirname(new URL(import.meta.url).pathname),
	'..')
await rm(join(project_dir, 'public'), { force: true, recursive: true })
await link(public_dir, join(project_dir, 'public'))
export function help_msg_() {
	return `
Usage: ui--server--brookebrodack__public__ln [-p <package-dir>]

Options:

-h, --help    This help message
-p, --public  Public directly to link in this library
		`.trim()
}
