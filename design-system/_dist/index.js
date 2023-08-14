"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  ImageToggle: () => ImageToggle,
  SplashSection: () => SplashSection,
  Text: () => Text,
  tmsPandaPreset: () => tmsPandaPreset
});
module.exports = __toCommonJS(src_exports);

// src/components/Forms/Button/Button.tsx
var import_jsx = require("@tms/styled-system/jsx");
var import_recipes = require("@tms/styled-system/recipes");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (props) => {
  const _a = props, { variant, shape, fill, children } = _a, rest = __objRest(_a, ["variant", "shape", "fill", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx.styled.button, __spreadProps(__spreadValues({}, rest), { className: (0, import_recipes.button)({ variant, shape, fill }), children }));
};

// src/components/Typography/Text/index.tsx
var import_jsx2 = require("@tms/styled-system/jsx");
var import_recipes2 = require("@tms/styled-system/recipes");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Text = (props) => {
  const _a = props, { size, children } = _a, rest = __objRest(_a, ["size", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx2.styled.p, __spreadProps(__spreadValues({}, rest), { className: (0, import_recipes2.text)({ size }), "data-scope": "p", children }));
};

// src/components/Disclosure/SplashSection/SplashSection.tsx
var import_jsx3 = require("@tms/styled-system/jsx");
var import_jsx_runtime3 = require("react/jsx-runtime");
var SplashSection = (props) => {
  const { title, splashImageNode, buttonNode } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx3.Box, { children: [
    splashImageNode,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx3.Box, { position: "absolute", bottom: "0", width: "98%", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      import_jsx3.Box,
      {
        padding: "3rem",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx3.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { color: "#222", fontWeight: "bold", fontSize: "20px", children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx3.Box, { display: "flex", flexDirection: "column", justifyContent: "center", children: buttonNode })
        ]
      }
    ) })
  ] });
};

// src/components/Disclosure/ImageToggle/ImageToggle.tsx
var import_react = require("react");
var import_css = require("@tms/styled-system/css");
var import_jsx4 = require("@tms/styled-system/jsx");
var import_jsx_runtime4 = require("react/jsx-runtime");
var ImageToggle = (props) => {
  const [isShowing, setIsShowing] = (0, import_react.useState)(true);
  const handleMouseEvent = () => {
    setIsShowing(!isShowing);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx4.Box, { p: "1.6rem", onMouseEnter: () => handleMouseEvent(), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_jsx4.Box,
    {
      h: "100%",
      w: "100%",
      bg: "white",
      objectFit: "cover",
      opacity: 1,
      zIndex: 1,
      position: "relative",
      onMouseLeave: () => handleMouseEvent(),
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx4.Box, { h: "100%", overflow: "hidden", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_jsx4.Box,
        {
          className: (0, import_css.css)({
            transition: isShowing ? "transform 0.6s cubic-bezier(0.87, 0, 0.13, 1) " : "transform 0.4s ease-out",
            transform: isShowing ? "translateX(0)" : "translateX(-100%)"
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_jsx4.Flex,
            {
              flexDirection: "row",
              backfaceVisibility: "hidden",
              h: "auto",
              touchAction: "pan-up",
              ml: "calc(1rem * -2)",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                import_jsx4.Flex,
                {
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: "100%",
                  minWidth: 0,
                  position: "relative",
                  children: props.children
                }
              )
            }
          )
        }
      ) })
    }
  ) });
};

// node_modules/.pnpm/@pandacss+dev@0.9.0_@internationalized+date@3.3.0_@types+node@20.4.6_@types+react-dom@18.2.4__qmvvbdw4tulybcb6pf5crszfcy/node_modules/@pandacss/dev/dist/index.mjs
function defineRecipe(config) {
  return config;
}
function defineParts(parts26) {
  return function(config) {
    return Object.fromEntries(Object.entries(config).map(([key, value]) => [parts26[key].selector, value]));
  };
}
function definePreset(preset) {
  return preset;
}
function createProxy() {
  const identity = (v) => v;
  return new Proxy(identity, {
    get() {
      return identity;
    }
  });
}
var defineTokens = createProxy();
var defineSemanticTokens = createProxy();
function defineTextStyles(definition) {
  return definition;
}

// src/theme/recipes/avatar.ts
var import_react2 = require("@ark-ui/react");
var parts = defineParts(import_react2.avatarAnatomy.build());
var avatar = defineRecipe({
  className: "avatar",
  description: "An avatar style",
  base: parts({
    root: {
      height: "16",
      width: "16",
      borderColor: "accent.default",
      borderRadius: "full",
      borderWidth: "1px"
    },
    fallback: {
      alignItems: "center",
      background: "accent.default",
      color: "white",
      display: "flex",
      fontWeight: "semibold",
      height: "inherit",
      justifyContent: "center",
      textStyle: "xl"
    },
    image: {
      objectFit: "cover"
    }
  })
});

// src/theme/recipes/badge.ts
var badge = defineRecipe({
  className: "badge",
  description: "A badge styles",
  base: {
    borderRadius: "2xl",
    background: {
      base: "red.50",
      _dark: "red.500"
    },
    color: {
      base: "red.600",
      _dark: "white"
    },
    display: "inline-flex",
    fontWeight: "medium",
    px: "2",
    py: "0.5",
    textStyle: "xs"
  }
});

