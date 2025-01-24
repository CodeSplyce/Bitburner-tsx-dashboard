import {AttachSidebarRoot, Cleanup} from "/ui/SidebarRoot";

/** @param {NS} ns */
export async function main(ns: NS): Promise<void> {
    ns.disableLog("asleep");
    // for testing to quick kill
    ns.tail();

    let loopInd = true;
    // Cleans up react element after exit
    ns.atExit(() => {
        loopInd = false;
        Cleanup()
    });

    // Clean up if there is residual data from prior run
    AttachSidebarRoot(ns);

    while (loopInd) {
        if (loopInd)
            await ns.asleep(150);
    }
}