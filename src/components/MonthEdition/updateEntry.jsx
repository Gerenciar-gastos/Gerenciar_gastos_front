export function updateEntry(containerId, entryId, field, newValue, setContainers, containers) {
    
    setContainers(containers.map(container =>
        container.id === containerId
            ? {
                ...container,
                entries: container.entries.map(entry =>
                    entry.id === entryId ? { ...entry, [field]: newValue } : entry
                )
            }
            : container
    ));
};