// src/theme/recipes/button.ts
var button2 = defineRecipe({
  className: "button",
  description: "A button styles",
  base: {
    padding: "0.4rem 0.9rem",
    borderWidth: "1px",
    borderStyle: "solid",
    _disabled: {
      color: "gray.400",
      cursor: "not-allowed"
    },
    fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
    transitionDuration: "0.25s"
  },
  defaultVariants: {
    variant: "primary",
    shape: "square",
    fill: "solid"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "primary.500",
        borderColor: "primary.600",
        color: "primary.950",
        _hover: {
          backgroundColor: "primary.300"
        }
      },
      secondary: {
        backgroundColor: "secondary.500",
        borderColor: "secondary.600",
        color: "white",
        _hover: {
          backgroundColor: "secondary.300"
        }
      },
      tertiary: {
        backgroundColor: "tertiary.500",
        borderColor: "tertiary.600",
        color: "secondary.600",
        _hover: {
          backgroundColor: "tertiary.300"
        }
      },
      accent: {
        backgroundColor: "accent.500",
        borderColor: "accent.600",
        color: "accent.50",
        _hover: {
          backgroundColor: "accent.300"
        }
      },
      info: {
        backgroundColor: "info.500",
        borderColor: "info.600",
        color: "accent.400",
        _hover: {
          backgroundColor: "info.300"
        }
      },
      danger: {
        backgroundColor: "danger.400",
        borderColor: "danger.500",
        color: "rose.300",
        _hover: {
          backgroundColor: "danger.200"
        }
      },
      link: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        _hover: {
          textDecoration: "underline"
        },
        height: "auto !important",
        px: "0 !important"
      },
      icon: {
        background: "transparent",
        color: "inherit",
        border: "none",
        cursor: "pointer",
        height: "auto !important",
        px: "0 !important"
      }
    },
    shape: {
      rounded: {
        borderRadius: "sm"
      },
      square: {
        borderRadius: "0"
      }
    },
    fill: {
      solid: {},
      outline: {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        textDecoration: "none"
      },
      outlinereverse: {
        textDecoration: "none"
      }
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      fill: "outline",
      css: {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        textDecoration: "none",
        _hover: {
          backgroundColor: "primary.500",
          borderColor: "primary.500",
          color: "primary.950"
        }
      }
    },
    {
      variant: "secondary",
      fill: "outline",
      css: {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        textDecoration: "none",
        _hover: {
          backgroundColor: "secondary.500",
          borderColor: "secondary.500",
          color: "white"
        }
      }
    },
    {
      variant: "tertiary",
      fill: "outline",
      css: {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        textDecoration: "none",
        _hover: {
          backgroundColor: "tertiary.500",
          borderColor: "tertiary.500",
          color: "secondary.600"
        }
      }
    },
    {
      variant: "accent",
      fill: "outline",
      css: {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        textDecoration: "none",
        _hover: {
          backgroundColor: "accent.500",
          borderColor: "accent.500",
          color: "accent.50"
        }
      }
    },
    {
      variant: "info",
      fill: "outline",
      css: {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        textDecoration: "none",
        _hover: {
          backgroundColor: "info.500",
          borderColor: "info.500",
          color: "accent.400"
        }
      }
    },
    {
      variant: "danger",
      fill: "outline",
      css: {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        textDecoration: "none",
        _hover: {
          backgroundColor: "danger.500",
          borderColor: "danger.500",
          color: "rose.300"
        }
      }
    },
    {
      variant: "primary",
      fill: "outlinereverse",
      css: {
        borderColor: "primary.950",
        backgroundColor: "transparent",
        color: "primary.950",
        _hover: {
          backgroundColor: "primary.950",
          color: "primary.500"
        }
      }
    },
    {
      variant: "secondary",
      fill: "outlinereverse",
      css: {
        borderColor: "secondary.950",
        backgroundColor: "transparent",
        color: "secondary.950",
        _hover: {
          backgroundColor: "secondary.950",
          color: "secondary.500"
        }
      }
    },
    {
      variant: "tertiary",
      fill: "outlinereverse",
      css: {
        borderColor: "secondary.700",
        backgroundColor: "transparent",
        color: "secondary.700",
        _hover: {
          backgroundColor: "secondary.700",
          color: "tertiary.500"
        }
      }
    },
    {
      variant: "accent",
      fill: "outlinereverse",
      css: {
        borderColor: "accent.950",
        backgroundColor: "transparent",
        color: "accent.950",
        _hover: {
          backgroundColor: "accent.500",
          borderColor: "accent.500",
          color: "accent.50"
        }
      }
    },
    {
      variant: "info",
      fill: "outlinereverse",
      css: {
        borderColor: "info.950",
        backgroundColor: "transparent",
        color: "info.950",
        _hover: {
          backgroundColor: "info.950",
          color: "info.500"
        }
      }
    },
    {
      variant: "danger",
      fill: "outlinereverse",
      css: {
        borderColor: "danger.950",
        backgroundColor: "transparent",
        color: "danger.950",
        _hover: {
          backgroundColor: "danger.950",
          color: "danger.500"
        }
      }
    }
  ]
});

// src/theme/recipes/carousel.ts
var import_react3 = require("@ark-ui/react");
var parts2 = defineParts(import_react3.carouselAnatomy.build());
var carousel = defineRecipe({
  className: "carousel",
  description: "A carousel style",
  base: parts2({
    viewport: {
      overflowX: "hidden",
      position: "relative"
    },
    control: {
      display: "flex",
      justifyContent: "space-between",
      left: 3,
      position: "absolute",
      right: 3,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1
    }
  })
});

// src/theme/recipes/checkbox.ts
var import_react4 = require("@ark-ui/react");
var parts3 = defineParts(import_react4.checkboxAnatomy.build());
var checkbox = defineRecipe({
  className: "checkbox",
  description: "A checkbox style",
  base: parts3({
    root: {
      cursor: "pointer",
      display: "flex",
      gap: "2"
    },
    label: {
      display: "inline-flex",
      flexDirection: "column",
      gap: "0.5"
    },
    control: {
      alignItems: "center",
      background: "bg.surface",
      borderColor: "border.emphasized",
      borderRadius: "md",
      borderWidth: "1px",
      display: "flex",
      height: "5",
      justifyContent: "center",
      width: "5",
      _peerFocusVisible: {
        "--shadow": {
          base: "colors.orange.100",
          _dark: "colors.gray.800"
        },
        boxShadow: "0 0 0 4px var(--shadow)"
      },
      _hover: {
        borderColor: {
          base: "gray.400",
          _dark: "gray.700"
        }
      },
      _checked: {
        background: "accent.default",
        borderColor: "accent.default",
        color: "fg.inverted.default",
        _hover: {
          borderColor: "accent.default"
        }
      },
      _indeterminate: {
        borderColor: "accent.default",
        color: "accent.default",
        _hover: {
          borderColor: "accent.default"
        }
      }
    }
  })
});

// src/theme/recipes/code.ts
var code = defineRecipe({
  className: "code",
  description: "A code style",
  base: {
    "&:not([data-language])": {
      alignItems: "center",
      bg: "bg.surface",
      borderWidth: "1px",
      borderRadius: "sm",
      color: "accent.muted",
      display: "inline-flex",
      fontFamily: "var(--font-fira-code)",
      fontWeight: "medium",
      fontSize: "sm",
      height: "6",
      px: "1"
    }
  }
});

// src/theme/recipes/color-picker.ts
var import_react5 = require("@ark-ui/react");
var parts4 = defineParts(import_react5.colorPickerAnatomy.build());
var colorPicker = defineRecipe({
  className: "colorPicker",
  description: "A color picker style",
  base: parts4({
    content: {
      background: {
        base: "white",
        _dark: "brown.600"
      },
      borderRadius: "lg",
      borderWidth: "1px",
      boxShadow: "lg",
      width: "266px",
      overflow: "hidden"
    },
    area: {
      height: "266px"
    },
    areaGradient: {
      height: "100%"
    },
    channelSliderTrack: {
      height: "3",
      borderRadius: "full",
      borderWidth: "1px"
    },
    swatchGroup: {
      display: "inline-flex",
      flexWrap: "wrap",
      gap: "2"
    },
    swatch: {
      height: "4",
      width: "4",
      borderRadius: "xs",
      flexShrink: "0"
    },
    areaThumb: {
      borderRadius: "full",
      border: "2px solid white",
      height: "4",
      width: "4",
      boxShadow: "black 0px 0px 0px 1px, black 0px 0px 0px 1px inset",
      outline: "none",
      zIndex: "1"
    },
    channelSliderThumb: {
      borderRadius: "full",
      border: "2px solid white",
      height: "3",
      width: "3",
      transform: "translate(-50%, -50%)",
      outline: "none",
      boxShadow: "black 0px 0px 0px 1px, black 0px 0px 0px 1px inset"
    }
  })
});

// src/theme/recipes/cookie-bar.ts
var cookieBar = defineRecipe({
  className: "cookieBar",
  description: "A cookie bar styles",
  base: {
    fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "13px",
    textAlign: "center",
    height: "90px",
    width: "520px",
    borderLeft: "35px solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: "30px"
  },
  defaultVariants: {
    variant: "primary"
  },
  variants: {
    variant: {
      primary: {
        borderColor: "primary.950",
        backgroundColor: "primary.500",
        color: "primary.950"
      },
      secondary: {
        borderColor: "secondary.950",
        backgroundColor: "secondary.500",
        color: "secondary.950"
      },
      tertiary: {
        borderColor: "secondary.700",
        backgroundColor: "tertiary.500",
        color: "secondary.700"
      },
      accent: {
        borderColor: "accent.50",
        backgroundColor: "accent.500",
        color: "accent.50"
      },
      info: {
        borderColor: "accent.400",
        backgroundColor: "info.500",
        color: "accent.400"
      },
      danger: {
        borderColor: "danger.950",
        backgroundColor: "danger.400",
        color: "danger.950"
      }
    }
  }
});

