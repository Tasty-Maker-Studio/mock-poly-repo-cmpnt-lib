import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const splashSectionFn = createRecipe('splashSection', {}, [])

const splashSectionVariantMap = {}
const splashSectionVariantKeys = Object.keys(splashSectionVariantMap)
export const splashSection = Object.assign(splashSectionFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: splashSectionVariantKeys,
  variantMap: splashSectionVariantMap,
  splitVariantProps(props) {
    return splitProps(props, splashSectionVariantKeys)
  },
})