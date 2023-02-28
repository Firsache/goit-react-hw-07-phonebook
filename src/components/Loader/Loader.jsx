import { Box } from 'components';
import { FallingLines } from 'react-loader-spinner';

export const Loader = ({ themeNorm }) => {
  return (
    <Box position="absolute" top="50%" left="50%">
      <FallingLines
        color={themeNorm.colors.accent}
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Box>
  );
};
