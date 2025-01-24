import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

const MaterialClass = "MuiTouchRipple-root"

interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    children?: React.ReactNode
}

export default function Ripple(props: Props): React.JSX.Element {
    return (
        <span className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`} style={props.style} />
    )
}