## Problem

You're creating a new Component and need to design its API.

## Solution

The main thing to consider is the public API and there's two parts to this: props and children. Though, children is just a prop, it's special in the way you compose your components together. This means you need to place emphasis on how you want your component to compose and be composed.

## Props

Use required props sparingly. Strive to provide safe defaults for all of your props unless you have good reason not to. For example, instead of requiring a value for isDisabled, provide a default of false.

You should also try and make your non-required boolean props default to false, as opposed to defaulting to true so that one can declaratively opt-in. 

To do the inverse (not disabled) you could create an isEnabled prop and default it to false

### data props and render functions

