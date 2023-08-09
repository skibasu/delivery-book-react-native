import * as React from "react"
import { SvgXml } from "react-native-svg"
const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
  <g id="Icon_Error" data-name="Icon Error" transform="translate(-161 110.312)">
    <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(161 -110.312)" fill="none" stroke="#d9412d" stroke-width="1">
      <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
      <circle cx="7.5" cy="7.5" r="7" fill="none"/>
    </g>
    <text id="_" data-name="!" transform="translate(167 -99.312)" fill="#d9412d" font-size="9" font-family="PTSans-Regular, PT Sans" letter-spacing="0.047em"><tspan x="0" y="0">!</tspan></text>
  </g>
</svg>
`
const IconError = () => {
    return <SvgXml xml={markup} />
}
export default IconError
