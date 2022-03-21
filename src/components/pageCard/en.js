import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import PageCard from "./pageCard";
import PageCardLandscape from "./pageCardLandscape";

export default ({cardName, ...props}) => {
	const data = useStaticQuery(graphql` 
	query{
    allContentfulContentCard {
    	edges {
      	node {
        	id
        	cardName
        	titleEN
        	textEN {
          	textEN
        	}
        	imageEN {
        		title
            file {
              url
            }
          	fluid(maxWidth: 700, quality: 90) {
            	aspectRatio
            	base64
            	sizes
            	src
            	srcSet
            	srcSetWebp
            	srcWebp
          	}
        	}
        	downloadUrlEN
      	}
    	}
    }
  }
`)
	let cardContent = 'not found'
	const cardDraft = React.useMemo(() => (
			data.allContentfulContentCard.edges
					.find(({node}) => cardName === node.cardName)
	), [data, cardName])


	if(cardDraft){
		cardContent = {
			id: cardDraft.node.id || '',
			title: cardDraft.node.titleEN || '',
			text: cardDraft.node.textEN
					? cardDraft.node.textEN.textEN || '' : '',
			image: cardDraft.node.imageEN || '',
			downloadUrl: cardDraft.node.downloadUrlEN || ''
		}
	}


	return props.landscape
			? <PageCardLandscape cardContent = {cardContent}  {...props}/>
			: <PageCard cardContent = {cardContent} {...props}/>
}