import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import {FormattedMessage} from 'react-intl';

export default function ({langKey}) {
	const companySiteUrl = langKey === 'ru' ? 'https://www.itv.ru/' : 'https://www.axxonsoft.com/'
	return (
			<Typography variant="body2" align="center">
				{'Copyright © '}
				{new Date().getFullYear()}{' '}
				<MuiLink target="_blank" rel="noopener" href={companySiteUrl}>
					<FormattedMessage id='company'/>
				</MuiLink>
				{' '}<FormattedMessage id='copyright'/>
			</Typography>
	);
}
