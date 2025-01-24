import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

const Svgs: SvgsList = {
    Dashboard: {
        viewBox: "0 -960 960 960",
        path: "M280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-160q17 0 28.5-11.5T320-600q0-17-11.5-28.5T280-640q-17 0-28.5 11.5T240-600q0 17 11.5 28.5T280-560Zm80 160h360v-80H360v80Zm0-160h360v-80H360v80Zm-40 440v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"
    },
    Grid: {
        viewBox: "0 -960 960 960",
        path: "M240-240h220v-160H240v160Zm0-200h220v-280H240v280Zm260 200h220v-280H500v280Zm0-320h220v-160H500v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
    },
    Controller: {
        viewBox: "0 -960 960 960",
        path: "m226-774-56-56q59-62 138.5-96T480-960q92 0 171.5 34T790-830l-56 56q-48-50-113.5-78T480-880q-75 0-140.5 28T226-774Zm112 112-56-56q38-38 88.5-60T480-800q59 0 109.5 22t88.5 60l-56 56q-27-27-63.5-42.5T480-720q-42 0-78.5 15.5T338-662ZM480 0q-57 0-98.5-41.5T340-140v-322q0-57 41.5-98.5T480-602q57 0 98.5 41.5T620-462v322q0 57-41.5 98.5T480 0Zm0-380q33 0 56.5-23.5T560-460q0-33-23.5-56.5T480-540q-33 0-56.5 23.5T400-460q0 33 23.5 56.5T480-380Z"
    },
    ChevronUp:  {
        viewBox: "0 0 24 24",
        path: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
    },
    ChevronDown:  {
        viewBox: "0 0 24 24",
        path: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
    }
}

interface SvgsList {
    [key: string]: Svg
}

interface Svg {
    viewBox: string,
    path: string,
}

interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    svgName: string
}

export const MaterialClass = "MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium"
export const MaterialActiveClass = "MuiSvgIcon-root MuiSvgIcon-colorSecondary MuiSvgIcon-fontSizeMedium"

const ActiveToggleClass: Record<string, string> = {
    'true': MaterialActiveClass,
    'false': MaterialClass
}
export default function Svg(props: Props): React.JSX.Element {
    const Svg = Svgs[props.svgName];

    return (
        <svg className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`} style={props.style}
             focusable="false" aria-hidden="true" viewBox={Svg.viewBox}>
            <path d={Svg.path} />
        </svg>
    )
}

