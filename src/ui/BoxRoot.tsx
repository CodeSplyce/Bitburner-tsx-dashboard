import Dashboard from "/ui/Dashboard";
import CommandCenter from "/ui/CommandCenter";
import Divider from "/ui/material/Divider";
import {GetComponentClassName} from "/ui/UIHelper";

const MaterialClass = "MuiBox-root"

export interface BoxRootProps {
    visibleInd: boolean;
    state: number;
    ns?: NS
}

const components: Record<number, (props: unknown)=> React.JSX.Element> = {
    1: Dashboard,
    2: CommandCenter,
};
const doc: Document = eval("document");

export default function BoxRoot(props: BoxRootProps): React.JSX.Element {

    function visibilityToggle() {
        const box: HTMLElement | null = doc.querySelector(`#root > .MuiBox-root .MuiBox-root:not(#${ID})`)
        if (box) {
            box.style.display = props.visibleInd ? "none" : "block";
        }

        const boxOriginal: HTMLElement | null = doc.getElementById(ID)
        if (boxOriginal) {
            boxOriginal.style.display = props.visibleInd ? "block" : "none";
        }
    }
    React.useEffect(()=>{
        visibilityToggle();
    }, [props.visibleInd]);

    visibilityToggle()

    props.state = props.state <= 1 ? 1 : props.state;
    let Component = components[props.state]
    React.useEffect(()=>{
        Component = components[props.state]
    }, [props.state]);

    return (
        <>
            <Component />
        </>
    )
}
const ID = "UIBoxRoot"

export function AttachBoxRoot(): boolean {
    const exists = doc.getElementById(ID);
    if (exists) {
        return true;
    }

    const elem: HTMLElement | null = doc.querySelector("#root > .MuiBox-root");
    if (!elem) {
        return false;
    }
    elem.style.display = "-webkit-box"

    const boxRoot = doc.createElement("div");
    boxRoot.id = ID;
    boxRoot.style.display = "none";
    boxRoot.style.zIndex = "-10";
    boxRoot.style.webkitBoxOrdinalGroup = "2";
    boxRoot.className = GetComponentClassName(MaterialClass, "#root > .MuiBox-root :not(.react-draggable)");
    elem.append(boxRoot);

    return true;
}

export function RenderBoxRoot(props: BoxRootProps): React.JSX.Element {
    AttachBoxRoot()

    const elem = doc.getElementById(ID)
    if (elem) {
        //ns.print("RenderBox")
        return ReactDOM.createPortal(
            <React.StrictMode>
                <BoxRoot visibleInd={props.visibleInd} state={props.state} />
            </React.StrictMode>,
            elem
        );
    }
    return (<></>)
}

export function DetachBoxRoot() {
    const boxRoot: HTMLElement | null = doc.getElementById(ID);
    if (boxRoot) {
        boxRoot.remove();
    }

    const bbBoxRoot: HTMLElement | null = doc.querySelector(`#root > .MuiBox-root .MuiBox-root:not(#${ID})`)
    if (bbBoxRoot) {
        bbBoxRoot.style.display = "block";
    }

    return true;
}