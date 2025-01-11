import { Context } from '@actions/github/lib/context';

export const getContextObj = (context: Context) => {
  return {
    pullRequestCreatedAt: context.payload?.pull_request?.created_at,
    pullRequestUpdatedAt: context.payload?.pull_request?.updated_at,
    pullRequestLineAdditions: context.payload?.pull_request?.additions,
    pullRequestLineDeletions: context.payload?.pull_request?.deletions,
    pullRequestChangedFiles: context.payload?.pull_request?.changed_files,
    pullRequestCommits: context.payload?.pull_request?.commits,
    repositoryName: context.payload?.repository?.full_name,
    owner: context.payload?.repository?.full_name.split('/')[0],
    action: context.action,
    actor: context.actor,
    eventName: context.eventName,
    time: new Date(),
  };
};
