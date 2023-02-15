

export function getShowableText(text) {

    text = (text + " ").replace(/(#.+?)\b/g, '<span style="color:#1976d2;">$1 </span>');
    console.log(text);
    return text
}
