export const checkImgSrc = (src, alt, hook) => {
    const img = new Image()
    img.src = src
    img.onload = () => hook(src)
    img.onerror = () => hook(alt)
}