// -------------------------------------------------------------------------------------------------------
// Console color output
// -------------------------------------------------------------------------------------------------------

// ANSI colors table
// https://en.wikipedia.org/wiki/ANSI_escape_code#Colors

// \x1b is the code for the non-printable control character escape

/*
Reset = "\x1b[0m"
Bold = "\x1b[1m"
Dim = "\x1b[2m"
Italic = "\x1b[3m"
Underline = "\x1b[4m"
Blink = "\x1b[5m"
Inverse = "\x1b[7m"
Hidden = "\x1b[8m"
Strikethrough = "\x1b[9m"
*/

// Text with foreground color cyan (96)
console.log('\x1b[96m%s\x1b[0m', 'Sven');

// Bold text (1) with foreground color cyan (96)
console.log('\x1b[1m\x1b[96m%s\x1b[0m', 'Sven');

// Text with foreground color black (30) and background color cyan (106)
console.log('\x1b[30m\x1b[106m%s\x1b[0m %s', 'Hello', 'Sven');
