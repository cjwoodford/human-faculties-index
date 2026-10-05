# Project Rules & Instructions

## Craft MCP Access
- **Read-Only**: Access to Craft via the Craft MCP server must be strictly read-only.
- Use only `craft_read` (for searching, viewing, listing documents, blocks, daily notes, and collections).
- Do **not** call `craft_write` or perform any mutating operations (create, edit, delete, revert) in Craft unless the user explicitly requests a write/update action.
