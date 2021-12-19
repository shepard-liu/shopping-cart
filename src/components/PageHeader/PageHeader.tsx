
// Components
import { ShoppingCartOutlined } from '@ant-design/icons';

import React, { FunctionComponent } from 'react';
import { CSS, messages, assets } from './resources';
import { PageHeaderProps } from './interfaces';


const PageHeader: FunctionComponent<PageHeaderProps> = (props) => {
	return (
		<div className={CSS.pageHeader}>
			<ShoppingCartOutlined className={CSS.shoppingCart} />
			<div className={CSS.headingWrapper}>
				<h1 className={CSS.heading}>{messages.shoppingCart}</h1>
			</div>
			<div className={CSS.onSale}>
				<img className={CSS.onSaleIcon} src={assets.onSale} />
			</div>
		</div>
	);
}

export default PageHeader;