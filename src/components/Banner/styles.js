import styled from 'styled-components';
import { colors, sizes, media } from '../../helpers/styles';
import Icon from '../../components/Icon';

const NavigationArrow = styled(Icon)`
    & path {
        stroke: #ffffff;
        transform: translate(-249px, -96px);
        stroke-width: 2;
    }

    ${media.tablet`
        & path {
            stroke: ${colors.secondary};
            fill: #ffffff;
        }
    `}
`;

export { NavigationArrow };
