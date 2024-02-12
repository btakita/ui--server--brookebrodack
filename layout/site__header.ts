import { class_ } from 'ctx-core/html'
import { div_, h1_, header_, img_ } from 'relementjs/html'
import { asset_path_a_ } from 'relysjs'
const [
	brooke_brodack_profile_jpg
] = await asset_path_a_(
	import('../public/assets/images/brooke-brodack-profile.jpg'))
export function site__header_() {
	return (
		header_({
			class: class_(
				'site__header',
				'flex',
				'items-center',
				'justify-center')
		}, [
			div_({
				class: class_(
					'flex-1',
					'flex',
					'items-center',
					'justify-end',
					'pr-2')
			}, [
				img_({
					src: brooke_brodack_profile_jpg,
					class: class_(
						'inline-block',
						'h-24',
						'w-24',
						'mt-4',
						'rounded-full')
				})
			]),
			div_({
				class: class_(
					'flex-1',
					'flex',
					'items-center',
					'justify-start',
					'pl-2')
			}, [
				h1_({
					class: class_(
						'mt-4',
						'text-center',
						'text-3xl')
				}, 'Brooke Brodack')
			])
		])
	)
}