// src/theme/recipes/dialog.ts
var import_react6 = require("@ark-ui/react");
var parts5 = defineParts(import_react6.dialogAnatomy.build());
var dialog = defineRecipe({
  className: "dialog",
  description: "A dialog style",
  base: parts5({
    backdrop: {
      background: {
        base: "gray.700",
        _dark: "black"
      },
      opacity: "0.7",
      inset: "0",
      position: "fixed",
      zIndex: "200"
    },
    container: {
      alignItems: "center",
      display: "flex",
      inset: "0",
      justifyContent: "center",
      position: "fixed",
      zIndex: "200"
    },
    content: {
      background: "bg.surface",
      borderRadius: "xl",
      boxShadow: "lg",
      minW: "sm",
      position: "relative"
    },
    title: {
      fontWeight: "semibold",
      textStyle: "lg"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    }
  })
});

// src/theme/recipes/divider.ts
var divider = defineRecipe({
  className: "divider",
  description: "A divider style",
  base: {
    width: "full",
    borderBottomWidth: "1px"
  }
});

// src/theme/recipes/drawer.ts
var import_react7 = require("@ark-ui/react");
var parts6 = defineParts(import_react7.dialogAnatomy.build());
var drawer = defineRecipe({
  className: "drawer",
  description: "A drawer style",
  base: parts6({
    backdrop: {
      position: "fixed",
      background: "rgb(0,0,0,0.2)",
      inset: "0",
      zIndex: "99"
    },
    container: {
      display: "flex",
      background: "rgb(0,0,0,0.2)",
      inset: "0",
      zIndex: "99"
    },
    content: {
      position: "absolute",
      zIndex: "99999",
      background: "neutral.50",
      height: "100%",
      minW: "xs",
      overflowY: "auto",
      border: "none",
      width: "100%"
    },
    closeTrigger: {
      position: "absolute",
      top: "0",
      background: "neutral.50",
      color: "white",
      fontSize: "md",
      width: "3rem",
      height: "3rem",
      border: "none",
      boxShadow: "inset  -1px -1px   rgba(0,0,0,1/0.2)"
    },
    title: {
      fontWeight: "semibold",
      textStyle: "lg",
      w: "full",
      height: "30px",
      textAlign: "center"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    }
  }),
  variants: {
    variant: {
      right: parts6({
        content: {
          top: "0",
          bottom: "0",
          right: "0",
          "&[data-state=open]": { animation: "slideLeftIn 0.5s ease-out" },
          "&[data-state=closed]": { animation: "slideRightOut 0.5s ease-in" }
        },
        closeTrigger: {
          left: "0"
        }
      }),
      left: parts6({
        content: {
          top: "0",
          bottom: "0",
          left: "0",
          "&[data-state=open]": { animation: "slideRightIn 0.5s ease-out" },
          "&[data-state=closed]": { animation: "slideLeftOut 0.5s ease-in" }
        },
        closeTrigger: {
          right: "0"
        }
      })
    },
    size: {
      sm: parts6({
        content: {
          width: "35%",
          minWidth: "250px"
        }
      }),
      md: parts6({
        content: {
          width: "50%",
          minWidth: "400px"
        }
      }),
      full: parts6({
        content: {
          width: "full",
          minWidth: "1005"
        }
      })
    }
  },
  defaultVariants: {
    variant: "right",
    size: "sm"
  }
});

// src/theme/recipes/header.ts
var header = defineRecipe({
  className: "header",
  description: "A header style for <h*> type Elements",
  base: {},
  variants: {
    type: {
      h1: {
        display: "block",
        fontSize: "2rem",
        marginTop: "0.67rem",
        marginBottom: "0.67rem",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      },
      h2: {
        display: "block",
        fontSize: " 1.5rem",
        marginTop: "0.83rem",
        marginBottom: "0.83rem",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      },
      h3: {
        display: "block",
        fontSize: "1.7rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      },
      h4: {
        display: "block",
        fontSize: "1rem",
        marginTop: "1.33rem",
        marginBottom: "1.33rem",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      }
    }
  },
  defaultVariants: {
    type: "h1"
  }
});

// src/theme/recipes/hover-card.ts
var import_react8 = require("@ark-ui/react");
var parts7 = defineParts(import_react8.hoverCardAnatomy.build());
var hoverCard = defineRecipe({
  className: "hoverCard",
  description: "A hover card style",
  base: parts7({
    positioner: {
      "--hover-card-background": "colors.bg.surface",
      background: "var(--hover-card-background)",
      borderRadius: "lg",
      borderWidth: "1px",
      boxShadow: "xl"
    },
    content: {
      maxWidth: "xs",
      p: "4",
      position: "relative"
    },
    arrow: {
      "--arrow-size": "12px",
      "--arrow-background": "var(--hover-card-background)"
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px"
    }
  })
});

// src/theme/recipes/input.ts
var input = defineRecipe({
  className: "input",
  description: "An input style",
  base: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "base",
    transitionDuration: "100",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  },
  variants: {
    variant: {
      outline: {
        background: {
          base: "white",
          _dark: "brown.600"
        },
        borderColor: "border.emphasized",
        borderRadius: "lg",
        borderWidth: "1px",
        color: "fg.default",
        textAlign: "left",
        _focus: {
          zIndex: 1,
          "--shadow": {
            base: "colors.orange.400",
            _dark: "colors.orange.400"
          },
          boxShadow: "0 0 0 1px var(--shadow)",
          borderColor: "accent.default"
        }
      }
    },
    size: {
      sm: { px: "2.5", h: "9", minW: "9", textStyle: "sm" },
      md: { px: "3", h: "10", minW: "10", textStyle: "md" },
      lg: { px: "3.5", h: "11", minW: "11", textStyle: "md" },
      xl: { px: "4", h: "12", minW: "12", textStyle: "md" },
      "2xl": { px: "2", h: "16", minW: "16", textStyle: "3xl" }
    }
  }
});

// src/theme/recipes/lateral-drawer.ts
var import_react9 = require("@ark-ui/react");
var parts8 = defineParts(import_react9.dialogAnatomy.build());
var lateralDrawer = defineRecipe({
  className: "lateralDrawer",
  description: "A lateral drawl  style",
  base: parts8({
    backdrop: {
      position: "fixed",
      background: "rgb(0,0,0,0.2)",
      inset: "0",
      zIndex: "99"
    },
    container: {
      display: "flex",
      background: "rgb(0,0,0,0.2)",
      inset: "0",
      zIndex: "99"
    },
    content: {
      position: "absolute",
      zIndex: "99999",
      background: "neutral.50",
      height: "100%",
      minW: "xs",
      overflowY: "auto",
      border: "none",
      width: "100%"
    },
    closeTrigger: {
      position: "absolute",
      top: "0",
      background: "neutral.50",
      color: "gray.500",
      fontSize: "md",
      width: "3rem",
      height: "3rem",
      border: "none",
      boxShadow: "inset  -1px -1px   rgba(0,0,0,1/0.2)"
    },
    title: {
      fontWeight: "semibold",
      textStyle: "lg",
      w: "full",
      height: "30px",
      textAlign: "center"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    }
  }),
  variants: {
    variant: {
      right: parts8({
        content: {
          top: "0",
          bottom: "0",
          right: "0",
          "&[data-state=open]": { animation: "slideLeftIn 0.5s ease-out" },
          "&[data-state=closed]": { animation: "slideRightOut 0.5s ease-in" }
        },
        closeTrigger: {
          left: "0"
        }
      }),
      left: parts8({
        content: {
          top: "0",
          bottom: "0",
          left: "0",
          "&[data-state=open]": { animation: "slideRightIn 0.5s ease-out" },
          "&[data-state=closed]": { animation: "slideLeftOut 0.5s ease-in" }
        },
        closeTrigger: {
          right: "0"
        }
      })
    },
    size: {
      sm: parts8({
        content: {
          width: "25%",
          minWidth: "250px",
          maxWidth: "390px"
        }
      }),
      mid: parts8({
        content: {
          width: "40%",
          minWidth: "500px"
        }
      }),
      full: parts8({
        content: {
          width: "full",
          minWidth: "100%"
        }
      })
    }
  },
  defaultVariants: {
    variant: "right",
    size: "sm"
  }
});

