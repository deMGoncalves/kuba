import styled from '@kuba/styled'

export default styled`
  .tab {
    border-bottom: 1px solid #eaecf0;
    display: flex;
    gap: 16px;
    width: 100%;
  }

  .tab__link {
    align-items: center;
    border-bottom: 2px solid transparent;
    color: #667085;
    cursor: pointer;
    display: flex;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    gap: 8px;
    justify-content: center;
    line-height: 20px;
    padding: 4px 4px 12px;
    user-select: none;
  }

  .tab__link:hover,
  .tab__link[current] {
    border-bottom: 2px solid #6941C6;
    color: #6941c6;
  }
`
