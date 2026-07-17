// services/taskService.ts

export async function updateTaskStatusAPI(
  taskId: number,
  status: string
) {
  console.log("Updating task:", taskId, status);

  // Future:
  // return fetch(...)
}