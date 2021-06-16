import styled from "styled-components";
import { space, colors, boxShadow } from "../../styles/const";
import { responsiveFor } from '../../styles/mixins';

export const VerticalSpacing32 = styled.div`
  margin-bottom: ${space.lg};

  ${responsiveFor.mobile`
    margin-bottom: ${space.md};
  `}
`;


export const VerticalSpacing40 = styled.div`
  margin-bottom: ${space.xl};

  ${responsiveFor.mobile`
    margin-bottom: ${space.lg};
  `}
`;

export const VerticalSpacing48 = styled.div`
  margin-bottom: ${space.xxl};

  ${responsiveFor.mobile`
    margin-bottom: ${space.xl};
  `}
`;

export const VerticalSpacing64 = styled.div`
  margin-bottom: ${space.xxxl};

  ${responsiveFor.mobile`
    margin-bottom: ${space.xxl};
  `}
`;

export const FormWrapper = styled.div`
  padding: ${space.xxl};
  background-color: ${colors.background.white};
  max-width: 595px;
  min-width: 375px;
  width: 40%;
  box-shadow: ${boxShadow};

  ${responsiveFor.mobile`
    padding: ${space.lg};
    min-width: unset;
    width: 90%;
  `}
`;