// src/theme/recipes/link.ts
var link = defineRecipe({
  className: "link",
  description: "A link styles",
  base: {
    transitionProperty: "base",
    transitionDuration: "100",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    _focusVisible: {
      boxShadow: "outline"
    }
  },
  defaultVariants: {},
  variants: {
    variant: {
      sidebar: {
        display: "flex",
        alignSelf: "stretch",
        borderLeftWidth: "1px",
        color: "fg.muted",
        fontWeight: "medium",
        ml: "-1px",
        pl: "4",
        fontSize: { base: "md", lg: "sm" },
        lineHeight: "1.5rem",
        _hover: { color: "fg.default", borderLeftColor: "accent.muted" },
        _currentPage: {
          color: "fg.default",
          fontWeight: "semibold",
          borderColor: "accent.muted"
        }
      },
      toc: {
        display: "flex",
        alignSelf: "stretch",
        color: "fg.muted",
        textStyle: "sm",
        fontWeight: "medium",
        lineHeight: "1.5rem",
        _hover: { color: "fg.default", borderLeftColor: "fg.muted" },
        _currentPage: {
          color: "fg.default",
          fontWeight: "semibold",
          borderColor: "accent.default"
        }
      },
      mdx: {
        color: "fg.emphasized",
        _visited: { color: "fg.emphasized" },
        textDecoration: "underline",
        textDecorationColor: "accent.muted",
        textUnderlineOffset: "0.2em"
      }
    }
  }
});

// src/theme/recipes/markdown.ts
var markdown = defineRecipe({
  className: "markdown",
  description: "A recipe for markdown content",
  base: {
    "&": {
      width: "full"
    },
    "& strong": {
      color: "fg.emphasized"
    },
    "& h1": {
      fontWeight: "semibold",
      mt: { base: "8", md: "10" },
      mb: { base: "4", md: "5" },
      textStyle: { base: "2xl", md: "3xl" }
    },
    "& h2": {
      fontWeight: "semibold",
      mt: { base: "8", md: "8" },
      mb: { base: "3", md: "4" },
      textStyle: { base: "xl", md: "2xl" }
    },
    "& h3": {
      fontWeight: "semibold",
      mt: { base: "5", md: "8" },
      mb: { base: "2", md: "3" },
      textStyle: { base: "lg", md: "xl" }
    },
    "& p": {
      color: "fg.muted",
      lineHeight: "relaxed",
      mb: "4"
    },
    "& ul": {
      color: "fg.muted",
      listStyle: "none",
      lineHeight: "loose",
      mb: "4",
      p: "0"
    },
    "& li::before": {
      display: "inline-block",
      content: "'\u2013'",
      width: "1em",
      color: "fg.emphasized"
    },
    "& [data-rehype-pretty-code-fragment]": {
      my: "8"
    },
    "& [data-rehype-pretty-code-fragment] pre": {
      background: "brown.600 !important"
    },
    "& pre": {
      borderRadius: "lg",
      borderWidth: "1px",
      p: "4"
    },
    "& kbd": {
      background: "bg.subtle",
      borderRadius: "sm",
      borderWidth: "1px",
      borderColor: "border.emphasized",
      borderBottomWidth: "3px",
      fontSize: "xs",
      fontWeight: "bold",
      fontFamily: "var(--font-fira-code)",
      lineHeight: "normal",
      px: "1",
      py: "0.5",
      whiteSpace: "nowrap"
    },
    "& :first-child": {
      mt: "0"
    },
    "& :last-child": {
      mb: "0"
    },
    "& blockquote": {
      padding: "1em",
      borderWidth: "1px",
      mb: "4",
      borderRadius: "0.5em"
    }
  }
});

// src/theme/recipes/menu.ts
var import_react10 = require("@ark-ui/react");
var parts9 = defineParts(import_react10.menuAnatomy.build());
var baseItemStyle = {
  alignItems: "center",
  borderRadius: "md",
  color: "fg.emphasized",
  cursor: "pointer",
  display: "flex",
  my: "1",
  textStyle: "sm",
  _focus: {
    background: "bg.subtle"
  },
  _selected: {
    background: "bg.subtle"
  }
};
var menu = defineRecipe({
  className: "menu",
  description: "A menu style",
  base: parts9({
    positioner: {
      zIndex: "100"
    },
    separator: {
      borderBottomWidth: "1px",
      my: "1"
    },
    itemGroupLabel: {
      fontWeight: "semibold",
      px: "2.5",
      py: "3",
      textStyle: "sm"
    },
    content: {
      background: "bg.surface",
      borderRadius: "lg",
      borderWidth: "1px",
      boxShadow: "lg",
      minWidth: "15rem",
      px: "1.5",
      py: "0.5",
      outline: "none"
    },
    item: __spreadProps(__spreadValues({}, baseItemStyle), {
      px: "2.5",
      py: "2"
    }),
    optionItem: __spreadProps(__spreadValues({}, baseItemStyle), {
      "& > *": {
        flex: "1",
        px: "2.5",
        py: "2"
      }
    }),
    triggerItem: __spreadProps(__spreadValues({}, baseItemStyle), {
      px: "2.5",
      py: "2"
    })
  })
});

// src/theme/recipes/navbar.ts
var navbar = defineRecipe({
  className: "navbar",
  description: "A navbar styles",
  base: {
    padding: "0.4rem 0",
    fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
    width: "full",
    display: "flex",
    justifyContent: "space-between",
    height: "25px",
    overflow: "hidden"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "primary.500"
        // suggested text color: 'primary.950'
      },
      secondary: {
        backgroundColor: "secondary.500"
        // suggested text color: 'white'
      },
      tertiary: {
        backgroundColor: "tertiary.500"
        // suggested text color: 'secondary.600'
      },
      accent: {
        backgroundColor: "accent.500"
        // suggested text color: 'accent.50'
      },
      info: {
        backgroundColor: "info.500"
        // suggested text color: 'accent.400'
      },
      danger: {
        backgroundColor: "danger.500"
        // suggested text color: 'rose.300'
      },
      transparent: {
        backgroundColor: "transparent"
        // suggested text color: 'black'
      }
    }
  }
});

// src/theme/recipes/navbar-left.ts
var navbarLeft = defineRecipe({
  className: "navbarLeft",
  description: "A navbar left styles",
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginLeft: "1rem"
    // TODO: breaking build
    // xsOnly: {
    //   textAlign: 'center'
    // }
  }
});

// src/theme/recipes/navbar-middle.ts
var navbarMiddle = defineRecipe({
  className: "navbarMiddle",
  description: "A navbar middle styles",
  base: {
    hideBelow: "xs",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }
});

// src/theme/recipes/navbar-mobile-menu.ts
var navbarMobileMenu = defineRecipe({
  className: "navbarMobileMenu",
  description: "A navbar mobile menu styles",
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginLeft: "1rem",
    hideFrom: "sm"
  }
});

// src/theme/recipes/navbar-right.ts
var navbarRight = defineRecipe({
  className: "navbarRight",
  description: "A navbar mobile menu styles",
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginRight: "1rem"
  }
});

