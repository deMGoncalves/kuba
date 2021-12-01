import styled from '@kuba/styled'

export default styled.style`
  .hero__story {
    display: inline-flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    margin: var(--spacing-giant) 0;
  }

  .hero__text {
    font-size: var(--font-size-xxxs) !important;
    line-height: var(--line-height-sm);
  }

  @media (min-width: 400px) {
    .hero__text {
      font-size: var(--font-size-xxs) !important;
    }
  }

  @media (min-width: 500px) {
    .hero__text {
      font-size: var(--font-size-xs) !important;
    }
  }

  @media (min-width: 700px) {
    .hero__text {
      font-size: var(--font-size-md) !important;
    }
  }

  .hero__div {
    align-items: center;
    border: var(--border-width-hairline) solid var(--color-master-darker);
    border-radius: var(--border-radius-sm);
    display: flex;
    gap: var(--spacing_inset-xs);
    height: 48px;
    justify-content: space-between;
    max-width: 489px;
    overflow: hidden;
    padding-left: var(--spacing_inset-sm);
    position: relative;
    white-space: nowrap;
  }

  .hero__button {
    background-color: var(--color-master-lightest);
    border: none;
    border-left: var(--border-width-hairline) solid var(--color-master-darker);
    cursor: pointer;
    height: 46px;
    position: absolute;
    right: 0;
    width: 48px;
  }
`
