
import React from 'react';
import { CSS, messages } from './resources';
import { PageFooterProps, PageFooterState } from './interfaces';

const PageFooter: React.FunctionComponent<PageFooterProps> = (props) => {

	return (
		<footer className={CSS.pageFooter}>
			<div className={CSS.footNote}>{messages.footNote}</div>
			<div className={CSS.author}>{messages.author}</div>
			<div className={CSS.date}>{messages.date}</div>
		</footer>
	);
};

export default PageFooter;