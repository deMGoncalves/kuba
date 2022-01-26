import styled from '@kuba/styled'

export default styled.style`
  .thumbnail__picture {
    border-radius: var(--border-radius-sm);
    height: auto;
    padding-top: calc(5 / 4 * 100%) !important;
  }

  .thumbnail__caption {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-sm);
    padding: var(--spacing_inset-xs) 0;
  }

  .thumbnail__caption > span {
    font-size: var(--font-size-xxxs) !important;
  }

  .thumbnail__caption > strong {
    font-size: var(--font-size-xs) !important;
  }

  .thumbnail__caption > p {
    font-size: var(--font-size-xxxs) !important;
    line-height: var(--line-height-lg) !important;
  }

  .thumbnail__mobile {
    align-items: center;
    display: flex;
    gap: var(--spacing_inset-quarck);
  }

  .thumbnail__helper > span {
    left: -137px !important;
  }

  .thumbnail:last-child .thumbnail__helper > span {
    left: -210px !important;
  }
`
