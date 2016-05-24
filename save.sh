{ printf '%s\0' "$1"; history | tail -4 | head -3 | cut -c 8- | tr '\n' '\0'; } | xargs --null node index.js
