import styled from '@kuba/styled'

export default styled.style`
  .workflow__div {
    border: 1px solid var(--color-master-light);
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-md);
    padding: var(--spacing_inset-md);
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
    gap: var(--spacing_inset-quarck);
  }

  @media (min-width: 961px) {
    .workflow__hgroup {
      flex: 33.333%;
      padding-right: var(--spacing_inset-md);
    }
  }

  .workflow__text {
    line-height: var(--line-height-lg);
  }

  .workflow__ol {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    list-style: none;
  }

  @media (min-width: 769px) {
    .workflow__ol {
      display: grid;
      gap: var(--spacing_inset-md);
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 961px) {
    .workflow__ol {
      flex: 66.666%;
    }
  }

  .workflow__li {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    padding-left: var(--spacing_inset-lg);
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
