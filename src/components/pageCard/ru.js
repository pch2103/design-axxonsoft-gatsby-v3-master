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
        	titleRU
        	textRU {
          	textRU
        	}
        	imageRU {
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
        	downloadUrlRU
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
			title: cardDraft.node.titleRU || '',
			text: cardDraft.node.textRU
					? cardDraft.node.textRU.textRU || '' : '',
			image: cardDraft.node.imageRU || '',
			downloadUrl: cardDraft.node.downloadUrlRU || '',
		}
	}

	return props.landscape
			? <PageCardLandscape cardContent = {cardContent}  {...props}/>
			: <PageCard cardContent = {cardContent} {...props}/>
}