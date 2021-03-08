const windowInnerWidth = window.innerWidth

export const isMobile = () => {
    if (windowInnerWidth < 576) {
        return 3
    }
    return 6
}