export default async function ProjectEditPage({
  params,
}: {
  params: { projectId: string };
}): Promise<JSX.Element> {
  return <div>Edit Page of: {params.projectId}</div>;
}
