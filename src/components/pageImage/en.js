import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import PageImage from "./pageImage";

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
          	fluid(maxWidth: 1400, quality: 90) {
            	aspectRatio
            	base64
            	sizes
            	src
            	srcSet
            	srcSetWebp
            	srcWebp
          	}
        	}
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


	if (cardDraft) {
		cardContent = {
			id: cardDraft.node.id || '',
			title: cardDraft.node.titleEN || '',
			text: cardDraft.node.textEN
					? cardDraft.node.textEN.textEN || '' : '',
			image: cardDraft.node.imageEN || '',
		}
	}


	return <PageImage cardContent={cardContent} {...props}/>
}