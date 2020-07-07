import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default (page) =>
  <s.Main>
    <nav className={style.breadcrumb}>
      <s.Container>
        <ul className={style.breadcrumb__ul}>
          <li className={style.breadcrumb__home}><a className={style.breadcrumb__a} href='/'>Home</a></li>
          <li className={style.breadcrumb__separator}>•</li>
          <li className={style.breadcrumb__product}>Samsung Galaxy A30s 64GB Branco</li>
        </ul>
      </s.Container>
    </nav>
    <s.Container className={style.product}>
      <s.Image className={style.product__image} alt={page.title}>
        <source srcSet={page.image[0]} />
      </s.Image>
      <div className={style.product__div}>
        <h1 className={style.product__title}>{ page.title }</h1>
        <ul className={style.rating}>
          <li className={style.rating__li}><s.Icon>star--full</s.Icon></li>
          <li className={style.rating__li}><s.Icon>star--full</s.Icon></li>
          <li className={style.rating__li}><s.Icon>star--full</s.Icon></li>
          <li className={style.rating__li}><s.Icon>star--full</s.Icon></li>
          <li className={style.rating__li}><s.Icon>star--half</s.Icon></li>
        </ul>
        <data className={style.product__price} value='1599.00'>de R$ 1.599,00</data>
        <data className={style.product__salePrice} value='1329.05'>R$ <strong>1.329,05</strong></data>
        <p className={style.product__priceConditional}>
          à vista no boleto ou cartão (5% de desconto)<br />
          ou em até 10x de R$ 139,90 sem juros no cartão<br />
          total a prazo de R$ 1.399,00
        </p>
        <p className={style.product__description}>{ page.description }</p>
        <h2 className={style.product__color}>Cor</h2>
        <ul className={style.colors}>
          <li className={style.colors__white}>Branco</li>
        </ul>
        <h2 className={style.product__memory}>Memória</h2>
        <ul className={style.memory}>
          <li className={style.memory__64}>64 GB</li>
        </ul>
        <button className={style.product__button} onClick={() => location.assign('https://www.cea.com.br/smartphone-samsung-a307gt-galaxy-a30s-64gb-branco-9868849-branco/p')}>ver produto</button>
        <details className={[style.details, style.product__details]}>
          <summary className={style.details__summary}>Especificações <s.Icon className={style.details__icon}>down</s.Icon></summary>
          <dl className={style.details__dl}>
            <dt className={style.details__dt}>E-mail (convencional)</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Flash</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>TV Digital</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Redes Sociais</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Rádio FM</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Wifi</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Cor</dt>
            <dd className={style.details__dd}>Branco</dd>
            <dt className={style.details__dt}>Marca</dt>
            <dd className={style.details__dd}>Samsung</dd>
            <dt className={style.details__dt}>Resolução Gravação de vídeo</dt>
            <dd className={style.details__dd}>FHD</dd>
            <dt className={style.details__dt}>GPS/AGPS</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Resolução</dt>
            <dd className={style.details__dd}>6,4"</dd>
            <dt className={style.details__dt}>Resolução Display (Pixels)</dt>
            <dd className={style.details__dd}>720 x 1560</dd>
            <dt className={style.details__dt}>Banda</dt>
            <dd className={style.details__dd}>B1, B2, B3, B4, B5, B7, B8, B12, B13, B17, B20, B26, B28, B66</dd>
            <dt className={style.details__dt}>EDGE</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Câmera Frontal</dt>
            <dd className={style.details__dd}>16 MP</dd>
            <dt className={style.details__dt}>Câmera Traseira</dt>
            <dd className={style.details__dd}>25MP + 5MP + 8MP Ultra Wide 123°</dd>
            <dt className={style.details__dt}>Agenda Telefônica (número de contatos)</dt>
            <dd className={style.details__dd}>De acordo com a memória do aparelho</dd>
            <dt className={style.details__dt}>Tecnologia</dt>
            <dd className={style.details__dd}>4G</dd>
            <dt className={style.details__dt}>Suporte a Cartão Micro SD</dt>
            <dd className={style.details__dd}>Até 512 GB</dd>
            <dt className={style.details__dt}>Memória RAM</dt>
            <dd className={style.details__dd}>4 GB</dd>
            <dt className={style.details__dt}>Processador</dt>
            <dd className={style.details__dd}>OctaCore 1.8Ghz</dd>
            <dt className={style.details__dt}>LTE (4G)</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Chip</dt>
            <dd className={style.details__dd}>Nano</dd>
            <dt className={style.details__dt}>GPRS</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Dual Chip</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>SMS</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Bluetooth</dt>
            <dd className={style.details__dd}>Sim</dd>
            <dt className={style.details__dt}>Medidas do Aparelho</dt>
            <dd className={style.details__dd}>15,8 x 7,4 x 0,7</dd>
            <dt className={style.details__dt}>Sistema Operacional</dt>
            <dd className={style.details__dd}>Android 9.0</dd>
            <dt className={style.details__dt}>Peso do aparelho (gr)</dt>
            <dd className={style.details__dd}>169g</dd>
            <dt className={style.details__dt}>EAN</dt>
            <dd className={style.details__dd}>7892509112437, 7892509112147</dd>
            <dt className={style.details__dt}>NCM</dt>
            <dd className={style.details__dd}>8517.12.31</dd>
            <dt className={style.details__dt}>Conteúdo da Embalagem</dt>
            <dd className={style.details__dd}>01 Smartphone, 01 Carregador, 01 Cabo USB, 01 Fone de ouvido, 01 Extrator de Chip, 01 Manual do usuário</dd>
            <dt className={style.details__dt}>Destaque</dt>
            <dd className={style.details__dd}>Sale</dd>
            <dt className={style.details__dt}>Tamanho</dt>
            <dd className={style.details__dd}>Único</dd>
          </dl>
        </details>
      </div>
    </s.Container>
  </s.Main>