// src/theme/recipes/number-input.ts
var import_react11 = require("@ark-ui/react");
var parts10 = defineParts(import_react11.numberInputAnatomy.build());
var trigger = {
  alignItems: "center",
  appearance: "none",
  cursor: "pointer",
  display: "inline-flex",
  fontWeight: "semibold",
  flex: "1",
  justifyContent: "center",
  outline: "none",
  position: "relative",
  transitionProperty: "base",
  transitionDuration: "100",
  transitionTimingFunction: "ease-out",
  userSelect: "none",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  background: "bg.surface",
  color: "fg.emphasized",
  _hover: {
    background: "bg.subtle",
    _disabled: {
      borderColor: "border.default",
      color: "fg.subtle",
      cursor: "not-allowed"
    }
  },
  _selected: {
    background: "bg.subtle"
  },
  _focusVisible: {
    zIndex: 1,
    "--shadow": {
      base: "colors.gray.100",
      _dark: "colors.gray.800"
    },
    boxShadow: "0 0 0 4px var(--shadow)"
  },
  _disabled: {
    borderColor: "border.default",
    color: "fg.subtle",
    cursor: "not-allowed",
    _hover: {
      background: "bg.surface"
    }
  }
};
var numberInput = defineRecipe({
  className: "numberInput",
  description: "A number input style",
  base: parts10({
    root: {
      borderColor: "border.emphasized",
      borderRadius: "lg",
      borderWidth: "1px",
      boxShadow: "xs",
      display: "flex",
      overflow: "hidden",
      pl: "3",
      h: "10",
      minW: "10",
      textStyle: "md",
      _focusWithin: {
        zIndex: 1,
        "--shadow": {
          base: "colors.orange.400",
          _dark: "colors.orange.400"
        },
        boxShadow: "0 0 0 1px var(--shadow)",
        borderColor: "accent.default"
      }
    },
    control: {
      borderLeftWidth: "1px",
      borderColor: "border.emphasized",
      display: "flex",
      flexDirection: "column"
    },
    input: {
      background: "bg.surface",
      color: "fg.default",
      outline: "none"
    },
    decrementTrigger: trigger,
    incrementTrigger: __spreadProps(__spreadValues({}, trigger), {
      borderBottomWidth: "1px",
      borderColor: "border.emphasized"
    })
  })
});

// src/theme/recipes/pagination.ts
var import_react12 = require("@ark-ui/react");
var parts11 = defineParts(import_react12.paginationAnatomy.build());
var pagination = defineRecipe({
  className: "pagination",
  description: "A pagination style",
  base: parts11({
    root: {
      display: "flex",
      justifyContent: "space-between"
    },
    list: {
      display: "flex",
      listStyle: "none",
      padding: "0",
      gap: "1"
    },
    pageTrigger: {
      fontVariantNumeric: "tabular-nums"
    },
    ellipsis: {
      alignItems: "center",
      color: "fg.emphasized",
      display: "inline-flex",
      height: "10",
      minW: "10",
      fontSize: "sm",
      px: "4"
    }
  })
});

// src/theme/recipes/pin-input.ts
var import_react13 = require("@ark-ui/react");
var parts12 = defineParts(import_react13.pinInputAnatomy.build());
var pinInput = defineRecipe({
  className: "pinInput",
  description: "An pin input style",
  base: parts12({
    control: {
      display: "flex",
      gap: "2"
    }
  })
});

// src/theme/recipes/popover.ts
var import_react14 = require("@ark-ui/react");
var parts13 = defineParts(import_react14.popoverAnatomy.build());
var popover = defineRecipe({
  className: "popover",
  description: "A popover style",
  base: parts13({
    positioner: {
      background: "bg.surface",
      borderRadius: "lg",
      borderWidth: "1px",
      boxShadow: "lg",
      zIndex: "1"
    },
    content: {
      maxWidth: "sm",
      p: "4",
      position: "relative"
    },
    title: {
      fontWeight: "semibold",
      textStyle: "sm"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    },
    arrow: {
      "--arrow-size": "12px",
      "--arrow-background": {
        base: "white",
        _dark: "colors.gray.950"
      }
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px"
    }
  })
});

// src/theme/recipes/promo-bar.ts
var promoBar = defineRecipe({
  className: "promoBar",
  description: "A promo bar styles",
  base: {
    fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "13px",
    textAlign: "center",
    height: "25px",
    width: "full",
    lineHeight: "25px"
  },
  defaultVariants: {
    variant: "primary"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "primary.500",
        color: "primary.950"
      },
      secondary: {
        backgroundColor: "secondary.500",
        color: "white"
      },
      tertiary: {
        backgroundColor: "tertiary.500",
        color: "secondary.600"
      },
      accent: {
        backgroundColor: "accent.500",
        color: "accent.50"
      },
      info: {
        backgroundColor: "info.500",
        color: "accent.400"
      },
      danger: {
        backgroundColor: "danger.500",
        color: "rose.300"
      }
    }
  }
});

// src/theme/recipes/radio.ts
var import_react15 = require("@ark-ui/react");
var parts14 = defineParts(
  (0, import_react15.createAnatomy)("radio", ["root", "control", "label", "input"]).build()
);
var radio = defineRecipe({
  className: "radio",
  description: "A radio style",
  base: parts14({
    root: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      gap: "2"
    },
    control: {
      background: "bg.surface",
      borderColor: "border.emphasized",
      borderRadius: "full",
      borderWidth: "1px",
      height: "5",
      width: "5",
      _peerFocusVisible: {
        "--shadow": {
          base: "colors.purple.100",
          _dark: "colors.gray.800"
        },
        boxShadow: "0 0 0 4px var(--shadow)"
      },
      _hover: {
        borderColor: {
          base: "gray.400",
          _dark: "gray.700"
        }
      },
      _checked: {
        background: "accent.default",
        borderColor: "accent.default",
        "--outline-color": {
          base: "colors.white",
          _dark: "colors.gray.950"
        },
        outlineColor: "var(--outline-color)",
        outlineStyle: "solid",
        outlineWidth: "3px",
        outlineOffset: "-4px"
      }
    },
    label: {
      color: "fg.emphasized",
      fontWeight: "medium"
    },
    input: {
      border: "0",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0",
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap",
      wordWrap: "normal"
    }
  })
});

// src/theme/recipes/radio-group.ts
var import_react16 = require("@ark-ui/react");
var parts15 = defineParts(import_react16.radioGroupAnatomy.build());
var radioGroup = defineRecipe({
  className: "radioGroup",
  description: "A radio group style",
  base: parts15({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "4"
    },
    radioControl: {
      background: "bg.surface",
      borderColor: "border.emphasized",
      borderRadius: "full",
      borderWidth: "1px",
      height: "5",
      width: "5",
      _peerFocusVisible: {
        "--shadow": {
          base: "colors.purple.100",
          _dark: "colors.gray.800"
        },
        boxShadow: "0 0 0 4px var(--shadow)"
      },
      _hover: {
        borderColor: {
          base: "gray.400",
          _dark: "gray.700"
        }
      },
      _checked: {
        background: "accent.default",
        borderColor: "accent.default",
        "--outline-color": {
          base: "colors.white",
          _dark: "colors.gray.950"
        },
        outlineColor: "var(--outline-color)",
        outlineStyle: "solid",
        outlineWidth: "3px",
        outlineOffset: "-4px"
      }
    },
    radio: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      gap: "3"
    },
    radioLabel: {
      color: "fg.emphasized",
      fontWeight: "medium"
    }
  })
});

// src/theme/recipes/rating-group.ts
var import_react17 = require("@ark-ui/react");
var parts16 = defineParts(import_react17.ratingGroupAnatomy.build());
var ratingGroup = defineRecipe({
  className: "ratingGroup",
  description: "A rating group style",
  base: parts16({
    root: {},
    control: {
      display: "flex",
      gap: "0.5"
    },
    rating: {
      cursor: "pointer",
      color: {
        base: "gray.300",
        _dark: "brown.300"
      },
      fill: {
        base: "gray.300",
        _dark: "brown.300"
      },
      transitionProperty: "base",
      transitionDuration: "50",
      "--stop-color-active": {
        base: "colors.orange.400",
        _dark: "colors.orange.400"
      },
      "--stop-color-inactive": {
        base: "colors.gray.300",
        _dark: "colors.brown.300"
      },
      _focus: {
        outline: 0
      },
      "& svg": {
        width: "10",
        height: "10"
      },
      "&[data-highlighted]": {
        color: "accent.default",
        fill: "accent.default"
      }
    }
  })
});

