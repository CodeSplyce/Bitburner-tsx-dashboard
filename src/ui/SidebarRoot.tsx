import Divider from "/ui/material/Divider";
import {DetachBoxRoot, RenderBoxRoot} from "/ui/BoxRoot";
import Accordion, {ItemProps} from "/ui/material/Accordion";
import * as AccordionItem from "/ui/material/AccordionItem";
import {DashboardSearchPrefixKey, GetComponentClassName, GetReactComponentClassName} from "/ui/UIHelper";
import * as Svg from "/ui/material/Svg";
import * as Paragraph from "/ui/material/Paragraph";

const doc = eval("document")

const ID = "UISidebarRoot"
const BB_ROOT_SELECTOR = "#root > .MuiBox-root"
const BB_SIDEBAR_ROOT_SELECTOR = `${BB_ROOT_SELECTOR} .MuiDrawer-root .MuiPaper-root`
const BB_SIDEBAR_LIST_SELECTOR = `${BB_SIDEBAR_ROOT_SELECTOR} ul`
const BB_SIDEBAR_WRAPPER_CLASS = "MuiDrawer-root MuiDrawer-docked"
const MaterialClass = "MuiList-root MuiList-padding"

const StateList = {
    bitburner: 0,
    dashboard: 1,
    commandCenter: 2
}

interface SidebarProps {
    ns: NS
    Attach?: boolean;
    Detach?: boolean;
}

export default function SidebarRoot(props: SidebarProps): React.JSX.Element {
    const [state, setState] = React.useState<number>(StateList.bitburner);
    const ns = props.ns;

    doc.SidebarComponentObserver && doc.SidebarComponentObserver.disconnect();

    function UpdateOtherState(): void {
        setState(StateList.bitburner);
    }

    function DetachSidebarButtons() {
        //remove any event listeners if they already exist
        const abort: AbortController = doc.SidebarAbort;
        if (abort) {
            abort.abort();
        }
    }

    function AttachSidebarButtons() {
        const elem: HTMLElement | null = doc.querySelector(BB_SIDEBAR_ROOT_SELECTOR);
        if (elem) {
            DetachSidebarButtons()

            doc.SidebarAbort = new AbortController();
            // need to attach/re-attach on click events to dom
            const buttons = elem.querySelectorAll(".MuiCollapse-root .MuiButtonBase-root:not(.custom-button)")
            // change the state of this node - [other, screen...]
            buttons.forEach((button) => button.addEventListener("click", UpdateOtherState, {signal: doc.SidebarAbort.signal}));
        }
    }

    const callback = (mutationList: MutationRecord[], observer: MutationObserver) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                AttachSidebarButtons();
                ToggleBitBurnerSidebarButton();
            }
        }
    };

    const targetNode = doc.querySelector(BB_SIDEBAR_LIST_SELECTOR);

    const config = { attributes: false, childList: true, subtree: false, characterData: false };

    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    doc.SidebarComponentObserver = observer;

    AttachSidebarButtons();

    function AccordionItemClick(state: number): void {
        setState(state);
    }

    function CreateAccordionItems(): ItemProps[] {
        return [
            {
                text: "Dashboard",
                iconName: "Grid",
                onClick: () => { AccordionItemClick(StateList.dashboard); },
                activeInd: state == StateList.dashboard
            },
            {
                text: "Command Center",
                iconName: "Controller",
                onClick: () => { AccordionItemClick(StateList.commandCenter); },
                activeInd: state == StateList.commandCenter
            }
        ]
    }

    const [accordionItems, setAccordionItems] = React.useState<ItemProps[]>(CreateAccordionItems())

    React.useEffect(() => {
        setAccordionItems(CreateAccordionItems())
        ToggleBitBurnerSidebarButton();
    }, [state]);

    function ToggleBitBurnerSidebarButton() {
        const activeIconSelector = `${DashboardSearchPrefixKey} ul:not(#${ID}) .MuiCollapse-root :not(.custom-button) .${Svg.MaterialClass.replaceAll(" ", ".")}:not([data-testid="ChevronLeftIcon"])`
        const elemIcon = doc.querySelector(activeIconSelector);
        console.log(elemIcon)
        if (elemIcon) {
            if (DashboardActiveInd()) {
                elemIcon.classList.add("colorSecondary");
            }
            else {
                elemIcon.classList.remove("colorSecondary");
            }
        }

        const activeTextSelector = `${DashboardSearchPrefixKey} .MuiCollapse-root .${GetComponentClassName(AccordionItem.MaterialClass, DashboardSearchPrefixKey, AccordionItem.MaterialActiveClassSuffix).trim().replaceAll(" ", ".")}:not(custom-button) .${Paragraph.MaterialClass.replaceAll(" ", ".")}`
        const elemText = doc.querySelector(activeTextSelector);
        console.log(elemText)
        if (elemText) {
            if (DashboardActiveInd()) {
                elemText.classList.add("colorSecondary");
            }
            else {
                elemText.classList.remove("colorSecondary");
            }
        }

        const activeButtonSelector = `${DashboardSearchPrefixKey} .${GetComponentClassName(AccordionItem.MaterialClass, DashboardSearchPrefixKey, AccordionItem.MaterialActiveClassSuffix).trim().replaceAll(" ", ".")}:not(custom-button)`
        const elem = doc.querySelector(activeButtonSelector);
        console.log(elem)
        if (elem) {
            if (DashboardActiveInd()) {
                elem.classList.add("inactive");
            }
            else {
                elem.classList.remove("inactive");
            }
        }
    }

    function DashboardActiveInd() {
        return state > StateList.bitburner
    }

    DetachBoxRoot();

    const styles = ns.ui.getStyles()
    const theme = ns.ui.getTheme()

    const styleList: string[] = []
    Object.keys(theme).forEach(key => {
        const name = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
        styleList.push(`.color${name} { color: ${theme[key]} }`);
        styleList.push(`.backgroundColor${name} { background-color: ${theme[key]} }`);
    });
    styleList.push(`.fontFamily { font-family: ${styles.fontFamily}}`);
    styleList.push(`.fontSize { font-size: ${styles.fontSize}}`);
    styleList.push(`.lineHeight { line-height: ${styles.lineHeight}}`);

    styleList.push(`.inactive { border-width: 0; border-style: initial; border-color: initial }`);

    return (
        <>
            <style>{styleList.join("\r\n")}</style>
            <Accordion itemList={accordionItems}></Accordion>
            <RenderBoxRoot ns={ns} state={state} visibleInd={DashboardActiveInd()} />
        </>
    )
}

