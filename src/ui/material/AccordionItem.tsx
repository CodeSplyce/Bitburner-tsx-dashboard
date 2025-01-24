import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

export const MaterialActiveClassSuffix = "[class*='-listitem-active']"
export const MaterialClass = "MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button"

interface Props {
    style?: React.CSSProperties;
    classList?: string[];
    children?: React.ReactNode;
    onClick?: () => void;
}
export default function AccordionItem(props: Props): React.JSX.Element {

    return (
        <div className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""} custom-button`} style={props.style} role="button" onClick={props.onClick}>
            {props.children}
        </div>
    )
}