import styled from "styled-components";
import { responsiveFont } from "../CommonStyles/CommonStyles";
import { Form } from "antd";

export const StyledFormItem = styled(Form.Item)`
  ${responsiveFont}

  --form-item-gap: 1.3rem;
  --input-border-width: 0.08rem;

  .ant-row {
    flex-direction: row;
    gap: var(--form-item-gap);

    .ant-col {
      width: 8rem;

      svg {
        display: none;
      }

      &.ant-form-item-label {
        margin-right: 2rem;
      }

      label {
        &::before,
        &::after {
          content: none !important;
        }
      }

      label,
      textarea,
      input {
        font-size: var(--font-size);
      }

      input:-webkit-autofill {
        background-color: transparent !important;
        box-shadow: 0 0 0px 1000px white inset !important;
        color: #000 !important;
      }

      .ant-input-affix-wrapper,
      textarea,
      .ant-picker {
        border-radius: 0;
        border-color: black;
        border-width: var(--input-border-width);
      }

      textarea {
        resize: none;
      }

      .ant-input-affix-wrapper:has(input),
      .ant-picker {
        width: 10rem;
        height: 2rem;
      }

      .ant-input-borderless:has(#projectManager) {
        width: 15rem;
      }

      .ant-input-textarea-affix-wrapper {
        width: 24rem;
        height: 10rem;

        &.ant-input-borderless {
          height: fit-content;
        }
      }
      .ant-form-item-additional {
        position: absolute;
        z-index: 1;
        bottom: -1.5rem;
        left: 0;
        display: block !important;
        height: 1.5rem;

        .ant-form-item-explain-error {
          white-space: nowrap;
          font-size: var(--font-size);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    --form-item-gap: 0;
    --input-border-width: 0.05rem;
    margin-bottom: 0;

    .ant-row {
      flex-direction: row;

      .ant-col {
        padding-bottom: 0;

        &.ant-form-item-label {
          width: 5rem;
          height: 1.5rem;
          margin-right: 0.8rem;
        }

        .ant-input-textarea-affix-wrapper {
          width: 20rem;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .ant-row .ant-col .ant-input-textarea-affix-wrapper {
      width: 17rem;
    }
  }
  @media only screen and (max-width: 320px) {
    .ant-row .ant-col .ant-input-textarea-affix-wrapper {
      width: 12rem;
    }
  }
`;
