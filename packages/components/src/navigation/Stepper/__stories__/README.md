# Stepper

## API

| Name             | Type                    | Default      | Description |
| :--------------- | :---------------------- | :----------- | :---------- |
| connector        | React.ElementType       |              |             |
| orientation      | `horizontal` `vertical` | `horizontal` |             |
| activeStep       | number                  |              |             |
| alternativeLabel | bool                    |              |             |
| nonLinear        | bool                    |              |             |

# Step

## API

| Name      | Type | Default | Description |
| :-------- | :--- | :------ | :---------- |
| active    | bool |         |             |
| completed | bool |         |             |
| disabled  | bool |         |             |

# StepLabel

## API

| Name              | Type              | Default | Description |
| :---------------- | :---------------- | :------ | :---------- |
| icon              | React.ReactNode   |         |             |
| StepIconComponent | React.ElementType |         |             |
| optional          | React.ReactNode   |         |             |
| active            | bool              |         |             |
| completed         | bool              |         |             |
| disabled          | bool              |         |             |
| error             | bool              |         |             |
| last              | bool              |         |             |