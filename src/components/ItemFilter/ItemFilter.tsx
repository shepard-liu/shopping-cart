
import React, { useState } from 'react';
import { CSS, messages } from './resources';
import { ItemFilterProps, FilterType } from './interfaces';

import ShopHeader from '../ShopHeader/ShopHeader';
import GoodItem from '../GoodItem/GoodItem';

import { isActiveSelectedGood } from '../../util';

const ItemFilter: React.FunctionComponent<ItemFilterProps> = (props) => {

	const { shops, searchStr, filter } = props;

	// 过滤所要求的商品
	const filteredShops = filterItems(shops, filter, searchStr);

	if (filteredShops.length !== 0)
		return (
			<div className={CSS.itemFilter}>{
				filteredShops.map((shop) => {
					return (
						<div className={CSS.shop} key={shop.id}>
							<ShopHeader
								shop={shop}
								onToggleShopSelectAll={(doSelectAll: boolean) => props.onToggleShopSelectAll(shop, doSelectAll)}
							/>
							<div className={CSS.goodsList}>{
								shop.goods.map((good) => {
									return <GoodItem
										good={good}
										key={good.id}
										onDelete={() => props.onDeleteGood(good)}
										onChangeAmount={(newAmount) => props.onChangeGoodAmount(good, newAmount)}
										onSelect={() => props.onSelectGood(good)}
									/>;
								})
							}</div>
						</div>
					)
				})
			}</div>
		);
	else return (
		<div className={CSS.emptyPlaceholder}>{messages.emptyPlaceholder}</div>
	)
};

function filterItems(shops: Shop[], condition: FilterType, searchStr: string) {
	const filteredShops: Shop[] = [];
	shops.forEach((shop) => {
		const filteredGoods: Good[] = shop.goods.filter(good => {
			if ((condition === 'selected' && isActiveSelectedGood(good)) ||
				(condition === 'unselected' && !isActiveSelectedGood(good)) ||
				condition === 'all') {
				if (searchStr && good.name.indexOf(searchStr) === -1)
					return false;
				return true;
			}
			return false;
		});
		if (filteredGoods.length) {
			filteredShops.push({
				id: shop.id,
				name: shop.name,
				goods: filteredGoods
			});
		}
	});
	return filteredShops;
}

export default ItemFilter