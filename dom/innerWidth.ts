import { is_browser_, is_server_ } from 'ctx-core/env'
import { id_be_sig_triple_, rmemo__off__add } from 'ctx-core/rmemo'
export const [
	innerWidth$_,
	innerWidth_,
	innerWidth__set,
] = id_be_sig_triple_<number|null>(
	'innerWidth',
	()=>is_browser_() ? window.innerWidth : null
).add((ctx, innerWidth$)=>{
	if (is_server_()) return
	window.addEventListener('orientationchange', refresh)
	window.addEventListener('resize', refresh)
	rmemo__off__add(innerWidth$, ()=>{
		window.removeEventListener('orientationchange', refresh)
		window.removeEventListener('resize', refresh)
	})
	function refresh() {
		innerWidth__set(ctx, window.innerWidth)
	}
})
