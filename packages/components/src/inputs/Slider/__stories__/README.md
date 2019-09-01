# Slider

## API

| Name                | Type                                                | Default      | Description     |
| :------------------ | :-------------------------------------------------- | :----------- | :-------------- |
| component           | React.ElementType                                   | `span`       |                 |
| ThumbComponent      | React.ElementType                                   | `span`       |                 |
| ValueLabelComponent | React.ElementType                                   | `span`       |                 |
| valueLabelDisplay   | `on` `auto` `off`                                   | `off`        | 显示当前值      |
| valueLabelFormat    | ((value: number, index: number) => React.ReactNode) | `off`        | 格式化          |
| value               | number                                              |              | 当前值 （可控） |
| min                 | number                                              |              | 最小值          |
| max                 | number                                              |              | 最大值          |
| step                | number                                              |              | 步进值          |
| defaultValue        | number                                              |              | 默认值          |
| disabled            | bool                                                | `false`      | 是否禁用        |
| orientation         | `horizontal` `vertical`                             | `horizontal` | 方向            |

## Event

| Name              | Type | Default | Description |
| :---------------- | :--- | :------ | :---------- |
| onChange          | func |         |             |
| onChangeCommitted | func |         |             |
