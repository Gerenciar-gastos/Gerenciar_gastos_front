export function updateNameCard(id, newValue, setContainers, containers) {
    
    setContainers(containers.map(container =>
        container.id === id ? { ...container, nameCard: newValue } : container
    ));
};
