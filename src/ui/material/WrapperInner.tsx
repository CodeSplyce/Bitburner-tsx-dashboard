import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

const MaterialClass = "MuiCollapse-wrapperInner MuiCollapse-vertical"

interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    children?: React.ReactNode
}

export default function WrapperInner(props: Props): React.JSX.Element {
    return (
        <div className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`}>
            {props.children}
        </div>
    )
}