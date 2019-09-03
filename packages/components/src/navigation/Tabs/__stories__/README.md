# Tabs

## API

| Name                  | Type                                | Default      | Description |
| :-------------------- | :---------------------------------- | :----------- | :---------- |
| Component             | React.ElementType                   |              |             |
| ScrollButtonComponent | React.ElementType                   |              |             |
| value                 | any                                 |              |             |
| variant               | `standard` `scrollable` `fullWidth` | `standard`   |             |
| orientation           | `horizontal` `vertical`             | `horizontal` |             |
| textColor             | `inherit` `primary` `secondary`     | `inherit`    |             |
| indicatorColor        | `secondary` `primary`               | `secondary`  |             |
| scrollButtons         | `auto` `desktop` `on` `off`         | `auto`       |             |
| TabIndicatorProps     | object                              | `{}`         |             |
| centered              | bool                                | `false`      |             |

## Event

| Name     | Type | Default | Description |
| :------- | :--- | :------ | :---------- |
| onChange | func |         |             |

# Tab

## API

| Name              | Type                            | Default     | Description      |
| :---------------- | :------------------------------ | :---------- | :--------------- |
| icon              | React.ElementType               |             |                  |
| label             | React.ReactNode                 |             |                  |
| value             | any                             |             |                  |
| textColor         | `inherit` `primary` `secondary` | `inherit`   |                  |
| indicatorColor    | `secondary` `primary`           | `secondary` |                  |
| scrollButtons     | `auto` `desktop` `on` `off`     | `auto`      |                  |
| TabIndicatorProps | object                          | `{}`        |                  |
| selected          | bool                            | `false`     |                  |
| wrapped           | bool                            | `false`     |                  |
| centerRipple      | bool                            | `false`     | 涟漪效果居中显示 |
| disabled          | bool                            | `false`     | 是否禁用         |
| disabledRipple    | bool                            | `false`     | 是否禁用涟漪效果 |

## Event

| Name     | Type | Default | Description |
| :------- | :--- | :------ | :---------- |
| onChange | func |         |             |
| onClick  | func |         |             |
