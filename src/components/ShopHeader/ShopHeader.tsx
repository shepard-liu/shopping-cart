
import { Checkbox } from 'antd';

import React from 'react';
import { CSS, messages } from './resources';
import { ShopHeaderProps } from './interfaces';

import { getActiveGoodsCount } from '../../util';

const ShopHeader: React.FunctionComponent<ShopHeaderProps> = (props) => {

	// 确定选中状态
	const shop = props.shop;
	const [activeGoodsCount, goodSelectCount] = getActiveGoodsCount(shop);

	return (
		<div className={CSS.shopHeader}>
			<Checkbox
				disabled={activeGoodsCount === 0}
				checked={goodSelectCount !== 0}
				indeterminate={goodSelectCount != 0 && goodSelectCount != shop.goods.length}
				onChange={() => props.onToggleShopSelectAll(goodSelectCount === 0)}
			/>
			<span className={CSS.shopName}>{shop.name}</span>
		</div>
	);

};
export default ShopHeader;