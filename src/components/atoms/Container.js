import styled from "styled-components";
import { space, colors, boxShadow } from "../../styles/const";
import { responsiveFor } from "../../styles/mixins";

export const VerticalSpacingLg = styled.div`
  margin-bottom: ${space.lg};

  ${responsiveFor.mobile`
    margin-bottom: ${space.md};
  `}
`;

export const VerticalSpacingXl = styled.div`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${space.xl};
  }

  ${responsiveFor.mobile`
    > * + * {
      margin-top: ${space.lg};
    }
  `}
`;

export const VerticalSpacingXxl = styled.div`
  margin-bottom: ${space.xxl};

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${space.xxl};
  }

  ${responsiveFor.mobile`
    > * + * {
      margin-top: ${space.xl};
    }
  `}
`;

export const VerticalSpacingXxxl = styled.div`
  margin-bottom: ${space.xxxl};

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${space.xxxl};
  }

  ${responsiveFor.mobile`
    > * + * {
      margin-top: ${space.xxl};
    }
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
