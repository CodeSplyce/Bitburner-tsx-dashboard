import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";

export const MaterialClass = "MuiTypography-root MuiTypography-body1"

interface Props {
    style?: React.CSSProperties;
    classList?: string[]
    children?: React.ReactNode
    text: string
}

export default function Paragraph(props: Props): React.JSX.Element {
    return (
        <p className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`} style={props.style}>{props.text}</p>
    )
}

// margin: 0px;
// font-family: JetBrainsMono, "Courier New", monospace;
// font-weight: 400;
// font-size: 1rem;
// line-height: 1.5;
// color: rgb(0, 204, 0);