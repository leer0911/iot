# Typography

## API

| Name           | Type                                                                                                | Default   | Description    |
| :------------- | :-------------------------------------------------------------------------------------------------- | :-------- | :------------- |
| component      | React.ElementType                                                                                   | `text`    | 标签           |
| variant        | `h1` `h2` `h3` `h4` `h5` `h6` `subtitle1` `subtitle2` `body1` `body2` `caption` `button` `overline` | `body1`   | 类型           |
| color          | `initial` `inherit` `primary` `secondary` `textPrimary` `textSecondary` `error`                     | `inherit` | 颜色           |
| display        | `initial` `block` `inline`                                                                          | `initial` | 盒模型         |
| align          | `inherit` `left` `center` `right` `justify`                                                         | `inherit` | 对齐方式       |
| variantMapping | `{ [type in Style]: string }`                                                                       |           | variant 映射   |
| gutterBottom   | bool                                                                                                | `false`   | 是否有底部间距 |
| noWrap         | bool                                                                                                | `false`   | 是否换行       |
| paragraph      | bool                                                                                                | `false`   | 是否为段落     |
