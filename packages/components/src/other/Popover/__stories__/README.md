# Popover

## API

| Name                | Type                                                          | Default                                      | Description |
| :------------------ | :------------------------------------------------------------ | :------------------------------------------- | :---------- |
| container           | `obj` `func`                                                  | `null`                                       |             |
| open                | `bool`                                                        | `false`                                      |             |
| anchorEl            | `node`                                                        | `null`                                       |             |
| anchorOrigin        | `{ vertical: string | number, horizontal: string | number, }` | `{ vertical: 'top' , horizontal: 'left' , }` |             |
| transformOrigin     | `{ vertical: string | number, horizontal: string | number, }` | `{ vertical: 'top' , horizontal: 'left' , }` |             |
| container           | `node`                                                        |                                              |             |
| action              | `node`                                                        |                                              |             |
| anchorReference     | `anchorEl` `anchorPosition` `none`                            | `anchorEl`                                   |             |
| anchorPosition      | `{ vertical: number, horizontal: number, }`                   |                                              |             |
| elevation           | `number`                                                      | `8`                                          |             |
| marginThreshold     | `number`                                                      | `16`                                         |             |
| TransitionComponent |                                                               |                                              |             |
| TransitionProps     |                                                               |                                              |             |
| ModalClasses        |                                                               |                                              |             |
| getContentAnchorEl  | `func`                                                        |                                              |             |

## Event
| Name    | Type   | Default | Description |
| :------ | :----- | :------ | :---------- |
| onClose | `func` |         |             |
| onEnter | `func` |         |             |
| onExit  | `func` |         |             |
