import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

const MaterialClass = "MuiCollapse-wrapper MuiCollapse-vertical"

interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    children?: React.ReactNode
}

export default function Wrapper(props: Props): React.JSX.Element {
    return (
        <div className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`}>
            {props.children}
        </div>
    )
}