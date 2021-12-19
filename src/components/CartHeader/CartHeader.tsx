
import React, { useCallback, useState } from 'react';
import { CSS, messages } from './resources';
import { CartHeaderProps, SelectOptionProps } from './interfaces';

import { Input, Checkbox, AutoComplete } from 'antd';
import { SelectProps, Radio } from 'antd';

import { getActiveGoodsCount, getAllGoodsCount } from '../../util';
import search from 'antd/lib/transfer/search';

const CartHeader: React.FunctionComponent<CartHeaderProps> = (props) => {

	const [searchStr, setSearchStr] = useState<string>(null);

	// 统计商品数量和选中数量
	const [activeGoodsCount, selectedCount] = getActiveGoodsCount(props.shops);
	const allGoodsCount = getAllGoodsCount(props.shops);

	// State
	const [options, setOptions] = useState<SelectProps<string>['options']>([]);

	// 购物车商品搜索事件响应
	const handleSearch = useCallback(
		(value: string) => {
			if (value) {
				props.onSearch(value);
				setSearchStr(value);
			}
		}, null);

	// 搜索时补全提示激活响应
	const handleAutoComplete = useCallback(
		(value: string) => {
			if (!value)
				setOptions([]);
			else {
				const newOptions: typeof options = [];
				props.shops.forEach((shop) => {
					shop.goods.forEach(good => {
						const { name, id } = good;
						const searchStrIdx = name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase());

						if (searchStrIdx !== -1) {
							newOptions.push({
								value: name,
								label: (
									<SelectOption
										key={id}
										leftStr={name.substring(0, searchStrIdx)}
										searchStr={name.substring(searchStrIdx, searchStrIdx + value.length)}
										rightStr={name.substring(searchStrIdx + value.length)}
									/>
								)
							});
						}
					})
				});
				if (newOptions.length === 0)
					newOptions.push({ value: null, label: (<SelectOption fallback />) });
				setOptions(newOptions);
			}
		}, [props.shops]);

	return (
		<div className={CSS.cartHeader}>
			<section className={CSS.header}>
				{/* 商品数量 */}
				<span className={CSS.goodsCount}>{messages.goodsCount + ' ' + allGoodsCount}</span>
				<Radio.Group className={CSS.filterBtns} defaultValue="all" onChange={(e) => props.onChangeFilter(e.target.value)}>
					<Radio.Button value='unselected' className={CSS.filterUnselected}>{messages.filterBtns.unselected}</Radio.Button>
					<Radio.Button value="selected" className={CSS.filterSelected}>{messages.filterBtns.selected}</Radio.Button>
					<Radio.Button value="all" className={CSS.filterAll}>{messages.filterBtns.all}</Radio.Button>
				</Radio.Group>
				{/* 搜索框 */}
				<AutoComplete
					className={CSS.searchAutoComplete}
					onSearch={handleAutoComplete}
					onSelect={handleSearch}
					onChange={(value) => { if (!value) props.onSearch(null); }}
					options={options}
				>
					<Input.Search
						allowClear
						placeholder={messages.searchPlaceholder}
						enterButton
						className={CSS.search}
					/>
				</AutoComplete>
			</section>
			{/* 购物车总列表头 */}
			<section className={CSS.listHeader}>
				<Checkbox
					className={CSS.selectAll}
					checked={activeGoodsCount === selectedCount}
					onChange={() => { props.onSelectAllChange(selectedCount === 0) }}
					indeterminate={selectedCount != 0 && selectedCount < activeGoodsCount}
				>
					{messages.selectAll}
				</Checkbox>
				<span className={CSS.good}>{messages.good}</span>
				<span className={CSS.unitPrice}>{messages.unitPrice}</span>
				<span className={CSS.amount}>{messages.amount}</span>
				<span className={CSS.subtotal}>{messages.subtotal}</span>
				<span className={CSS.action}>{messages.action}</span>
			</section>
		</div>
	);
};

const SelectOption: React.FunctionComponent<SelectOptionProps> = (props) => {

	return props.fallback
		? <span className={CSS.optionFallback}>{messages.optionFallback}</span>
		: (<div className={CSS.option}>
			<span className={CSS.optionLeftStr}>{props.leftStr}</span>
			<span className={CSS.optionSearchStr}>{props.searchStr}</span>
			<span className={CSS.optionRightStr}>{props.rightStr}</span>
		</div>);
};


export default CartHeader;