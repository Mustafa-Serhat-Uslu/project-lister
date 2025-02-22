export default async function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}): Promise<JSX.Element> {
  console.log(params.projectId); // Should log the slug correctly

  return <div>Project Details Page: {params.projectId}</div>;
}
