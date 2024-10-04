import React from 'react';
import AboutMainContentComponent from '../molecules/AboutMainContentComponent';

const blockComponents: { [key: string]: React.FC<any> } = {
    JumbotronBlock: AboutMainContentComponent,
};

interface BlockProps {
    block: {
        contentType: string[];
        model?: any;
    };
}

const AboutScreenBlockRenderer: React.FC<BlockProps> = ({ block }) => {
    // Log the block to understand what contentType is being passed
    //console.log('Block received:', block);

    // Ensure contentType exists and contains at least one valid type
    if (!block.contentType || block.contentType.length === 0) {
        console.warn('Block does not have a contentType');
        return null;
    }

    // Find the block type by checking against blockComponents keys
    const blockType = block.contentType.find(type => blockComponents[type]);

    // Log the blockType to verify it matches a component
    //console.log('Resolved block type:', blockType);

    // Check if blockType exists before using it as an index
    if (!blockType || !blockComponents[blockType]) {
        console.warn(`No matching component found for block type: ${blockType}`);
        return null;
    }

    // Get the appropriate component for the block type
    const BlockComponent = blockComponents[blockType];

    //console.log('Block component being rendered:', BlockComponent);

    // Render the block component with its data
    return <BlockComponent data={block.model || block} />;
};

export default AboutScreenBlockRenderer;
