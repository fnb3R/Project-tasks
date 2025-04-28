// Да се извлекат отделните елементи от URL. Елементите са: host, username, domain, port, path, filename, extension, query.

function extractURLElements(url) {
    const regex = /^(?:(\w+):\/\/)?(?:([^@]+)@)?([^:/?#]+)(?::(\d+))?(\/[^?#]*)?(?:\?([^#]*))?/;

    const match = url.match(regex);

    if (!match) {
        return "Невалиден URL.";
    }

    // частите
    const [
        _,
        protocol,   // https, ftp, http
        username,   // johnsmith
        host,       // my.domain.com
        port,       // 8080
        path,       // /path/to/resource/file.txt
        query       // q=notpron
    ] = match;

    let filename = null;
    let extension = null;
    if (path) {
        const parts = path.split('/');
        filename = parts.pop();
        if (filename.includes('.')) {
            extension = filename.split('.').pop();
        }
    }

    //главният домейн без поддомейна
    let domain = null;
    if (host) {
        const hostParts = host.split('.');
        if (hostParts.length >= 2) {
            domain = hostParts.slice(-2).join('.');
        } else {
            domain = host;
        }
    }

    return {
        protocol: protocol || null,
        username: username || null,
        host: host || null,
        domain: domain || null,
        port: port || null,
        path: path || null,
        filename: filename || null,
        extension: extension || null,
        query: query || null
    };
}

// примерите
const urls = [
    "ftp://johnsmith@my.domain.com:8080/path/to/resource/file.txt",
    "https://www.google.com/search?q=notpron",
    "http://example.com/page.html"
];

// резултатите
urls.forEach(url => {
    console.log(`URL: ${url}`);
    console.log(extractURLElements(url));
    console.log('-----------------------');
});
