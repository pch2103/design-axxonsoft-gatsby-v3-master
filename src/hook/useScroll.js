import { useState, useEffect } from 'react'

export const useScroll = () => {
	// `{ x: ..., y: ..., direction: ... }` on init
	const [scroll, setScroll] = useState({
		x: document.body.getBoundingClientRect().left,
		y: document.body.getBoundingClientRect().top,
		direction: ''
	})

	const listener = () => {
		// `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
		setScroll(prev => ({
			x: document.body.getBoundingClientRect().left,
			y: -document.body.getBoundingClientRect().top,
			// Here we’re comparing the previous state to the current state to get the scroll direction
			direction: prev.y > -document.body.getBoundingClientRect().top ? 'up' : 'down'
		}))
	}

	useEffect(() => {
		// unmount
		window.addEventListener('scroll', listener)
		// unmount
		return () => window.removeEventListener('scroll', listener)
	}, [])

	return scroll
}