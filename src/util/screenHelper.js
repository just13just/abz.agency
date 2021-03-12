const windowInnerWidth = window.innerWidth

export const isMobile = () => {
    if (windowInnerWidth < 576) {
        return 3
    }
    return 6
}

export const blockScroll = (boolean) => {
    boolean
        ? document.body.style.overflow = "hidden"
        : document.body.style.overflow = "scroll"
}