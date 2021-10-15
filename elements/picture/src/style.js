import styled from '@kuba/styled'

export default styled.style`
  .picture {
    display: block;
    height: 0;
    padding-top: calc(100 / 100 * 100%);
    position: relative;
    width: 100%;
  }

  .picture[circular] {
    border-radius: var(--border-radius-circular);
  }

  .picture__img {
    border-radius: inherit;
    height: 100%;
    left: 0;
    object-fit: cover;
    object-position: center center;
    position: absolute;
    top: 0;
    width: 100%;
  }
`
