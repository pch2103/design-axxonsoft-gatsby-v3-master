import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "../Link";
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => (
		{
			root: {
				padding: theme.spacing(2),
				color: theme.palette.menu.contrastText,
			},
			menuItem: {
				color: theme.palette.text.primary,
				'&:hover': {
					textDecoration: 'none',
				},
			}
		}));

export default function ChangeLanguage(props) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
			<div>
				<Button
						className={classes.root}
						aria-controls="lang-menu"
						aria-haspopup="true"
						onClick={handleClick}
				>
						<FormattedMessage id="language"/>
				</Button>
				<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
				>
					{
						props.langsMenu.map(lang => (
							<MenuItem
									className={classes.menuItem}
									key={lang.langKey}
									onClick={handleClose}
									to = {lang.link}
									component={Link}
									>
								<FormattedMessage id={lang.langKey}/>
							</MenuItem>
						))
					}
				</Menu>
			</div>
	);
}