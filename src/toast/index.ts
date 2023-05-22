"use client"

import * as React from "react"

import {
  Toast as InternalToast,
  ToastProps,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastProvider,
  ToastClose,
  ToastAction,
} from "./toast"
import { toast, useToast } from "./use-toast"
import { Toaster } from "./toaster"

interface Toast
  extends React.ForwardRefExoticComponent<
    ToastProps & React.RefAttributes<HTMLDivElement>
  > {
  Title: typeof ToastTitle
  Description: typeof ToastDescription
  Viewport: typeof ToastViewport
  Provider: typeof ToastProvider
  Close: typeof ToastClose
  Action: typeof ToastAction
}

const Toast = InternalToast as Toast

Toast.Title = ToastTitle
Toast.Description = ToastDescription

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastProvider,
  ToastClose,
  ToastAction,
  toast,
  useToast,
  Toaster,
}
export type { ToastProps }
