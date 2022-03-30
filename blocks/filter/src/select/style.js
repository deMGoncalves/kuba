import styled from '@kuba/styled'

export default styled.style`
  .select__tag {
    background-color: var(--color-master-lightest) !important;
    border-color: var(--color-master-light) !important;
  }

  .select__tag[len] {
    border-color: var(--color-master-darker) !important;
  }

  .select {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-lg);
    padding: var(--spacing_inset-lg) 0;
  }

  @media (max-width: 768px) {
    .select {
      overflow: hidden;
    }
  }

  .select__section {
    padding: 0 var(--spacing_inset-xs);
  }

  .select__header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-quarck);
    justify-content: center;
    padding: 0 var(--spacing_inset-xs);
    white-space: normal;
  }

  .select__strong,
  .select__p {
    line-height: var(--line-height-md) !important;
  }
`
