import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

const MaterialClass = "MuiListItemText-root"

interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    children?: React.ReactNode
}

export default function ListItemText(props: Props): React.JSX.Element {

    return (
        <div className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`} style={props.style}>
            {props.children}
        </div>
    )
}