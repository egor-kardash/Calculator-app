import BaseLoader from 'react-loader-spinner';
import styled from 'styled-components';

import { baseTheme } from '@/theme';

export const LoaderContainer = styled(BaseLoader)`
  margin: ${baseTheme.margin.loader};
`;
