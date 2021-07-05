import h from '@kuba/h'
import Story from '@kuba/story'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Story {...props} className={[style.workflow, props.className]}>
    <div className={style.workflow__container}>
      <hgroup className={style.workflow__hgroup}>
        <text.H2 className={style.workflow__h2} master darker large>Entenda as etapas</text.H2>
        <text.H3 className={style.workflow__h3} master small>Agora separamos nossos conteúdos também por etapa onde eles serão aplicados em seu processo de criação de marca e coleção</text.H3>
      </hgroup>
      <ol className={style.workflow__ol}>
        <li className={style.workflow__li} data-index="1">
          <text.Strong className={style.workflow__strong} master darker>Estratégia</text.Strong>
          <text.P className={style.workflow__p} master small>Fundamentos de negócio para que você possa crescer sua marca de maneira eficiente</text.P>
        </li>
        <li className={style.workflow__li} data-index="2">
          <text.Strong className={style.workflow__strong} master darker>Inspiração</text.Strong>
          <text.P className={style.workflow__p} master small>Inspiração criativa sintetizada com tendências de moda regionais e globais traduzidas para o mercado brasileiro</text.P>
        </li>
        <li className={style.workflow__li} data-index="3">
          <text.Strong className={style.workflow__strong} master darker>Produto</text.Strong>
          <text.P className={style.workflow__p} master small>Cuidamos da pesquisa para que você possa focar na produção dos itens que são – e serão – sucesso de vendas.</text.P>
        </li>
        <li className={style.workflow__li} data-index="4">
          <text.Strong className={style.workflow__strong} master darker>Vendas</text.Strong>
          <text.P className={style.workflow__p} master small>Simplificamos o processo de vendas para que você possa se preparar para vender mais e melhor</text.P>
        </li>
      </ol>
    </div>
  </Story>
