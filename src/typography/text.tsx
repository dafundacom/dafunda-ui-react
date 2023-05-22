import * as React from "react"

import { cn } from "../classname-utils"
import { SizesProps } from "./types"
import { textSizeClasses } from "./styles"

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType
  children?: React.ReactNode
  size?: SizesProps
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (props, ref) => {
    const { as: Comp = "p", className, size = "base", ...rest } = props

    const classes = cn(
      "leading-normal text-foreground",
      textSizeClasses[size],
      className,
    )

    return <Comp ref={ref} className={classes} {...rest} />
  },
)
