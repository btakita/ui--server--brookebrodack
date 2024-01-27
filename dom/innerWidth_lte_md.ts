import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { md_px_num } from '../css/index.js'
import { innerWidth_ } from './innerWidth.js'
export const [
	innerWidth_lte_md$_,
	innerWidth_lte_md_,
] = id_be_memo_pair_(
	'innerWidth_lte_md',
	ctx=>
		nullish__none_([innerWidth_(ctx)],
			innerWidth=>innerWidth <= md_px_num))
