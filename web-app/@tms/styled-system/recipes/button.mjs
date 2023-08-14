import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonFn = createRecipe('button', {
  "variant": "primary",
  "shape": "square",
  "fill": "solid"
}, [
  {
    "variant": "primary",
    "fill": "outline",
    "css": {
      "backgroundColor": "transparent",
      "borderColor": "white",
      "color": "white",
      "textDecoration": "none",
      "_hover": {
        "backgroundColor": "primary.500",
        "borderColor": "primary.500",
        "color": "primary.950"
      }
    }
  },
  {
    "variant": "secondary",
    "fill": "outline",
    "css": {
      "backgroundColor": "transparent",
      "borderColor": "white",
      "color": "white",
      "textDecoration": "none",
      "_hover": {
        "backgroundColor": "secondary.500",
        "borderColor": "secondary.500",
        "color": "white"
      }
    }
  },
  {
    "variant": "tertiary",
    "fill": "outline",
    "css": {
      "backgroundColor": "transparent",
      "borderColor": "white",
      "color": "white",
      "textDecoration": "none",
      "_hover": {
        "backgroundColor": "tertiary.500",
        "borderColor": "tertiary.500",
        "color": "secondary.600"
      }
    }
  },
  {
    "variant": "accent",
    "fill": "outline",
    "css": {
      "backgroundColor": "transparent",
      "borderColor": "white",
      "color": "white",
      "textDecoration": "none",
      "_hover": {
        "backgroundColor": "accent.500",
        "borderColor": "accent.500",
        "color": "accent.50"
      }
    }
  },
  {
    "variant": "info",
    "fill": "outline",
    "css": {
      "backgroundColor": "transparent",
      "borderColor": "white",
      "color": "white",
      "textDecoration": "none",
      "_hover": {
        "backgroundColor": "info.500",
        "borderColor": "info.500",
        "color": "accent.400"
      }
    }
  },
  {
    "variant": "danger",
    "fill": "outline",
    "css": {
      "backgroundColor": "transparent",
      "borderColor": "white",
      "color": "white",
      "textDecoration": "none",
      "_hover": {
        "backgroundColor": "danger.500",
        "borderColor": "danger.500",
        "color": "rose.300"
      }
    }
  },
  {
    "variant": "primary",
    "fill": "outlinereverse",
    "css": {
      "borderColor": "primary.950",
      "backgroundColor": "transparent",
      "color": "primary.950",
      "_hover": {
        "backgroundColor": "primary.950",
        "color": "primary.500"
      }
    }
  },
  {
    "variant": "secondary",
    "fill": "outlinereverse",
    "css": {
      "borderColor": "secondary.950",
      "backgroundColor": "transparent",
      "color": "secondary.950",
      "_hover": {
        "backgroundColor": "secondary.950",
        "color": "secondary.500"
      }
    }
  },
  {
    "variant": "tertiary",
    "fill": "outlinereverse",
    "css": {
      "borderColor": "secondary.700",
      "backgroundColor": "transparent",
      "color": "secondary.700",
      "_hover": {
        "backgroundColor": "secondary.700",
        "color": "tertiary.500"
      }
    }
  },
  {
    "variant": "accent",
    "fill": "outlinereverse",
    "css": {
      "borderColor": "accent.950",
      "backgroundColor": "transparent",
      "color": "accent.950",
      "_hover": {
        "backgroundColor": "accent.500",
        "borderColor": "accent.500",
        "color": "accent.50"
      }
    }
  },
  {
    "variant": "info",
    "fill": "outlinereverse",
    "css": {
      "borderColor": "info.950",
      "backgroundColor": "transparent",
      "color": "info.950",
      "_hover": {
        "backgroundColor": "info.950",
        "color": "info.500"
      }
    }
  },
  {
    "variant": "danger",
    "fill": "outlinereverse",
    "css": {
      "borderColor": "danger.950",
      "backgroundColor": "transparent",
      "color": "danger.950",
      "_hover": {
        "backgroundColor": "danger.950",
        "color": "danger.500"
      }
    }
  }
])

const buttonVariantMap = {
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "info",
    "danger",
    "link",
    "icon"
  ],
  "shape": [
    "rounded",
    "square"
  ],
  "fill": [
    "solid",
    "outline",
    "outlinereverse"
  ]
}
const buttonVariantKeys = Object.keys(buttonVariantMap)
export const button = Object.assign(buttonFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})