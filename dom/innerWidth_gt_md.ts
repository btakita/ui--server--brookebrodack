import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { md_px_num } from '../css/index.js'
import { innerWidth_ } from './innerWidth.js'
export const [
	innerWidth_gt_md$_,
	innerWidth_gt_md_,
] = id_be_memo_pair_(
	'innerWidth_gt_md',
	ctx=>
		nullish__none_([innerWidth_(ctx)],
			innerWidth=>innerWidth > md_px_num))
