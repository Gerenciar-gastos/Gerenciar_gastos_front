export function addEntry(containerId, setContainers, containers) {
    
    setContainers(containers.map(container =>
        container.id === containerId
            ? { ...container, entries: [...container.entries, { id: container.entries.length + 1, name: "", person: "", value: "" }] }
            : container
    ));
};