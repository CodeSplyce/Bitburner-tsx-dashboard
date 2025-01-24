const doc = eval("document")

export const DashboardSearchPrefixKey = "#root .MuiDrawer-root :not(path) "

export function GetReactComponentClassName(key: string, searchNodeSelectorPrefix = "", searchNodeSelectorSuffix = "") {
    const fullKey = searchNodeSelectorPrefix + key + searchNodeSelectorSuffix
    if (doc.ComponentClassList && doc.ComponentClassList[key])
        return doc.ComponentClassList[fullKey]
    const elem = doc.querySelector(`${searchNodeSelectorPrefix}.${key.replaceAll(" ", ".")}${searchNodeSelectorSuffix}`)
    if (!elem)
        return ""

    let className = elem.className;

    if (elem.tagName.toLowerCase() == "svg")
        className = className.baseVal;

    const regex = new RegExp(/(css-[^\s]+)/)
    const match: string[] | null = className.match(regex)

    if (!match)
        return ""
    return match[0]
}

export function GetComponentClassName(key: string, searchNodeSelectorPrefix = "", searchNodeSelectorSuffix = "") {
    const fullKey = searchNodeSelectorPrefix + key + searchNodeSelectorSuffix
    if (!doc.ComponentClassList || doc.ComponentClassList.length === 0 || !doc.ComponentClassList[key])
        SetReactComponentClassName(fullKey, GetReactComponentClassName(key, searchNodeSelectorPrefix, searchNodeSelectorSuffix))

    return `${doc.ComponentClassList[fullKey]}`
}

export function SetReactComponentClassName(key: string, value: string) {
    if (!doc.ComponentClassList)
        doc.ComponentClassList = {};

    doc.ComponentClassList[key] = value;
}
//new Set([...document.querySelectorAll("#root .MuiDrawer-root :not(style):not(path):not(script)")].map(node => node.tagName.toLowerCase() == 'svg' || node.tagName.toLowerCase() == 'path' ? node.className.baseVal : node.className).sort())