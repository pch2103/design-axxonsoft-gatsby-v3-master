import React from 'react';
import Done from "@material-ui/icons/Done";
import Style from "@material-ui/icons/Style";
import Category from "@material-ui/icons/Category";
import LocalLibrary from "@material-ui/icons/LocalLibrary";
import Widgets from "@material-ui/icons/Widgets";
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import Day from '@material-ui/icons/WbSunny';
import Night from "@material-ui/icons/Brightness4";
import Burger from "@material-ui/icons/Menu";
import Info from '@material-ui/icons/InfoOutlined';
import WarningIcon from '@material-ui/icons/WarningTwoTone';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import {makeStyles} from "@material-ui/core/styles";
import MailIcon from '@material-ui/icons/MailOutline';
import clsx from "clsx";

const useStyles = makeStyles(() => (
		{
			small: {
				width: 20,
				height: 20
			},
			medium: {
				width: 36,
				height: 36
			},
		}
))

const GetIcon = ({icon, ...props}) => {
	const classes = useStyles();
	const iconStyle = clsx(props.small && classes.small, props.medium && classes.medium)

	switch (icon) {
		case 'Style': return <Style />
		case 'Category': return <Category />
		case 'LocalLibrary': return <LocalLibrary />
		case 'Widgets': return <Widgets />
		case 'ImportantDevices': return <ImportantDevices />
		case 'Day': return <Day />
		case 'Night': return <Night />
		case 'Burger': return <Burger />
		case 'Download': return <CloudDownloadIcon />
		case 'Warning': return <WarningIcon className={iconStyle}/>
		case 'Info': return <Info className={iconStyle}/>
		case 'Email': return <MailIcon className={iconStyle}/>
		default: return <Done />
	}
}

export default GetIcon;