import { heroicons_film_ } from '@btakita/ui--any--brookebrodack/icon'
export default function() {
	return '' + heroicons_film_<'server'>({
		width: '24px',
		height: '24px',
		// language=css
		css: `
svg { stroke: black; }
@media (prefers-color-scheme: dark) {
	svg { stroke: white; }
}
	`.trim()
	})
}