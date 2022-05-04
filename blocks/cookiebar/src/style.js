import styled from '@kuba/styled'

export default styled.style`
  .cookiebar {
    background-color: var(--color-master-lightest);
    border: 1px solid var(--color-master-light);
    border-radius: var(--border-radius-sm);
    bottom: var(--spacing-xxxs);
    box-shadow: var(--shadow-level-1) rgba(0, 0, 0, var(--opacity-level-light));
    content-visibility: auto;
    display: none;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    padding: var(--spacing_inset-xs);
    position: fixed;
    right: var(--spacing-xxxs);
    width: calc(100% - 32px);
    z-index: 1;
  }

  @media (min-width: 426px) {
    .cookiebar {
      width: 377px;
    }
  }

  .cookiebar[opened] {
    display: flex;
  }

  .cookiebar__strong {
    line-height: var(--line-height-md) !important;
  }

  .cookiebar__p {
    line-height: var(--line-height-lg) !important;
  }

  .cookiebar__button {
    font-size: var(--font-size-xxxs) !important;
    text-transform: uppercase;
  }
`
