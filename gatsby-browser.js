import * as React from "react"
import Layout from "./src/components/Layout"

import './src/assets/index.css'

export const wrapPageElement = ({ element, props }) => {
  return <Layout { ...props } >{ element }</Layout>
};

