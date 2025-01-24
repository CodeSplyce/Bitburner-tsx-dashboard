import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

const MaterialClass = "MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered"

interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    children?: React.ReactNode
}

export default function Collapse(props: Props): React.JSX.Element {
    return (
        <div className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`} style={{minHeight: "0px", height: "auto", transitionDuration: "267ms"}}>
            {props.children}
        </div>
    )
}