import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import PageText from "./pageText";

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

	if (cardDraft) {
		cardContent = {
			id: cardDraft.node.id || '',
			title: cardDraft.node.titleEN || '',
			text: cardDraft.node.textEN
					? cardDraft.node.textEN.textEN || '' : '',
			downloadUrl: cardDraft.node.downloadUrlEN || ''
		}
	}

	return <PageText cardContent={cardContent} {...props}/>
}