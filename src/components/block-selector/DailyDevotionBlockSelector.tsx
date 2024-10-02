export function dailyDevotionalBlockSelector(pageData: { page: { mainContent: any[]; }; }) {
    const componentData: {
      wisdomBlock?: {
        text: string;
        resource: any;
      };
      bibleInOneYearVerseBlock?: {
        text: string;
        verse: string;
      };
      devotionalBlock?: string;
    } = {};
  
    pageData.page.mainContent.forEach((block: {
      model: {
        contentType: string[];
        text: string;
        resourceFrom: any;
        verse: string;
        excerpt: string;
      };
    }) => {
      const blockType = block.model.contentType.find(
        (type: string) =>
          type === 'WisdomBlock' ||
          type === 'BibleInOneYearVerseBlock' ||
          type === 'DevotionalBlock'
      );
  
      if (blockType) {
        switch (blockType) {
          case 'WisdomBlock':
            componentData.wisdomBlock = {
              text: block.model.text,
              resource: block.model.resourceFrom,
            };
            break;
          case 'BibleInOneYearVerseBlock':
            componentData.bibleInOneYearVerseBlock = {
              text: block.model.text,
              verse: block.model.verse,
            };
            break;
          case 'DevotionalBlock':
            componentData.devotionalBlock = block.model.excerpt;
            break;
          default:
            console.warn(`Unknown block type: ${blockType}`);
        }
      } else {
        console.warn('Block has no matching contentType');
      }
    });
  
    return componentData;
  }
  