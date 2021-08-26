# picture

O component Picture é usado para renderizar imagens na interface

### import

```javascript
import Picture from '@kuba/picture'
```

### uso

Chame o component com seus respectivos source, assim como a tag nativa do html, não é necessário especificar o img

```javascript
<Picture>
  <source media="(min-width:769px)" srcset="my_image1.jpg" />
  <source media="(min-width:465px)" srcset="my_image2.jpg" />
</Picture>
```

Também pode ser utilizado em conjunto com o component Sources

```javascript
import Picture from '@kuba/picture'
import Sources from '@kuba/sources'

<Picture>
   <Sources thumbnails={[my_image_mobile.jpg, my_image_tablet.jpg, my_image_desktop.jpg]} />
</Picture>
```