// src/theme/recipes/segment-group.ts
var import_react18 = require("@ark-ui/react");
var parts17 = defineParts(import_react18.segmentGroupAnatomy.build());
var segmentGroup = defineRecipe({
  className: "segmentGroup",
  description: "A segment group style",
  base: parts17({
    root: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      borderWidth: "1px",
      borderRadius: "lg",
      px: "1",
      bg: "bg.subtle",
      h: "11"
    },
    indicator: {
      background: {
        base: "white",
        _dark: "brown.400"
      },
      zIndex: "1",
      boxShadow: "xs",
      borderRadius: "md"
    },
    radioControl: {},
    radio: {
      zIndex: "2",
      position: "relative",
      fontWeight: "semibold",
      color: "fg.muted",
      px: "3",
      h: "9",
      cursor: "pointer",
      display: "flex"
    },
    radioLabel: {
      alignSelf: "center",
      textStyle: "sm",
      _checked: {
        color: "accent.muted"
      },
      _disabled: {
        color: "fg.subtle",
        cursor: "not-allowed"
      }
    }
  })
});

// src/theme/recipes/select.ts
var import_react19 = require("@ark-ui/react");
var parts18 = defineParts(import_react19.selectAnatomy.build());
var select = defineRecipe({
  className: "select",
  description: "A select style",
  base: parts18({
    content: {
      background: "bg.surface",
      borderRadius: "lg",
      borderWidth: "1px",
      boxShadow: "lg",
      listStyle: "none",
      maxW: "calc(100vw - 1rem)",
      p: "1"
    },
    trigger: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "base",
      transitionDuration: "100",
      width: "full",
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      }
    },
    option: {
      borderRadius: "md",
      cursor: "pointer",
      mb: "1",
      _hover: {
        background: "bg.subtle"
      },
      _selected: {
        background: "bg.subtle"
      },
      _focus: {
        background: "bg.subtle"
      },
      _last: {
        mb: "0"
      }
    }
  }),
  defaultVariants: {
    variant: "outline",
    size: "md"
  },
  variants: {
    variant: {
      outline: parts18({
        trigger: {
          background: "bg.surface",
          borderColor: "border.emphasized",
          borderRadius: "lg",
          borderWidth: "1px",
          color: "fg.default",
          textAlign: "left",
          width: "full",
          _focus: {
            zIndex: 1,
            "--shadow": {
              base: "colors.orange.400",
              _dark: "colors.orange.400"
            },
            boxShadow: "inset 0 0 0 1px var(--shadow)",
            borderColor: "accent.default"
          }
        }
      })
    },
    size: {
      xs: parts18({
        trigger: { px: "2", h: "8", maxW: "2xs", textStyle: "sm" },
        content: { w: "2xs" },
        option: { textStyle: "sm", p: "1" }
      }),
      sm: parts18({
        trigger: { px: "2.5", h: "9", maxW: "2xs", textStyle: "sm" },
        content: { w: "2xs" },
        option: { textStyle: "sm", p: "1.5" }
      }),
      md: parts18({
        trigger: { px: "3", h: "10", maxW: "xs", textStyle: "md" },
        content: { w: "xs" },
        option: { textStyle: "md", p: "2" }
      }),
      lg: parts18({
        trigger: { px: "3.5", h: "11", maxW: "xs", textStyle: "md" },
        content: { w: "xs" },
        option: { textStyle: "md" }
      }),
      xl: parts18({
        trigger: { px: "4", h: "12", maxW: "xs", textStyle: "md" },
        content: { w: "xs" },
        option: { textStyle: "md" }
      }),
      "2xl": parts18({
        trigger: { px: "2", h: "16", maxW: "xs", textStyle: "3xl" },
        content: { w: "xs" },
        option: { textStyle: "3xl" }
      })
    }
  }
});

// src/theme/recipes/slider.ts
var import_react20 = require("@ark-ui/react");
var parts19 = defineParts(import_react20.sliderAnatomy.build());
var slider = defineRecipe({
  className: "slider",
  description: "A slider style",
  base: parts19({
    root: {
      width: "full"
    },
    control: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      py: "2"
    },
    track: {
      backgroundColor: "border.default",
      borderRadius: "sm",
      flex: "1",
      height: "2"
    },
    range: {
      backgroundColor: "accent.default",
      borderRadius: "sm",
      height: "2"
    },
    thumb: {
      background: "bg.surface",
      borderRadius: "full",
      borderWidth: "1.5px",
      borderColor: "accent.default",
      boxShadow: "sm",
      outline: "none",
      height: "6",
      width: "6",
      _focus: {
        outline: "none"
      }
    },
    marker: {
      mt: "2",
      textStyle: "md"
    }
  })
});

// src/theme/recipes/splash-section.ts
var splashSection = defineRecipe({
  className: "splashSection",
  description: "Styles for the Splash Section Component",
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }
});

// src/theme/recipes/splitter.ts
var import_react21 = require("@ark-ui/react");
var parts20 = defineParts(import_react21.splitterAnatomy.build());
var splitter = defineRecipe({
  className: "splitter",
  description: "A splitter style",
  base: parts20({
    root: {
      width: "full",
      gap: "2"
    },
    panel: {
      display: "flex",
      overflow: "auto",
      flex: "1"
    },
    resizeTrigger: {
      alignItems: "center",
      background: {
        base: "gray.200",
        _dark: "brown.200"
      },
      borderRadius: "lg",
      display: "flex",
      justifyContent: "center",
      transition: "background-color 0.2s ease-in-out",
      outline: "0",
      padding: "0",
      position: "relative",
      '&[data-orientation="horizontal"]': {
        minWidth: "6px",
        margin: "min(1rem, 20%) 0"
      },
      '&[data-orientation="vertical"]': {
        minHeight: "6px",
        margin: "0 min(1rem, 20%)"
      },
      _hover: {
        background: "accent.muted"
      },
      _active: {
        background: "accent.muted"
      },
      _disabled: {
        opacity: 0.5
      }
    }
  })
});

// src/theme/recipes/sticky-section.ts
var stickySection = defineRecipe({
  className: "stickySection",
  description: "Styles for the Sticky Section Component",
  base: {
    display: "flex",
    flexDirection: "column",
    top: "0",
    position: "fixed",
    width: "100vh"
  }
});

// src/theme/recipes/switch.ts
var import_react22 = require("@ark-ui/react");
var parts21 = defineParts(import_react22.switchAnatomy.build());
var switchRecipe = defineRecipe({
  className: "switchRecipe",
  description: "A switch style",
  base: parts21({
    root: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      gap: "2",
      width: "fit-content",
      "--switch-track-diff": "calc(var(--switch-track-width) - var(--switch-track-height))",
      "--switch-thumb-x": "var(--switch-track-diff)",
      "--switch-track-width": "1.875rem",
      "--switch-track-height": "1rem"
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      boxSizing: "content-box",
      justifyContent: "flex-start",
      flexShrink: "0",
      cursor: "pointer",
      borderRadius: "full",
      padding: "0.5",
      width: "var(--switch-track-width)",
      height: "var(--switch-track-height)",
      transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow,transform",
      transitionDuration: "150ms",
      background: {
        base: "gray.200",
        _dark: "brown.900"
      },
      _checked: {
        background: "accent.default !important"
      },
      _focusVisible: {
        "--shadow": {
          base: "colors.orange.50",
          _dark: "colors.gray.700"
        },
        boxShadow: "0 0 0 4px var(--shadow)"
      }
    },
    label: {
      userSelect: "none",
      textStyle: "md",
      fontWeight: "medium"
    },
    thumb: {
      background: {
        base: "white",
        _dark: "brown.600"
      },
      transitionProperty: "transform",
      transitionDuration: "200ms",
      borderRadius: "inherit",
      width: "var(--switch-track-height)",
      height: "var(--switch-track-height)",
      position: "relative",
      _before: {
        transition: "background-color 0.2s ease-in-out",
        position: "absolute",
        "--thumb-size": "calc(var(--switch-track-height) + 0.7rem)",
        height: "var(--thumb-size)",
        width: "var(--thumb-size)",
        backgroundColor: "transparent",
        content: "",
        zIndex: "1",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "inherit"
      },
      _checked: {
        background: {
          base: "white",
          _dark: "black"
        },
        transform: "translateX(var(--switch-thumb-x))"
      }
    }
  })
});

