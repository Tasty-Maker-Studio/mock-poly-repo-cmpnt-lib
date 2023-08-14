import { defineRecipe } from '@pandacss/dev';

const button = defineRecipe({
  className: 'button',
  description: 'A button styles',
  base: {
    padding: '0.4rem 0.9rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    _disabled: {
      color: 'gray.400',
      cursor: 'not-allowed'
    },
    fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
    transitionDuration: '0.25s'
  },
  defaultVariants: {
    variant: 'primary',
    shape: 'square',
    fill: 'solid'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'primary.500',
        borderColor: 'primary.600',
        color: 'primary.950',
        _hover: {
          backgroundColor: 'primary.300'
        }
      },
      secondary: {
        backgroundColor: 'secondary.500',
        borderColor: 'secondary.600',
        color: 'white',
        _hover: {
          backgroundColor: 'secondary.300'
        }
      },
      tertiary: {
        backgroundColor: 'tertiary.500',
        borderColor: 'tertiary.600',
        color: 'secondary.600',
        _hover: {
          backgroundColor: 'tertiary.300'
        }
      },
      accent: {
        backgroundColor: 'accent.500',
        borderColor: 'accent.600',
        color: 'accent.50',
        _hover: {
          backgroundColor: 'accent.300'
        }
      },
      info: {
        backgroundColor: 'info.500',
        borderColor: 'info.600',
        color: 'accent.400',
        _hover: {
          backgroundColor: 'info.300'
        }
      },
      danger: {
        backgroundColor: 'danger.400',
        borderColor: 'danger.500',
        color: 'rose.300',
        _hover: {
          backgroundColor: 'danger.200'
        }
      },
      link: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        _hover: {
          textDecoration: 'underline'
        },
        height: 'auto !important',
        px: '0 !important'
      },
      icon: {
        background: 'transparent',
        color: 'inherit',
        border: 'none',
        cursor: 'pointer',
        height: 'auto !important',
        px: '0 !important'
      }
    },
    shape: {
      rounded: {
        borderRadius: 'sm'
      },
      square: {
        borderRadius: '0'
      }
    },
    fill: {
      solid: {},
      outline: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        color: 'white',
        textDecoration: 'none'
      },
      outlinereverse: {
        textDecoration: 'none'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'primary',
      fill: 'outline',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        color: 'white',
        textDecoration: 'none',
        _hover: {
          backgroundColor: 'primary.500',
          borderColor: 'primary.500',
          color: 'primary.950'
        }
      }
    },
    {
      variant: 'secondary',
      fill: 'outline',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        color: 'white',
        textDecoration: 'none',
        _hover: {
          backgroundColor: 'secondary.500',
          borderColor: 'secondary.500',
          color: 'white'
        }
      }
    },
    {
      variant: 'tertiary',
      fill: 'outline',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        color: 'white',
        textDecoration: 'none',
        _hover: {
          backgroundColor: 'tertiary.500',
          borderColor: 'tertiary.500',
          color: 'secondary.600'
        }
      }
    },
    {
      variant: 'accent',
      fill: 'outline',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        color: 'white',
        textDecoration: 'none',
        _hover: {
          backgroundColor: 'accent.500',
          borderColor: 'accent.500',
          color: 'accent.50'
        }
      }
    },
    {
      variant: 'info',
      fill: 'outline',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        color: 'white',
        textDecoration: 'none',
        _hover: {
          backgroundColor: 'info.500',
          borderColor: 'info.500',
          color: 'accent.400'
        }
      }
    },
    {
      variant: 'danger',
      fill: 'outline',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        color: 'white',
        textDecoration: 'none',
        _hover: {
          backgroundColor: 'danger.500',
          borderColor: 'danger.500',
          color: 'rose.300'
        }
      }
    },
    {
      variant: 'primary',
      fill: 'outlinereverse',
      css: {
        borderColor: 'primary.950',
        backgroundColor: 'transparent',
        color: 'primary.950',
        _hover: {
          backgroundColor: 'primary.950',
          color: 'primary.500'
        }
      }
    },
    {
      variant: 'secondary',
      fill: 'outlinereverse',
      css: {
        borderColor: 'secondary.950',
        backgroundColor: 'transparent',
        color: 'secondary.950',
        _hover: {
          backgroundColor: 'secondary.950',
          color: 'secondary.500'
        }
      }
    },
    {
      variant: 'tertiary',
      fill: 'outlinereverse',
      css: {
        borderColor: 'secondary.700',
        backgroundColor: 'transparent',
        color: 'secondary.700',
        _hover: {
          backgroundColor: 'secondary.700',
          color: 'tertiary.500'
        }
      }
    },
    {
      variant: 'accent',
      fill: 'outlinereverse',
      css: {
        borderColor: 'accent.950',
        backgroundColor: 'transparent',
        color: 'accent.950',
        _hover: {
          backgroundColor: 'accent.500',
          borderColor: 'accent.500',
          color: 'accent.50'
        }
      }
    },
    {
      variant: 'info',
      fill: 'outlinereverse',
      css: {
        borderColor: 'info.950',
        backgroundColor: 'transparent',
        color: 'info.950',
        _hover: {
          backgroundColor: 'info.950',
          color: 'info.500'
        }
      }
    },
    {
      variant: 'danger',
      fill: 'outlinereverse',
      css: {
        borderColor: 'danger.950',
        backgroundColor: 'transparent',
        color: 'danger.950',
        _hover: {
          backgroundColor: 'danger.950',
          color: 'danger.500'
        }
      }
    }
  ]
});

export { button };
