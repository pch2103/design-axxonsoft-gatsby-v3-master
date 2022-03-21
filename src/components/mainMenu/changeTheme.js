import React, {useEffect} from 'react';
import GetIcon from "../utils/getIcon";
import IconButton from "@material-ui/core/IconButton";
import useLocalStorage from "../../hook/useLocalStorage";

const ChangeTheme = ({setCurrentTheme}) => {
	const [storedTheme, setStoredTheme] = useLocalStorage('theme')

	useEffect(()=>{
		if(!storedTheme){
			setStoredTheme('light')
			setCurrentTheme('light')
			return
		}
		setCurrentTheme(storedTheme)
	},[storedTheme, setCurrentTheme, setStoredTheme])

	const toggleTheme = () => {
		storedTheme === 'light' ?	setStoredTheme('dark') : setStoredTheme('light')
	}
	return (
	<IconButton
			edge="start"
			onClick={()=>{toggleTheme()}}
			color="inherit"
			aria-label="theme">
	<GetIcon icon={storedTheme === 'light' ? 'Night' : 'Day'} />
	</IconButton>
	)
};

export default ChangeTheme;