
import { Checkbox, Input, Button, Modal, Popover } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import React, { useCallback, useState } from 'react';
import { CSS, messages, assets } from './resources';
import { GoodItemProps } from './interfaces';

import { RMBIcon } from '../utilities';

const GoodItem: React.FunctionComponent<GoodItemProps> = (props) => {
	const {
		name,
		amount,
		description,
		imageUrl,
		isSelected,
		stockAmount,
		unitPrice,
		subname
	} = props.good;

	const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

	// 处理改变商品数量
	const handleInputNewAmount: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
		const valueStr = e.target.value;
		if (/^[0-9]{1,2}$/.test(valueStr) === false) return;
		const value = Number(valueStr);
		if (value === 0) return;
		if (amount > stockAmount && value > amount) return;
		props.onChangeAmount(value);
	}, null);

	return (
		<div className={stockAmount === 0 ? CSS.goodItemError : amount > stockAmount ? CSS.goodItemWarn : CSS.goodItem}>
			<div className={CSS.checkAndImage}>
				{/* 选择框 */}
				<div className={CSS.checkbox}>
					<Checkbox
						disabled={amount > stockAmount}
						checked={isSelected && stockAmount > 0}
						onChange={props.onSelect}
					/>
				</div>
				{/* 商品图像 */}
				<div className={CSS.image}>
					<img className={CSS.itemImage} src={imageUrl} />
				</div>
			</div>
			{/* 商品信息，包含名称和简述 */}
			<div className={CSS.info}>
				<Popover content={<div className={CSS.popoverContent}>{name}</div>} >
					<span className={CSS.name}>{name}</span>
				</Popover>
				<Popover content={<div className={CSS.popoverContent}>{description}</div>} placement='bottom'>
					<span className={CSS.description}>{description}</span>
				</Popover>
			</div>
			{/* 商品二级名称（子项名） */}
			<Popover content={<div className={CSS.popoverContent}>{subname}</div>}>
				<span className={CSS.subName}>{subname}</span>
			</Popover>
			{/* 商品单价 */}
			<div className={CSS.unitPrice}>
				<RMBIcon />
				<span className={CSS.unitPriceText}>{unitPrice.toFixed(2)}</span>
			</div>
			{/* 商品数量 */}
			<div className={CSS.amount}>
				{/* 增减按钮和输入框 */}
				<div className={CSS.amountInputGroup}>
					<Button
						className={CSS.amountDecrementBtn}
						disabled={amount <= 1 || stockAmount === 0}
						onClick={() => { props.onChangeAmount(amount - 1); }}
					>
						<MinusOutlined />
					</Button>
					<Input
						className={CSS.amountInputBox}
						value={amount}
						disabled={stockAmount === 0}
						onChange={handleInputNewAmount}
					/>
					<Button
						className={CSS.amountIncrementBtn}
						disabled={stockAmount <= amount || stockAmount === 0}
						onClick={() => { props.onChangeAmount(amount + 1); }}
					>
						<PlusOutlined />
					</Button>
				</div>
				{/* 库存信息 */}
				<div className={CSS.amountStockInfo}>{(() => {
					if (stockAmount === 0) {
						// 若没有库存量
						return <div className={CSS.amountStockInfoWarnNoneLeft}>
							{messages.noneLeft}
						</div>;
					} else if ((stockAmount <= 99 && stockAmount != 0) || amount > stockAmount) {
						// 若库存数量在1~5，或者购物车中选中的数量大于库存数量
						return <div className={CSS.amountStockInfoWarnRemainingStock}>
							{messages.remainingStock + stockAmount + messages.count}
						</div>;
					} else {
						// 若库存量充足
						return <div className={CSS.amountStockInfoSufficient}>
							{messages.stockSufficient}
						</div>;
					}
				})()}</div>
			</div>
			{/* 小计 */}
			<div className={CSS.subtotal}>
				<RMBIcon />
				<span className={CSS.unitPriceText}>{(unitPrice * amount).toFixed(2)}</span>
			</div>
			{/* 操作 */}
			<div className={CSS.action}>
				<Button
					className={CSS.deleteBtn}
					onClick={() => { setShowModalDelete(true); }}
				>{messages.delete}
				</Button>
				<Modal
					title={messages.confirmDeleteModalTitle}
					visible={showModalDelete}
					okText={messages.confirmDelete}
					cancelText={messages.cancelDelete}
					onOk={() => { setShowModalDelete(false); props.onDelete(); }}
					onCancel={() => { setShowModalDelete(false); }}
				>
					<p className={CSS.name}>{name}</p>
					<div className={CSS.image}>
						<img className={CSS.itemImage} src={imageUrl} />
					</div>
				</Modal>
				{/* 删除操作确认对话框 */}
			</div>

		</div>
	);
};

export default GoodItem;
