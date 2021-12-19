
import React, { useState, FunctionComponent, useCallback, useEffect } from 'react';
import { CSS } from './resources';
import { AppProps } from './interfaces';
import { FilterType } from '../components/ItemFilter/interfaces';

// Components
import CartHeader from '../components/CartHeader/CartHeader';
import CartFooter from '../components/CartFooter/CartFooter';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';
import ItemFilter from '../components/ItemFilter/ItemFilter';

import { isSelectableGood, setAndCopyGood, setAndCopyShop } from '../util';

// 使用示例购物车数据
import myCartItems from '../sampleData';

const App: FunctionComponent<AppProps> = (props) => {

	// 获取状态
	const [shops, setShops] = useState<Shop[]>([]);
	const [searchStr, setSearchStr] = useState<string>(null);
	const [filter, setFilter] = useState<FilterType>('all');

	// 初始化：获取购物车数据
	useEffect(() => {
		setShops(myCartItems);
	}, []);

	// 处理全选事件
	const handleSelectAllChange = useCallback((doSelectAll: boolean) => {
		setShops(shops.map(shop => {
			const goods = shop.goods.map((good) => {
				if (isSelectableGood(good))
					return setAndCopyGood(good, { isSelected: doSelectAll });
				else return good;
			});
			return setAndCopyShop(shop, { goods });
		}))
	}, null);

	// 处理搜索事件
	const handleSearch = useCallback((searchStr: string) => { setSearchStr(searchStr); }, null);

	// 处理选择商品
	const handleSelectGood = useCallback((which: Good) => {
		setShops(shops.map(shop => {
			const goods = shop.goods.map((good) => {
				if (good.id === which.id) {
					return Object.assign({}, good, { isSelected: !good.isSelected });
				}
				else
					return good;
			});
			return setAndCopyShop(shop, { goods });
		}));
	}, null);

	// 处理切换店铺全选
	const handleToggleShopSelectAll = useCallback((which: Shop, doSelectAll: boolean) => {
		setShops(shops.map(shop => {
			if (which.id === shop.id) {
				const goods = shop.goods.map(good => {
					if (good.amount <= good.stockAmount)
						return setAndCopyGood(good, { isSelected: doSelectAll });
					else return good;
				});
				return setAndCopyShop(shop, { goods });
			} else return shop;
		}));
	}, null);

	// 处理商品数量变化
	const handleChangeGoodAmount = useCallback((which: Good, newAmount: number) => {
		if (newAmount > which.stockAmount) throw new Error("Invalid new amount of good" + which);
		setShops(shops.map(shop => {
			if (which.shopId === shop.id) {
				const goods = shop.goods.map(good => {
					if (which.id === good.id)
						return setAndCopyGood(good, { amount: newAmount });
					else return good;
				});
				return setAndCopyShop(shop, { goods });
			} else return shop;
		}))
	}, null);

	// 处理删除商品
	const handleDeleteGood = useCallback((which: Good) => {
		setShops(shops.map(shop => {
			if (which.shopId === shop.id) {
				const newGoods = shop.goods.concat();
				newGoods.splice(shop.goods.indexOf(which), 1);
				if (newGoods.length === 0)
					return null;
				return setAndCopyShop(shop, { goods: newGoods });
			} else return shop;
		}).filter(shop => shop));
	}, null);


	return (
		<div>
			<PageHeader />
			<div className={CSS.cartContainer}>
				<div className={CSS.space} />
				<div className={CSS.main} >
					<CartHeader
						onSelectAllChange={handleSelectAllChange}
						shops={shops}
						onSearch={handleSearch}
						onChangeFilter={(filter) => { setFilter(filter); }}
					/>
					<ItemFilter
						filter={filter}
						shops={shops}
						searchStr={searchStr}
						onSelectGood={handleSelectGood}
						onToggleShopSelectAll={handleToggleShopSelectAll}
						onChangeGoodAmount={handleChangeGoodAmount}
						onDeleteGood={handleDeleteGood}
					/>
					<div className={CSS.sepLine}></div>
					<CartFooter shops={shops}/>
				</div>
				<div className={CSS.space} />
			</div>
			<PageFooter />
		</div >
	)
}

export default App;