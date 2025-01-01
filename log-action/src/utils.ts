import { Context } from '@actions/github/lib/context';

export const getContextObj = (context: Context) => {
  return {
    pullRequestCreatedAt: context.payload?.pull_request?.created_at,
    pullRequestUpdatedAt: context.payload?.pull_request?.updated_at,
    pullRequestHtmlUrl: context.payload?.pull_request?.html_url,
    pullRequestApiUrl: context.payload?.pull_request?.url,
    pullRequestLineAdditions: context.payload?.pull_request?.additions,
    pullRequestLineDeletions: context.payload?.pull_request?.deletions,
    pullRequestChangedFiles: context.payload?.pull_request?.changed_files,
    pullRequestCommits: context.payload?.pull_request?.commits,
    repositoryName: context.payload?.repository?.full_name,
    repositoryHtmlUrl: context.payload?.repository?.html_url,
    repositoryApiUrl: context.payload?.repository?.url,
    job: context.job,
    sha: context.sha,
    ref: context.ref,
    owner: context.payload?.repository?.full_name.split('/')[0],
    workflow: context.workflow,
    action: context.action,
    actor: context.actor,
    runNumber: context.runNumber,
    eventName: context.eventName,
    runUrl: `https://github.com/${context.payload.repository?.full_name}/actions/runs/${context.runId}`,
    time: new Date(),
  };
};
