
import React, { useState } from 'react';
import { CSS, messages } from './resources';
import { CartFooterProps, CartFooterState } from './interfaces';

import { Button, Modal } from 'antd';
import { RMBIcon } from '../utilities';

import { isBuyableGood } from '../../util';

const CartFooter: React.FunctionComponent<CartFooterProps> = (props) => {

	// 计算总价
	const totalPrice = calcTotalPrice(props.shops);

	const [orderModalMsg, setMsg] = useState<{ title: string, content: string }>(messages.orderModal.noWay);
	const [isModalActive, setActive] = useState<boolean>(false);

	return (
		<div className={CSS.cartFooter}>
			<span className={CSS.totalText}>{messages.total}</span>
			<div className={CSS.total}>
				<RMBIcon className={CSS.rmbSign} />
				<span className={CSS.totalPrice}>{totalPrice.toFixed(2)}</span>
			</div>
			<Button
				className={CSS.orderBtn}
				type='primary'
				onClick={() => {
					if (totalPrice === 0) setMsg(messages.orderModal.noneSelected);
					if (totalPrice > 10000) setMsg(messages.orderModal.cantAfford);
					else setMsg(messages.orderModal.noWay);
					setActive(true);
				}}
			>
				{messages.order}
			</Button>
			<Modal
				title={orderModalMsg.title}
				visible={isModalActive}
				okText={messages.ok}
				cancelText={messages.cancel}
				onOk={() => { setActive(false) }}
				onCancel={() => { setActive(false)}}
				closable={false}
				cancelButtonProps={{ value: ' dw' }}
			>{orderModalMsg.content}
			</Modal>
		</div>
	);
};

function calcTotalPrice(shops: Shop[]) {
	let sum = 0;
	shops.forEach(shop => {
		shop.goods.forEach(good => {
			if (isBuyableGood(good))
				sum += good.unitPrice * good.amount;
		});
	});
	return sum;
}

export default CartFooter;