export function AttachSidebarRoot(ns: NS): MutationObserver {
    // Clear old instances
    Cleanup();

    const AttachSidebar = ()=> {
        const elem: HTMLElement | null = doc.querySelector(BB_SIDEBAR_ROOT_SELECTOR);
        if (elem) {
            const boxRoot = doc.createElement("ul");
            boxRoot.className = GetComponentClassName(MaterialClass, DashboardSearchPrefixKey)
            boxRoot.style.marginTop = "-8px"
            boxRoot.style.paddingTop = "0"
            boxRoot.id = ID;
            elem.append(boxRoot);

            RenderSidebarRoot(ns)
        }
    }
    const BB_ATTACH_NODE_CLASSNAME = `${BB_SIDEBAR_WRAPPER_CLASS} ${GetComponentClassName(BB_SIDEBAR_WRAPPER_CLASS)}`
    const callback = (mutationList: MutationRecord[], observer: MutationObserver) => {
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                if (mutation.addedNodes) {
                    mutation.addedNodes.forEach((node) => {
                        const htmlNode = node as HTMLElement | null
                        if(htmlNode && htmlNode.className == BB_ATTACH_NODE_CLASSNAME) {
                            AttachSidebar()
                        }
                    })
                }
                if (mutation.removedNodes) {
                    mutation.removedNodes.forEach((node) => {
                        const htmlNode = node as HTMLElement | null
                        if(htmlNode && htmlNode.className == BB_ATTACH_NODE_CLASSNAME) {
                            DetachSidebarRoot()
                        }
                    })
                }
            }
        }
    };

    const targetNode = doc.querySelector(BB_ROOT_SELECTOR);

    const config = { attributes: false, childList: true, subtree: false, characterData: false };

    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    doc.SidebarObserver = observer;

    const elem: HTMLElement | null = doc.querySelector(BB_SIDEBAR_ROOT_SELECTOR);
    if (elem) {
        AttachSidebar()
        RenderSidebarRoot(ns)
    }

    return observer
}

export function RenderSidebarRoot(ns: NS): void {
    const hook = doc.getElementById(ID)
    if (hook) {
        ReactDOM.render(
            <React.StrictMode>
                <Divider/>
                <SidebarRoot ns={ns} />
            </React.StrictMode>,
            hook
        );
    }
}

export function DetachSidebarRoot(): boolean {
    const boxRoot: HTMLElement | null = doc.getElementById(ID);
    if (boxRoot) {
        boxRoot.remove();
    }

    return DetachBoxRoot();
}

export function Cleanup() {
    doc.SidebarObserver && doc.SidebarObserver.disconnect();
    doc.SidebarComponentObserver && doc.SidebarComponentObserver.disconnect();
    DetachSidebarRoot()
}