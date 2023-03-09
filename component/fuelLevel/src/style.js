import styled from '@kuba/styled'

export default styled`
  .fuelLevel__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing_inset-xs);
    position: relative;
    width: 100%;
  }

  .fuelLevel {
    background-color: var(--color-master-lighter) !important;
    border: none !important;
    border-radius: 2px !important;
    height: 4px !important;
    width: 100%;
  }

  .fuelLevel__supporting {
    display: flex;
    justify-content: space-between;
    padding: 0 var(--spacing_inset-nano);
  }

  .noUi-connect {
    background-color: var(--color-master-dark) !important;
  }

  .noUi-origin {
    left: 10px;
    width: calc(100% - 26px) !important;
  }

  .noUi-handle {
    border-radius: 14px !important;
    height: 28px !important;
    top: -12px !important;
    width: 28px !important;
  }
  
  .noUi-handle::after,
  .noUi-handle::before {
    display: none !important;
  }

  .noUi-touch-area {
    background-color: var(--color-master-dark) !important;
    border: none !important;
    border-radius: 50% !important;
  }
`
