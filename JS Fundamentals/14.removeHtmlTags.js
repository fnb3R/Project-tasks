//     14. Write a JavaScript function to remove HTML/XML tags from string.

function strip_html_tags(str){
    return str.replace(/<[^>]*>/g, '');
};



console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
// PHP Exercises