import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { sm_px_num } from '../css/index.js'
import { innerWidth_ } from './innerWidth.js'
export const [
	innerWidth_lte_sm$_,
	innerWidth_lte_sm_,
] = id_be_memo_pair_(
	'innerWidth_lte_sm',
	ctx=>
		nullish__none_([innerWidth_(ctx)],
			innerWidth=>innerWidth <= sm_px_num))
