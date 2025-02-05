const commands = {
    "Quit": {
        command: "$:q",
        description: "Exits the current session without saving any changes."
    },
    "Quit and save": {
        command: "$:wq",
        description: "Exits the current session and saves any changes made."
    },
    "Insert": {
        command: "$i",
        description: "Enters insert mode, allowing you to add text."
    },
    "Different": {
        command: "$:w !diff % -",
        description: "Show different after edit"
    }
}

export default commands;