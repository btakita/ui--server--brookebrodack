import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { lg_px_num } from '../css/index.js'
import { innerWidth_ } from './innerWidth.js'
export const [
	innerWidth_gt_lg$_,
	innerWidth_gt_lg_,
] = id_be_memo_pair_(
	'innerWidth_gt_lg',
	ctx=>
		nullish__none_([innerWidth_(ctx)],
			innerWidth=>innerWidth > lg_px_num))
