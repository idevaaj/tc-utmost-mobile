import HomeHeroComponentsWithBackgroundImage from '../molecules/HomeHeroComponentsWithBackgroundImage';

interface HeroComponentProps {
  title: string;
  titleStyle?: string;      
  titleFontFamily?: string; // Optional font family for the title
  numberOfLines?: number;   // Optional number of lines for the title
  description: string;       // Description text
  descStyle?: string;       // Optional style for the description
  descFontFamily?: string;  // Optional font family for the description
  btnTitle: string;         // Title for the button
  btnStyle?: string;        // Optional style for the button
  btnTitleStyle: string;
  btnFontFamily?: string;   // Optional font family for the button title
  onPress: () => void;      // Function to handle button press
  imgUrl: string;           // URL for the background image
}

const HeroComponent: React.FC<HeroComponentProps> = ({
  title,
  titleStyle = '',
  titleFontFamily = '',
  numberOfLines,
  description,
  descStyle = '',
  descFontFamily = '',
  btnTitle,
  btnStyle = '',
  btnTitleStyle,
  btnFontFamily = '',
  onPress,
  imgUrl,
}) => {
  return (
    <HomeHeroComponentsWithBackgroundImage
      title={title}
      titleStyle={titleStyle}
      titleFontFamily={titleFontFamily}
      description={description}
      descStyle={descStyle}
      descFontFamily={descFontFamily}
      numberOfLines={numberOfLines}
      btnTitle={btnTitle}
      btnStyle={btnStyle}
      btnTitleStyle={btnTitleStyle}
      btnFontFamily={btnFontFamily}
      onPress={onPress}
      imgUrl={imgUrl}
    />
  );
};

export default HeroComponent;
