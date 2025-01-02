import * as core from '@actions/core';
import { to } from 'await-to-js';
import { context } from '@actions/github';
import { getContextObj } from './utils';

async function run() {
  try {
    const metricsArgs = getContextObj(context);
    const branchName = core.getInput('branch-name');
    const metricsApi = core.getInput('metrics-api');
    const status = core.getInput('status');
    const pullRequestType = core.getInput('pr-type');
    const uses = core.getInput('uses');
    const merged = core.getInput('merged') === 'true' ? true : false;
    const repositoryName = context.payload.repository?.full_name?.substring(
      `${metricsArgs.owner}/`.length
    );
    const runId = context.runId;
    const jobName = context.job;
    const metricsObj = {
      repositoryName,
      status,
      branchName,
      runId,
      pullRequestType,
      merged,
      uses,
      currentJob: jobName,
      ...metricsArgs,
    };
    if (metricsApi) {
      let headers = {
        'Content-Type': 'application/json',
      }
      const apiKeySplit = metricsApi.split('apiKey=');
      if (apiKeySplit.length === 2) {
        headers['X-API-Key'] = apiKeySplit[1];
      }
      const [err] = await to(
        fetch(metricsApi, {
          method: 'POST',
          headers,
          body: JSON.stringify(metricsObj),
        })
      );
      if (err) {
        return core.setFailed('Failed to update CI/CD data');
      }
    }
    core.exportVariable('METRICS_OUTPUT', JSON.stringify(metricsObj, null, 2));
    return core.info('Update CI/CD Data');
  } catch (e) { }
}

run();