// src/theme/recipes/tabs.ts
var import_react23 = require("@ark-ui/react");
var parts22 = defineParts(import_react23.tabsAnatomy.build());
var tabs = defineRecipe({
  className: "tabs",
  description: "A tabs style",
  base: parts22({
    root: {
      width: "full"
    },
    tablist: {
      borderBottomWidth: "1px",
      display: "flex",
      gap: "4",
      height: "8",
      position: "relative"
    },
    trigger: {
      background: "transparent",
      cursor: "pointer",
      color: "fg.muted",
      display: "inline-flex",
      fontWeight: "semibold",
      textStyle: "sm",
      px: "1",
      _hover: {
        color: "fg.emphasized"
      },
      _selected: {
        color: "accent.muted",
        _hover: {
          color: "accent.muted"
        }
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      }
    },
    indicator: {
      height: "2px",
      background: "accent.muted",
      bottom: "-1px"
    },
    content: {
      background: "brown.700",
      borderRadius: "lg",
      borderWidth: "1px",
      borderTopRightRadius: "0",
      borderTopLeftRadius: "0",
      borderTopWidth: "0px",
      minH: "xl",
      p: "4"
    }
  }),
  variants: {
    variant: {
      fill: parts22({
        tablist: {
          alignItems: "center",
          background: {
            base: "gray.200",
            _dark: "brown.600"
          },
          borderWidth: "1px",
          borderRadius: "lg",
          gap: "6",
          px: "4",
          height: "10"
        },
        trigger: {
          color: "fg.muted",
          fontWeight: "medium",
          _selected: {
            color: "fg.default"
          }
        },
        indicator: {
          background: "accent.default"
        }
      })
    }
  }
});

// src/theme/recipes/tags-input.ts
var import_react24 = require("@ark-ui/react");
var parts23 = defineParts(import_react24.tagsInputAnatomy.build());
var tagsInput = defineRecipe({
  className: "tagsInput",
  description: "A tags input style",
  base: parts23({
    root: {
      width: "100%"
    },
    control: {
      background: "bg.surface",
      borderColor: "border.emphasized",
      borderWidth: "1px",
      borderRadius: "lg",
      boxShadow: "xs",
      color: "fg.default",
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5",
      p: "3",
      transitionProperty: "base",
      transitionDuration: "100",
      _focusWithin: {
        zIndex: 1,
        "--shadow": {
          base: "colors.orange.400",
          _dark: "colors.orange.400"
        },
        boxShadow: "0 0 0 1px var(--shadow)",
        borderColor: "accent.default"
      }
    },
    input: {
      background: "bg.surface",
      color: "fg.default",
      outline: "none"
    },
    tag: {
      alignItems: "center",
      background: "bg.surface",
      borderColor: "border.emphasized",
      borderRadius: "md",
      borderWidth: "1px",
      color: "fg.emphasized",
      display: "inline-flex",
      fontWeight: "medium",
      h: "6",
      justifyContent: "center",
      pl: "2.5",
      pr: "1",
      textStyle: "sm",
      _selected: {
        zIndex: 1,
        borderColor: "accent.default"
      },
      "&[hidden]": {
        display: "none"
      }
    },
    tagInput: {
      background: "bg.surface",
      color: "fg.default",
      outline: "none"
    },
    tagDeleteTrigger: {
      alignItems: "center",
      background: "transparent",
      color: "fg.subtle",
      cursor: "pointer",
      display: "inline-flex",
      height: "4",
      justifyContent: "center",
      p: "0",
      width: "4",
      marginLeft: "1",
      "& svg": {
        width: "3",
        height: "3"
      }
    }
  })
});

// src/theme/text-styles.ts
var textStyles = defineTextStyles({
  xs: {
    value: {
      fontSize: "xs",
      lineHeight: "1.125rem"
    }
  },
  sm: {
    value: {
      fontSize: "sm",
      lineHeight: "1.25rem"
    }
  },
  md: {
    value: {
      fontSize: "md",
      lineHeight: "1.5rem"
    }
  },
  lg: {
    value: {
      fontSize: "lg",
      lineHeight: "1.75rem"
    }
  },
  xl: {
    value: {
      fontSize: "xl",
      lineHeight: "1.875rem"
    }
  },
  "2xl": {
    value: {
      fontSize: "2xl",
      lineHeight: "2rem"
    }
  },
  "3xl": {
    value: {
      fontSize: "3xl",
      lineHeight: "2.375rem"
    }
  },
  "4xl": {
    value: {
      fontSize: "4xl",
      lineHeight: "2.75rem",
      letterSpacing: "-0.02em"
    }
  },
  "5xl": {
    value: {
      fontSize: "5xl",
      lineHeight: "3.75rem",
      letterSpacing: "-0.02em"
    }
  },
  "6xl": {
    value: {
      fontSize: "6xl",
      lineHeight: "4.5rem",
      letterSpacing: "-0.02em"
    }
  },
  "7xl": {
    value: {
      fontSize: "7xl",
      lineHeight: "5.75rem",
      letterSpacing: "-0.02em"
    }
  }
});

// src/theme/recipes/text.ts
var text2 = defineRecipe({
  className: "text",
  description: "A paragraph style Text Element",
  // base: {
  //    fontStyle:'none'
  // },
  variants: {
    size: {
      "7xl": __spreadValues({}, textStyles["7xl"].value),
      "6xl": __spreadValues({}, textStyles["6xl"].value),
      "5xl": __spreadValues({}, textStyles["5xl"].value),
      "4xl": __spreadValues({}, textStyles["4xl"].value),
      "3xl": __spreadValues({}, textStyles["3xl"].value),
      "2xl": __spreadValues({}, textStyles["2xl"].value),
      xl: __spreadValues({}, textStyles.xl.value),
      lg: __spreadValues({}, textStyles.lg.value),
      md: __spreadValues({}, textStyles.md.value),
      sm: __spreadValues({}, textStyles.sm.value),
      xs: __spreadValues({}, textStyles.xs.value)
    }
  },
  defaultVariants: {
    size: "xl"
  }
});

// src/theme/recipes/toast.ts
var import_react25 = require("@ark-ui/react");
var parts24 = defineParts(import_react25.toastAnatomy.build());
var toast = defineRecipe({
  className: "toast",
  description: "A toast style",
  base: parts24({
    root: {
      color: "white",
      borderRadius: "xl",
      borderWidth: "1px",
      boxShadow: "lg",
      minWidth: "xs",
      p: "4"
    },
    group: {
      p: "4"
    },
    title: {
      fontWeight: "semibold",
      textStyle: "sm"
    },
    description: {
      color: "fg.muted",
      textStyle: "sm"
    }
  }),
  defaultVariants: {
    variant: "primary"
  },
  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "orange.400",
        _hover: {
          backgroundColor: "orange.500"
        },
        _focusVisible: {
          zIndex: 1,
          "--shadow": {
            base: "colors.orange.50",
            _dark: "colors.gray.700"
          },
          boxShadow: "0 0 0 4px var(--shadow)"
        }
      }
    }
  }
});

