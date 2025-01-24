import Icon from "/ui/material/Icon";
import AccordionItem from "/ui/material/AccordionItem";
import ListItemText from "/ui/material/ListItemText";
import Ripple from "/ui/material/Ripple";
import {DashboardSearchPrefixKey, GetComponentClassName} from "/ui/UIHelper";
import Paragraph from "/ui/material/Paragraph";
import Svg from "/ui/material/Svg";
import Wrapper from "/ui/material/Wrapper";
import WrapperInner from "/ui/material/WrapperInner";
import Collapse from "/ui/material/Collapse";

const MaterialClass = "MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button"

export interface ItemProps {
    text: string;
    activeInd: boolean;
    iconName: string;
    onClick?: () => void;
}

interface Props {
    style?: React.CSSProperties;
    classList?: string[];
    children?: React.ReactNode;
    itemList: ItemProps[]
}

export default function Accordion(props: Props): React.JSX.Element {
    const [expanded, setExpanded] = React.useState(true);
    return (
        <>
            <div className={`${MaterialClass} ${GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)} ${props.classList?.join(" ") ?? ""}`} style={props.style} role="button"
                 onClick={():void => setExpanded(!expanded)}>
                <Icon>
                    <Svg svgName={"Dashboard"} classList={["colorPrimary"]} />
                </Icon>
                <ListItemText>
                    <Paragraph text={"Command Center"} />
                </ListItemText>
                <Svg svgName={expanded ? "ChevronUp" : "ChevronDown"} classList={["colorPrimary"]} />
                <Ripple />
            </div>
            { expanded  && (
                <Collapse>
                    <Wrapper>
                        <WrapperInner>
                            {props.itemList.map((item, index) => (
                                <AccordionItem classList={[item.activeInd ? "colorPrimary" : ""]} style={item.activeInd ? {borderLeft : "3px solid"} :  {}}  onClick={item.onClick} >
                                    <Icon>
                                        <Svg svgName={item.iconName} classList={[item.activeInd ? "colorPrimary" : "colorSecondary"]} />
                                    </Icon>
                                    <ListItemText>
                                        <Paragraph text={item.text} classList={[item.activeInd ? "colorPrimary" : "colorSecondary"]} />
                                    </ListItemText>
                                    <Ripple />
                                </AccordionItem>
                            ))}
                        </WrapperInner>
                    </Wrapper>
                </Collapse>
            )}
        </>
    )
}