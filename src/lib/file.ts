
export function downloadStringToFile(filename: string, content: string, type: string = "text/plain") {
    const url = URL.createObjectURL(
        new Blob([content], { type })
    );

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
}

export function selectFile(extension: string, callback: (content: string) => void) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = extension;

    input.onchange = () => {
        const file = input.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                callback(reader.result?.toString() ?? "")
            };
            reader.readAsText(file);
        }
    };

    input.click();
}
