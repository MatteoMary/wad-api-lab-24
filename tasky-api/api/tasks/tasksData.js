export const tasksData = {
    page: 1,
    total_pages: 1,
    total_results: 1,
    tasks: [
        {
            id: "1", // Unique identifier
            title: "Complete Assignment 1",
            description: "Finish assignment 1 for WAD2",
            deadline: "tomorrow",
            priority: "medium",
            done: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        },
    ],
};