// src/theme/recipes/tooltip.ts
var import_react26 = require("@ark-ui/react");
var parts25 = defineParts(import_react26.tooltipAnatomy.build());
var tooltip = defineRecipe({
  className: "tooltip",
  description: "A tooltip style",
  base: parts25({
    positioner: {
      py: "2",
      px: "3",
      backgroundColor: {
        base: "brown.600",
        _dark: "gray.100"
      },
      boxShadow: "lg",
      borderRadius: "lg",
      color: {
        base: "gray.100",
        _dark: "brown.600"
      }
    },
    content: {
      fontWeight: "semibold",
      textStyle: "xs"
    },
    arrow: {
      "--arrow-size": "sizes.2",
      "--arrow-background": {
        base: "colors.brown.600",
        _dark: "colors.gray.100"
      }
    }
  })
});

// src/theme/recipes/index.ts
var recipes = {
  // accordion,
  avatar,
  badge,
  button: button2,
  carousel,
  checkbox,
  code,
  colorPicker,
  cookieBar,
  // datePicker,
  dialog,
  divider,
  drawer,
  hoverCard,
  header,
  stickySection,
  input,
  lateralDrawer,
  link,
  markdown,
  menu,
  navbar,
  navbarLeft,
  navbarMiddle,
  navbarMobileMenu,
  navbarRight,
  numberInput,
  pagination,
  pinInput,
  popover,
  promoBar,
  radio,
  radioGroup,
  ratingGroup,
  segmentGroup,
  select,
  slider,
  splashSection,
  splitter,
  switchRecipe,
  tabs,
  tagsInput,
  text: text2,
  toast,
  tooltip
};

// src/theme/colors.ts
var colors = defineTokens.colors({
  current: { value: "currentColor" },
  black: { value: "#000000" },
  white: { value: "#ffffff" },
  blackAlpha: {
    50: { value: "rgba(0, 0, 0, 0.04)" },
    100: { value: "rgba(0, 0, 0, 0.06)" },
    200: { value: "rgba(0, 0, 0, 0.08)" },
    300: { value: "rgba(0, 0, 0, 0.16)" },
    400: { value: "rgba(0, 0, 0, 0.24)" },
    500: { value: "rgba(0, 0, 0, 0.36)" },
    600: { value: "rgba(0, 0, 0, 0.48)" },
    700: { value: "rgba(0, 0, 0, 0.64)" },
    800: { value: "rgba(0, 0, 0, 0.80)" },
    900: { value: "rgba(0, 0, 0, 0.92)" }
  },
  whiteAlpha: {
    50: { value: "rgba(255, 255, 255, 0.04)" },
    100: { value: "rgba(255, 255, 255, 0.06)" },
    200: { value: "rgba(255, 255, 255, 0.08)" },
    300: { value: "rgba(255, 255, 255, 0.16)" },
    400: { value: "rgba(255, 255, 255, 0.24)" },
    500: { value: "rgba(255, 255, 255, 0.36)" },
    600: { value: "rgba(255, 255, 255, 0.48)" },
    700: { value: "rgba(255, 255, 255, 0.64)" },
    800: { value: "rgba(255, 255, 255, 0.80)" },
    900: { value: "rgba(255, 255, 255, 0.92)" }
  },
  primary: {
    50: { value: "#e4e8d6" },
    100: { value: "#dfe3ce" },
    200: { value: "#d9dec6" },
    300: { value: "#d4d9bd" },
    400: { value: "#ced5b5" },
    500: { value: "#c9d0ad" },
    600: { value: "#b5bb9c" },
    700: { value: "#a1a68a" },
    800: { value: "#8d9279" },
    900: { value: "#797d68" },
    950: { value: "#656857" }
  },
  secondary: {
    50: { value: "#e6cfbe" },
    100: { value: "#e1c5b1" },
    200: { value: "#dcbba4" },
    300: { value: "#d7b197" },
    400: { value: "#d2a88a" },
    500: { value: "#cd9e7d" },
    600: { value: "#b98e71" },
    700: { value: "#a47e64" },
    800: { value: "#906f58" },
    900: { value: "#7b5f4b" },
    950: { value: "#674f3f" }
  },
  tertiary: {
    50: { value: "#fff9ec" },
    100: { value: "#fff8e8" },
    200: { value: "#fff7e4" },
    300: { value: "#fff5e1" },
    400: { value: "#fff4dd" },
    500: { value: "#fff3d9" },
    600: { value: "#e6dbc3" },
    700: { value: "#ccc2ae" },
    800: { value: "#b3aa98" },
    900: { value: "#999282" },
    950: { value: "#807a6d" }
  },
  accent: {
    50: { value: "#a0a2a7" },
    100: { value: "#8c8f95" },
    200: { value: "#797c84" },
    300: { value: "#666972" },
    400: { value: "#535761" },
    500: { value: "#40444f" },
    600: { value: "#3a3d47" },
    700: { value: "#33363f" },
    800: { value: "#2d3037" },
    900: { value: "#26292f" },
    950: { value: "#202228" }
  },
  info: {
    50: { value: "#d6d9de" },
    100: { value: "#ced1d7" },
    200: { value: "#c6cad0" },
    300: { value: "#bdc2c9" },
    400: { value: "#b5bbc3" },
    500: { value: "#adb3bc" },
    600: { value: "#9ca1a9" },
    700: { value: "#8a8f96" },
    800: { value: "#797d84" },
    900: { value: "#686b71" },
    950: { value: "#575a5e" }
  },
  danger: {
    50: { value: "#c2a5ad" },
    100: { value: "#b6939d" },
    200: { value: "#aa818c" },
    300: { value: "#9d6f7c" },
    400: { value: "#915d6b" },
    500: { value: "#854b5b" },
    600: { value: "#784452" },
    700: { value: "#6a3c49" },
    800: { value: "#5d3540" },
    900: { value: "#502d37" },
    950: { value: "#43262e" }
  }
});

// src/theme/tokens.ts
var tokens = defineTokens({
  fontSizes: {
    xs: { value: ".75rem" },
    sm: { value: ".875rem" },
    base: { value: "1rem" },
    lg: { value: "1.125rem" },
    xl: { value: "1.25rem" },
    "2xl": { value: "1.5rem" },
    "3xl": { value: "1.875rem" },
    "4xl": { value: "2.25rem" },
    "5xl": { value: "3rem" },
    "6xl": { value: "4rem" }
  },
  fonts: {
    mono: { value: "var(--font-fira-code), Menlo, monospace" },
    body: { value: "var(--font-mona-sans), sans-serif" },
    heading: { value: "var(--font-mona-sans), sans-serif" }
  },
  colors
});

// src/theme/tms-panda-preset.ts
var tmsPandaPreset = definePreset({
  theme: {
    extend: {
      recipes,
      textStyles,
      tokens,
      breakpoints: {
        xss: "320px",
        xs: "480px"
      },
      keyframes: {
        slideLeftIn: {
          "0%": { right: "-100%" },
          "100%": { right: "0" }
        },
        slideRightOut: {
          "0%": { right: "0" },
          "100%": { right: "-100%" }
        },
        slideRightIn: {
          "0%": { left: "-100%" },
          "100%": { left: "0" }
        },
        slideLeftOut: {
          "0%": { left: "0" },
          "100%": { left: "-100%" }
        }
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  ImageToggle,
  SplashSection,
  Text,
  tmsPandaPreset
});
//# sourceMappingURL=index.js.map
