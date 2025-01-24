import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    children?: React.ReactNode
}

const MaterialClass = "MuiListItemIcon-root"

export default function Icon(props: Props): React.JSX.Element {
    return (
        <div className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`}>
            {props.children}
        </div>
    )
}