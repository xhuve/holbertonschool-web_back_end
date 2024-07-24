export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.append(mathFunction());
  } catch (error) {
    queue.append(error.message);
  } finally {
    queue.append('Guardrail was processed');
  }

  return queue;
}
