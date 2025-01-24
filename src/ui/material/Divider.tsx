import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

const MaterialClass = "MuiDivider-root MuiDivider-fullWidth"
interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    children?: React.ReactNode
}
export default function Divider(props: Props): React.JSX.Element {
    return (
        <hr className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`} style={props.style} />
    )
}