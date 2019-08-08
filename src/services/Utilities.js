const slugify = (string) => {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w]+/g, '') // Remove all non-word characters
        .replace(/-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}

const netflixUrl = (id) => {
    return "https://www.netflix.com/watch/" + id
}

const trailerUrl = (title) => {
    return "https://www.youtube.com/results?search_query=" + title + "+trailer"
}

const trim = (s) => {
    const n = s.indexOf('<');
    s = s.substring(0, n !== -1 ? n : s.length);
    return s
}

export {slugify, netflixUrl, trailerUrl, trim};