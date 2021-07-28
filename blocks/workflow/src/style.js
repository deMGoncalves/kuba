import styled from '@kuba/styled'

export default styled.style`
  .workflow__div {
    border: 1px solid var(--color-master-light);
    display: flex;
    flex-direction: column;
    gap: var(--size-largest);
    padding: var(--size-largest);
  }

  @media (min-width: 961px) {
    .workflow__div {
      align-items: flex-start;
      flex-direction: row;
    }
  }

  .workflow__hgroup {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 961px) {
    .workflow__hgroup {
      padding-right: var(--size-largest);
    }
  }

  .workflow__h3 {
    font-weight: 400;
  }

  .workflow__ol {
    display: flex;
    flex-direction: column;
    gap: var(--size-medium);
    list-style: none;
  }

  @media (min-width: 769px) {
    .workflow__ol {
      display: grid;
      gap: var(--size-largest);
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .workflow__li {
    padding-left: 42px;
    position: relative;
  }

  .workflow__li::before {
    color: var(--color-master-darker);
    content: attr(data-index);
    display: block;
    float: left;
    font-size: 42px;
    font-weight: 700;
    left: 0;
    line-height: 1;
    position: absolute;
    top: 0;
  }
`
